
import React from 'react';
import {
  CircuitBoard,
  Cpu,
  Radio,
  Code2,
  Network,
  Terminal,
  Box,
  Layers,
  Wind
} from 'lucide-react';

export const SkillsSection: React.FC = () => {

  const hardwareSkills = [
    {
      title: 'Eletrônica & Desenvolvimento de PCBs',
      icon: CircuitBoard,
      skills: [
        'Projeto de PCBs',
        'Roteamento de Circuitos',
        'Soldagem SMD / PTH',
        'Montagem Eletrônica',
        'Testes em Bancada',
        'Diagnóstico de Falhas',
        'Circuitos Analógicos e Digitais',
        'Instrumentação Eletrônica'
      ]
    },
    {
      title: 'Microcontroladores & Potência',
      icon: Cpu,
      skills: [
        'ESP32',
        'Microcontroladores',
        'Sensores e Atuadores',
        'Sensores de Distância',
        'Drivers de Motores',
        'MOSFETs / Pontes H',
        'PWM',
        'Dimensionamento de Baterias',
        'Sistemas de Alimentação'
      ]
    },
    {
      title: 'IoT, Radiofrequência & Telemetria',
      icon: Radio,
      skills: [
        'Internet das Coisas (IoT)',
        'Comunicação RF',
        'Rádio Controle',
        'Transmissores e Receptores',
        'Telemetria',
        'MQTT',
        'Comunicação entre Dispositivos',
        'Integração Hardware / Software'
      ]
    }
  ];

  const softwareSkills = [
    {
      title: 'Programação & Firmware',
      icon: Code2,
      skills: [
        'C',
        'C++',
        'Python',
        'Firmware',
        'FreeRTOS',
        'Sistemas de Tempo Real',
        'Controle PID',
        'Processamento de Sinais',
        'Algoritmos de Controle'
      ]
    },
    {
      title: 'Protocolos & Comunicação',
      icon: Network,
      skills: [
        'CAN Bus',
        'OBD-II',
        'RS-485',
        'Modbus',
        'I²C',
        'UART',
        'SPI',
        'MQTT',
        'Comunicação Serial'
      ]
    },
    {
      title: 'Ferramentas & Análise de Dados',
      icon: Terminal,
      skills: [
        'Git',
        'GitHub',
        'Linux',
        'MATLAB',
        'Simulink',
        'NumPy / SciPy',
        'Análise de Dados',
        'Machine Learning',
        'LaTeX'
      ]
    }
  ];

  const engineeringSkills = [
    {
      title: 'CAD & Projeto Mecânico',
      icon: Box,
      skills: [
        'SolidWorks',
        'AutoCAD',
        'Modelagem 3D',
        'Modelagem Paramétrica',
        'Projeto de Componentes',
        'Conjuntos Mecânicos',
        'Engenharia Reversa',
        'Integração Eletromecânica'
      ]
    },
    {
      title: 'Análise Estrutural & FEA',
      icon: Layers,
      skills: [
        'ANSYS Mechanical',
        'FEMAP',
        'Elementos Finitos (MEF)',
        'Geração de Malhas',
        'Análise Estática',
        'Tensões e Deformações',
        'Fadiga & Vibração',
        'Resistência dos Materiais'
      ]
    },
    {
      title: 'Aerodinâmica & Simulação',
      icon: Wind,
      skills: [
        'ANSYS Fluent',
        'XFLR5',
        'CFD',
        'Método dos Painéis (VLM)',
        'Cargas Aerodinâmicas',
        'Mecânica dos Fluidos',
        'Simulação Computacional',
        'Análise Numérica'
      ]
    }
  ];

  const renderCards = (
    cards: typeof hardwareSkills,
    featured = false
  ) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className={`rounded-xl p-6 border transition-all duration-300 group
              ${
                featured
                  ? 'bg-slate-900/80 border-cyan-900/40 hover:border-cyan-400/50'
                  : 'bg-slate-900/50 border-slate-800 hover:border-cyan-500/30'
              }
              hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-950/20
            `}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyan-950/50 border border-cyan-900/50 rounded-lg group-hover:bg-cyan-900/30 transition-colors">
                <Icon className="w-6 h-6 text-cyan-400" />
              </div>

              <h3 className="text-base font-bold text-white leading-tight">
                {card.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {card.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono bg-slate-950/80 text-slate-300 px-3 py-2 rounded-md border border-slate-800 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section
      id="skills"
      className="py-24 bg-slate-950/60 border-b border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* CABEÇALHO PRINCIPAL */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
            [ Stack de Engenharia & Tecnologia ]
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            COMPETÊNCIAS TÉCNICAS
          </h2>

          <p className="text-slate-400 text-sm leading-relaxed">
            Conhecimentos em eletrônica, desenvolvimento de hardware,
            Internet das Coisas (IoT), programação e sistemas embarcados,
            integrados à modelagem mecânica, análise estrutural e
            simulação computacional.
          </p>
        </div>

        {/* SEÇÃO 1 - HARDWARE E ELETRÔNICA */}
        <div className="mb-24">

          <div className="mb-10 space-y-2">
            <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
              [ 01 / Hardware & Eletrônica ]
            </span>

            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              HARDWARE, ELETRÔNICA & IoT
            </h2>

            <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
              Desenvolvimento de circuitos eletrônicos, projeto de
              PCBs, integração de sensores e microcontroladores,
              comunicação por radiofrequência, telemetria e testes
              de sistemas embarcados.
            </p>
          </div>

          {renderCards(hardwareSkills, true)}

        </div>

        {/* SEÇÃO 2 - SOFTWARE E SISTEMAS EMBARCADOS */}
        <div className="mb-24">

          <div className="mb-10 space-y-2">
            <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
              [ 02 / Software & Firmware ]
            </span>

            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              PROGRAMAÇÃO & SISTEMAS EMBARCADOS
            </h2>

            <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
              Desenvolvimento de firmware em C/C++, programação
              de microcontroladores, sistemas de tempo real (RTOS),
              protocolos de comunicação e processamento de dados
              para aplicações embarcadas e IoT.
            </p>
          </div>

          {renderCards(softwareSkills)}

        </div>

        {/* SEÇÃO 3 - ENGENHARIA MECÂNICA E SIMULAÇÃO */}
        <div>

          <div className="mb-10 space-y-2">
            <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
              [ 03 / Engenharia & Simulação ]
            </span>

            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              MODELAGEM 3D & ANÁLISE ESTRUTURAL
            </h2>

            <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
              Projeto mecânico, modelagem CAD, análise estrutural
              pelo Método dos Elementos Finitos (FEA) e estudos
              aerodinâmicos utilizando ferramentas de simulação
              computacional.
            </p>
          </div>

          {renderCards(engineeringSkills)}

        </div>

      </div>
    </section>
  );
};
