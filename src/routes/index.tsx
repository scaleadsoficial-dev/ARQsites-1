import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Instagram, Mail, MapPin, Menu, MessageCircle, X } from "lucide-react";
import { CONTACT, PROJECTS, SERVICES, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stella | Arquitetura e Design — Goiânia" },
      {
        name: "description",
        content:
          "Arquitetura residencial, corporativa e design de interiores em Goiânia. Projetos que nascem dos detalhes, com orçamentos precisos e foco em economia.",
      },
      { property: "og:title", content: "Stella | Arquitetura e Design" },
      { property: "og:description", content: "Projetamos sonhos com excelência. Arquitetura e interiores em GO, DF, MG e MA." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const NAV = [
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

function Index() {
  useReveal();
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lightbox, setLightbox] = useState<{ p: number; i: number } | null>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <div className="bg-background text-foreground">
      {/* Header */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled ? "bg-background/90 py-3 shadow-sm backdrop-blur" : "py-6"}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a href="#inicio" aria-label="Stella Arquitetura e Design — início">
            <img
              src={scrolled ? "/images/logo-dark.png" : "/images/logo-light.png"}
              alt="Stella Arquitetura e Design"
              className="h-9 w-auto md:h-10"
            />
          </a>
          <nav className={`hidden items-center gap-10 md:flex ${scrolled ? "text-foreground" : "text-ink-foreground"}`}>
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="eyebrow transition-opacity hover:opacity-60">
                {n.label}
              </a>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={`eyebrow border px-5 py-3 transition-colors ${scrolled ? "border-primary hover:bg-primary hover:text-primary-foreground" : "border-ink-foreground/60 hover:bg-ink-foreground hover:text-ink"}`}
            >
              Orçamento
            </a>
          </nav>
          <button
            className={`md:hidden ${scrolled ? "text-foreground" : "text-ink-foreground"}`}
            onClick={() => setMenu(true)}
            aria-label="Abrir menu"
          >
            <Menu />
          </button>
        </div>
      </header>

      {menu && (
        <div className="fixed inset-0 z-50 flex flex-col bg-ink p-6 text-ink-foreground">
          <div className="flex items-center justify-between">
            <img src="/images/logo-light.png" alt="Stella" className="h-9" />
            <button onClick={() => setMenu(false)} aria-label="Fechar menu">
              <X />
            </button>
          </div>
          <nav className="mt-16 flex flex-col gap-8">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setMenu(false)} className="font-display text-4xl">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Hero */}
      <section id="inicio" className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
        <img
          src="/images/imagem-de-referencia.jpg"
          alt="Cozinha integrada com marcenaria em madeira natural e iluminação suave"
          className="animate-slow-zoom absolute inset-0 h-full w-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 text-ink-foreground md:pb-28">
          <p className="eyebrow animate-hero-in opacity-80">Arquitetura · Interiores · Goiânia</p>
          <h1 className="animate-hero-in mt-6 max-w-4xl text-5xl leading-[1.02] md:text-8xl" style={{ animationDelay: ".15s" }}>
            Projetamos sonhos <em className="font-light">com excelência.</em>
          </h1>
          <div className="animate-hero-in mt-10 flex flex-col gap-6 sm:flex-row sm:items-center" style={{ animationDelay: ".35s" }}>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group eyebrow inline-flex items-center gap-3 bg-ink-foreground px-7 py-4 text-ink transition-all hover:gap-5"
            >
              Solicitar orçamento <ArrowRight className="h-4 w-4" />
            </a>
            <p className="max-w-xs text-sm opacity-80">Orçamentos precisos, priorizando economia em cada decisão.</p>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="mx-auto max-w-5xl px-6 py-28 text-center md:py-40">
        <p className="eyebrow reveal text-muted-foreground">Filosofia</p>
        <p className="reveal mt-8 font-display text-3xl leading-snug md:text-5xl">
          “Encontro a beleza em cada detalhe. Sentir os materiais, analisar as texturas e os tons.{" "}
          <em className="text-primary">É nos detalhes que um bom projeto mora</em> e se torna algo memorável.”
        </p>
      </section>

      {/* Projects */}
      <section id="projetos" className="pb-24">
        <div className="mx-auto mb-16 flex max-w-7xl items-end justify-between px-6">
          <div>
            <p className="eyebrow reveal text-muted-foreground">Portfólio</p>
            <h2 className="reveal mt-4 text-5xl md:text-6xl">Projetos selecionados</h2>
          </div>
          <span className="eyebrow hidden text-muted-foreground md:block">0{PROJECTS.length} projetos</span>
        </div>

        {PROJECTS.map((p, pi) => (
          <article key={p.slug} className="mx-auto mb-28 max-w-7xl px-6 md:mb-40">
            <div className={`grid gap-10 md:grid-cols-12 md:gap-14 ${pi % 2 ? "" : ""}`}>
              <button
                onClick={() => setLightbox({ p: pi, i: 0 })}
                className={`img-zoom reveal block md:col-span-8 ${pi % 2 ? "md:order-2" : ""}`}
                aria-label={`Ampliar fotos do projeto ${p.title}`}
              >
                <img src={p.images[0].src} alt={p.images[0].alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              </button>
              <div className={`flex flex-col justify-end md:col-span-4 ${pi % 2 ? "md:order-1" : ""}`}>
                <p className="eyebrow reveal text-muted-foreground">
                  0{pi + 1} — {p.category}
                </p>
                <h3 className="reveal mt-4 text-4xl md:text-5xl">{p.title}</h3>
                {p.text.map((t, i) => (
                  <p key={i} className="reveal mt-5 leading-relaxed text-muted-foreground">
                    {t}
                  </p>
                ))}
                {p.quote && <p className="reveal mt-6 font-display text-2xl italic text-primary">{p.quote}</p>}
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-6">
              {p.images.slice(1).map((img, i) => (
                <button
                  key={img.src}
                  onClick={() => setLightbox({ p: pi, i: i + 1 })}
                  className="img-zoom reveal block"
                  aria-label={`Ampliar: ${img.alt}`}
                >
                  <img src={img.src} alt={img.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </article>
        ))}
      </section>

      {/* About */}
      <section id="sobre" className="bg-secondary py-28 md:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-12">
          <div className="reveal md:col-span-5">
            <img src="/images/stella.jpg" alt="Arquiteta Stella sorrindo, analisando amostras de mármore e tapetes" className="w-full object-cover" loading="lazy" />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="eyebrow reveal text-muted-foreground">A arquiteta</p>
            <h2 className="reveal mt-4 text-5xl md:text-6xl">
              Olá, sou a <em>Stella.</em>
            </h2>
            <div className="mt-8 space-y-5 leading-relaxed text-secondary-foreground/80">
              <p className="reveal">
                Acredito que um projeto começa muito antes do desenho: começa quando toco um mármore, sinto a trama de um tecido
                ou observo como a luz muda o tom da madeira ao longo do dia. É nesse olhar atento que encontro a beleza.
              </p>
              <p className="reveal">
                Cada escolha de material, textura e cor é pensada para traduzir quem vai viver ali — seus gostos, hábitos e
                memórias. O resultado são espaços leves, acolhedores e cheios de significado.
              </p>
              <p className="reveal">
                Trabalho com proximidade, alegria e convicção em cada etapa, sempre com orçamentos precisos e decisões que
                respeitam o seu investimento.
              </p>
            </div>
            <p className="reveal mt-10 font-display text-2xl italic text-primary">É nos detalhes que um bom projeto mora.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="mx-auto max-w-7xl px-6 py-28 md:py-36">
        <p className="eyebrow reveal text-muted-foreground">Serviços</p>
        <h2 className="reveal mt-4 max-w-2xl text-5xl md:text-6xl">Do primeiro traço ao último detalhe</h2>
        <div className="mt-16 border-t border-border">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="reveal group grid gap-4 border-b border-border py-10 md:grid-cols-12 md:items-baseline">
              <span className="eyebrow text-muted-foreground md:col-span-1">0{i + 1}</span>
              <h3 className="text-3xl transition-transform duration-500 group-hover:translate-x-2 md:col-span-5 md:text-4xl">{s.title}</h3>
              <p className="leading-relaxed text-muted-foreground md:col-span-6">{s.text}</p>
            </div>
          ))}
        </div>
        <p className="reveal mt-10 text-sm text-muted-foreground">
          Atendimento em Goiás, Distrito Federal, Minas Gerais, Maranhão e todo o Brasil.
        </p>
      </section>

      {/* CTA / Contact */}
      <section id="contato" className="bg-ink py-28 text-ink-foreground md:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
          <div>
            <p className="eyebrow reveal opacity-70">Vamos conversar</p>
            <h2 className="reveal mt-6 text-5xl leading-tight md:text-7xl">
              Seu projeto, <em>com orçamento preciso</em> e foco em economia.
            </h2>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal eyebrow mt-12 inline-flex items-center gap-3 bg-ink-foreground px-8 py-5 text-ink transition-all hover:gap-5"
            >
              <MessageCircle className="h-4 w-4" /> Conversar no WhatsApp
            </a>
          </div>
          <ul className="space-y-8 self-end">
            {[
              { icon: MessageCircle, label: "WhatsApp", value: CONTACT.phoneLabel, href: whatsappLink() },
              { icon: Instagram, label: "Instagram", value: "@stellaarquitetura", href: CONTACT.instagram },
              { icon: Mail, label: "E-mail", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
              { icon: MapPin, label: "Escritório", value: CONTACT.address, href: CONTACT.maps },
            ].map((c) => (
              <li key={c.label} className="reveal">
                <a
                  href={c.href}
                  target={c.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-start gap-5 border-b border-ink-foreground/15 pb-6"
                >
                  <c.icon className="mt-1 h-5 w-5 shrink-0 opacity-70" />
                  <span className="flex-1">
                    <span className="eyebrow block opacity-60">{c.label}</span>
                    <span className="mt-2 block text-lg">{c.value}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 opacity-40 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="bg-ink pb-10 text-ink-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 border-t border-ink-foreground/15 px-6 pt-10 md:flex-row md:items-center">
          <img src="/images/logo-light.png" alt="Stella Arquitetura e Design" className="h-8" />
          <p className="text-xs opacity-60">© {new Date().getFullYear()} Stella | Arquitetura e Design. Goiânia — GO.</p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
      >
        <MessageCircle />
      </a>

      {lightbox && <Lightbox state={lightbox} setState={setLightbox} />}
    </div>
  );
}

function Lightbox({
  state,
  setState,
}: {
  state: { p: number; i: number };
  setState: (s: { p: number; i: number } | null) => void;
}) {
  const imgs = PROJECTS[state.p].images;
  const go = (d: number) => setState({ p: state.p, i: (state.i + d + imgs.length) % imgs.length });
  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setState(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  });
  const img = imgs[state.i];
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 text-ink-foreground" onClick={() => setState(null)}>
      <button className="absolute right-5 top-5" aria-label="Fechar" onClick={() => setState(null)}>
        <X className="h-7 w-7" />
      </button>
      <button className="absolute left-3 p-3 md:left-8" aria-label="Anterior" onClick={(e) => (e.stopPropagation(), go(-1))}>
        <ChevronLeft className="h-8 w-8" />
      </button>
      <figure onClick={(e) => e.stopPropagation()} className="max-w-5xl">
        <img src={img.src} alt={img.alt} className="max-h-[80vh] w-auto object-contain" />
        <figcaption className="eyebrow mt-4 text-center opacity-70">
          {PROJECTS[state.p].title} — {state.i + 1}/{imgs.length}
        </figcaption>
      </figure>
      <button className="absolute right-3 p-3 md:right-8" aria-label="Próxima" onClick={(e) => (e.stopPropagation(), go(1))}>
        <ChevronRight className="h-8 w-8" />
      </button>
    </div>
  );
}
