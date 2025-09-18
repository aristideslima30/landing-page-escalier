import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

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

    // Configuração do transporter do nodemailer - CORRIGIDO
    const transporter = nodemailer.createTransport({
      service: 'gmail', // ou outro provedor
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email para a empresa
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL || 'contato@escaliertech.com',
      subject: 'Nova solicitação de consultoria - Escalier Tech',
      html: `
        <h2>Nova solicitação de consultoria</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp || 'Não informado'}</p>
        <p><strong>Empresa:</strong> ${company || 'Não informado'}</p>
        <p><strong>Data:</strong> ${new Date().toLocaleString('pt-BR')}</p>
      `,
    };

    // Email de confirmação para o cliente
    const confirmationMail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Consultoria Agendada - Escalier Tech',
      html: `
        <h2>Obrigado pelo seu interesse, ${name}!</h2>
        <p>Recebemos sua solicitação de consultoria gratuita.</p>
        <p>Nossa equipe entrará em contato em breve para agendar sua sessão de 60 minutos.</p>
        <br>
        <p>Atenciosamente,</p>
        <p><strong>Equipe Escalier Tech</strong></p>
      `,
    };

    // Enviar emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(confirmationMail);

    res.status(200).json({ 
      message: 'Solicitação enviada com sucesso!' 
    });

  } catch (error) {
    console.error('Erro ao processar solicitação:', error);
    res.status(500).json({ 
      message: 'Erro interno do servidor' 
    });
  }
}

export default allowCors(handler);