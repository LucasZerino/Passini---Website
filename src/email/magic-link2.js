import Link from "next/link";

export default function MagicLink({ url, site }) {
  return (
    <div className="bg-[#F5F5F5] dark:bg-[#1A1A1A] p-6 rounded-lg max-w-[600px] mx-auto">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <WandIcon className="w-8 h-8 text-[#8B5CF6]" />
          <h1 className="text-2xl font-bold text-[#333333] dark:text-[#F5F5F5]">{site}</h1>
        </div>
        <img src="/placeholder.svg" alt="Ícone Mágico" className="w-10 h-10" />
      </header>
      <div className="bg-white dark:bg-[#262626] rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-bold text-[#333333] dark:text-[#F5F5F5] mb-4">Acesse a Magia</h2>
        <p className="text-[#666666] dark:text-[#CCCCCC] mb-6">
          Faça login para acessar nosso mundo mágico. Não perca tempo e aproveite nossas ofertas exclusivas!
        </p>
        <Link href={url} prefetch={false}>
          <div className="inline-flex items-center justify-center bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
            Entrar
          </div>
        </Link>
      </div>
      <footer className="mt-6 text-center text-[#666666] dark:text-[#CCCCCC] text-sm">
        <p>
          Este email foi enviado para você porque se inscreveu em nossa newsletter mágica. Você pode{" "}
          <Link href="#" prefetch={false}>
            <div className="underline">
              cancelar a inscrição
            </div>
          </Link>{" "}
          a qualquer momento.
        </p>
      </footer>
    </div>
  );
}

// Certifique-se de definir o componente WandIcon em algum lugar do seu código ou importá-lo se ele estiver em outro arquivo.
