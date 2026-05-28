export default function Areas() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">Áreas de Atuação</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-neutral-900 p-6 rounded-2xl">
          Direito Trabalhista
        </div>

        <div className="bg-neutral-900 p-6 rounded-2xl">
          Direito Previdenciário
        </div>

        <div className="bg-neutral-900 p-6 rounded-2xl">Direito Civil</div>
      </div>
    </main>
  );
}
