import Navbar from "@/components/Navbar";

export default function Sobre() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* TEXTO */}
          <div>
            <span className="text-neutral-400 uppercase tracking-widest text-sm">
              Sobre o Escritório
            </span>

            <h1 className="text-5xl font-bold mt-4 mb-8 leading-tight">
              Excelência jurídica com ética, confiança e compromisso.
            </h1>

            <p className="text-lg text-neutral-300 mb-6 leading-8">
              A ABF Advocacia atua de forma estratégica e personalizada,
              oferecendo soluções jurídicas eficientes para pessoas físicas e
              empresas.
            </p>

            <p className="text-lg text-neutral-300 mb-6 leading-8">
              Nosso compromisso é prestar um atendimento humanizado,
              transparente e focado na melhor defesa dos direitos e interesses
              de cada cliente.
            </p>

            <p className="text-lg text-neutral-300 leading-8">
              Com experiência nas áreas trabalhista, previdenciária e cível,
              buscamos unir conhecimento técnico, agilidade e excelência
              profissional.
            </p>
          </div>

          {/* CARD */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-10">
            <h2 className="text-3xl font-semibold mb-8">
              Informações Profissionais
            </h2>

            <div className="space-y-6">
              <div>
                <p className="text-neutral-400 text-sm mb-1">
                  Advogado Responsável
                </p>

                <p className="text-xl font-medium">Nome do Advogado</p>
              </div>

              <div>
                <p className="text-neutral-400 text-sm mb-1">Registro OAB</p>

                <p className="text-xl font-medium">OAB/SP 000000</p>
              </div>

              <div>
                <p className="text-neutral-400 text-sm mb-1">Experiência</p>

                <p className="text-xl font-medium">
                  +10 anos de atuação jurídica
                </p>
              </div>

              <div>
                <p className="text-neutral-400 text-sm mb-1">Atendimento</p>

                <p className="text-xl font-medium">Presencial e Online</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
