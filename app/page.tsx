import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* NAVBAR */}
      <header className="w-full border-b border-neutral-800">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold">ABF Advocacia</h1>

          <div className="flex gap-6 text-sm md:text-base">
            <Link href="/" className="hover:text-neutral-300 transition">
              Home
            </Link>

            <Link href="/sobre" className="hover:text-neutral-300 transition">
              Sobre
            </Link>

            <Link href="/areas" className="hover:text-neutral-300 transition">
              Áreas
            </Link>

            <Link href="/blog" className="hover:text-neutral-300 transition">
              Blog
            </Link>

            <Link href="/contato" className="hover:text-neutral-300 transition">
              Contato
            </Link>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-6xl font-bold mb-6">ABF Advocacia</h1>

        <p className="text-xl text-neutral-300 max-w-2xl mb-8">
          Atendimento jurídico especializado com excelência, ética e compromisso
          com seus direitos.
        </p>

        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Falar no WhatsApp
        </a>
      </section>

      {/* ÁREAS */}
      <section className="px-6 py-24 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Áreas de Atuação
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">
                Direito Trabalhista
              </h3>

              <p className="text-neutral-300">
                Defesa dos direitos do trabalhador e consultoria jurídica.
              </p>
            </div>

            <div className="bg-neutral-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">
                Direito Previdenciário
              </h3>

              <p className="text-neutral-300">
                Aposentadorias, benefícios e revisões do INSS.
              </p>
            </div>

            <div className="bg-neutral-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">Direito Civil</h3>

              <p className="text-neutral-300">
                Contratos, indenizações e resolução de conflitos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-neutral-400">
        © 2026 ABF Advocacia. Todos os direitos reservados.
      </footer>
    </main>
  );
}
