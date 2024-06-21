export default function magicLink({ url, site }) {
    const subject = `Bem-vindo(a) ao ${site}!`;
    const html = `
      <!DOCTYPE html>
      <html lang="pt">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Magic Link</title>
        <style>
          body { font-family: Arial, sans-serif; }
          .container { background-color: #F5F5F5; padding: 20px; border-radius: 10px; max-width: 600px; margin: auto; }
          .header { text-align: center; margin-bottom: 30px; }
          .content { background-color: #FFFFFF; padding: 20px; border-radius: 10px; text-align: center; }
          /* Estilos adicionados para garantir que os links e textos dentro de .content sejam sempre brancos */
          .content a, .content a:visited, .content a:hover, .content a:active { color: white; text-decoration: none; }
          .button { background-color: #D9042B; color: white; padding: 15px 25px; text-align: center; text-decoration: none; display: inline-block; border-radius: 5px; font-weight: bold; box-shadow: 0 4px 8px rgba(0,0,0,0.1); transition: background-color 0.3s ease-in-out; margin-top: 20px;}
          /* Estilo adicionado para manter a cor do texto do botão branca em todos os estados */
          .button, .button:visited, .button:hover, .button:active { color: white; }
          .button:hover { background-color: #BB0226; }
          .footer { margin-top: 30px; text-align: center; font-size: 12px; color: #666666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Bem-vindo(a) ao ${site}!</h1>
          </div>
          <div class="content">
            <p>Clique no botão a baixo para fazer Login.</p>
            <a href="${url}" class="button">Entrar</a>
          </div>
          <div class="footer">
            Se você não solicitou este e-mail, por favor ignore-o.
          </div>
        </div>
      </body>
      </html>
    `;
  
    return { subject, html };
  }
  