import React from 'react';
import { Rocket, Wind, Thermometer, Layers, PenTool } from 'lucide-react';

export const FutureProjects: React.FC = () => {
  const roadmap = [
    {
      title: 'Análise Estrutural: EMB 110 Bandeirante',
      description: 'Simulação de elementos finitos (FEA) aplicada à longarina principal do Embraer Bandeirante, avaliando concentração de tensões e fadiga sob carregamentos críticos.',
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      tags: ['Ansys Mechanical', 'FEA', 'Fadiga Estrutural']
    },
    {
      title: 'Modelagem Avançada: Embraer E-Jets',
      description: 'Desenvolvimento CAD de superfícies complexas do envelope aerodinâmico (fuselagem e junção asa-fuselagem) inspirado na família E2, focando em continuidade de superfície.',
      icon: <PenTool className="w-6 h-6 text-cyan-400" />,
      tags: ['SolidWorks', 'Modelagem de Superfícies', 'CAD']
    },
    {
      title: 'Análise de Cargas Aerodinâmicas',
      description: 'Estudo do envelope de voo (Diagrama V-n) e distribuição de sustentação para dimensionamento preliminar de uma aeronave leve de asa alta.',
      icon: <Wind className="w-6 h-6 text-cyan-400" />,
      tags: ['Aerodinâmica', 'Python', 'Cálculo Estrutural']
    },
    {
      title: 'Dimensionamento: Pá de Helicóptero',
      description: 'Cálculo de esforços centrífugos, momento fletor e torção em asas rotativas, considerando a distribuição de pressões e o uso de materiais compósitos.',
      icon: <Rocket className="w-6 h-6 text-cyan-400" />,
      tags: ['Asas Rotativas', 'Dinâmica de Fluidos', 'Materiais Compósitos']
    },
    {
      title: 'Análise Térmica: Motor Turbojato',
      description: 'Simulação de transferência de calor e fluidodinâmica computacional (CFD) na câmara de combustão e estágios da turbina de um micro-turbojato.',
      icon: <Thermometer className="w-6 h-6 text-cyan-400" />,
      tags: ['Ansys Fluent', 'CFD', 'Termodinâmica']
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
          <h2 className="text-3xl font-extrabold text-white">PROJETOS EM DESENVOLVIMENTO</h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Estudos de caso, modelagens paramétricas e simulações computacionais em andamento, visando o aprofundamento técnico nos ecossistemas de projeto aeronáutico corporativo e industrial.
          </p>
        </div>

        {/* GRID DE PROJETOS FUTUROS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmap.map((item, index) => (
            <div 
              key={index} 
              className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 hover:bg-slate-900/60 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-cyan-950/30 border border-cyan-900/50 rounded-lg group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-100 leading-tight">
                  {item.title}
                </h3>
              </div>
              
              <p className="text-slate-400 text-sm mb-6 leading-relaxed min-h-[80px]">
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