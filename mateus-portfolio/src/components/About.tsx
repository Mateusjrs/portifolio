import React from 'react';
import { GraduationCap, MapPin, Target, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono text-cyan-400">[ PERFIL ]</span>
          <h2 className="text-3xl font-extrabold text-white">SOBRE MIM</h2>
        </div>

      <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans text-justify">
          Sou estudante do 8º período de Engenharia Aeroespacial na UFMG e Técnico em Eletrotécnica pelo CEFET-MG. Minha formação reúne conhecimentos de engenharia aeroespacial, eletrônica, programação e desenvolvimento de sistemas, com experiência prática em projetos que envolvem desde CAD e simulações computacionais (FEA/CFD) até instrumentação, hardware e sistemas embarcados. Gosto de trabalhar na interface entre diferentes áreas da engenharia, transformando problemas em soluções práticas e funcionais. Ao longo da minha trajetória, desenvolvi projetos de automação, sistemas embarcados, robótica e análise de sistemas aeroespaciais, buscando sempre entender o problema como um todo. Meu objetivo profissional é atuar no setor aeroespacial, especialmente na Embraer, contribuindo com uma visão multidisciplinar e prática para o desenvolvimento de novas tecnologias e soluções para a aviação.
      </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 font-mono text-xs">
          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex items-center space-x-3">
            <GraduationCap className="w-5 h-5 text-cyan-400" />
            <span className="text-slate-200">Eng. Aeroespacial — UFMG</span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex items-center space-x-3">
            <Cpu className="w-5 h-5 text-cyan-400" />
            <span className="text-slate-200">Téc. Eletrotécnica — CEFET-MG</span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex items-center space-x-3">
            <Target className="w-5 h-5 text-cyan-400" />
            <span className="text-slate-200">Foco Profissional — Embraer</span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-cyan-400" />
            <span className="text-slate-200">Belo Horizonte, Brasil</span>
          </div>
        </div>
      </div>
    </section>
  );
};