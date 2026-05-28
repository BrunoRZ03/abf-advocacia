import Navbar from "@/components/Navbar";

export default function Blog() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section className="text-center px-6 py-24 border-b border-neutral-800">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog Jurídico</h1>

        <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
          Conteúdos informativos, análises jurídicas e orientações sobre
          direitos trabalhistas, previdenciários e civis.
        </p>
      </section>

      {/* POSTS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* POST 1 */}
          <article className="bg-neutral-900 rounded-2xl p-8 hover:bg-neutral-800 transition">
            <span className="text-sm text-neutral-400">
              Direito Trabalhista
            </span>

            <h2 className="text-2xl font-bold mt-4 mb-4">
              Fui demitido sem justa causa: quais são meus direitos?
            </h2>

            <p className="text-neutral-300 mb-6">
              Entenda quais verbas rescisórias devem ser pagas ao trabalhador em
              casos de demissão sem justa causa.
            </p>

            <button className="text-white font-semibold hover:text-neutral-300 transition">
              Ler artigo →
            </button>
          </article>

          {/* POST 2 */}
          <article className="bg-neutral-900 rounded-2xl p-8 hover:bg-neutral-800 transition">
            <span className="text-sm text-neutral-400">
              Direito Previdenciário
            </span>

            <h2 className="text-2xl font-bold mt-4 mb-4">
              Quem pode solicitar aposentadoria especial?
            </h2>

            <p className="text-neutral-300 mb-6">
              Saiba quais profissionais possuem direito à aposentadoria especial
              e quais documentos são necessários.
            </p>

            <button className="text-white font-semibold hover:text-neutral-300 transition">
              Ler artigo →
            </button>
          </article>

          {/* POST 3 */}
          <article className="bg-neutral-900 rounded-2xl p-8 hover:bg-neutral-800 transition">
            <span className="text-sm text-neutral-400">Direito Civil</span>

            <h2 className="text-2xl font-bold mt-4 mb-4">
              Como funciona a indenização por danos morais?
            </h2>

            <p className="text-neutral-300 mb-6">
              Veja em quais situações é possível solicitar indenização por danos
              morais e como funciona o processo.
            </p>

            <button className="text-white font-semibold hover:text-neutral-300 transition">
              Ler artigo →
            </button>
          </article>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-neutral-500 border-t border-neutral-800">
        © 2026 ABF Advocacia. Todos os direitos reservados.
      </footer>
    </main>
  );
}
