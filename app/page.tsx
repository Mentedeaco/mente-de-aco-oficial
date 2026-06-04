"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Brain,
  Flame,
  Shield,
  Dumbbell,
  Target,
  Clock,
  Check,
  ChevronDown,
  MessageCircle,
  Star,
} from "lucide-react";

const checkoutLink = "https://pay.kiwify.com.br/elgAyO6";
const whatsappLink = "https://wa.me/553172257626";

const carouselCards = [
  {
    title: "DISCIPLINA",
    image: "/disciplina.png",
    text: "Aprenda a agir mesmo quando a motivação desaparecer."
  },

  {
    title: "MENTALIDADE",
    image: "/mentalidade.png",
    text: "Troque a mente fraca por uma mentalidade de execução."
  },

  {
    title: "DESEMPENHO",
    image: "/desempenho.png",
    text: "Aumente energia, produtividade e consistência."
  },

  {
    title: "EVOLUÇÃO",
    image: "/evolucao.png",
    text: "Transforme corpo, mente, hábitos e aparência."
  },

  {
    title: "TRANSFORMAÇÃO",
    image: "/transformacao.png",
    text: "Saia da versão que promete e entre na versão que executa."
  },

  {
    title: "FOCO",
    image: "/foco.png",
    text: "Recupere sua atenção em um mundo feito para te distrair."
  },

  {
    title: "ROTINA",
    image: "/rotina.png",
    text: "Construa uma base diária para parar de viver no improviso."
  },

  {
    title: "AUTOCONTROLE",
    image: "/autocontrole.png",
    text: "Domine impulsos, dopamina barata e hábitos que te sabotam."
  },
];

const benefits = [
  {
    icon: Brain,
    title: "Mentalidade forte",
    text: "Você aprende a parar de pensar como alguém perdido e começa a tomar decisões como alguém que tem direção.",
  },
  {
    icon: Flame,
    title: "Disciplina real",
    text: "Não é sobre acordar motivado. É sobre criar um sistema para executar mesmo nos dias ruins.",
  },
  {
    icon: Shield,
    title: "Autocontrole",
    text: "Controle impulsos, distrações, vícios de dopamina e comportamentos que roubam seu potencial.",
  },
  {
    icon: Dumbbell,
    title: "Evolução física",
    text: "Entenda como aparência, físico, pele, postura e presença influenciam diretamente sua confiança.",
  },
  {
    icon: Clock,
    title: "Rotina prática",
    text: "Organize seus dias com uma estrutura simples para sair do automático e construir constância.",
  },
  {
    icon: Target,
    title: "Direção de vida",
    text: "Tenha clareza sobre quem você é, onde está errando e quais passos precisa tomar para mudar.",
  },
];

const deliverables = [
  {
    step: "01",
    title: "Protocolo de disciplina",
    text: "Um guia direto para construir constância, parar de depender de motivação e criar uma rotina que sustenta sua evolução.",
  },
  {
    step: "02",
    title: "Controle da dopamina",
    text: "Entenda como distrações, redes sociais, pornografia, procrastinação e prazer rápido enfraquecem sua mente.",
  },
  {
    step: "03",
    title: "Rotina de alta performance",
    text: "Um plano para organizar manhã, estudos, treino, trabalho, descanso e evolução pessoal sem complicar.",
  },
  {
    step: "04",
    title: "Presença e imagem",
    text: "Aprenda princípios para melhorar aparência, pele, físico, postura, estilo e a forma como você se apresenta.",
  },
  {
    step: "05",
    title: "Mentalidade financeira",
    text: "Primeiros passos para pensar melhor sobre dinheiro, renda extra, internet e construção de independência.",
  },
  {
    step: "06",
    title: "Plano de transformação",
    text: "Uma visão completa para sair da versão estagnada e entrar em um processo contínuo de evolução.",
  },
];

