import background_help from "../../assets/background-help.png";

export default function SectionHelp() {
  return (
    <section
      className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${background_help})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay degradê sem blur (só escurece a esquerda) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

      {/* Faixa fosca só na esquerda */}
      <div className="absolute inset-y-0 left-0 w-1/3 bg-black/30 blur-lg" />

      {/* Conteúdo */}
      <div className="relative z-10 text-white flex flex-col items-center px-4">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          Como podemos te ajudar?
        </h2>
        <button className="px-6 py-2 bg-white text-black font-medium rounded-lg shadow hover:bg-gray-100 transition">
          Fale Conosco
        </button>
      </div>
    </section>
  );
}
