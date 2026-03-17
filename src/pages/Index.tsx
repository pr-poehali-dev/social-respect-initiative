import { useEffect, useState, useCallback } from "react";
import Icon from "@/components/ui/icon";

const BgElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="animate-float absolute top-[10%] left-[8%] w-64 h-64 rounded-full opacity-20"
      style={{ background: "radial-gradient(circle, #ff6b6b, #ff4757)" }} />
    <div className="animate-float-slow absolute top-[20%] right-[10%] w-96 h-96 rounded-full opacity-15"
      style={{ background: "radial-gradient(circle, #feca57, #ff9f43)", animationDelay: "2s" }} />
    <div className="animate-float absolute bottom-[15%] left-[15%] w-80 h-80 rounded-full opacity-10"
      style={{ background: "radial-gradient(circle, #48dbfb, #0abde3)", animationDelay: "1s" }} />
    <div className="animate-float-slow absolute bottom-[20%] right-[8%] w-56 h-56 rounded-full opacity-20"
      style={{ background: "radial-gradient(circle, #ff9ff3, #f368e0)", animationDelay: "3s" }} />
    <div className="animate-float absolute top-[35%] left-[5%] w-12 h-12 border-2 border-yellow-400 opacity-30 rotate-45"
      style={{ animationDelay: "0.5s" }} />
    <div className="animate-float-slow absolute top-[15%] right-[25%] w-8 h-8 border-2 border-pink-400 opacity-40 rotate-12"
      style={{ animationDelay: "1.5s" }} />
    <div className="absolute inset-0 opacity-5"
      style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }} />
  </div>
);

const CardShell = ({ children }: { children: React.ReactNode }) => (
  <div className="relative rounded-3xl overflow-hidden"
    style={{
      background: "rgba(255,255,255,0.05)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255,255,255,0.12)",
      boxShadow: "0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)"
    }}>
    <div className="absolute top-0 left-0 right-0 h-1"
      style={{
        background: "linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3, #ff6b6b)",
        backgroundSize: "200% 100%",
        animation: "shimmer 4s linear infinite"
      }} />
    {children}
  </div>
);

function Slide1() {
  return (
    <CardShell>
      <div className="px-12 py-14">
        <div className="text-center mb-10">
          <p className="text-white/70 text-base tracking-wider font-golos">МБОУ СОШ №18</p>
        </div>
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,200,100,0.5))" }} />
          <div className="w-2 h-2 rotate-45 bg-yellow-400 opacity-60" />
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(255,200,100,0.5), transparent)" }} />
        </div>
        <div className="text-center mb-10">
          <h1 className="font-oswald text-7xl md:text-8xl font-bold leading-none mb-4 uppercase tracking-tight"
            style={{
              background: "linear-gradient(135deg, #feca57 0%, #ff9f43 30%, #ff6b6b 60%, #ff9ff3 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              filter: "drop-shadow(0 0 40px rgba(254,202,87,0.3))"
            }}>Уважение</h1>
          <h2 className="font-oswald text-4xl md:text-5xl font-medium uppercase tracking-[0.2em] text-white/80">в обществе</h2>
        </div>
        <div className="text-center mb-14">
          <p className="text-white/40 text-lg font-golos tracking-widest uppercase">✦ &nbsp; Социальный проект &nbsp; ✦</p>
        </div>
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15))" }} />
          <div className="w-16 h-px bg-white/30" />
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.15), transparent)" }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-0.5 rounded-full" style={{ background: "linear-gradient(90deg, #feca57, #ff9f43)" }} />
              <span className="text-yellow-400/80 text-xs tracking-[0.2em] uppercase font-golos font-medium">Автор проекта</span>
            </div>
            <p className="text-white text-xl font-oswald font-semibold tracking-wide mb-1">Шевченко Павел Сергеевич</p>
            <p className="text-white/50 text-sm font-golos">9 «А» класс</p>
          </div>
          <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-0.5 rounded-full" style={{ background: "linear-gradient(90deg, #48dbfb, #0abde3)" }} />
              <span className="text-cyan-400/80 text-xs tracking-[0.2em] uppercase font-golos font-medium">Руководитель</span>
            </div>
            <p className="text-white text-xl font-oswald font-semibold tracking-wide mb-1">Лопатина Валентина Николаевна</p>
            <p className="text-white/50 text-sm font-golos">Учитель физики</p>
          </div>
        </div>
      </div>
      <div className="px-12 py-5 flex items-center justify-between"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.15)" }}>
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse-glow" />
          <span className="text-white/30 text-xs tracking-widest uppercase font-golos">2026</span>
        </div>
        <p className="text-white/20 text-xs tracking-widest uppercase font-golos">Спасибо за внимание</p>
      </div>
    </CardShell>
  );
}

