import { CheckCircle } from "lucide-react";
import bgAbout from "../../assets/background-about.png";
import thumbnail from "../../assets/thumbnail.svg";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-20 text-white"
      style={{ backgroundImage: `url(${bgAbout})` }}
    >
      {/* Overlay com gradiente + blur da esquerda pra direita */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-transparent backdrop-blur-sm"></div>

      {/* Conteúdo */}
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Texto */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre nós</h2>
          <hr className="border-t-2 border-gray-500 w-16 mb-6" />

          <h3 className="text-xl md:text-2xl font-semibold leading-snug mb-4">
            Somos os melhores advogados com mais de{" "}
            <span className="text-yellow-400">7 anos de experiência</span>
          </h3>

          <p className="text-gray-200 mb-6 leading-relaxed">
            Com mais de 7 anos de experiência, nossa equipe de advogados
            altamente qualificados atua em diversas áreas do direito, combinando
            tradição e inovação para oferecer soluções eficazes e
            personalizadas. <br />
            <br />
            Nos dedicamos a proteger seus direitos e interesses com compromisso,
            confiança e profissionalismo incomparáveis.
          </p>

          {/* Lista de qualidades */}
          <div className="grid grid-cols-2 gap-4 text-gray-200">
            {[
              "Experiência",
              "Resultados",
              "Profissionalismo",
              "Qualificação",
              "Confiabilidade",
              "Atendimento",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Imagem com moldura */}
        <div className="flex-1 flex justify-center">
          <div className="relative border-[16px] border-yellow-500 rounded-tr-lg rounded-bl-lg">
            <img
              src={thumbnail}
              alt="Advogado"
              className="w-[320px] h-auto object-cover shadow-lg rounded-tr-lg rounded-bl-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
