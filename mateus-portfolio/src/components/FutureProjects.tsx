
import React from 'react';
import {
  Radio,
  Cpu,
  CircuitBoard,
  Activity,
  Layers,
  Wind,
  PenTool,
  Thermometer
} from 'lucide-react';

export const FutureProjects: React.FC = () => {
  const roadmap = [
    {
      title: 'Sistema IoT de Telemetria e Monitoramento',
      description:
        'Desenvolvimento de um sistema IoT para aquisição e monitoramento remoto de dados de sensores, utilizando ESP32, comunicação MQTT e uma interface web para visualização em tempo real.',
      icon: <Radio className="w-6 h-6 text-cyan-400" />,
      tags: ['IoT', 'ESP32', 'MQTT', 'Dashboard']
    },
    {
      title: 'Comunicação CAN Bus e OBD-II',
      description:
        'Desenvolvimento de uma interface embarcada para leitura e transmissão de dados utilizando CAN Bus e OBD-II, com aquisição de parâmetros, processamento de mensagens e visualização em uma aplicação.',
      icon: <CircuitBoard className="w-6 h-6 text-cyan-400" />,
      tags: ['CAN Bus', 'OBD-II', 'C/C++', 'Hardware']
    },
    {
      title: 'Firmware com RTOS para Sistemas Embarcados',
      description:
        'Desenvolvimento de firmware utilizando FreeRTOS para gerenciar tarefas de leitura de sensores, comunicação e acionamento de dispositivos, explorando prioridades, interrupções e sincronização.',
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      tags: ['C/C++', 'FreeRTOS', 'ESP32', 'Firmware']
    },
    {
      title: 'Monitoramento Estrutural com IoT e Machine Learning',
      description:
        'Estudo de um sistema de monitoramento estrutural utilizando sensores piezoelétricos, aquisição de sinais e aprendizado de máquina para identificação de padrões relacionados a danos e trincas.',
      icon: <Activity className="w-6 h-6 text-cyan-400" />,
      tags: ['IoT', 'Machine Learning', 'SHM', 'Sensores']
    },
    {
      title: 'Análise Estrutural: EMB 110 Bandeirante',
      description:
        'Simulação por elementos finitos (FEA) da longarina principal do EMB 110 Bandeirante, avaliando distribuição de tensões, deformações e comportamento estrutural sob diferentes carregamentos.',
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      tags: ['ANSYS', 'FEA', 'Análise Estrutural']
    },
    {
      title: 'Modelagem 3D: Embraer E-Jets',
      description:
        'Desenvolvimento de modelos CAD de componentes e superfícies aerodinâmicas inspirados na família Embraer E-Jets, explorando modelagem paramétrica, geometria e integração de conjuntos.',
      icon: <PenTool className="w-6 h-6 text-cyan-400" />,
      tags: ['SolidWorks', 'CAD', 'Modelagem 3D']
    },
    {
      title: 'Simulação de Cargas Aerodinâmicas',
      description:
        'Estudo da distribuição de sustentação e do envelope de voo (Diagrama V-n) de uma aeronave leve, utilizando Python para cálculos, visualização de resultados e análise preliminar de cargas.',
      icon: <Wind className="w-6 h-6 text-cyan-400" />,
      tags: ['Python', 'Aerodinâmica', 'Cargas Estruturais']
    },
    {
      title: 'Análise Térmica e CFD de Motor Turbojato',
      description:
        'Estudo de transferência de calor e escoamento em componentes de um micro-turb ojato, utilizando simulações CFD para avaliar campos de temperatura, velocidade e pressão.',
      icon: <Thermometer className="w-6 h-6 text-cyan-400" />,
      tags: ['ANSYS Fluent', 'CFD', 'Transferência de Calor']
    }
  ];

  return (
    <section className="py-24 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6">

        {/* CABEÇALHO */}
        <div className="mb-16 space-y-2">
          <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
            [ Roadmap de Engenharia e Tecnologia ]
          </span>

          <h2 className="text-3xl font-extrabold text-white">
            PROJETOS EM DESENVOLVIMENTO
          </h2>

          <p className="text-slate-400 text-sm max-w-2xl">
            Projetos planejados e em desenvolvimento nas áreas de
            Internet das Coisas (IoT), sistemas embarcados,
            eletrônica, programação e engenharia aeroespacial.
            Explorando desde a integração de hardware e software
            até modelagem 3D, análise estrutural e simulações
            computacionais.
          </p>
        </div>

        {/* GRID DE PROJETOS */}
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

              <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
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