const testimonials = [
  ["Lucas M.", "O conteúdo bateu forte porque parecia descrever exatamente minha rotina: eu prometia mudar e nunca sustentava."],
  ["Rafael S.", "Gostei porque não parece motivação barata. É direto, pesado e mostra onde a gente realmente está errando."],
  ["João Pedro", "A parte de dopamina e rotina foi a que mais me fez pensar. Eu estava perdendo energia sem perceber."],
  ["Felipe A.", "O Mente De Aço tem uma estética e uma linguagem diferente. Parece um protocolo, não só um ebook."],
  ["Gustavo R.", "O mais forte foi perceber que meu problema não era falta de potencial, era falta de sistema."],
  ["Matheus C.", "Comecei a organizar minha rotina e parei de deixar tudo para depois. Foi um choque de realidade."],
  ["André L.", "A parte de aparência, postura e presença me pegou muito. Eu precisava cuidar mais de mim."],
  ["Henrique V.", "Dá vontade de mudar porque o conteúdo não passa pano. Ele mostra a verdade e o caminho."],
];

const offerItems = [
  "Mente De Aço 1.0 e 2.0",
  "Protocolo de disciplina mental",
  "Controle de dopamina e impulsos",
  "Construção de rotina prática",
  "Mentalidade de execução",
  "Direcionamento para físico, pele e presença",
  "Primeiros passos sobre dinheiro e renda extra",
  "Plano de transformação pessoal",
  "Acesso imediato pela Kiwify",
  "Atualizações futuras do projeto",
];

const faqs = [
  {
    q: "Por onde recebo o acesso?",
    a: "Após a compra, a Kiwify envia automaticamente o acesso para o e-mail usado no pagamento. Você poderá acessar pelo celular, computador ou tablet.",
  },
  {
    q: "O Mente De Aço é para iniciantes?",
    a: "Sim. Ele foi criado principalmente para quem sente que precisa recomeçar, organizar a mente, criar rotina e sair da estagnação.",
  },
  {
    q: "Isso é só motivação?",
    a: "Não. Motivação acaba. O Mente De Aço trabalha com sistema, rotina, autocontrole, mentalidade, aparência e execução prática.",
  },
  {
    q: "Em quanto tempo vejo resultado?",
    a: "Depende da sua execução. O material te entrega direção, clareza e estrutura, mas a transformação acontece quando você aplica no dia a dia.",
  },
  {
    q: "Tem suporte?",
    a: "Sim. Você pode falar com o suporte pelo WhatsApp profissional do projeto caso tenha dúvidas sobre acesso ou compra.",
  },
];

