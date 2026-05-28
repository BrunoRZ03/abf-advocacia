import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-6xl font-bold mb-6">ABF Advocacia</h1>

        <p className="text-xl text-neutral-300 max-w-2xl mb-8">
          Atendimento jurídico especializado com excelência, ética e compromisso
          com seus direitos.
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
          Entrar em contato
        </button>
      </section>

      <Image
        src="/advogado.png"
        alt="Advogado"
        width={350}
        height={350}
        className="rounded-2xl"
      />

      {/* ÁREAS DE ATUAÇÃO */}
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
                Defesa dos direitos do trabalhador e consultoria para empresas.
              </p>
            </div>

            <div className="bg-neutral-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">
                Direito Previdenciário
              </h3>

              <p className="text-neutral-300">
                Aposentadorias, benefícios e revisões junto ao INSS.
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
