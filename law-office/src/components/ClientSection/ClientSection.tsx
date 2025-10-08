import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Laura Almeida",
    role: "CEO Empresa A",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "A equipe da Lemes Advocacia é excelente! Foram decisivos em uma situação complicada, mostrando sempre confiança e conhecimento profundo.",
  },
  {
    name: "Rodrigo Araújo",
    role: "CEO Empresa B",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "A Lemes Advocacia resolveu meu caso com profissionalismo e rapidez. Fiquei extremamente satisfeito com o resultado e a atenção dedicada.",
  },
  {
    name: "Dr. Roberto Souza",
    role: "Advogado",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    text: "A assessoria jurídica da Lemes Advocacia foi crucial para o sucesso do meu negócio. Recomendo fortemente pela competência e dedicação.",
  },
  {
    name: "Fernanda Castro",
    role: "Empresária",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Sempre tive receio em processos jurídicos, mas a equipe da Lemes Advocacia foi atenciosa e transparente em todas as etapas. Me senti segura e bem acompanhada.",
  },
  {
    name: "Carlos Mendes",
    role: "Diretor Financeiro",
    image: "https://randomuser.me/api/portraits/men/27.jpg",
    text: "O suporte que recebi da Lemes Advocacia foi incrível. Resolveram meu caso com agilidade e atenção aos detalhes que fizeram toda a diferença.",
  },
  {
    name: "Juliana Prado",
    role: "Empreendedora",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "A Lemes Advocacia foi essencial para estruturar meu negócio de forma segura e eficiente. Profissionalismo e cuidado em cada detalhe.",
  },
];

// Botão anterior
function PrevArrow({ onClick }) {
  return (
    <button
      className="hidden md:flex absolute -left-10 top-1/2 -translate-y-1/2 bg-white border border-gray-300 w-10 h-10 rounded-full items-center justify-center shadow-md hover:bg-gray-100 z-10"
      onClick={onClick}
    >
      <ChevronLeft className="w-5 h-5 text-gray-700" />
    </button>
  );
}

// Botão próximo
function NextArrow({ onClick }) {
  return (
    <button
      className="hidden md:flex absolute -right-10 top-1/2 -translate-y-1/2 bg-white border border-gray-300 w-10 h-10 rounded-full items-center justify-center shadow-md hover:bg-gray-100 z-10"
      onClick={onClick}
    >
      <ChevronRight className="w-5 h-5 text-gray-700" />
    </button>
  );
}

export default function ClientSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="w-full bg-gray-50  py-16 px-4 md:px-6 overflow-hidden">
      {/* Título */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-[#0c1725]">
          O que os nossos clientes estão falando
        </h2>
        <div className="w-24 h-[3px] bg-yellow-500 mx-auto mt-3"></div>
      </div>

      {/* Carousel */}
      <div className="max-w-6xl mx-auto relative">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-3 py-3">
              <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col justify-between">
                {/* Estrelas */}
                <div className="flex text-yellow-500 mb-3">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <span key={i} className="text-2xl">
                        ★
                      </span>
                    ))}
                </div>
                {/* Texto */}
                <p className="text-gray-700 mb-6 line-clamp-4">{item.text}</p>
                {/* Cliente */}
                <div className="flex items-center gap-3 mt-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-[#0c1725]">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
