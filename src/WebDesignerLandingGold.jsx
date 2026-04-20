import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Crown,
  Github,
  Instagram,
  Linkedin,
  Menu,
  MousePointer2,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Twitter,
  Wand2,
  X,
} from "lucide-react";

const AnimatedCounter = ({ value, suffix = "", visible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let current = 0;
    const duration = 2000;
    const intervalMs = 16;
    const steps = Math.max(1, Math.floor(duration / intervalMs));
    const increment = value / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, intervalMs);
    return () => clearInterval(timer);
  }, [value, visible]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Reveal = ({ id, setRef, className = "", children }) => (
  <section id={id} ref={setRef} className={`reveal ${className}`}>
    {children}
  </section>
);

export default function WebDesignerLandingGold() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [yearly, setYearly] = useState(true);
  const [faqOpen, setFaqOpen] = useState(1);
  const [visibleMap, setVisibleMap] = useState({});
  const refs = useRef([]);

  const nav = useMemo(
    () => [
      { label: "Сервисы", href: "#features" },
      { label: "Процесс", href: "#how" },
      { label: "Отзывы", href: "#testimonials" },
      { label: "Тарифы", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    []
  );

  const features = [
    {
      icon: Wand2,
      title: "Luxury Aesthetic",
      text: "Высококлассный визуал с ощущением дорогого digital-бренда.",
    },
    {
      icon: MousePointer2,
      title: "Conversion UX",
      text: "Каждый экран спроектирован под действие: клик, заявка, покупка.",
    },
    {
      icon: ShieldCheck,
      title: "Brand Consistency",
      text: "Системный подход к типографике, цвету и компонентам на масштабе.",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      text: "Быстрый продакшн без потери wow-эффекта и качества handoff.",
    },
  ];

  const steps = [
    {
      icon: Crown,
      title: "Аудит и позиционирование",
      text: "Определяем, как бренд должен ощущаться и почему ему будут доверять.",
    },
    {
      icon: Sparkles,
      title: "Концепт и прототип",
      text: "Создаю премиальный дизайн-концепт и интерактивную UX-логику.",
    },
    {
      icon: ArrowRight,
      title: "Запуск и оптимизация",
      text: "Передаю систему и сопровождаю улучшения по метрикам после релиза.",
    },
  ];

  const testimonials = [
    {
      initials: "NK",
      name: "Никита К.",
      role: "CEO, VentureScale",
      quote: "Сайт ощущается как бренд уровня Series A+. Конверсия выросла на 38%.",
      color: "from-amber-500 to-yellow-300",
    },
    {
      initials: "ER",
      name: "Екатерина Р.",
      role: "Founder, Maison Digital",
      quote: "Редизайн поднял perception цены продукта. Продажи выросли уже в первый месяц.",
      color: "from-orange-500 to-amber-300",
    },
    {
      initials: "AS",
      name: "Артем С.",
      role: "CMO, FinSuite",
      quote: "Редко вижу настолько сильный баланс между красотой и бизнес-эффективностью.",
      color: "from-yellow-500 to-amber-200",
    },
  ];

  const plans = [
    {
      title: "Starter",
      month: 790,
      year: 640,
      desc: "Точный апгрейд визуала для старта роста.",
      items: ["Лендинг 1 экранов", "UI polishing", "2 раунда правок", "Figma handoff"],
      popular: false,
    },
    {
      title: "Signature",
      month: 1590,
      year: 1290,
      desc: "Оптимальный формат для быстрого масштабирования.",
      items: ["До 6 экранов", "Дизайн-система", "UX-flow прототип", "Приоритетный канал", "5 раундов правок"],
      popular: true,
    },
    {
      title: "Private",
      month: 3290,
      year: 2690,
      desc: "Индивидуальный дизайн-партнеринг под сложный продукт.",
      items: ["Полный продукт", "Исследования", "Компонентная библиотека", "Сопровождение команды", "Долгосрочный roadmap"],
      popular: false,
    },
  ];

  const faqs = [
    {
      q: "Как быстро можно получить первый концепт?",
      a: "Первый визуальный концепт обычно готов за 3-4 рабочих дня после брифа.",
    },
    {
      q: "Можно ли работать по NDA?",
      a: "Да, подписываю NDA перед стартом и соблюдаю все требования конфиденциальности.",
    },
    {
      q: "Что получит команда разработки?",
      a: "Готовые макеты, состояния, дизайн-токены и четкий handoff для ускорения верстки.",
    },
    {
      q: "Есть ли опция дизайн-аудита без полного редизайна?",
      a: "Да, можно заказать отдельный аудит с конкретным планом внедрения улучшений.",
    },
  ];

  const setRef = (el) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleMap((prev) => ({ ...prev, [entry.target.id]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    refs.current.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen bg-[#070709] text-[#f5f2e9]"
      style={{
        "--bg-primary": "#070709",
        "--accent-from": "#f59e0b",
        "--accent-to": "#fde68a",
        "--card-bg": "rgba(255,255,255,0.04)",
        "--border": "rgba(255,255,255,0.12)",
      }}
    >
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blobFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-26px) scale(1.06); }
        }
        @keyframes softPulse {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.65; }
        }
        .hero-item {
          opacity: 0;
          animation: fadeInUp 0.9s ease forwards;
        }
        .hero-item.delay-1 { animation-delay: 0.14s; }
        .hero-item.delay-2 { animation-delay: 0.3s; }
        .hero-item.delay-3 { animation-delay: 0.46s; }
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .reveal.in {
          opacity: 1;
          transform: translateY(0);
        }
        .btn-hover {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .btn-hover:hover {
          transform: scale(1.05);
          box-shadow: 0 0 36px rgba(245, 158, 11, 0.45);
        }
        .card-hover {
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: scale(1.03) translateY(-4px);
          border-color: rgba(245, 158, 11, 0.65);
          box-shadow: 0 0 30px rgba(245, 158, 11, 0.25);
        }
        .faq-wrap {
          overflow: hidden;
          transition: max-height 0.32s ease, opacity 0.32s ease;
        }
      `}</style>

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-[-140px] top-20 h-80 w-80 rounded-full bg-gradient-to-r from-amber-500/35 to-yellow-300/25 blur-3xl"
          style={{ animation: "blobFloat 10s ease-in-out infinite, softPulse 6s ease-in-out infinite" }}
        />
        <div
          className="absolute right-[-140px] top-64 h-96 w-96 rounded-full bg-gradient-to-r from-orange-500/25 to-amber-300/20 blur-3xl"
          style={{ animation: "blobFloat 12s ease-in-out infinite reverse, softPulse 7s ease-in-out infinite" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:28px_28px] opacity-30" />
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          isScrolled ? "border-white/10 bg-[#0b0b0f]/70 backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-2">
            <div className="rounded-xl bg-gradient-to-r from-amber-500 to-yellow-300 p-2">
              <Crown className="h-5 w-5 text-[#121212]" />
            </div>
            <span className="text-sm font-semibold tracking-wide sm:text-base">Aurum Atelier</span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/75 hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#cta"
            className="btn-hover hidden min-h-[44px] items-center rounded-xl bg-gradient-to-r from-amber-500 to-yellow-300 px-5 py-2 text-sm font-semibold text-[#151515] lg:inline-flex"
          >
            Запросить концепт
          </a>

          <button
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-white/15 bg-white/5 lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div
          className={`overflow-hidden border-t border-white/10 bg-[#0d0d12]/95 transition-all duration-300 lg:hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-white/80 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 pb-16 pt-20 sm:px-6 lg:px-8">
          <p className="hero-item mb-6 inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/70">
            Web Designer Premium Tier
          </p>
          <h1 className="hero-item delay-1 max-w-5xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Дизайн, который выглядит
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-300 bg-clip-text text-transparent">
              {" "}
              дорого
            </span>{" "}
            и продает с первого экрана.
          </h1>
          <p className="hero-item delay-2 mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
            Создаю визуальные системы для брендов, которые хотят не просто "красиво", а премиальное восприятие,
            высокую конверсию и сильный рынок.
          </p>
          <div className="hero-item delay-3 mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="btn-hover inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-300 px-6 py-3 text-sm font-semibold text-[#171717] sm:text-base"
            >
              Смотреть тарифы
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#testimonials"
              className="btn-hover inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 sm:text-base"
            >
              Кейсы и отзывы
            </a>
          </div>
        </section>

        <Reveal
          id="features"
          setRef={setRef}
          className={`mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 ${visibleMap.features ? "in" : ""}`}
        >
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">Преимущества премиум-подхода</h2>
            <p className="mt-4 text-white/70">Каждая деталь работает на восприятие ценности и рост вашего бренда.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <article
                  key={f.title}
                  className="card-hover rounded-2xl border p-6 backdrop-blur-xl"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--card-bg)",
                    transitionDelay: `${i * 120}ms`,
                  }}
                >
                  <div className="mb-4 inline-flex rounded-xl bg-gradient-to-r from-amber-500/20 to-yellow-300/20 p-3">
                    <Icon className="h-5 w-5 text-amber-300" />
                  </div>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{f.text}</p>
                </article>
              );
            })}
          </div>
        </Reveal>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-500/70 to-transparent" />
        </div>

        <Reveal
          id="stats"
          setRef={setRef}
          className={`mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 ${visibleMap.stats ? "in" : ""}`}
        >
          <div className="grid grid-cols-1 gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-4xl font-bold text-amber-300 sm:text-5xl">
                <AnimatedCounter value={160} suffix="+" visible={visibleMap.stats} />
              </p>
              <p className="mt-2 text-white/70">проектов класса premium</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-yellow-200 sm:text-5xl">
                <AnimatedCounter value={98} suffix="%" visible={visibleMap.stats} />
              </p>
              <p className="mt-2 text-white/70">клиентов продлевают работу</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-300 sm:text-5xl">
                <AnimatedCounter value={3} suffix="M" visible={visibleMap.stats} />
              </p>
              <p className="mt-2 text-white/70">просмотров на запусках</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-amber-200 sm:text-5xl">
                <AnimatedCounter value={57} suffix="K" visible={visibleMap.stats} />
              </p>
              <p className="mt-2 text-white/70">qualified лидов</p>
            </div>
          </div>
        </Reveal>

        <Reveal
          id="how"
          setRef={setRef}
          className={`mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 ${visibleMap.how ? "in" : ""}`}
        >
          <h2 className="text-3xl font-semibold sm:text-4xl">Как это работает</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-yellow-300 text-sm font-bold text-[#161616]">
                      {i + 1}
                    </div>
                    <Icon className="h-5 w-5 text-amber-300" />
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{step.text}</p>
                  {i < steps.length - 1 && (
                    <span className="pointer-events-none absolute -right-4 top-1/2 hidden h-px w-8 bg-gradient-to-r from-amber-300 to-yellow-200 lg:block" />
                  )}
                </article>
              );
            })}
          </div>
        </Reveal>

        <Reveal
          id="testimonials"
          setRef={setRef}
          className={`mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 ${visibleMap.testimonials ? "in" : ""}`}
        >
          <h2 className="text-3xl font-semibold sm:text-4xl">Отзывы</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <article key={t.name} className="card-hover rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r ${t.color} text-sm font-bold text-[#151515]`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-white/65">{t.role}</p>
                  </div>
                </div>
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-300 text-amber-300" />
                  ))}
                </div>
                <p className="text-sm text-white/75">"{t.quote}"</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal
          id="pricing"
          setRef={setRef}
          className={`mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 ${visibleMap.pricing ? "in" : ""}`}
        >
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">Цены</h2>
              <p className="mt-3 text-white/70">Гибкая модель оплаты с годовой скидкой.</p>
            </div>
            <button
              onClick={() => setYearly((v) => !v)}
              className="inline-flex min-h-[44px] items-center gap-3 rounded-full border border-white/15 bg-white/5 p-1 text-sm"
            >
              <span className={`rounded-full px-4 py-2 ${!yearly ? "bg-white/15 text-white" : "text-white/70"}`}>Месяц</span>
              <span className={`rounded-full px-4 py-2 ${yearly ? "bg-white/15 text-white" : "text-white/70"}`}>
                Год <span className="text-amber-300">-20%</span>
              </span>
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {plans.map((plan) => {
              const price = yearly ? plan.year : plan.month;
              return (
                <article
                  key={plan.title}
                  className={`card-hover relative rounded-2xl border p-7 backdrop-blur-xl ${
                    plan.popular
                      ? "scale-[1.02] border-amber-400/70 bg-gradient-to-b from-amber-500/15 to-yellow-300/10"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-300 px-3 py-1 text-xs font-semibold text-[#141414]">
                      Популярный
                    </span>
                  )}
                  <h3 className="text-xl font-semibold">{plan.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{plan.desc}</p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold">${price}</span>
                    <span className="text-white/65">/мес</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {plan.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm text-white/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`btn-hover mt-8 inline-flex min-h-[44px] w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold ${
                      plan.popular
                        ? "bg-gradient-to-r from-amber-500 to-yellow-300 text-[#141414]"
                        : "border border-white/15 bg-white/5"
                    }`}
                  >
                    Выбрать {plan.title}
                  </button>
                </article>
              );
            })}
          </div>
        </Reveal>

        <Reveal
          id="faq"
          setRef={setRef}
          className={`mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 ${visibleMap.faq ? "in" : ""}`}
        >
          <h2 className="text-3xl font-semibold sm:text-4xl">FAQ</h2>
          <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {faqs.map((f, i) => {
              const open = faqOpen === i;
              return (
                <div key={f.q} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <button
                    onClick={() => setFaqOpen(open ? -1 : i)}
                    className="flex min-h-[44px] w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="font-medium">{f.q}</span>
                    <ChevronDown className={`h-5 w-5 text-white/70 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                  </button>
                  <div className="faq-wrap" style={{ maxHeight: open ? "160px" : "0px", opacity: open ? 1 : 0 }}>
                    <p className="pt-3 text-sm text-white/70">{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <section id="cta" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 via-yellow-300 to-orange-300 p-8 sm:p-10 text-[#151515]">
            <div className="pointer-events-none absolute -left-12 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full border border-black/20" />
            <div className="pointer-events-none absolute -right-10 top-8 h-28 w-28 rounded-full border border-black/20" />
            <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-semibold sm:text-4xl">Получите luxury-концепт уже завтра</h2>
                <p className="mt-3 max-w-2xl text-black/75">Оставьте email и я пришлю персональный вектор дизайна под ваш продукт.</p>
              </div>
              <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="min-h-[44px] w-full rounded-xl border border-black/25 bg-white/75 px-4 py-3 text-sm text-black placeholder:text-black/60 outline-none focus:border-black/40"
                />
                <button
                  type="submit"
                  className="btn-hover inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#131313] px-5 py-3 text-sm font-semibold text-white"
                >
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/30">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2">
              <div className="rounded-xl bg-gradient-to-r from-amber-500 to-yellow-300 p-2">
                <Crown className="h-5 w-5 text-[#141414]" />
              </div>
              <span className="text-base font-semibold">Aurum Atelier</span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-white/70">
              Премиальный web design для амбициозных digital-брендов и продуктовых команд.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[Github, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#top"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Продукт</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#features" className="hover:text-white">Сервисы</a></li>
              <li><a href="#pricing" className="hover:text-white">Тарифы</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Компания</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#how" className="hover:text-white">Процесс</a></li>
              <li><a href="#testimonials" className="hover:text-white">Отзывы</a></li>
              <li><a href="#cta" className="hover:text-white">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Ресурсы</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#top" className="hover:text-white">Кейсы</a></li>
              <li><a href="#top" className="hover:text-white">Блог</a></li>
              <li><a href="#top" className="hover:text-white">Медиа-кит</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/55">
          © {new Date().getFullYear()} Aurum Atelier. All rights reserved.
        </div>
      </footer>
    </div>
  );
}