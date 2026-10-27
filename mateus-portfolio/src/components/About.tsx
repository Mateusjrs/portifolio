
import React from 'react';
import {
  GraduationCap,
  MapPin,
  Target,
  Cpu,
  BookOpen,
  Trophy,
  Award
} from 'lucide-react';

export const About: React.FC = () => {


const courses = [
  {
    title: 'Sensoriamento Remoto',
    institution: 'Agência Espacial Brasileira (AEB)'
  },
  {
    title: 'Engenharia de Produtos Aeronáuticos',
    institution: 'Agência Espacial Brasileira (AEB)'
  },
  {
    title: 'PART-21D for Beginners',
    institution: 'Princípios da Regulação Part 21 / RBAC 21'
  },
  {
    title: 'Elementary Aviation English Vocabulary Course',
    institution: 'ANAC'
  },
  {
    title: 'Introdução ao SIPAER (CI-SIPAER)',
    institution: 'CENIPA',
    year: '2026'
  },
  {
    title: 'Aprendizagem Industrial em Processos Administrativos',
    institution: 'SENAI',
    year: '2019'
  },
  {
    title: 'Aprendizagem Industrial em Assistente de Qualidade Industrial',
    institution: 'SENAI',
    year: '2018'
  }
];

  const awards = [
    {
      position: '2º Lugar',
      category: 'Sumô 3 kg Rádio Controlado',
      event: 'III Summit Nacional de Robótica',
      year: '2023'
    },
    {
      position: '3º Lugar',
      category: 'Sumô 3 kg Autônomo',
      event: 'III Summit Nacional de Robótica',
      year: '2023'
    },
    {
      position: '3º Lugar',
      category: 'Sumô 3 kg Autônomo',
      event: 'RSM / RoboCore',
      year: '2022'
    },
    {
      position: '3º Lugar',
      category: 'Sumô 3 kg Rádio Controlado',
      event: 'IronCup',
      year: '2022'
    }
  ];

  return (
    <section
      id="about"
      className="py-24 bg-slate-950 border-b border-slate-800/80"
    >
      <div className="max-w-4xl mx-auto px-6 space-y-12">

        {/* SOBRE MIM */}
        <div className="space-y-6">

          <div className="space-y-2">
            <span className="text-xs font-mono text-cyan-400">
              [ PERFIL ]
            </span>

            <h2 className="text-3xl font-extrabold text-white">
              SOBRE MIM
            </h2>
          </div>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans text-justify">
            Sou estudante do 8º período de Engenharia Aeroespacial
            na UFMG e Técnico em Eletrotécnica pelo CEFET-MG.
            Minha formação reúne conhecimentos de engenharia
            aeroespacial, eletrônica, programação e desenvolvimento
            de sistemas, com experiência prática em projetos
            envolvendo CAD, simulações computacionais,
            instrumentação, hardware e sistemas embarcados.

            Gosto de trabalhar com diferentes áreas da engenharia,
            buscando compreender os problemas e desenvolver
            soluções práticas. Ao longo da minha trajetória,
            participei de projetos de robótica, automação e
            sistemas eletrônicos, além de desenvolver estudos
            relacionados à engenharia aeronáutica.

            Meu objetivo profissional é atuar no setor aeroespacial,
            especialmente na Embraer, aplicando meus conhecimentos
            e continuando a aprender com novos desafios.
          </p>

          {/* INFORMAÇÕES PRINCIPAIS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 font-mono text-xs">

            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex items-center space-x-3">
              <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0" />
              <span className="text-slate-200">
                Eng. Aeroespacial — UFMG
              </span>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex items-center space-x-3">
              <Cpu className="w-5 h-5 text-cyan-400 shrink-0" />
              <span className="text-slate-200">
                Téc. Eletrotécnica — CEFET-MG
              </span>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex items-center space-x-3">
              <Target className="w-5 h-5 text-cyan-400 shrink-0" />
              <span className="text-slate-200">
                Foco Profissional — Embraer
              </span>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
              <span className="text-slate-200">
                Belo Horizonte, Brasil
              </span>
            </div>

          </div>
        </div>

        {/* CURSOS E CERTIFICAÇÕES */}
        <div className="space-y-6">

          <div className="space-y-2">
            <span className="text-xs font-mono text-cyan-400">
              [ FORMAÇÃO COMPLEMENTAR ]
            </span>

            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-cyan-400" />
              CURSOS E CERTIFICAÇÕES
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/30 transition-all group"
              >
                <div className="flex items-start gap-3">

                  <div className="p-2 bg-cyan-950/30 border border-cyan-900/40 rounded-lg">
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                  </div>

                  <div className="space-y-2 flex-1">

                    <h4 className="text-sm font-semibold text-slate-100 leading-snug">
                      {course.title}
                    </h4>

                    <p className="text-xs text-slate-400">
                      {course.institution}
                    </p>

                    {course.year && (
                      <span className="inline-block text-[10px] font-mono text-cyan-400">
                        {course.year}
                      </span>
                    )}

                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* PRÊMIOS E RECONHECIMENTOS */}
        <div className="space-y-6">

          <div className="space-y-2">
            <span className="text-xs font-mono text-cyan-400">
              [ CONQUISTAS ]
            </span>

            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <Trophy className="w-6 h-6 text-cyan-400" />
              PRÊMIOS E RECONHECIMENTOS
            </h3>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed">
            Premiações conquistadas em competições de robótica,
            durante minha participação na equipe Trincabotz
            do CEFET-MG.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/30 transition-all group"
              >

                <div className="flex items-start gap-4">

                  <div className="p-3 bg-cyan-950/30 border border-cyan-900/40 rounded-lg group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5 text-cyan-400" />
                  </div>

                  <div className="space-y-2 flex-1">

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-bold text-cyan-400">
                        {award.position}
                      </span>

                      <span className="text-[10px] font-mono text-slate-500">
                        {award.year}
                      </span>
                    </div>

                    <h4 className="text-sm font-semibold text-slate-100 leading-snug">
                      {award.category}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {award.event}
                    </p>

                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};
