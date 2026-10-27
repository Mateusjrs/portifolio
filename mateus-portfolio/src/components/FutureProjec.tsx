
import React from 'react';
import {
  Layers,
  Wind,
  Activity,
  PenTool,
  Gauge
} from 'lucide-react';

export const FutureProjects: React.FC = () => {
  const roadmap = [
    {
      title: 'Análise Estrutural de uma Nervura de Asa',
      description:
        'Modelagem de uma nervura de asa no SolidWorks e análise estática no ANSYS Mechanical. O objetivo é comparar as tensões e os deslocamentos para diferentes espessuras, utilizando condições de carregamento simplificadas.',
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      tags: [
        'SolidWorks',
        'ANSYS Mechanical',
        'Análise Estrutural'
      ]
    },
    {
      title: 'Modelagem de um Mecanismo de Flap',
      description:
        'Desenvolvimento de um modelo 3D simplificado de flap no SolidWorks, incluindo suportes, articulações e montagem. O estudo terá como foco o movimento do mecanismo e a verificação de interferências entre os componentes.',
      icon: <PenTool className="w-6 h-6 text-cyan-400" />,
      tags: [
        'SolidWorks',
        'Montagem CAD',
        'Mecanismos'
      ]
    },
    {
      title: 'Estudo do Envelope de Voo de uma Aeronave Leve',
      description:
        'Desenvolvimento de um diagrama V-n simplificado utilizando Python. O estudo pretende relacionar velocidade, fator de carga e velocidade de estol, considerando parâmetros de referência de uma aeronave leve.',
      icon: <Wind className="w-6 h-6 text-cyan-400" />,
      tags: [
        'Python',
        'Mecânica do Voo',
        'Diagrama V-n'
      ]
    },
    {
      title: 'Sistema de Monitoramento de Vibrações',
      description:
        'Desenvolvimento de um sistema com ESP32 e sensor acelerômetro para registrar vibrações de um motor elétrico. Os dados serão analisados em Python para identificar as principais frequências de vibração durante o funcionamento.',
      icon: <Activity className="w-6 h-6 text-cyan-400" />,
      tags: [
        'ESP32',
        'Python',
        'Aquisição de Dados'
      ]
    },
    {
      title: 'Análise CFD de Escoamento sobre Cilindro',
      description:
        'Simulação bidimensional no ANSYS Fluent para estudar o escoamento de ar ao redor de um cilindro. O objetivo é visualizar a distribuição de velocidade e pressão e analisar o coeficiente de arrasto em condições definidas.',
      icon: <Gauge className="w-6 h-6 text-cyan-400" />,
      tags: [
        'ANSYS Fluent',
        'CFD',
        'Mecânica dos Fluidos'
      ]
    }
  ];

  return (
    <section className="py-24 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6">

        {/* CABEÇALHO */}
        <div className="mb-16 space-y-2">
          <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
            [ Roadmap de Engenharia ]
          </span>

          <h2 className="text-3xl font-extrabold text-white">
            PRÓXIMOS PROJETOS
          </h2>

          <p className="text-slate-400 text-sm max-w-2xl">
            Estudos e projetos que pretendo desenvolver para aprofundar
            meus conhecimentos em engenharia aeronáutica, simulações
            computacionais, modelagem 3D e sistemas embarcados.
          </p>
        </div>

        {/* GRID DE PROJETOS FUTUROS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmap.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 hover:bg-slate-900/60 transition-all group flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-cyan-950/30 border border-cyan-900/50 rounded-lg group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold text-slate-100 leading-tight">
                  {item.title}
                </h3>
              </div>

              <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-[10px] font-mono bg-slate-950 text-slate-300 px-2 py-1 rounded border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
