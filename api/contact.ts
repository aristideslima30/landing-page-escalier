import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Configuração CORS
const allowCors = (fn: Function) => async (req: VercelRequest, res: VercelResponse) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  return await fn(req, res);
};

async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  try {
    const { name, email, whatsapp, company } = req.body;

    // Validação básica
    if (!name || !email) {
      return res.status(400).json({ 
        message: 'Nome e email são obrigatórios' 
      });
    }

    console.log('📝 Dados recebidos:', { name, email, whatsapp, company });

    // 1. SALVAR NO BANCO DE DADOS
    console.log('💾 Tentando salvar no banco...');
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        whatsapp: whatsapp || null,
        company: company || null,
      },
    });
    console.log('✅ Contato salvo no banco:', contact.id);

    // 2. ENVIAR EMAIL
    console.log('📧 Tentando enviar email...');
    
    // Verificar se as variáveis de ambiente existem
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.CONTACT_EMAIL) {
      console.error('❌ Variáveis de email não configuradas');
      return res.status(200).json({ 
        message: 'Contato salvo no banco, mas email não configurado',
        contactId: contact.id,
        warning: 'Email não enviado - variáveis não configuradas'
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      subject: 'Novo contato da Landing Page - Escalier',
      html: `
        <h2>Novo contato recebido!</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp || 'Não informado'}</p>
        <p><strong>Empresa:</strong> ${company || 'Não informada'}</p>
        <p><strong>Data:</strong> ${new Date().toLocaleString('pt-BR')}</p>
        <hr>
        <p><em>ID do contato no banco: ${contact.id}</em></p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Email enviado com sucesso');

    return res.status(200).json({ 
      message: 'Contato salvo e email enviado com sucesso!',
      contactId: contact.id
    });

  } catch (error) {
    console.error('❌ Erro detalhado:', error);
    
    // Log mais detalhado do erro
    if (error instanceof Error) {
      console.error('Mensagem:', error.message);
      console.error('Stack:', error.stack);
    }
    
    return res.status(500).json({ 
      message: 'Erro interno do servidor',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Erro interno'
    });
  } finally {
    await prisma.$disconnect();
  }
}

export default allowCors(handler);