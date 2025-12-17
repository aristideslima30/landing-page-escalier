import { Request, Response } from 'express';

export default async function handler(req: Request, res: Response) {
  // CORS básico
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    console.log('🚀 Início da função');
    
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Método não permitido' });
    }

    const { name, email, whatsapp, company } = req.body || {};

    if (!name || !email) {
      return res.status(400).json({ 
        message: 'Nome e email são obrigatórios'
      });
    }

    console.log('✅ Dados válidos, salvando no banco...');

    // 1. SALVAR NO BANCO
    const { PrismaClient } = await import('@prisma/client');
    const prisma = new PrismaClient();

    const contact = await prisma.contact.create({
      data: {
        name: String(name),
        email: String(email),
        whatsapp: whatsapp ? String(whatsapp) : null,
        company: company ? String(company) : null,
      },
    });
    console.log('✅ Contato salvo com ID:', contact.id);

    // 2. ENVIAR EMAIL (se configurado)
    let emailSent = false;
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS && process.env.CONTACT_EMAIL) {
      try {
        console.log('📧 Enviando email...');
        
        const nodemailer = await import('nodemailer');
        const transporter = nodemailer.default.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
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
        });
        
        emailSent = true;
        console.log('✅ Email enviado com sucesso');
      } catch (emailError) {
        console.error('❌ Erro ao enviar email:', emailError);
      }
    } else {
      console.log('⚠️ Variáveis de email não configuradas');
    }

    await prisma.$disconnect();

    return res.status(200).json({ 
      success: true,
      message: emailSent 
        ? 'Contato salvo e email enviado com sucesso!' 
        : 'Contato salvo com sucesso! (Email não configurado)',
      contactId: contact.id,
      emailSent
    });

  } catch (error) {
    console.error('❌ ERRO:', error);
    
    return res.status(500).json({ 
      success: false,
      message: 'Erro interno do servidor',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}