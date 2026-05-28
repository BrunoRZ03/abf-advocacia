import Navbar from "@/components/Navbar";

export default function Contato() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-14">
          <h1 className="text-5xl font-bold mb-6">Contato</h1>

          <p className="text-lg text-neutral-300 max-w-2xl">
            Entre em contato com o escritório ABF Advocacia para atendimento
            jurídico especializado e suporte personalizado para o seu caso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* INFORMAÇÕES */}
          <div className="bg-neutral-900 p-8 rounded-2xl">
            <h2 className="text-3xl font-semibold mb-8">Informações</h2>

            <div className="space-y-6 text-neutral-300">
              <div>
                <h3 className="text-white font-semibold mb-2">WhatsApp</h3>

                <p>(11) 99999-9999</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">E-mail</h3>

                <p>contato@abfadvocacia.com.br</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Endereço</h3>

                <p>Serra Negra - SP</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">
                  Horário de Atendimento
                </h3>

                <p>Segunda a Sexta — 08h às 18h</p>
              </div>
            </div>

            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              className="inline-block mt-10 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Falar no WhatsApp
            </a>
          </div>

          {/* FORMULÁRIO */}
          <div className="bg-neutral-900 p-8 rounded-2xl">
            <h2 className="text-3xl font-semibold mb-8">Envie uma mensagem</h2>

            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-sm text-neutral-300">
                  Nome
                </label>

                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-neutral-300">
                  E-mail
                </label>

                <input
                  type="email"
                  placeholder="seuemail@gmail.com"
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-neutral-300">
                  Mensagem
                </label>

                <textarea
                  placeholder="Descreva brevemente sua necessidade..."
                  rows={5}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 outline-none focus:border-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:scale-[1.02] transition"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>

        {/* MAPA */}
        <div className="mt-16 bg-neutral-900 rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117048.81943003199!2d-47.172897!3d-22.90556"
            width="100%"
            height="350"
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