function Slide2() {
  const goals = [
    "Изучить понятие уважения и его роль в обществе",
    "Выяснить, как уважение влияет на отношения между людьми",
    "Разработать рекомендации по формированию культуры уважения",
  ];
  const tasks = [
    "Проанализировать литературу по теме",
    "Провести опрос среди одноклассников",
    "Выявить причины неуважительного поведения",
    "Сформулировать выводы и предложения",
  ];
  return (
    <CardShell>
      <div className="px-12 py-14">
        <div className="text-center mb-10">
          <h2 className="font-oswald text-5xl font-bold uppercase tracking-wide mb-3"
            style={{ background: "linear-gradient(135deg, #feca57, #ff9f43)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Цели и задачи
          </h2>
          <p className="text-white/40 text-sm tracking-widest uppercase font-golos">проекта</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #feca57, #ff9f43)" }}>
                <Icon name="Target" size={20} className="text-black" />
              </div>
              <span className="font-oswald text-xl font-semibold text-white uppercase tracking-wide">Цель</span>
            </div>
            <div className="space-y-3">
              {goals.map((g, i) => (
                <div key={i} className="flex gap-3 items-start rounded-xl p-4"
                  style={{ background: "rgba(254,202,87,0.06)", border: "1px solid rgba(254,202,87,0.15)" }}>
                  <span className="text-yellow-400 font-oswald font-bold text-lg leading-none mt-0.5">{i + 1}</span>
                  <p className="text-white/80 text-sm font-golos leading-relaxed">{g}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #48dbfb, #0abde3)" }}>
                <Icon name="ListChecks" size={20} className="text-black" />
              </div>
              <span className="font-oswald text-xl font-semibold text-white uppercase tracking-wide">Задачи</span>
            </div>
            <div className="space-y-3">
              {tasks.map((t, i) => (
                <div key={i} className="flex gap-3 items-start rounded-xl p-4"
                  style={{ background: "rgba(72,219,251,0.06)", border: "1px solid rgba(72,219,251,0.15)" }}>
                  <span className="text-cyan-400 font-oswald font-bold text-lg leading-none mt-0.5">{i + 1}</span>
                  <p className="text-white/80 text-sm font-golos leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CardShell>
  );
}

function Slide3() {
  const points = [
    { icon: "Users", color: "#ff6b6b", title: "Кризис общения", text: "Современное общество сталкивается с ростом агрессии, грубости и нетерпимости в повседневном общении." },
    { icon: "Smartphone", color: "#feca57", title: "Цифровая эпоха", text: "Социальные сети создают новые формы неуважения — буллинг, хейт, игнорирование чужого мнения." },
    { icon: "Heart", color: "#ff9ff3", title: "Ценности молодёжи", text: "Формирование культуры уважения у подрастающего поколения — ключевая задача современного образования." },
    { icon: "Globe", color: "#48dbfb", title: "Социальная значимость", text: "Уважение — основа мирного сосуществования, залог здоровых отношений в семье, школе и обществе." },
  ];
  return (
    <CardShell>
      <div className="px-12 py-14">
        <div className="text-center mb-10">
          <h2 className="font-oswald text-5xl font-bold uppercase tracking-wide mb-3"
            style={{ background: "linear-gradient(135deg, #ff6b6b, #ff9ff3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Актуальность
          </h2>
          <p className="text-white/40 text-sm tracking-widest uppercase font-golos">темы проекта</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {points.map((p, i) => (
            <div key={i} className="rounded-2xl p-6 flex gap-4"
              style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${p.color}40` }}>
              <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center"
                style={{ background: `${p.color}20`, border: `1px solid ${p.color}40` }}>
                <Icon name={p.icon} size={22} style={{ color: p.color }} />
              </div>
              <div>
                <p className="font-oswald font-semibold text-lg text-white mb-1 tracking-wide">{p.title}</p>
                <p className="text-white/60 text-sm font-golos leading-relaxed">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CardShell>
  );
}

function Slide4() {
  const kinds = [
    { label: "Самоуважение", color: "#feca57", desc: "Уважение к себе, своим ценностям и достоинству" },
    { label: "К личности", color: "#ff9f43", desc: "Признание права каждого на своё мнение и выбор" },
    { label: "Социальное", color: "#48dbfb", desc: "Уважение к нормам, законам и традициям общества" },
    { label: "К старшим", color: "#ff9ff3", desc: "Почтение к опыту и мудрости старшего поколения" },
  ];
  return (
    <CardShell>
      <div className="px-12 py-14">
        <div className="text-center mb-10">
          <h2 className="font-oswald text-5xl font-bold uppercase tracking-wide mb-3"
            style={{ background: "linear-gradient(135deg, #48dbfb, #ff9ff3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Основная часть
          </h2>
          <p className="text-white/40 text-sm tracking-widest uppercase font-golos">что такое уважение · виды · примеры</p>
        </div>
        <div className="rounded-2xl p-6 mb-6"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <p className="text-white/50 text-xs tracking-widest uppercase font-golos mb-2">Определение</p>
          <p className="text-white text-lg font-golos leading-relaxed">
            <span className="text-yellow-400 font-semibold">Уважение</span> — это признание ценности и достоинства другого человека, готовность считаться с его интересами, правами и мнением, относиться к нему как к равному.
          </p>
        </div>
        <div className="mb-6">
          <p className="text-white/50 text-xs tracking-widest uppercase font-golos mb-4">Виды уважения</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {kinds.map((k, i) => (
              <div key={i} className="rounded-xl p-4 text-center"
                style={{ background: `${k.color}10`, border: `1px solid ${k.color}30` }}>
                <p className="font-oswald font-semibold text-sm mb-2 tracking-wide" style={{ color: k.color }}>{k.label}</p>
                <p className="text-white/50 text-xs font-golos leading-relaxed">{k.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl p-6"
          style={{ background: "rgba(72,219,251,0.05)", border: "1px solid rgba(72,219,251,0.2)" }}>
          <p className="text-white/50 text-xs tracking-widest uppercase font-golos mb-3">Примеры уважительного поведения</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {["Внимательно слушать собеседника", "Не перебивать и не грубить", "Принимать чужое мнение"].map((ex, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-cyan-400 text-lg">✓</span>
                <p className="text-white/70 text-sm font-golos">{ex}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardShell>
  );
}

function Slide5() {
  const conclusions = [
    { num: "01", text: "Уважение является фундаментом здоровых межличностных отношений в любом обществе" },
    { num: "02", text: "Культура уважения формируется с детства и требует постоянного воспитания" },
    { num: "03", text: "Неуважение ведёт к конфликтам, социальной напряжённости и разрушению связей" },
    { num: "04", text: "Каждый человек способен изменить свою модель поведения, начав с уважения к себе" },
  ];
  return (
    <CardShell>
      <div className="px-12 py-14">
        <div className="text-center mb-10">
          <h2 className="font-oswald text-5xl font-bold uppercase tracking-wide mb-3"
            style={{ background: "linear-gradient(135deg, #a29bfe, #6c5ce7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Выводы
          </h2>
          <p className="text-white/40 text-sm tracking-widest uppercase font-golos">заключение по проекту</p>
        </div>
        <div className="space-y-4 mb-8">
          {conclusions.map((c, i) => (
            <div key={i} className="flex gap-5 items-start rounded-2xl p-5"
              style={{ background: "rgba(162,155,254,0.06)", border: "1px solid rgba(162,155,254,0.15)" }}>
              <span className="font-oswald text-3xl font-bold text-white/10 leading-none flex-shrink-0">{c.num}</span>
              <p className="text-white/80 font-golos text-base leading-relaxed mt-1">{c.text}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl p-6 text-center"
          style={{ background: "linear-gradient(135deg, rgba(162,155,254,0.1), rgba(108,92,231,0.1))", border: "1px solid rgba(162,155,254,0.2)" }}>
          <p className="text-white/70 font-golos text-base leading-relaxed italic">
            «Уважение к людям — это уважение к самому себе»
          </p>
        </div>
      </div>
    </CardShell>
  );
}

function Slide6() {
  return (
    <CardShell>
      <div className="px-12 py-20 text-center">
        <p className="text-white/30 text-xs tracking-[0.4em] uppercase font-golos mb-6">МБОУ СОШ №18 · 2026</p>
        <h1 className="font-oswald text-7xl md:text-8xl font-bold uppercase leading-none mb-6"
          style={{
            background: "linear-gradient(135deg, #feca57 0%, #ff9f43 30%, #ff6b6b 60%, #ff9ff3 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            filter: "drop-shadow(0 0 50px rgba(254,202,87,0.4))"
          }}>
          Спасибо<br />за внимание!
        </h1>
        <div className="flex items-center gap-4 my-10 max-w-sm mx-auto">
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,200,100,0.4))" }} />
          <div className="w-2 h-2 rotate-45 bg-yellow-400 opacity-50" />
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(255,200,100,0.4), transparent)" }} />
        </div>
        <p className="text-white/50 font-golos text-lg mb-2">Шевченко Павел Сергеевич</p>
        <p className="text-white/30 font-golos text-sm">9 «А» класс</p>
        <div className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <p className="text-white/40 font-golos text-sm tracking-wide">Проект: «Уважение в обществе»</p>
        </div>
      </div>
    </CardShell>
  );
}

const SLIDES = [
  { label: "Титульный", component: Slide1 },
  { label: "Цели и задачи", component: Slide2 },
  { label: "Актуальность", component: Slide3 },
  { label: "Основная часть", component: Slide4 },
  { label: "Выводы", component: Slide5 },
  { label: "Спасибо", component: Slide6 },
];

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = useCallback((idx: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent(idx);
      setVisible(true);
    }, 250);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => {
      if (c === 0) return c;
      setVisible(false);
      setTimeout(() => { setCurrent(c - 1); setVisible(true); }, 250);
      return c;
    });
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => {
      if (c === SLIDES.length - 1) return c;
      setVisible(false);
      setTimeout(() => { setCurrent(c + 1); setVisible(true); }, 250);
      return c;
    });
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const SlideComp = SLIDES[current].component;

  return (
    <div className="min-h-screen w-full overflow-hidden relative font-golos"
      style={{ background: "linear-gradient(135deg, #0f0c29 0%, #302b63 40%, #24243e 70%, #1a1a4e 100%)" }}>
      <BgElements />

      <div className="relative z-20 flex justify-center pt-6 pb-2">
        <div className="flex items-center gap-1 px-3 py-2 rounded-full flex-wrap justify-center"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
          {SLIDES.map((s, i) => (
            <button key={i} onClick={() => goTo(i)}
              className="transition-all duration-300 rounded-full font-golos text-xs px-3 py-1"
              style={{
                background: i === current ? "rgba(254,202,87,0.2)" : "transparent",
                color: i === current ? "#feca57" : "rgba(255,255,255,0.35)",
                border: i === current ? "1px solid rgba(254,202,87,0.4)" : "1px solid transparent",
              }}>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 py-6">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 backdrop-blur-sm"
            style={{ background: "rgba(255,255,255,0.07)" }}>
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
            <span className="text-white/70 text-sm tracking-widest uppercase font-golos">
              Слайд {current + 1} из {SLIDES.length} · Проектная работа 2026
            </span>
          </div>
        </div>

        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.25s ease, transform 0.25s ease" }}>
          <SlideComp />
        </div>

        <div className="flex items-center justify-between mt-6">
          <button onClick={prev} disabled={current === 0}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-200 disabled:opacity-20"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}>
            <Icon name="ChevronLeft" size={18} />
            <span className="text-sm font-golos">Назад</span>
          </button>
          <span className="text-white/20 text-xs font-golos tracking-widest hidden md:block">← → для навигации</span>
          <button onClick={next} disabled={current === SLIDES.length - 1}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-200 disabled:opacity-20"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}>
            <span className="text-sm font-golos">Вперёд</span>
            <Icon name="ChevronRight" size={18} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}
