import { useEffect, useState } from "react";

export default function Index() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-hidden relative flex items-center justify-center font-golos"
      style={{
        background: "linear-gradient(135deg, #0f0c29 0%, #302b63 40%, #24243e 70%, #1a1a4e 100%)"
      }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-float absolute top-[10%] left-[8%] w-64 h-64 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #ff6b6b, #ff4757)" }} />
        <div className="animate-float-slow absolute top-[20%] right-[10%] w-96 h-96 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #feca57, #ff9f43)", animationDelay: "2s" }} />
        <div className="animate-float absolute bottom-[15%] left-[15%] w-80 h-80 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #48dbfb, #0abde3)", animationDelay: "1s" }} />
        <div className="animate-float-slow absolute bottom-[20%] right-[8%] w-56 h-56 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #ff9ff3, #f368e0)", animationDelay: "3s" }} />

        {/* Geometric shapes */}
        <div className="animate-float absolute top-[35%] left-[5%] w-12 h-12 border-2 border-yellow-400 opacity-30 rotate-45"
          style={{ animationDelay: "0.5s" }} />
        <div className="animate-float-slow absolute top-[15%] right-[25%] w-8 h-8 border-2 border-pink-400 opacity-40 rotate-12"
          style={{ animationDelay: "1.5s" }} />
        <div className="animate-float absolute bottom-[30%] right-[20%] w-16 h-16 border-2 border-cyan-400 opacity-25 rounded-full"
          style={{ animationDelay: "2.5s" }} />
        <div className="animate-float-slow absolute top-[60%] left-[20%] w-6 h-6 bg-yellow-300 opacity-30 rotate-45"
          style={{ animationDelay: "4s" }} />

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 py-12">

        {/* Top badge */}
        <div className={`flex justify-center mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}
          style={{ transitionDelay: "0.1s" }}>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 backdrop-blur-sm"
            style={{ background: "rgba(255,255,255,0.07)" }}>
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
            <span className="text-white/70 text-sm tracking-widest uppercase font-golos">Проектная работа · 2026</span>
          </div>
        </div>

        {/* Main card */}
        <div className="relative rounded-3xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)"
          }}>

          {/* Card top accent */}
          <div className="absolute top-0 left-0 right-0 h-1"
            style={{
              background: "linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3, #ff6b6b)",
              backgroundSize: "200% 100%",
              animation: "shimmer 4s linear infinite"
            }} />

          <div className="px-12 py-14">

            {/* Institution */}
            <div className={`text-center mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "0.2s" }}>
              <p className="text-white/50 text-sm tracking-[0.2em] uppercase font-golos mb-1">
                Государственное бюджетное общеобразовательное учреждение
              </p>
              <p className="text-white/70 text-base tracking-wider font-golos">
                Школа №___ &nbsp;·&nbsp; г. Москва
              </p>
            </div>

            {/* Divider */}
            <div className={`flex items-center gap-4 mb-10 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: "0.3s" }}>
              <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,200,100,0.5))" }} />
              <div className="w-2 h-2 rotate-45 bg-yellow-400 opacity-60" />
              <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(255,200,100,0.5), transparent)" }} />
            </div>

            {/* Main title */}
            <div className={`text-center mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: "0.4s" }}>
              <h1 className="font-oswald text-7xl md:text-8xl font-bold leading-none mb-4 uppercase tracking-tight"
                style={{
                  background: "linear-gradient(135deg, #feca57 0%, #ff9f43 30%, #ff6b6b 60%, #ff9ff3 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 40px rgba(254,202,87,0.3))"
                }}>
                Уважение
              </h1>
              <h2 className="font-oswald text-4xl md:text-5xl font-medium uppercase tracking-[0.2em] text-white/80">
                в обществе
              </h2>
            </div>

            {/* Subtitle */}
            <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "0.5s" }}>
              <p className="text-white/40 text-lg font-golos tracking-widest uppercase">
                ✦ &nbsp; Социальный проект &nbsp; ✦
              </p>
            </div>

            {/* Divider */}
            <div className={`flex items-center gap-4 mb-12 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: "0.6s" }}>
              <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15))" }} />
              <div className="w-16 h-px bg-white/30" />
              <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.15), transparent)" }} />
            </div>

            {/* Author & Supervisor */}
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "0.7s" }}>

              {/* Author */}
              <div className="rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)"
                }}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-0.5 rounded-full"
                    style={{ background: "linear-gradient(90deg, #feca57, #ff9f43)" }} />
                  <span className="text-yellow-400/80 text-xs tracking-[0.2em] uppercase font-golos font-medium">Автор проекта</span>
                </div>
                <p className="text-white text-xl font-oswald font-semibold tracking-wide mb-1">
                  Иванов Иван Иванович
                </p>
                <p className="text-white/50 text-sm font-golos">
                  10 «А» класс
                </p>
              </div>

              {/* Supervisor */}
              <div className="rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)"
                }}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-0.5 rounded-full"
                    style={{ background: "linear-gradient(90deg, #48dbfb, #0abde3)" }} />
                  <span className="text-cyan-400/80 text-xs tracking-[0.2em] uppercase font-golos font-medium">Руководитель</span>
                </div>
                <p className="text-white text-xl font-oswald font-semibold tracking-wide mb-1">
                  Петрова Мария Сергеевна
                </p>
                <p className="text-white/50 text-sm font-golos">
                  Учитель обществознания
                </p>
              </div>
            </div>

          </div>

          {/* Bottom footer */}
          <div className="px-12 py-5 flex items-center justify-between"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.15)" }}>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse-glow" />
              <span className="text-white/30 text-xs tracking-widest uppercase font-golos">Москва · 2026</span>
            </div>
            <p className="text-white/20 text-xs tracking-widest uppercase font-golos">
              Спасибо за внимание
            </p>
          </div>
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
