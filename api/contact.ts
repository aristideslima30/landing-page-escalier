import { VercelRequest, VercelResponse } from '@vercel/node';

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
  try {
    console.log('🚀 API chamada recebida');
    console.log('Method:', req.method);
    console.log('Body:', req.body);

    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Método não permitido' });
    }

    const { name, email, whatsapp, company } = req.body;

    // Validação básica
    if (!name || !email) {
      return res.status(400).json({ 
        message: 'Nome e email são obrigatórios' 
      });
    }

    console.log('✅ Dados validados:', { name, email, whatsapp, company });

    // TESTE 1: Apenas salvar no banco (sem email)
    try {
      console.log('💾 Tentando conectar com Prisma...');
      
      // Import dinâmico do Prisma para evitar problemas de inicialização
      const { PrismaClient } = await import('@prisma/client');
      const prisma = new PrismaClient();

      console.log('💾 Prisma conectado, tentando salvar...');
      
      const contact = await prisma.contact.create({
        data: {
          name,
          email,
          whatsapp: whatsapp || null,
          company: company || null,
        },
      });

      console.log('✅ Contato salvo:', contact.id);
      
      await prisma.$disconnect();

      return res.status(200).json({ 
        message: 'Contato salvo com sucesso! (Email temporariamente desabilitado)',
        contactId: contact.id,
        debug: 'Banco funcionando'
      });

    } catch (dbError) {
      console.error('❌ Erro no banco:', dbError);
      
      return res.status(500).json({ 
        message: 'Erro ao salvar no banco de dados',
        error: dbError instanceof Error ? dbError.message : 'Erro desconhecido no banco'
      });
    }

  } catch (error) {
    console.error('❌ Erro geral:', error);
    
    return res.status(500).json({ 
      message: 'Erro interno do servidor',
      error: error instanceof Error ? error.message : 'Erro desconhecido',
      stack: error instanceof Error ? error.stack : undefined
    });
  }
}

export default allowCors(handler);