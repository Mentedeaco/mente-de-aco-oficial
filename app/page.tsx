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
  Wallet,
  Sparkles,
  BookOpen,
  Zap,
} from "lucide-react";

const checkoutLink = "https://pay.kiwify.com.br/elgAyO6";
const whatsappLink = "https://wa.me/553172257626";

const carouselCards = [
  {
    title: "DISCIPLINA",
    image: "/disciplina.png",
    text: "Aja mesmo quando a motivação desaparecer. Construa consistência real.",
  },
  {
    title: "APARÊNCIA",
    image: "/evolucao.png",
    text: "Pele, físico, estilo e presença. Sua imagem comunica antes de você falar.",
  },
  {
    title: "PRODUTIVIDADE",
    image: "/desempenho.png",
    text: "Agenda inteligente, modo foco e sistema de metas para render mais todos os dias.",
  },
  {
    title: "FINANÇAS",
    image: "/mentalidade.png",
    text: "Planejamento financeiro integrado para você controlar seu dinheiro com clareza.",
  },
  {
    title: "SHAPE",
    image: "/transformacao.png",
    text: "Evolução física com acompanhamento de progresso dentro do próprio app.",
  },
  {
    title: "ORGANIZAÇÃO",
    image: "/rotina.png",
    text: "Calendário, agenda e hábitos centralizados. Chega de viver no improviso.",
  },
  {
    title: "FOCO",
    image: "/foco.png",
    text: "Modo Pomodoro e bloqueio de distrações para recuperar sua atenção.",
  },
  {
    title: "CONSISTÊNCIA",
    image: "/autocontrole.png",
    text: "Sistema de XP e evolução que gamifica sua rotina e mantém você no trilho.",
  },
];

const benefits = [
  {
    icon: Brain,
    title: "Mentalidade forte",
    text: "Pare de pensar como alguém perdido. Tome decisões com direção e clareza.",
  },
  {
    icon: Flame,
    title: "Disciplina real",
    text: "Não é sobre motivação. É sobre criar um sistema para executar mesmo nos dias ruins.",
  },
  {
    icon: Dumbbell,
    title: "Evolução física",
    text: "Físico, pele, postura e presença — acompanhados e melhorados dentro do app.",
  },
  {
    icon: Shield,
    title: "Organização pessoal",
    text: "Hábitos, agenda, calendário e metas integrados em um único lugar.",
  },
  {
    icon: Wallet,
    title: "Inteligência financeira",
    text: "Planejamento financeiro prático para construir independência com consistência.",
  },
  {
    icon: Target,
    title: "Aparência masculina",
    text: "Estilo, cuidado pessoal e presença. Sua imagem é parte da sua evolução.",
  },
];

const deliverables = [
  {
    step: "01",
    icon: Sparkles,
    title: "Aplicativo Mente de Aço",
    text: "O app completo com sistema de hábitos, agenda inteligente, calendário, metas, modo foco e acompanhamento de progresso.",
  },
  {
    step: "02",
    icon: Brain,
    title: "IA Jarvis",
    text: "Inteligência artificial própria integrada ao app para te guiar, responder dúvidas e personalizar sua evolução.",
  },
  {
    step: "03",
    icon: Zap,
    title: "Sistema de hábitos e XP",
    text: "Gamificação real: ganhe XP por hábitos cumpridos, visualize seu progresso e mantenha consistência todos os dias.",
  },
  {
    step: "04",
    icon: Wallet,
    title: "Planejamento financeiro",
    text: "Módulo completo para organizar receitas, despesas e metas financeiras diretamente no ecossistema.",
  },
  {
    step: "05",
    icon: Clock,
    title: "Modo foco (Pomodoro)",
    text: "Temporizador inteligente com sessões de foco para eliminar distrações e aumentar produtividade.",
  },
  {
    step: "06",
    icon: BookOpen,
    title: "Biblioteca + Comunidade",
    text: "Conteúdos sobre disciplina, aparência, finanças e evolução masculina — mais acesso à comunidade exclusiva.",
  },
];

const testimonials = [
  ["Lucas M.", "O app mudou minha rotina completamente. Nunca fui tão consistente em meses de vida."],
  ["Rafael S.", "A IA Jarvis é diferente. Me ajuda de verdade a montar minha semana e cobrar execução."],
  ["João Pedro", "O sistema de XP parece bobo, mas funciona. Fico com raiva de perder streak."],
  ["Felipe A.", "Ter tudo num só lugar — hábitos, agenda, finanças — mudou minha organização."],
  ["Gustavo R.", "O modo foco com Pomodoro foi o que mais impactou minha produtividade no trabalho."],
  ["Matheus C.", "Comecei pelo módulo de aparência e acabei reformulando minha rotina inteira."],
  ["André L.", "Sinto que entrei num sistema, não num curso. É completamente diferente."],
  ["Henrique V.", "O Mente de Aço não é um app. É um ecossistema. Faz diferença usar todo dia."],
];