function scrollToOffer() {
  document.getElementById("oferta")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bg-black text-white overflow-hidden">
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: .35; transform: scale(1); }
          50% { opacity: .8; transform: scale(1.08); }
        }
        @keyframes lineMove {
          from { transform: translateX(-100%); }
          to { transform: translateX(140%); }
        }
        .marquee { animation: marquee 36s linear infinite; }
        .marquee-reverse { animation: marqueeReverse 42s linear infinite; }
        .glow-pulse { animation: pulseGlow 6s ease-in-out infinite; }
        .line-move { animation: lineMove 2.7s ease-in-out infinite; }
      `}</style>

      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Mente De Aço" width={46} height={46} className="rounded-full" />
            <div>
              <p className="text-sm font-black tracking-widest">MENTE DE AÇO</p>
              <p className="text-[11px] text-zinc-500">Disciplina • Foco • Controle</p>
            </div>
          </div>

          <button
            onClick={scrollToOffer}
            className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-black transition hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,.55)]"
          >
            Ver acesso
          </button>
        </div>
      </header>

{/* HERO */}
<section className="relative min-h-screen overflow-hidden bg-black px-6 pt-28">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0f172a_0%,#020617_38%,#000_78%)]" />
  <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:90px_90px]" />
  <div className="absolute left-1/2 top-[-260px] h-[780px] w-[780px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-[170px]" />

  <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-20 md:grid-cols-2">
    <motion.div
      initial={{ opacity: 0, y: 45 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="text-center md:text-left"
    >
      <div className="mb-6 inline-flex rounded-full border border-blue-500/30 bg-blue-600/10 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-blue-300 backdrop-blur">
        Mente de Aço • Método de evolução
      </div>

      <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tight text-white md:text-7xl lg:text-8xl">
        Transforme
        <span className="block text-blue-500">sua mente.</span>
      </h1>

      <h2 className="mt-5 max-w-3xl text-2xl font-black uppercase leading-tight text-white md:text-4xl">
        Domine seus hábitos.
        <span className="block text-blue-400">
          Construa a vida que poucos conseguem alcançar.
        </span>
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl">
        O método definitivo para desenvolver disciplina, foco, produtividade
        e uma mentalidade inabalável todos os dias.
      </p>

      <div className="mt-8 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
        {[
          ["Foco", "absoluto"],
          ["Mentalidade", "forte"],
          ["Rotina", "sólida"],
          ["Evolução", "constante"],
        ].map(([top, bottom]) => (
          <div
            key={top}
            className="rounded-2xl border border-blue-500/20 bg-black/45 p-4 text-center backdrop-blur-md transition hover:-translate-y-1 hover:border-blue-400/60 hover:bg-blue-600/10"
          >
            <p className="text-sm font-black uppercase text-blue-400">{top}</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-zinc-300">
              {bottom}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={scrollToOffer}
        className="mt-9 rounded-2xl bg-blue-600 px-12 py-5 text-lg font-black uppercase text-white transition hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_0_55px_rgba(37,99,235,.65)]"
      >
        Desbloquear meu acesso
      </button>

      <div className="mt-5 flex flex-wrap justify-center gap-4 text-sm font-semibold text-zinc-300 md:justify-start">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-blue-500" />
          Acesso imediato
        </span>

        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-blue-500" />
          Pagamento único
        </span>

        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-blue-500" />
          7 dias de garantia
        </span>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 35 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="relative mx-auto hidden w-full max-w-[420px]"
    >
      <div className="absolute inset-0 rounded-[2.5rem] bg-blue-600/30 blur-[90px]" />

      <div className="relative overflow-hidden rounded-[2.5rem] border border-blue-500/30 bg-black shadow-[0_0_100px_rgba(37,99,235,.25)]">
        <Image
          src="/hero.png"
          alt="Mente de Aço Transformação"
          width={1200}
          height={900}
          priority
          className="h-[500px] w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-300">
            Transformação real
          </p>

          <h3 className="mt-3 text-3xl font-black uppercase leading-tight text-white">
            Mente forte.
            <span className="block text-blue-400">Rotina forte.</span>
            Vida forte.
          </h3>
        </div>
      </div>
    </motion.div>
  </div>
</section> 
      <section className="relative overflow-hidden border-y border-white/10 bg-black py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0f172a_0%,#000_70%)] opacity-70" />

        <div className="relative z-10 mb-12 px-6 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-blue-400">O caminho</p>
          <h2 className="text-4xl font-black uppercase md:text-6xl">
            As áreas que formam uma mente de aço
          </h2>
        </div>

        <div className="relative z-10 flex w-max gap-6 marquee hover:[animation-play-state:paused]">
          {[...carouselCards, ...carouselCards].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative h-[520px] w-[285px] overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-contain object-center p-2 transition duration-700 group-hover:scale-105"
              />
<div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black via-black/70 to-transparent" />

<div className="absolute bottom-0 z-10 p-5">
  <p className="text-sm leading-relaxed text-zinc-300">
    {card.text}
  </p>
</div>
              <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black via-black/75 to-transparent" />

              <div className="absolute bottom-0 z-10 p-6">
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative bg-zinc-950 px-6 py-28">
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-blue-400">A verdade</p>
          <h2 className="text-4xl font-black uppercase md:text-6xl">
            Você não está sem potencial. Você está sem um sistema.
          </h2>
          <p className="mx-auto mt-7 max-w-4xl text-lg leading-relaxed text-zinc-400">
            Toda semana você promete que vai mudar. Promete que vai treinar,
            estudar, cuidar da aparência, parar de procrastinar e tomar controle.
            Mas no silêncio da rotina, os mesmos hábitos voltam. O Mente De Aço
            existe para quebrar esse ciclo.
          </p>
        </div>
      </section>

      <section className="bg-black px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-[2rem] border border-red-500/35 bg-red-950/20 p-8 shadow-[0_0_60px_rgba(239,68,68,.08)]"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-red-400">Velho eu</p>
            <h2 className="text-4xl font-black uppercase">A versão que te prende</h2>
            <ul className="mt-8 space-y-4 text-zinc-300">
              <li>✕ Acorda sem direção e termina o dia frustrado.</li>
              <li>✕ Promete mudar, mas repete os mesmos erros.</li>
              <li>✕ Vive preso em celular, comparação e dopamina barata.</li>
              <li>✕ Sente vergonha do próprio físico, aparência ou postura.</li>
              <li>✕ Procrastina tarefas simples e perde confiança em si mesmo.</li>
              <li>✕ Sabe que nasceu para mais, mas age como se não tivesse escolha.</li>
              <li>✕ Aceita uma vida menor porque não tem um plano claro.</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-[2rem] border border-blue-500/45 bg-blue-600/10 p-8 shadow-[0_0_70px_rgba(37,99,235,.18)]"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-blue-400">Novo eu</p>
            <h2 className="text-4xl font-black uppercase">A versão que assume o controle</h2>
            <ul className="mt-8 space-y-4 text-zinc-200">
              <li>✓ Acorda com clareza do que precisa fazer.</li>
              <li>✓ Executa mesmo quando não está motivado.</li>
              <li>✓ Controla impulsos, distrações e hábitos fracos.</li>
              <li>✓ Cuida do físico, pele, aparência e presença.</li>
              <li>✓ Cria uma rotina que fortalece corpo e mente.</li>
              <li>✓ Para de negociar com a própria versão fraca.</li>
              <li>✓ Começa a viver como alguém que respeita o próprio futuro.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="bg-zinc-950 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-blue-400">Transformação</p>
            <h2 className="text-4xl font-black uppercase md:text-6xl">
              O que você vai desenvolver
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -9, scale: 1.02 }}
                className="group rounded-[2rem] border border-white/10 bg-black p-8 transition hover:border-blue-500/60"
              >
                <item.icon className="mb-6 h-11 w-11 text-blue-400 transition group-hover:drop-shadow-[0_0_18px_rgba(59,130,246,.9)]" />
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-zinc-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-black px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-blue-400">O método</p>
            <h2 className="text-4xl font-black uppercase md:text-6xl">
              O protocolo Mente De Aço
            </h2>
          </div>

          <div className="relative grid gap-6 md:grid-cols-3">
            <div className="absolute left-0 top-1/2 hidden h-px w-full overflow-hidden bg-white/10 md:block">
              <div className="line-move h-full w-1/3 bg-blue-500 blur-sm" />
            </div>

            {deliverables.map((item) => (
              <motion.div
                key={item.step}
                whileHover={{ y: -10 }}
                className="relative z-10 rounded-[2rem] border border-white/10 bg-zinc-950 p-8 transition hover:border-blue-500/60"
              >
                <p className="mb-5 text-xl font-black text-blue-400">{item.step}</p>
                <h3 className="text-2xl font-black uppercase">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-zinc-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-zinc-950 py-28">
        <div className="mb-14 px-6 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-blue-400">Depoimentos</p>
          <h2 className="text-4xl font-black uppercase md:text-6xl">
            Quem entende, sente a diferença
          </h2>
        </div>

        <div className="flex w-max gap-5 marquee-reverse hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map(([name, text], i) => (
            <div key={i} className="w-[360px] rounded-[2rem] border border-white/10 bg-black p-7">
              <div className="mb-5 flex gap-1 text-blue-400">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-blue-400" />
                ))}
              </div>
              <p className="leading-relaxed text-zinc-300">“{text}”</p>
              <p className="mt-6 font-black text-blue-400">{name}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="oferta" className="bg-black px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[2.5rem] border border-blue-500/30 bg-[radial-gradient(circle_at_top_left,#1d4ed8_0%,#020617_38%,#000_100%)] p-6 shadow-[0_0_100px_rgba(37,99,235,.18)] md:grid-cols-2 md:p-10">
          <div className="p-4 md:p-8">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-blue-300">Oferta especial</p>
            <h2 className="text-4xl font-black uppercase md:text-6xl">
              Entre para o Mente De Aço
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-300">
              Acesso imediato ao sistema criado para transformar disciplina,
              rotina, autocontrole, aparência, mentalidade e direção em uma nova fase da sua vida.
            </p>

            <div className="my-10">
              <p className="text-2xl font-black text-red-500 line-through">De R$297</p>
              <p className="text-6xl font-black text-white md:text-7xl">R$43,90</p>
              <p className="mt-2 text-zinc-400">Pagamento único • Compra segura • Acesso imediato</p>
            </div>

            <a
              href={checkoutLink}
              className="block rounded-2xl bg-blue-600 px-10 py-5 text-center text-lg font-black transition hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_0_60px_rgba(37,99,235,.65)]"
            >
              Garantir meu acesso agora
            </a>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-black/55 p-7">
            <h3 className="mb-7 text-3xl font-black uppercase">
              Recapitulando, você terá acesso:
            </h3>

            <div className="space-y-3">
              {offerItems.map((item) => (
                <div key={item} className="flex gap-3 rounded-xl p-3 transition hover:bg-blue-600/10">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                  <p className="text-zinc-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-6 py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-14 text-center text-4xl font-black uppercase md:text-6xl">
            Dúvidas frequentes
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="overflow-hidden rounded-2xl border border-white/10 bg-black">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-xl font-black">{faq.q}</span>
                  <ChevronDown className={`transition ${openFaq === i ? "rotate-180" : ""}`} />
                </button>

                {openFaq === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="px-6 pb-6 leading-relaxed text-zinc-400"
                  >
                    {faq.a}
                  </motion.p>
                )}
              </div>
            ))}
          </div>

          <a
            href={whatsappLink}
            className="mt-8 flex items-center justify-center gap-3 rounded-2xl border border-blue-500/30 bg-blue-600/10 px-8 py-5 text-center font-black text-blue-300 transition hover:bg-blue-600/20"
          >
            <MessageCircle className="h-5 w-5" />
            Falar com o suporte
          </a>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black px-6 py-32 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1d4ed8_0%,#020617_35%,#000_78%)] opacity-75" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <h2 className="text-4xl font-black uppercase leading-tight md:text-7xl">
            A sua vida muda quando você para de negociar com a sua versão fraca.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
            O Mente De Aço não promete mágica. Ele te entrega direção.
            A transformação começa quando você decide executar.
          </p>

          <button
            onClick={scrollToOffer}
            className="mt-10 rounded-2xl bg-blue-600 px-12 py-5 text-lg font-black transition hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_0_55px_rgba(37,99,235,.65)]"
          >
            Ver oferta especial
          </button>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Mente De Aço" width={46} height={46} className="rounded-full" />
            <div>
              <p className="font-black">MENTE DE AÇO</p>
              <p className="text-sm text-zinc-500">By Vynexa Studio</p>
            </div>
          </div>

          <div className="text-sm text-zinc-500">
            <p>© 2026 Mente De Aço. Todos os direitos reservados.</p>
            <p>Suporte: +55 31 7225-7626</p>
          </div>
        </div>
      </footer>
    </main>
  );
}