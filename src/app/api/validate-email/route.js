// services/auth/api/validate-email.ts (exemplo de caminho)
import { prisma } from '@/services/database/index'; // Ajuste o caminho conforme necessário
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');

    console.log("Ativado, segue o email recebido", email);
    if (!email) {
      console.log("Nenhum email foi informado");
      return new NextResponse(JSON.stringify({ message: '❗ Por favor, forneça um endereço de e-mail.' }), { status: 400 });
    }

    // Verifica se o email é lucaszerino@gmail.com
    if (email === 'lucaszerino@gmail.com') {
      console.log("Email direto", email);
      return new NextResponse(JSON.stringify({ message: '📧 O endereço de e-mail está registrado. Enviaremos um link de login em breve.' }), { status: 200 });
    }

    // Busca o usuário no banco de dados
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
      console.log("E-mail exists");
      return new NextResponse(JSON.stringify({ message: '📧 O endereço de e-mail está registrado. Enviaremos um link de login em breve.' }), { status: 200 });
    } else {
      console.log("E-mail does not exist");
      return new NextResponse(JSON.stringify({ message: '❌ O endereço de e-mail não está registrado. Por favor, verifique e tente novamente.' }), { status: 404 });
    }
  } catch (error) {
    console.error("Erro ao buscar usuário:", error.message);
    return new NextResponse(JSON.stringify({ message: '⚠️ Desculpe, ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde. Se o problema persistir, entre em contato com o suporte.', error: error.message }), { status: 500 });
  }
}
