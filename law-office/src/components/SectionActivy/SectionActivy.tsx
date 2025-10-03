import civil from "../../assets/civil.png";
import family from "../../assets/family.png";
import labor from "../../assets/labor.png";
import social_security from "../../assets/social-security.png";
import real_estate from "../../assets/real-estate.png";
import successor from "../../assets/successor.png";

const areas = [
  {
    img: civil,
    title: "Direito Civil",
    desc: "Protegemos seus direitos em contratos, indenizações e disputas cíveis, oferecendo soluções eficazes e personalizadas para cada caso.",
  },
  {
    img: family,
    title: "Direito de Família",
    desc: "Assistência jurídica especializada em divórcios, guarda, pensão alimentícia e sucessões, sempre com sensibilidade e discrição.",
  },
  {
    img: labor,
    title: "Direito Trabalhista",
    desc: "Defesa eficaz em questões trabalhistas, assegurando seus direitos e interesses em todas as relações de emprego.",
  },
  {
    img: social_security,
    title: "Direito Previdenciário",
    desc: "Orientação especializada para aposentadorias, benefícios e revisões previdenciárias, garantindo seus direitos sociais.",
  },
  {
    img: real_estate,
    title: "Direito Imobiliário",
    desc: "Consultoria e suporte completos em transações imobiliárias, regularizações e litígios, assegurando segurança jurídica.",
  },
  {
    img: successor,
    title: "Direito Sucessório",
    desc: "Planejamento e resolução de heranças e testamentos, garantindo uma transição tranquila e segura para sua família.",
  },
];

export default function SectionActivy() {
  const phoneNumber = "5517997558800"; // coloque seu número com DDI e DDD
  const message = "Olá, gostaria de mais informações!";

  const handleContact = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank"); // abre em uma nova aba
  };

  return (
    <section id="areas" className="w-full max-w-7xl mx-auto px-6 py-20">
      {/* Título */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
          <span className="w-10 h-[3px] bg-yellow-500 rounded-full"></span>
          Nossas áreas de atuação
        </h2>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {areas.map((area, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={area.img}
              alt={area.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900">
                {area.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{area.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Botão */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => handleContact()}
          className="px-8 py-3 bg-[#0A1A2F] text-white rounded-md font-medium shadow hover:bg-[#0c223b] transition"
        >
          Entrar em Contato
        </button>
      </div>
    </section>
  );
}
