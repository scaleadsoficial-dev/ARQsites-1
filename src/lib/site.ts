// Edite aqui contatos, projetos e serviços do site.
export const CONTACT = {
  whatsapp: "5562996644803",
  phoneLabel: "+55 (62) 99664-4803",
  whatsappMessage: "Olá, Stella! Gostaria de conversar sobre um projeto de arquitetura.",
  instagram: "https://instagram.com/stellaarquitetura",
  email: "arquiteturastella@gmail.com",
  address: "JK New Concept Business — Av. E, 1470, Sala 714, Jardim Goiás, Goiânia - GO, 74810-030",
  maps: "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("JK New Concept Business, Av. E, 1470, Jardim Goiás, Goiânia - GO, 74810-030"),
};

export const whatsappLink = (msg = CONTACT.whatsappMessage) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;

export const PROJECTS = [
  {
    slug: "casa-nb",
    title: "Casa NB",
    category: "Residencial",
    text: [
      "Sabe aquele ambiente subutilizado? Aquele cantinho embaixo da escada? Uma parede ou um lugar na sala que não cabe nada? Ganhou uma nova necessidade.",
      "Na Casa NB é um lugar de conversas íntimas, de contemplar fotografias, de boas leituras, degustar uma taça de vinho e partilhar momentos.",
    ],
    quote: "Leveza e simplicidade foram as exigências deste projeto!",
    images: [
      { src: "/images/casa-nb-1.jpg", alt: "Casa NB — living com sofá claro, parede de pedra e adega sob a escada" },
      { src: "/images/casa-nb-2.jpg", alt: "Casa NB — detalhe do ambiente sob a escada" },
      { src: "/images/casa-nb-3.jpg", alt: "Casa NB — vista do living integrado" },
    ],
  },
  {
    slug: "apto-reserva",
    title: "Living do Apto. Reserva",
    category: "Residencial",
    text: [
      "A disposição estratégica e integrada dos ambientes traz uma incrível sensação de amplitude e fluidez.",
      "A utilização das cores claras e naturais reflete a personalidade dos moradores. Seus detalhes evocam um pouco dos gostos e hábitos dessa família, tudo pensado para trazer bem-estar!",
    ],
    quote: "",
    images: [
      { src: "/images/apto-reserva-1.jpg", alt: "Apto. Reserva — living integrado em tons claros" },
      { src: "/images/apto-reserva-3.jpg", alt: "Apto. Reserva — detalhe do living" },
      { src: "/images/apto-reserva-4.jpg", alt: "Apto. Reserva — ambiente integrado com cores naturais" },
    ],
  },
];

export const SERVICES = [
  {
    title: "Arquitetura",
    text: "Projetos residenciais e corporativos pensados do conceito à execução, unindo funcionalidade, estética e orçamento preciso.",
  },
  {
    title: "Design de interiores",
    text: "Curadoria de materiais, texturas, tons e mobiliário para criar ambientes que traduzem a personalidade de quem vive ou trabalha neles.",
  },
  {
    title: "Perícia judicial e avaliação de imóveis",
    text: "Laudos técnicos e avaliações imobiliárias com rigor, clareza e embasamento profissional.",
  },
];
