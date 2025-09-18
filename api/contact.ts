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

    // 1. SALVAR NO BANCO DE DADOS
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        whatsapp: whatsapp || null,
        company: company || null,
      },
    });

    // 2. ENVIAR EMAIL (como antes)
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

    return res.status(200).json({ 
      message: 'Contato salvo e email enviado com sucesso!',
      contactId: contact.id
    });

  } catch (error) {
    console.error('Erro ao processar contato:', error);
    return res.status(500).json({ 
      message: 'Erro interno do servidor' 
    });
  } finally {
    await prisma.$disconnect();
  }
}

export default allowCors(handler);