const offerItems = [
  "Aplicativo Mente de Aço",
  "IA Jarvis integrada",
  "Sistema de hábitos + XP",
  "Agenda inteligente",
  "Calendário completo",
  "Modo foco (Pomodoro)",
  "Planejamento financeiro",
  "Evolução física",
  "Aparência masculina",
  "Biblioteca completa",
  "Comunidade exclusiva",
  "Atualizações futuras incluídas",
];

const faqs = [
  {
    q: "Como acesso o aplicativo após a compra?",
    a: "Após a compra, a Kiwify envia automaticamente o link de acesso para o e-mail usado no pagamento. Você acessa o app pelo celular, computador ou tablet.",
  },
  {
    q: "O ecossistema é para quem está começando do zero?",
    a: "Sim. O Mente de Aço foi criado especialmente para quem quer sair da estagnação, criar rotina e construir uma vida com mais disciplina e organização.",
  },
  {
    q: "O que diferencia o app de outros aplicativos de hábitos?",
    a: "O Mente de Aço é um ecossistema completo: hábitos, agenda, IA, finanças, modo foco, aparência e comunidade — tudo integrado numa só plataforma focada em evolução masculina.",
  },
  {
    q: "A IA Jarvis é incluída no acesso?",
    a: "Sim. A IA Jarvis está integrada ao app e já está incluída no acesso. Ela funciona como um assistente pessoal de evolução dentro do ecossistema.",
  },
  {
    q: "O acesso tem alguma mensalidade?",
    a: "Não. O acesso é vitalício por um único pagamento. As atualizações futuras do ecossistema também estão inclusas sem custo adicional.",
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

      {/* HEADER */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Mente De Aço" width={46} height={46} className="rounded-full" />
            <div>
              <p className="text-sm font-black tracking-widest">MENTE DE AÇO</p>
              <p className="text-[11px] text-zinc-500">Evolução • Disciplina • Sistema</p>
            </div>
          </div>
          <button
            onClick={scrollToOffer}
            className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-black transition hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,.55)]"
          >
            ⚔️ Começar evolução
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-black px-6 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0f172a_0%,#020617_38%,#000_78%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:90px_90px]" />
        <div className="absolute left-1/2 top-[-260px] h-[780px] w-[780px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-[170px]" />

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-32 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center md:text-left"
          >
            <div className="mb-6 inline-flex rounded-full border border-blue-500/30 bg-blue-600/10 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-blue-300 backdrop-blur">
              ⚔️ Ecossistema completo de evolução masculina
            </div>

            <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tight text-white md:text-7xl lg:text-8xl">
              CONSTRUA
              <span className="block text-blue-500">SUA MELHOR</span>
              <span className="block">VERSÃO</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl">
              O sistema completo de evolução masculina que reúne hábitos, aparência, produtividade, finanças, disciplina e inteligência artificial em um único aplicativo.
            </p>

            <div className="mt-8 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
              {[
                ["App", "próprio"],
                ["IA", "Jarvis"],
                ["XP", "e evolução"],
                ["Acesso", "vitalício"],
              ].map(([top, bottom]) => (
                <div
                  key={top}
                  className="rounded-2xl border border-blue-500/20 bg-black/45 p-4 text-center backdrop-blur-md transition hover:-translate-y-1 hover:border-blue-400/60 hover:bg-blue-600/10"
                >
                  <p className="text-sm font-black uppercase text-blue-400">{top}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-zinc-300">{bottom}</p>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToOffer}
              className="mt-9 rounded-2xl bg-blue-600 px-12 py-5 text-lg font-black uppercase text-white transition hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_0_55px_rgba(37,99,235,.65)]"
            >
              ⚔️ Começar minha evolução
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
                Acesso vitalício
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 35 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[460px] lg:ml-16"
          >
            <div className="absolute inset-0 rounded-[2.5rem] bg-blue-600/30 blur-[90px]" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-blue-500/30 bg-black shadow-[0_0_100px_rgba(37,99,235,.25)]">
              <Image
                src="/hero.png"
                alt="Mente de Aço App"
                width={1200}
                height={900}
                priority
                className="h-[560px] w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-300">
                  Sistema completo
                </p>
                <h3 className="mt-3 text-3xl font-black uppercase leading-tight text-white">
                  Um app.
                  <span className="block text-blue-400">Uma IA.</span>
                  Uma evolução.
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CARROSSEL */}
      <section className="relative overflow-hidden border-y border-white/10 bg-black py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0f172a_0%,#000_70%)] opacity-70" />
        <div className="relative z-10 mb-12 px-6 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-blue-400">O ecossistema</p>
          <h2 className="text-4xl font-black uppercase md:text-6xl">
            Tudo que você vai dominar
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
              <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black via-black/75 to-transparent" />
              <div className="absolute bottom-0 z-10 p-6">
                <p className="mb-2 text-xs font-black uppercase tracking-[0.3em] text-blue-400">{card.title}</p>
                <p className="text-sm leading-relaxed text-zinc-300">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CHAMADA CENTRAL */}
      <section className="relative bg-zinc-950 px-6 py-28">
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-blue-400">A verdade</p>
          <h2 className="text-4xl font-black uppercase md:text-6xl">
            Você não está sem potencial. Você está sem um sistema.
          </h2>
          <p className="mx-auto mt-7 max-w-4xl text-lg leading-relaxed text-zinc-400">
            Toda semana você promete que vai mudar. Treinar, estudar, cuidar da aparência, organizar a vida, parar de procrastinar. Mas os mesmos hábitos voltam. O Mente de Aço existe para te dar o sistema que quebra esse ciclo — de vez.
          </p>
        </div>
      </section>

      {/* ANTES / DEPOIS */}
      <section className="bg-black px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-[2rem] border border-red-500/35 bg-red-950/20 p-8 shadow-[0_0_60px_rgba(239,68,68,.08)]"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-red-400">Sem o sistema</p>
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
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-blue-400">Com o ecossistema</p>
            <h2 className="text-4xl font-black uppercase">A versão que assume o controle</h2>
            <ul className="mt-8 space-y-4 text-zinc-200">
              <li>✓ Hábitos, agenda e metas organizados num único app.</li>
              <li>✓ IA Jarvis para guiar sua rotina e evolução pessoal.</li>
              <li>✓ Controla impulsos, distrações e hábitos fracos.</li>
              <li>✓ Evolui físico, pele, aparência e presença com consistência.</li>
              <li>✓ Planeja finanças e constrói independência real.</li>
              <li>✓ Usa modo foco para render mais e procrastinar menos.</li>
              <li>✓ Faz parte de uma comunidade de homens que executam.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
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

      {/* ECOSSISTEMA */}
      <section className="relative bg-black px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-blue-400">O que está incluso</p>
            <h2 className="text-4xl font-black uppercase md:text-6xl">
              O ecossistema Mente de Aço
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-400">
              Não é um curso. É um sistema completo que você usa todo dia para construir a melhor versão de si mesmo.
            </p>
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
                <div className="mb-5 flex items-center gap-3">
                  <p className="text-xl font-black text-blue-400">{item.step}</p>
                  <item.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-black uppercase">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-zinc-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="overflow-hidden bg-zinc-950 py-28">
        <div className="mb-14 px-6 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-blue-400">Depoimentos</p>
          <h2 className="text-4xl font-black uppercase md:text-6xl">
            Quem entrou no sistema
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
              <p className="leading-relaxed text-zinc-300">"{text}"</p>
              <p className="mt-6 font-black text-blue-400">{name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="bg-black px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[2.5rem] border border-blue-500/30 bg-[radial-gradient(circle_at_top_left,#1d4ed8_0%,#020617_38%,#000_100%)] p-6 shadow-[0_0_100px_rgba(37,99,235,.18)] md:grid-cols-2 md:p-10">
          <div className="p-4 md:p-8">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-blue-300">Acesso completo</p>
            <h2 className="text-4xl font-black uppercase md:text-6xl">
              Acesse o Sistema Completo Mente de Aço
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-300">
              Acesso imediato ao App Mente de Aço, IA Jarvis, sistema de hábitos, rotina personalizada, modo foco, planejamento financeiro, evolução física, aparência masculina, biblioteca de conteúdos e comunidade exclusiva.
            </p>
            <div className="my-10">
              <p className="text-2xl font-black text-red-500 line-through">De R$297</p>
              <p className="text-6xl font-black text-white md:text-7xl">R$59,90</p>
              <p className="mt-2 text-zinc-400">Pagamento único • Acesso vitalício • Atualizações inclusas</p>
</div>

<a
  href="//pay.kiwify.com.br/uYXorgg"
  className="block rounded-2xl bg-blue-600 px-10 py-5 text-center text-lg font-black transition hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_0_60px_rgba(37,99,235,.65)]"
>
  ⚔️ Começar minha evolução
</a>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-black/55 p-7">
            <h3 className="mb-7 text-3xl font-black uppercase">
              O que está incluso:
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

      {/* FAQ */}
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

          </div>

<a
  href="https://chat.whatsapp.com/JI1k85uWE9EL6r6cicqEsc"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 flex items-center justify-center gap-3 rounded-2xl border border-blue-500/30 bg-blue-600/10 px-8 py-5 text-center font-black text-blue-300 transition hover:bg-blue-600/20"
>
  <MessageCircle className="h-5 w-5" />
  Falar com o suporte
</a>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden bg-black px-6 py-32 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1d4ed8_0%,#020617_35%,#000_78%)] opacity-75" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <h2 className="text-4xl font-black uppercase leading-tight md:text-7xl">
            Sua evolução começa quando você para de esperar e começa a executar.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
            O Mente de Aço não é mais um curso. É o sistema que te acompanha todos os dias. A transformação começa agora.
          </p>
          <button
            onClick={scrollToOffer}
            className="mt-10 rounded-2xl bg-blue-600 px-12 py-5 text-lg font-black transition hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_0_55px_rgba(37,99,235,.65)]"
          >
            ⚔️ Entrar no ecossistema
          </button>
        </div>
      </section>

      {/* FOOTER */}
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