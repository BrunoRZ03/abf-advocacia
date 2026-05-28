import Navbar from "@/components/Navbar";

export default function Areas() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-6">
            Áreas de Atuação
          </h1>

          <p className="text-center text-neutral-300 max-w-3xl mx-auto mb-16 text-lg">
            Atendimento jurídico especializado com atuação estratégica, ética
            profissional e compromisso com a defesa dos direitos de nossos
            clientes.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Trabalhista */}
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl hover:border-neutral-600 transition">
              <h2 className="text-2xl font-semibold mb-4">
                Direito Trabalhista
              </h2>

              <p className="text-neutral-300 leading-7">
                Assessoria jurídica para trabalhadores e empresas em questões
                envolvendo rescisões, verbas trabalhistas, assédio, horas extras
                e ações trabalhistas.
              </p>
            </div>

            {/* Previdenciário */}
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl hover:border-neutral-600 transition">
              <h2 className="text-2xl font-semibold mb-4">
                Direito Previdenciário
              </h2>

              <p className="text-neutral-300 leading-7">
                Atuação em aposentadorias, pensões, auxílio-doença, revisões de
                benefícios e demandas relacionadas ao INSS.
              </p>
            </div>

            {/* Civil */}
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl hover:border-neutral-600 transition">
              <h2 className="text-2xl font-semibold mb-4">Direito Civil</h2>

              <p className="text-neutral-300 leading-7">
                Consultoria e atuação em contratos, indenizações,
                responsabilidade civil e resolução de conflitos.
              </p>
            </div>

            {/* Empresarial */}
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl hover:border-neutral-600 transition">
              <h2 className="text-2xl font-semibold mb-4">
                Direito Empresarial
              </h2>

              <p className="text-neutral-300 leading-7">
                Suporte jurídico para empresas, contratos comerciais,
                recuperação de crédito e estruturação societária.
              </p>
            </div>

            {/* Família */}
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl hover:border-neutral-600 transition">
              <h2 className="text-2xl font-semibold mb-4">
                Direito de Família
              </h2>

              <p className="text-neutral-300 leading-7">
                Atuação em divórcios, guarda, pensão alimentícia, inventários e
                acordos familiares.
              </p>
            </div>

            {/* Consumidor */}
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl hover:border-neutral-600 transition">
              <h2 className="text-2xl font-semibold mb-4">
                Direito do Consumidor
              </h2>

              <p className="text-neutral-300 leading-7">
                Defesa dos direitos do consumidor em cobranças indevidas,
                negativação, produtos defeituosos e relações de consumo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
