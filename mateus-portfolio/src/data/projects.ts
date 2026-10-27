export type Category = 'All' | 'Aerospace' | 'CAD / 3D' | 'Hardware' | 'Software' | 'IoT';

export interface Project {
  id: string;
  title: string;
  category: Category;
  shortDescription: string;
  technologies: string[];
  gallery?: string[]; 
  imageUrl: string;
  modelPath?: string;
  edrawingsUrl?: string;
  featured: boolean;
  summary: string;
  problem: string;
  contribution: string;
  modification?: string;
    regulatory?: string;
    equipment?: string;
    equipmentList?: string[];
    electricalSystem?: string;
    loadAnalysis?: string;
    generator?: string;
    electricalMargin?: string;
    wiring?: string;
    protection?: string;
    connections?: string;
    antenna?: string;
    documentation?: string;
    engineeringSkills?: string[];
  engineeringDetails: {
    schematic?: string;
    controller?: string;
    power?: string;
    temperature?: string;
    adc?: string;
    communication?: string;
    rtc?: string;
    display?: string;
    inputs?: string;
    connectors?: string;
    hardwareComponents?: string[];
    bom?: string;
    calculations?: string;
    decisions?: string;
    dimensions?: string;
    components?: string[];
    dataStructure?: string; 
    antenna?: string;
    documentation?: string;
    engineeringSkills?: string[];
    lighting?: string;
    protection?: string;
    firmwareArchitecture?: string;
    simulation?: string;
    aircraft?: string;
    // === Novas do projeto NACA ===
    baseline?: string;
    postProcessing?: string;
    parameters?: string;
    thickness?: string;
    camber?: string;
    leadingEdge?: string;
    trailingEdge?: string;
    aerodynamicCurves?: string[];
    pressureAnalysis?: string;
    boundaryLayer?: string;
    centerOfPressure?: string;
    analysis?: string;
    mainFindings?: string[];
    systemArchitecture?: string;
    temperatureControl?: string;
    thermostat?: string;
    cooler?: string;
    temperatureSafety?: string;
    feedingControl?: string;
    feedingSchedule?: string;
    feedingMemory?: string;
    lightingControl?: string;
    lightingIntensity?: string;
    lightingSchedule?: string;
    lightingRoutines?: string;
    realTimeClock?: string;
    interface?: string;
    wifi?: string;
    mqtt?: string;
    memory?: string;
    multitasking?: string;
    mainFunctions?: string[];
    // Na interface principal do projeto (onde fica o título, descrição, etc):
report?: string;

// Na interface dos detalhes técnicos (onde você já adicionou lighting, etc):
isoTpStack?: string;
thermostatControl?: string;
geometry?: string;
modification?: string;
analyses?: string | string[];
  equipmentList?: string | string[];
  diagnostics?: string;
  connectivity?: string;
  cad?: string;
  regulatory?: string;
  hardware?: string;
  memoryManagement?: string;
  massAndCG?: string;
  equipment?: string;
  safety?: string;
  inertia?: string;
  electricalSystem?: string;
  aerodynamicModel?: string;
  loadAnalysis?: string;
  [key: string]: any;
  };
  media?: {
    [key: string]: {
      title: string;
      description: string;
      url: string;
    };
  };

  codeSnippet?: {
    language: string;
    code: string;
  };
  githubUrl?: string;
  result: string;
}

export const projectsData: Project[] = [

{
  id: 'aero-data-acquisition',
  title: 'Sistema de Aquisição de Dados para Ensaios Aerodinâmicos',
  category: 'Aerospace',

  shortDescription: 'Desenvolvimento de um sistema para coletar dados de vibração e força durante ensaios em túnel de vento, com o objetivo de estudar o fenômeno de stall em uma asa.',

  technologies: [
    'C/C++',
    'Microcontroladores',
    'Sensor Piezoelétrico',
    'Célula de carga',
    'HX711',
    'Aquisição de dados',
    'Túnel de vento'
  ],

  imageUrl: '/images/asa-celula.png',
  featured: true,

  summary: 'O projeto consiste no desenvolvimento de um sistema de aquisição de dados para estudar o comportamento de uma asa em túnel de vento, principalmente durante a ocorrência de stall. A ideia é utilizar um sensor piezoelétrico para medir as vibrações e uma célula de carga para acompanhar as forças que atuam na estrutura. Durante os ensaios, o ângulo de ataque da asa é alterado para observar como essas grandezas se comportam. O projeto ainda está em fase de testes e coleta de dados.',

  problem: 'Durante os ensaios em túnel de vento, precisávamos de uma maneira de registrar as vibrações e as forças na asa para diferentes ângulos de ataque. Também era importante que as medições fossem realizadas somente depois que o escoamento estivesse estabilizado, evitando interferências nos resultados. Por isso, foi necessário desenvolver um sistema que permitisse controlar a coleta e organizar os dados para análise posterior.',

  contribution: 'Fiquei responsável pelo desenvolvimento do código de aquisição de dados em C/C++ para o microcontrolador. Trabalhei com a leitura do sensor piezoelétrico e com a integração de uma célula de carga utilizando o módulo HX711. Também implementei uma comunicação Serial para que o operador pudesse informar o ângulo de ataque antes de iniciar cada medição. O código permite armazenar as leituras e calcular a média dos valores obtidos pela célula de carga.',

  engineeringDetails: {
    calculations: 'O código foi organizado para armazenar até 25 amostras por medição, considerando até 20 ângulos de ataque diferentes. Para cada condição, é calculada a média das leituras da célula de carga, facilitando a comparação dos esforços entre os ensaios.',

    decisions: 'Optamos por iniciar a coleta manualmente, depois que o fluxo de ar no túnel de vento estivesse estabilizado. A célula de carga foi utilizada como uma segunda forma de acompanhar o comportamento da asa, permitindo comparar os esforços mecânicos com as vibrações medidas pelo sensor piezoelétrico.',

    components: [
      'Microcontrolador',
      'Sensor piezoelétrico',
      'Célula de carga de 5 kg/10 kg',
      'Módulo HX711',
      'Túnel de vento'
    ],

    dataStructure: 'Para organizar as medições, utilizei matrizes no código. Cada linha representa um ângulo de ataque e as colunas armazenam as amostras coletadas. Dessa forma, os dados ficam separados por condição de ensaio e podem ser utilizados em análises posteriores.'
  },

  media: {
    image1: {
      title: 'Modelo 3D da Bancada',
      description: 'Modelo da montagem utilizada no projeto, mostrando a posição da asa e da célula de carga.',
      url: '/images/asa-celula.png'
    },

    image2: {
      title: 'Montagem e Testes',
      description: 'Etapa de montagem e preparação do sistema para os ensaios em túnel de vento.',
      url: '/images/Modelo_Tunel.jpeg'
    },

    gif1: {
      title: 'Estudo do Stall',
      description: 'Visualização do comportamento do escoamento ao redor da asa durante a variação do ângulo de ataque.',
      url: '/images/Modelo_Stall.gif'
    }
  },

  codeSnippet: {
    language: 'cpp',
    code: `// Rotina de Aquisição de Dados
#include "HX711.h"

#define calibration_factor -800000
#define LOADCELL_DOUT_PIN 32
#define LOADCELL_SCK_PIN 30

HX711 scale;

// Configuração de memória
const int MAX_LEITURAS = 20;
const int NUM_AMOSTRAS = 25;

float angulos[MAX_LEITURAS];
float medias[MAX_LEITURAS];
float dados_brutos[MAX_LEITURAS][NUM_AMOSTRAS];

int indiceLeitura = 0;

void realizarMedicao() {

  if (indiceLeitura >= MAX_LEITURAS)
    return;

  Serial.println("Digite o angulo de ataque (em graus): ");

  while (Serial.available() == 0) {}

  float angulo = Serial.parseFloat();

  while (Serial.available() > 0)
    Serial.read();

  float soma = 0;

  for (int i = 0; i < NUM_AMOSTRAS; i++) {

    float leitura = scale.get_units(1);

    dados_brutos[indiceLeitura][i] = leitura;

    soma += leitura;
  }

  angulos[indiceLeitura] = angulo;

  medias[indiceLeitura] =
    soma / NUM_AMOSTRAS;

  indiceLeitura++;
}`
  },

  result: 'O sistema permite organizar as medições realizadas em diferentes ângulos de ataque, armazenando as amostras e calculando os valores médios da célula de carga. Com esses dados, será possível comparar o comportamento da asa durante os ensaios e estudar a relação entre as vibrações, os esforços e o início do stall. O projeto continua em desenvolvimento, com testes sendo realizados para avaliar os resultados obtidos.',

  githubUrl: 'https://github.com/Mateusjrs/Projetos/tree/main/aero-data-system'
},

 
{
  id: 'swept-wing-structure-cad',
  title: 'Modelagem 3D de Estrutura de Asa Enflechada',
  category: 'CAD / 3D',

  shortDescription: 'Modelagem 3D de uma asa enflechada a partir de desenho técnico, incluindo a geometria externa, nervuras, longarinas e montagem dos componentes estruturais.',

  technologies: [
    'Modelagem CAD 3D',
    'Desenho Técnico',
    'Modelagem Paramétrica',
    'Montagem de Componentes',
    'Estruturas Aeronáuticas',
    'Geometria de Asas'
  ],

  imageUrl: '/images/asa-enflechada-estrutura.png',
  featured: false,

  summary: 'O projeto teve como objetivo desenvolver um modelo 3D da estrutura de uma asa enflechada a partir de um desenho técnico com suas principais dimensões. A modelagem considerou a variação da corda ao longo da envergadura, o ângulo de enflechamento e a posição dos componentes estruturais internos. Durante o desenvolvimento, trabalhei na construção da geometria da asa e na modelagem das nervuras e longarinas, buscando representar como esses elementos são distribuídos e conectados dentro de uma estrutura aeronáutica.',

  problem: 'O principal desafio foi transformar o desenho técnico em uma estrutura tridimensional, mantendo as proporções e as dimensões indicadas. Como a asa possui enflechamento e redução da corda em direção à ponta, foi necessário ajustar os contornos e o posicionamento dos componentes internos ao longo da geometria. Outro desafio foi organizar as nervuras e os elementos longitudinais para que acompanhassem corretamente o formato da asa e se encaixassem na montagem.',

  contribution: '',

  engineeringDetails: {
    geometry: 'A asa foi modelada considerando uma corda de 2.000 mm na raiz e 800 mm na ponta, distribuídas ao longo de uma semienvergadura de 4.000 mm. A geometria apresenta uma redução gradual da corda, formando uma asa trapezoidal enflechada. Essas dimensões foram utilizadas como referência para desenvolver o contorno externo e posicionar os componentes estruturais.',

    sweep: 'O desenho técnico apresenta um ângulo de enflechamento de 30°, definido ao longo da linha de 25% da corda. Essa linha também foi utilizada como referência para o posicionamento da longarina principal, localizada a 500 mm do bordo de ataque na raiz e a 200 mm na ponta da asa.',

    modeling: 'A modelagem começou pela interpretação das dimensões do desenho técnico e pela construção do contorno da asa. A partir dessa geometria, foram desenvolvidos os componentes internos, considerando a redução da corda e o enflechamento. O trabalho envolveu o posicionamento das nervuras e dos elementos longitudinais para formar o conjunto tridimensional.',

    structure: 'A estrutura foi representada por nervuras distribuídas ao longo da asa e elementos longitudinais responsáveis por conectar essas regiões. A montagem permite visualizar a disposição dos componentes internos e compreender melhor como uma estrutura de asa pode ser organizada.',

    decisions: 'Durante a modelagem, utilizei as dimensões do desenho como referência para manter a proporção entre a raiz e a ponta da asa. O posicionamento da longarina principal foi baseado na linha de 25% da corda, enquanto as nervuras foram ajustadas conforme a geometria de cada seção. O objetivo foi desenvolver uma representação organizada da estrutura interna, sem realizar um dimensionamento estrutural completo.',

    dimensions: 'Corda na raiz: 2.000 mm; corda na ponta: 800 mm; semienvergadura: 4.000 mm; ângulo de enflechamento: 30°; posição da longarina principal: 25% da corda.',

    components: [
      'Geometria externa da asa enflechada',
      'Longarina principal',
      'Nervuras estruturais',
      'Elementos longitudinais de reforço',
      'Conjunto de montagem 3D'
    ],

    engineeringSkills: [
      'Interpretação de Desenho Técnico',
      'Modelagem Tridimensional',
      'Geometria de Asas',
      'Modelagem de Componentes Estruturais',
      'Montagem CAD',
      'Organização de Conjuntos Mecânicos'
    ]
  },

  media: {
    technicalDrawing: {
      title: 'Desenho Técnico da Asa',
      description: 'Desenho utilizado como referência para a modelagem, apresentando as dimensões de corda, semienvergadura, enflechamento e posição da longarina principal.',
      url: '/images/vista3d.png'
    },

    structuralModel: {
      title: 'Modelo 3D da Estrutura',
      description: 'Visualiza ção da montagem tridimensional, mostrando a distribuição das nervuras, longarinas e demais componentes internos da asa.',
      url: '/images/asa.png'
    }
  },

  result: 'O projeto resultou em um modelo tridimensional de uma estrutura de asa enflechada, desenvolvido a partir das dimensões e referências de um desenho técnico. Foi possível representar a geometria externa e organizar os componentes internos em uma montagem 3D. O trabalho ajudou a colocar em prática conhecimentos de desenho técnico, modelagem CAD e estruturas aeronáuticas, principalmente na interpretação de geometrias e no posicionamento de nervuras e longarinas ao longo de uma asa.'
},

{
  id: 'airbus-wing-structure',
  title: 'Modelagem 3D de Asa Aeronáutica (Airbus A380)',
  category: 'CAD / 3D',

  shortDescription: 'Modelagem 3D de uma asa inspirada no Airbus A380 a partir de três vistas de referência, utilizando curvas, superfícies e ferramentas de montagem do SolidWorks.',

  technologies: [
    'SolidWorks',
    'Desenho Técnico',
    'Modelagem de Superfícies',
    'Splines e Curvas',
    'Modelagem Paramétrica',
    'Montagem de Componentes'
  ],

  imageUrl: '/images/capaAirbus.png',

  modelPath: '/models/Airbus.glb',
  edrawingsUrl: '/models/Airbus.easm',
  featured: true,

  summary: 'O projeto teve como objetivo desenvolver um modelo 3D de uma asa inspirada no Airbus A380 utilizando o SolidWorks. A modelagem foi feita a partir das três vistas de referência: superior, frontal e lateral. O foco principal foi interpretar os desenhos em 2D e reproduzir as curvas e os contornos da asa no ambiente tridimensional. Para isso, utilizei ferramentas como Splines, planos de referência e Loft, buscando representar o formato aerodinâmico e desenvolver os componentes estruturais internos, como nervuras e longarinas.',

  problem: 'A principal dificuldade foi transformar as informações das três vistas em uma geometria 3D coerente. Como a asa possui curvas e mudanças de formato ao longo de sua extensão, foi necessário ajustar os esboços para que os contornos das diferentes vistas fossem compatíveis. Outro desafio foi criar superfícies contínuas e posicionar os componentes internos de acordo com a geometria desenvolvida.',

  contribution: 'Fui responsável pela modelagem e montagem do conjunto no SolidWorks. Comecei utilizando as três vistas como referência para desenhar os principais contornos da asa. A partir delas, criei curvas com a ferramenta Spline, ajustando os pontos de controle para aproximar o formato do modelo original. Depois, utilizei planos de referência e recursos de Loft para desenvolver as superfícies tridimensionais. Também modelei nervuras, longarinas e elementos de fixação, organizando as peças em uma montagem.',

  engineeringDetails: {
    calculations: 'A modelagem foi baseada principalmente na interpretação geométrica das três vistas, utilizando proporções e dimensões de referência para posicionar as curvas e os componentes. O foco do trabalho foi a construção do modelo CAD, e não a realização de uma análise estrutural completa.',

    cadFeatures: 'Utilizei esboços 2D, Splines e planos de referência para definir os contornos da asa. As curvas foram ajustadas considerando as informações das vistas superior, frontal e lateral. Com as ferramentas de Loft e modelagem de superfícies, foi possível criar a geometria 3D a partir dos perfis desenhados. Também utilizei cortes extrudados, padrões lineares e recursos de montagem para desenvolver os componentes internos.',

    decisions: 'Optei por iniciar a modelagem pelas três vistas, pois elas facilitaram a identificação das proporções e das principais curvas da asa. A vista superior foi utilizada para definir o contorno em planta e o enflechamento, a frontal para auxiliar no posicionamento vertical da geometria e a lateral para observar os contornos do perfil. O uso de Splines permitiu ajustar as curvas de maneira gradual, buscando uma transição mais suave entre as superfícies.',

    dimensions: 'Modelo desenvolvido em escala reduzida, com corda de referência de aproximadamente 450 mm, utilizando dimensões adaptadas para a montagem dos componentes.',

    components: [
      'Superfícies externas da asa',
      'Curvas e perfis de referência',
      'Longarina estrutural',
      'Nervuras internas com alívio de peso',
      'Elementos de fixação M4'
    ]
  },

  media: {
    render1: {
      title: 'Montagem da Estrutura (Assembly)',
      description: 'Visualização da asa modelada no SolidWorks, mostrando os contornos desenvolvidos e a montagem dos componentes estruturais.',
      url: '/images/Airbus.png'
    }
  },

  result: 'O projeto resultou em um modelo tridimensional de uma asa inspirado no Airbus A380, desenvolvido a partir da interpretação das três vistas de referência. Durante o trabalho, pude praticar principalmente a criação e o ajuste de curvas, a modelagem de superfícies e a montagem de componentes no SolidWorks. A maior parte do aprendizado esteve relacionada à transformação de desenhos 2D em geometrias 3D, especialmente em regiões com curvas e mudanças de formato. O modelo também foi preparado para visualização tridimensional no portfólio.'
},



{
  id: 'helicopter-pitch-arm-fea',
  title: 'Análise Estrutural do Braço de Passo de Helicóptero',
  category: 'Aerospace',

  shortDescription: 'Simulação estrutural no ANSYS Mechanical para comparar as tensões e os deslocamentos de três modelos de um braço de passo de helicóptero.',

  technologies: [
    'ANSYS Mechanical',
    'Método dos Elementos Finitos (FEA)',
    'Análise Estática Estrutural',
    'Tensão de von Mises',
    'Análise de Deformações'
  ],

  imageUrl: '/images/heli-1.png',
  featured: true,

  summary: 'O projeto teve como objetivo comparar o comportamento estrutural de três modelos de um braço de passo de helicóptero utilizando o ANSYS Mechanical. Foram analisadas as geometrias Raw Design (A), Engineer Design (B) e Optized Design (C), por meio de simulações estáticas estruturais. Durante a análise, observei principalmente a distribuição das tensões de von Mises e os deslocamentos totais de cada modelo, buscando entender como as diferenças na geometria influenciam a resistência e a rigidez da peça.',

  problem: 'O principal desafio foi comparar três geometrias diferentes e entender como cada uma se comportava quando submetida às mesmas condições de carregamento. Era necessário observar onde ocorriam as maiores concentrações de tensão e quais modelos apresentavam os maiores deslocamentos. Além disso, foi importante considerar que alguns valores muito elevados poderiam estar relacionados à malha ou às condições utilizadas na simulação.',

  contribution: 'Realizei a análise comparativa dos três modelos utilizando os resultados das simulações no ANSYS Mechanical. Avaliei os mapas de tensão de von Mises e os deslocamentos totais, identificando as regiões mais solicitadas de cada geometria. Também comparei os valores máximos obtidos para verificar como as alterações no formato do braço influenciaram seu comportamento estrutural.',

  engineeringDetails: {
    analysis: 'A análise foi realizada pelo método dos elementos finitos, considerando três configurações geométricas do braço de passo. Foram comparados os valores máximos de tensão equivalente de von Mises e deslocamento total, além das regiões onde ocorreram as maiores concentrações de tensão.',

    'Raw Design (A)': 'O modelo original apresentou os menores valores entre as três geometrias, com tensão máxima de 105,29 MPa e deslocamento máximo de 0,12935 mm. A maior concentração de tensão apareceu na região curva da peça. Nas condições simuladas, foi o modelo que apresentou o menor deslocamento.',

    'Engineer Design (B)': 'Esse modelo apresentou os maiores valores da comparação, com tensão máxima de 2.565,1 MPa e deslocamento máximo de 1,527 mm. O maior pico de tensão ocorreu próximo à extremidade do braço. Por ser um valor bastante elevado, seria importante avaliar melhor a malha e as condições de apoio para entender se essa concentração representa o comportamento real da peça ou uma possível singularidade numérica.',

    'Optized (C)': 'O terceiro modelo apresentou tensão máxima de 932,94 MPa e deslocamento máximo de 0,47336 mm. Em comparação com o modelo B, houve uma redução de aproximadamente 63,6% na tensão máxima e 69,0% no deslocamento. Apesar dessa melhora, os resultados ainda ficaram acima dos valores encontrados no modelo original.',

    mainFindings: [
      'As mudanças na geometria influenciaram bastante os valores de tensão e deslocamento.',
      'O modelo A apresentou os menores valores de tensão e deslocamento nas condições analisadas.',
      'O modelo B apresentou concentrações de tensão elevadas que precisam ser investigadas.',
      'O modelo C apresentou resultados melhores que o B, mas não superou o modelo original.',
      'A comparação mostrou a importância de avaliar diferentes geometrias antes de escolher uma solução.'
    ],

    engineeringSkills: [
      'Utilização do ANSYS Mechanical',
      'Análise Estática Estrutural',
      'Interpretação de Tensão de von Mises',
      'Análise de Deslocamentos',
      'Comparação de Geometrias',
      'Interpretação de Resultados de Elementos Finitos'
    ]
  },

  result: 'A análise permitiu comparar o comportamento estrutural dos três modelos e observar como as alterações geométricas influenciaram a distribuição das tensões e os deslocamentos. O modelo original apresentou os menores valores, enquanto o modelo C mostrou uma melhora em relação ao modelo B. O projeto também ajudou a desenvolver minha interpretação dos resultados de simulações no ANSYS Mechanical e a entender a importância de verificar as condições de contorno, a malha e as propriedades do material antes de chegar a uma conclusão sobre a resistência de uma peça.',

  githubUrl: 'https://github.com/Mateusjrs/Projetos/tree/main/SUA-PASTA-AQUI',

  media: {
    rawDesignTension: {
      title: 'Raw Design (A) - Tensão',
      description: 'Distribuição da tensão de von Mises no modelo original, com valor máximo de 105,29 MPa na região curva da peça.',
      url: '/images/heli-1.png'
    },

    rawDesignDeformation: {
      title: 'Raw Design (A) - Deslocamento',
      description: 'Resultado do deslocamento total do modelo A, que apresentou o menor valor da comparação: 0,12935 mm.',
      url: '/images/heli-2.png'
    },

    engineerDesignTension: {
      title: 'Engineer Design (B) - Tensão',
      description: 'Distribuição de tensões do modelo B, com pico de 2.565,1 MPa próximo à extremidade do braço.',
      url: '/images/heli-3.png'
    },

    engineerDesignDeformation: {
      title: 'Engineer Design (B) - Deslocamento',
      description: 'Deslocamento total do modelo B, que apresentou o maior valor entre as três geometrias: 1,527 mm.',
      url: '/images/heli-4.png'
    },

    optizedDesignTension: {
      title: 'Optized Design (C) - Tensão',
      description: 'Distribuição de tensões do modelo C, com redução de aproximadamente 63,6% na tensão máxima em relação ao modelo B.',
      url: '/images/heli-5.png'
    },

    optizedDesignDeformation: {
      title: 'Optized Design (C) - Deslocamento',
      description: 'Resultado do deslocamento total do modelo C, com valor máximo de 0,47336 mm.',
      url: '/images/heli-6.png'
    }
  }
},


{
  id: 'bicycle-suspension-linkage-fea',
  title: 'Análise Estrutural de Braço de Suspensão de Bicicleta',
  category: 'CAD / 3D',

  shortDescription: 'Simulação estrutural no ANSYS Mechanical para avaliar os deslocamentos e as deformações elásticas de um braço de suspensão de bicicleta.',

  technologies: [
    'ANSYS Mechanical',
    'Método dos Elementos Finitos (FEA)',
    'Análise Estática Estrutural',
    'Projeto Mecânico'
  ],

  imageUrl: '/images/bic1.png',
  featured: false,

  summary: 'O projeto teve como objetivo analisar o comportamento estrutural de um braço de suspensão de bicicleta utilizando o ANSYS Mechanical. Através de uma simulação estática estrutural, foram avaliados o deslocamento total e a deformação elástica equivalente da peça. O foco foi observar como o componente se comporta quando submetido a um carregamento, identificando as regiões com maiores deslocamentos e aquelas onde ocorrem as maiores deformações locais.',

  problem: 'O principal desafio foi entender como o braço de suspensão se comportava sob as condições de carregamento da simulação. Para isso, foi necessário observar não apenas o deslocamento da peça, mas também identificar as regiões onde a deformação elástica era maior. Durante a análise, foi possível perceber que o ponto de maior deslocamento não era o mesmo que apresentava a maior deformação local.',

  contribution: '',

  engineeringDetails: {
    analysis: 'A análise foi realizada no ANSYS Mechanical utilizando o método dos elementos finitos. Foram observados os resultados de deslocamento total (Total Deformation) e deformação elástica equivalente (Equivalent Elastic Strain). A partir dos mapas de resultados, comparei as regiões mais afetadas pelo carregamento e identifiquei os pontos que merecem maior atenção em uma avaliação estrutural.',

    'Deformação Total': 'O deslocamento máximo encontrado foi de 0,58561 mm, enquanto o mínimo foi de 0 mm. Os menores deslocamentos apareceram na região esquerda da peça, próxima ao olhal maior, e aumentaram em direção à extremidade direita, onde foi registrado o valor máximo.',

    'Deformação Elástica Equivalente': 'A deformação elástica equivalente máxima foi de 0,00072733 mm/mm, aproximadamente 0,0727%, com valor mínimo de 6,3085e-8 mm/mm. As maiores deformações apareceram principalmente na região de transição entre o olhal esquerdo e o corpo do braço, além de algumas áreas próximas às bordas da peça.',

    mainFindings: [
      'O maior deslocamento ocorreu na extremidade direita do braço de suspensão.',
      'A maior deformação elástica ficou concentrada na transição entre o olhal esquerdo e o corpo da peça.',
      'As regiões de maior deslocamento e maior deformação elástica não foram as mesmas.',
      'A geometria da peça influencia a distribuição das deformações.',
      'Uma análise de tensões de von Mises e um estudo de malha ajudariam a avaliar melhor as regiões críticas.'
    ],

    engineeringSkills: [
      'Utilização do ANSYS Mechanical',
      'Análise Estática Estrutural',
      'Método dos Elementos Finitos',
      'Interpretação de Deslocamentos',
      'Análise de Deformação Elástica Equivalente',
      'Interpretação de Resultados de Simulação'
    ]
  },

  result: 'A simulação permitiu observar o comportamento do braço de suspensão e identificar as regiões com maiores deslocamentos e deformações elásticas. O maior deslocamento ocorreu na extremidade direita, enquanto a maior deformação elástica ficou concentrada próxima ao olhal esquerdo. O projeto foi importante para praticar o uso do ANSYS Mechanical e entender melhor a diferença entre deslocamento e deformação em uma análise estrutural. Para avaliar se a peça suporta adequadamente o carregamento, ainda seria necessário analisar as tensões, as propriedades do material e a convergência da malha.',

  githubUrl: 'https://github.com/Mateusjrs/Projetos',

  media: {
    totalDeformation: {
      title: 'Deslocamento Total',
      description: 'Resultado da simulação mostrando o deslocamento máximo de 0,58561 mm na extremidade direita do braço de suspensão.',
      url: '/images/bic1.png'
    },

    elasticStrain: {
      title: 'Deformação Elástica Equivalente',
      description: 'Distribuição da deformação elástica, com valor máximo de aproximadamente 0,0727% na região de transição do olhal esquerdo.',
      url: '/images/bic2.png'
    }
  }
},

{
  id: 'propeller-modal-analysis',
  title: 'Análise Modal de Hélice Aeronáutica',
  category: 'Aerospace',

  shortDescription: 'Simulação modal no ANSYS Mechanical para identificar as frequências naturais e os principais modos de vibração de uma hélice aeronáutica.',

  technologies: [
    'ANSYS Mechanical',
    'Método dos Elementos Finitos (FEA)',
    'Análise Modal',
    'Dinâmica Estrutural'
  ],

  imageUrl: '/images/helice-1.png',
  featured: false,

  summary: 'O projeto teve como objetivo estudar o comportamento vibratório de uma hélice aeronáutica utilizando o ANSYS Mechanical. Através de uma análise modal pelo método dos elementos finitos, foram obtidas as seis primeiras frequências naturais da estrutura e suas respectivas formas de vibração. Durante o estudo, observei como a geometria da hélice se comporta em cada modo, identificando diferentes padrões de flexão e torção. A análise também permitiu compreender melhor a importância das frequências naturais no projeto de componentes sujeitos a vibrações.',

  problem: 'O principal desafio foi identificar as frequências naturais da hélice e entender como a estrutura tende a vibrar em cada uma delas. Como uma hélice está sujeita a vibrações durante seu funcionamento, é importante conhecer esses modos para avaliar possíveis situações de ressonância. Outro ponto foi interpretar os resultados do ANSYS, principalmente os modos que apresentaram frequências muito próximas, mas com diferentes formas de vibração.',

  contribution: '',

  engineeringDetails: {
    analysis: 'A simulação foi realizada no ANSYS Mechanical utilizando uma análise modal. Foram avaliados os seis primeiros modos de vibração, observando as frequências naturais e as formas modais apresentadas pelo software. A partir dos resultados, foi possível identificar grupos de frequências próximas e comparar os padrões de deformação da hélice em cada modo.',

    'Modos 1 e 2': 'Os dois primeiros modos apresentaram frequências naturais de 53,668 Hz e 53,702 Hz, respectivamente. A diferença entre elas foi de aproximadamente 0,063%. Esses modos estão associados aos primeiros padrões de flexão da estrutura, permitindo observar como a hélice tende a vibrar em diferentes configurações.',

    'Modos 3 e 4': 'O terceiro e o quarto modos apresentaram frequências de 321,58 Hz e 322,92 Hz, com diferença aproximada de 0,416%. Nesses modos, foram observados padrões de vibração de ordem superior, com mudanças na curvatura das pás em comparação com os dois primeiros modos.',

    'Modos 5 e 6': 'Os últimos modos analisados apresentaram frequências de 416,62 Hz e 419,70 Hz, com diferença aproximada de 0,74%. As formas modais mostraram comportamentos mais complexos, envolvendo diferentes combinações de flexão e torção ao longo da estrutura.',

    mainFindings: [
      'Foram identificadas as seis primeiras frequências naturais da hélice.',
      'Alguns modos apresentaram frequências muito próximas, formando pares.',
      'As formas de vibração mudaram conforme a frequência natural aumentou.',
      'Os deslocamentos mostrados na análise modal representam formas de vibração, não amplitudes reais de funcionamento.',
      'Para avaliar o risco de ressonância, seria necessário comparar as frequências naturais com as excitações geradas durante a operação da hélice.'
    ],

    engineeringSkills: [
      'Utilização do ANSYS Mechanical',
      'Método dos Elementos Finitos',
      'Análise Modal',
      'Interpretação de Frequências Naturais',
      'Análise de Formas Modais',
      'Conceitos de Vibração e Ressonância'
    ]
  },

  result: 'A análise permitiu identificar as seis primeiras frequências naturais da hélice e visualizar como a estrutura tende a vibrar em cada modo. Foi possível observar pares de frequências próximas e diferentes padrões de flexão e torção ao longo das pás. O projeto foi importante para praticar a análise modal no ANSYS Mechanical e compreender melhor o comportamento dinâmico de componentes aeronáuticos. Como continuidade, seria interessante comparar as frequências encontradas com as frequências de excitação do motor e da hélice durante seu funcionamento, permitindo uma avaliação mais completa do risco de ressonância.',

  githubUrl: 'https://github.com/Mateusjrs/Projetos',

  media: {
    mode1: {
      title: 'Modo 1 - 53,668 Hz',
      description: 'Primeiro modo de vibração da hélice, apresentando um padrão inicial de flexão da estrutura.',
      url: '/images/helice-1.png'
    },

    mode2: {
      title: 'Modo 2 - 53,702 Hz',
      description: 'Segundo modo de vibração, com frequência muito próxima à do primeiro modo e uma configuração de flexão diferente.',
      url: '/images/helice-2.png'
    },

    mode3: {
      title: 'Modo 3 - 321,58 Hz',
      description: 'Terceiro modo de vibração, apresentando um padrão de flexão de ordem superior.',
      url: '/images/helice-3.png'
    },

    mode4: {
      title: 'Modo 4 - 322,92 Hz',
      description: 'Quarto modo de vibração, com frequência próxima à do terceiro modo e diferenças na forma de vibração.',
      url: '/images/helice-4.png'
    },

    mode5: {
      title: 'Modo 5 - 416,62 Hz',
      description: 'Quinto modo de vibração, mostrando um comportamento mais complexo da estrutura.',
      url: '/images/helice-5.png'
    },

    mode6: {
      title: 'Modo 6 - 419,70 Hz',
      description: 'Sexto modo de vibração, apresentando padrões mais complexos de flexão e torção das pás.',
      url: '/images/helice-6.png'
    }
  }
},

  

 
{
  id: 'transient-thermal-analysis',
  title: 'Análise Térmica Transiente em Estrutura Plana',
  category: 'CAD / 3D',

  shortDescription: 'Simulação térmica no ANSYS Mechanical para estudar a distribuição de temperatura e o fluxo de calor em uma placa ao longo do tempo.',

  technologies: [
    'ANSYS Mechanical 2026 R1',
    'Método dos Elementos Finitos (FEA)',
    'Transferência de Calor',
    'Análise Térmica Transiente'
  ],

  imageUrl: '/images/fluxo1.png',
  featured: false,

  summary: 'O projeto teve como objetivo estudar a transferência de calor em uma estrutura plana utilizando o ANSYS Mechanical. Foi realizada uma análise térmica transiente para observar como a temperatura se distribui pela placa ao longo do tempo. Durante a simulação, foram avaliados os campos de temperatura e o fluxo de calor, considerando as condições térmicas aplicadas ao modelo. O estudo permitiu visualizar como diferentes regiões da estrutura apresentam temperaturas e intensidades de fluxo de calor distintas.',

  problem: 'O principal desafio foi compreender como a temperatura varia ao longo da estrutura durante o processo de transferência de calor. Diferentemente de uma análise em regime permanente, a simulação transiente considera a passagem do tempo, permitindo acompanhar a evolução das temperaturas. Para isso, foi necessário configurar as propriedades do material, as condições de contorno térmicas e o tempo de simulação, definido em 30.000 segundos.',

  contribution: '',

  engineeringDetails: {
    analysis: 'A simulação foi realizada no ANSYS Mechanical utilizando uma análise térmica transiente pelo método dos elementos finitos. Foram configuradas as condições térmicas da placa e avaliados os resultados de temperatura e fluxo de calor. No instante final de 30.000 segundos, a temperatura máxima encontrada foi de 402,74 K, enquanto a mínima foi de 300 K. A partir do mapa de temperaturas, foi possível observar a distribuição térmica na estrutura e identificar as regiões com maiores diferenças de temperatura.',

    calculations: 'Além da distribuição de temperatura, foi analisado o fluxo de calor total na estrutura. O valor máximo encontrado foi de 0,0471 W/mm². A comparação entre os mapas de temperatura e fluxo de calor ajudou a entender como as diferenças de temperatura estão relacionadas à transferência de energia térmica pelo material. Dessa forma, foi possível observar o comportamento da condução de calor nas diferentes regiões da placa.',

    mainFindings: [
      'A temperatura no instante final variou entre 300 K e 402,74 K.',
      'O fluxo de calor apresentou magnitude máxima de 0,0471 W/mm².',
      'A distribuição de temperatura permitiu identificar regiões com diferentes condições térmicas.',
      'Os resultados mostraram como o calor se distribui pela estrutura nas condições simuladas.',
      'A análise transiente permitiu estudar o comportamento térmico considerando a passagem do tempo.'
    ],

    engineeringSkills: [
      'Utilização do ANSYS Mechanical',
      'Análise Térmica Transiente',
      'Método dos Elementos Finitos',
      'Transferência de Calor por Condução',
      'Interpretação de Mapas de Temperatura',
      'Análise de Fluxo de Calor'
    ]
  },

  result: 'A simulação permitiu estudar a distribuição de temperatura e o fluxo de calor em uma estrutura plana durante um intervalo de 30.000 segundos. No instante final, foram encontrados valores de temperatura entre 300 K e 402,74 K, além de um fluxo de calor máximo de 0,0471 W/mm². O projeto foi importante para praticar a configuração de análises térmicas no ANSYS Mechanical e compreender melhor como o calor se propaga em um material. Também ajudou a entender a diferença entre análises transientes e em regime permanente e a importância das condições de contorno nos resultados.',

  githubUrl: 'https://github.com/Mateusjrs/Projetos',

  media: {
    temperatureDistribution: {
      title: 'Distribuição de Temperatura',
      description: 'Mapa de temperatura da estrutura no instante de 30.000 segundos, mostrando valores entre 300 K e 402,74 K.',
      url: '/images/fluxo1.png'
    },

    heatFlux: {
      title: 'Fluxo de Calor Total',
      description: 'Distribuição da magnitude do fluxo de calor na placa, com valor máximo de 0,0471 W/mm².',
      url: '/images/fluxo2.png'
    }
  }
},


  
{
  id: 'truss-structure-fea',
  title: 'Análise Estrutural de uma Estrutura Treliçada',
  category: 'CAD / 3D',

  shortDescription: 'Simulação estrutural no ANSYS Mechanical para avaliar os deslocamentos de uma estrutura treliçada submetida a carregamentos.',

  technologies: [
    'ANSYS Mechanical',
    'Método dos Elementos Finitos (FEA)',
    'Análise Estática Estrutural',
    'Mecânica dos Sólidos'
  ],

  imageUrl: '/images/trel-1.png',
  featured: false,

  summary: 'O projeto teve como objetivo estudar o comportamento de uma estrutura treliçada utilizando o ANSYS Mechanical. Foi realizada uma análise estática estrutural pelo método dos elementos finitos, observando os deslocamentos provocados pelo carregamento aplicado. Durante a simulação, foram avaliados o deslocamento total da estrutura e o deslocamento na direção do eixo X. O estudo permitiu visualizar como as barras e suas conexões influenciam o comportamento do conjunto.',

  problem: 'O principal desafio foi entender como uma estrutura formada por várias barras conectadas se comporta quando submetida a esforços. Para isso, foi necessário considerar a geometria da treliça, os pontos de apoio e as condições de carregamento. Outro ponto importante foi interpretar os resultados da simulação, identificando as regiões com maiores deslocamentos e observando como as restrições influenciam o comportamento da estrutura.',

  contribution: '',

  engineeringDetails: {
    analysis: 'A simulação foi realizada no ANSYS Mechanical utilizando uma análise estática estrutural. Foram avaliados o deslocamento total (Total Deformation) e o deslocamento direcional no eixo X (Directional Deformation). A partir dos mapas de resultados, foi possível observar como a estrutura se desloca sob as condições aplicadas e identificar as regiões que apresentam os maiores valores.',

    'Deformação Total': 'O deslocamento total máximo encontrado foi de aproximadamente 0,000649 mm. A distribuição dos resultados permitiu observar quais regiões apresentaram maiores movimentações em relação à posição inicial da estrutura.',

    'Deformação Direcional (Eixo X)': 'Na análise do deslocamento na direção do eixo X, foi encontrado um valor máximo de aproximadamente 0,000288 mm e um mínimo de -0,00000765 mm. Esses resultados mostram como diferentes regiões da treliça se deslocaram no sentido positivo e negativo do eixo horizontal.',

    mainFindings: [
      'A geometria e as condições de apoio influenciam os deslocamentos da estrutura.',
      'O deslocamento total máximo encontrado foi de aproximadamente 0,000649 mm.',
      'O deslocamento no eixo X apresentou valores positivos e negativos.',
      'Os mapas de resultados permitiram identificar as regiões com maiores deslocamentos.',
      'Uma análise de tensões seria necessária para avaliar melhor a resistência da estrutura.'
    ],

    engineeringSkills: [
      'Utilização do ANSYS Mechanical',
      'Método dos Elementos Finitos',
      'Análise Estática Estrutural',
      'Interpretação de Deslocamentos',
      'Mecânica dos Sólidos',
      'Análise de Estruturas Treliçadas'
    ]
  },

  result: 'A simulação permitiu observar os deslocamentos de uma estrutura treliçada submetida a carregamentos, identificando tanto o deslocamento total quanto a movimentação na direção do eixo X. O projeto foi importante para praticar a utilização do ANSYS Mechanical e compreender melhor como a geometria, os apoios e os esforços aplicados influenciam o comportamento de uma estrutura. Também ajudou a desenvolver a interpretação de resultados obtidos pelo método dos elementos finitos.',

  githubUrl: 'https://github.com/Mateusjrs/Projetos',

  media: {
    totalDeformation: {
      title: 'Deslocamento Total',
      description: 'Distribuição dos deslocamentos da estrutura treliçada, com valor máximo de aproximadamente 0,000649 mm.',
      url: '/images/trel-1.png'
    },

    directionalDeformation: {
      title: 'Deslocamento Direcional (Eixo X)',
      description: 'Resultado dos deslocamentos na direção horizontal, mostrando valores positivos e negativos ao longo da estrutura.',
      url: '/images/trel-2.png'
    }
  }
},

{
  id: 'quilli-hardware-design',
  title: 'Projeto Eletrônico e Hardware — Aquário Inteligente',
  category: 'Hardware',

  shortDescription: 'Desenvolvimento do circuito eletrônico de um aquário inteligente utilizando ESP32, sensores, relés, MOSFETs e interfaces de comunicação para automação do sistema.',

  technologies: [
    'Projeto de Circuitos Eletrônicos',
    'ESP32',
    'MOSFETs e Relés',
    'Optoacopladores',
    'Comunicação RS-485',
    'Barramentos I2C e SPI',
    'Design de PCB'
  ],

  imageUrl: '/images/esquematicoAquario.png',
  featured: false,

  summary: 'O projeto teve como objetivo desenvolver o hardware de um sistema de automação para aquários, utilizando um ESP32 como controlador principal. O circuito foi planejado para integrar sensores, controle de temperatura, iluminação, ventilação e comunicação com outros dispositivos. Durante o desenvolvimento, trabalhei na criação do esquemático eletrônico, escolha dos componentes e organização dos circuitos de alimentação, controle e acionamento. O principal foco foi permitir que o ESP32 controlasse diferentes equipamentos sem conectar diretamente as cargas de maior potência aos seus pinos.',

  problem: 'Um dos principais desafios foi integrar dispositivos que trabalham com tensões e correntes diferentes. Enquanto o ESP32 utiliza sinais de 3,3 V, alguns equipamentos do aquário, como coolers e sistemas de iluminação, trabalham com 12 V. Por isso, foi necessário desenvolver circuitos específicos para o acionamento dessas cargas, utilizando transistores, MOSFETs, relés e optoacopladores. Também foi importante organizar os componentes e as conexões para facilitar a montagem e a manutenção do sistema.',

  contribution: '',

  engineeringDetails: {
    schematic: 'O esquemático eletrônico foi desenvolvido dividindo o sistema em blocos, como alimentação, processamento, sensores, acionamento de cargas e comunicação. Essa organização facilitou a identificação das conexões entre os componentes e permitiu planejar a integração de todos os dispositivos em uma única placa.',

    controller: 'O ESP32-DEVKIT-V1 foi escolhido como controlador principal do sistema. Ele é responsável pelo processamento das informações dos sensores e pelo envio dos sinais de controle para os circuitos de acionamento. Também foram previstas conexões para display, botões e comunicação com outros módulos.',

    power: 'O circuito de alimentação foi planejado utilizando uma fonte Hi-Link HLK-5M05 para fornecer 5 V aos circuitos de controle e uma linha de 12 V destinada a equipamentos como coolers e iluminação. A distribuição de energia foi organizada para separar o acionamento das cargas de maior potência dos sinais utilizados pelo ESP32.',

    thermostat: 'Para o acionamento do aquecedor, foi utilizado um circuito com transistor BC817 e relé de 5 V. O transistor permite controlar a bobina do relé a partir do sinal do microcontrolador. Também foi adicionado um diodo 1N4007 para proteger o circuito contra os picos de tensão gerados quando a bobina é desligada.',

    cooler: 'O acionamento do cooler de 12 V foi desenvolvido utilizando um MOSFET de potência e um optoacoplador PC817. Essa configuração permite controlar o funcionamento do cooler através do ESP32, utilizando um circuito de acionamento separado da saída direta do microcontrolador.',

    lighting: 'O sistema de iluminação foi dividido em canais de controle utilizando MOSFETs. Essa configuração permite acionar diferentes lâmpadas e fitas de LED, além de possibilitar o controle de intensidade por PWM nos canais compatíveis.',

    adc: 'Para melhorar a resolução das leituras analógicas, foi incluído um conversor ADS1115 de 16 bits, conectado ao ESP32 pelo barramento I2C. O módulo permite realizar medições analógicas com maior resolução nominal em comparação com o conversor interno do microcontrolador.',

    communication: 'Foi incluído um transceptor MAX485 para permitir comunicação através da interface RS-485. O circuito foi planejado para possibilitar a integração futura com outros dispositivos, incluindo equipamentos que utilizem protocolos como Modbus RTU.',

    rtc: 'O controle de horários foi planejado utilizando um módulo RTC DS3231 conectado pelo barramento I2C. O circuito também possui uma bateria de backup CR2032, permitindo que o relógio continue mantendo a referência de tempo quando a alimentação principal estiver desligada.',

    display: 'O hardware possui conexões para um display TFT utilizando comunicação SPI, além de botões físicos para interação com o sistema. Esses componentes permitem apresentar informações do aquário e configurar funções diretamente pelo equipamento.',

    protection: 'Durante o desenvolvimento do circuito, foram considerados componentes de proteção e acionamento, como diodos, resistores, transistores e optoacopladores. O objetivo foi evitar que as cargas fossem conectadas diretamente aos pinos do ESP32 e reduzir possíveis interferências elétricas no sistema.',

    bom: 'Também foi organizada uma lista de materiais contendo os principais componentes eletrônicos utilizados no projeto, como resistores, capacitores, relés, MOSFETs, transistores, conectores e módulos de comunicação.',

    hardwareComponents: [
      'ESP32-DEVKIT-V1',
      'Fonte Hi-Link HLK-5M05',
      'Conversor ADS1115 de 16 bits',
      'Transceptor RS-485 MAX485',
      'RTC DS3231 e bateria CR2032',
      'Relé SRD-05VDC-SL-C',
      'Optoacopladores PC817',
      'MOSFETs de potência',
      'Transistores BC817',
      'Diodo 1N4007',
      'Conectores JST-XH'
    ],

    engineeringSkills: [
      'Desenvolvimento de Esquemáticos Eletrônicos',
      'Projeto de Circuitos com ESP32',
      'Acionamento de Relés e MOSFETs',
      'Circuitos de Proteção',
      'Distribuição de Alimentação',
      'Comunicação I2C, SPI e RS-485',
      'Integração de Sensores e Atuadores',
      'Desenvolvimento de PCB'
    ]
  },

  media: {
    schematicImg: {
      title: 'Esquemático Eletrônico do Aquário Inteligente',
      description: 'Esquemático completo do sistema, mostrando os circuitos de alimentação, processamento, sensores e acionamento.',
      url: '/images/esquematicoAquario.png'
    },

    pcb3d: {
      title: 'Modelo 3D da PCB',
      description: 'Visualização da placa de circuito impresso com a disposição dos componentes e conectores do sistema.',
      url: '/images/pcbAquario.png'
    }
  },

  result: 'O projeto resultou no desenvolvimento do esquemático eletrônico e na organização do hardware de um sistema de automação para aquários. A arquitetura reúne o ESP32, os circuitos de alimentação, sensores, interfaces de comunicação e acionamento de equipamentos como aquecedores, coolers e iluminação. Durante o desenvolvimento, pude colocar em prática conhecimentos de eletrônica, dimensionamento de componentes, comunicação entre dispositivos e projeto de circuitos. O trabalho também ajudou a compreender a importância de organizar os blocos eletrônicos e considerar a proteção do microcontrolador durante o acionamento de cargas.',

  githubUrl: 'https://github.com/Mateusjrs/Projetos/tree/main/AquarioHardware/Aquario'
},

{
  id: 'afrodite-autonomous-sumo',
  title: 'Afrodite — Robô Sumô Autônomo (3 kg)',
  category: 'Hardware',

  shortDescription: 'Desenvolvimento do hardware de um robô de sumô autônomo de 3 kg utilizando ESP32, sensores de distância, sensores de borda e circuitos de controle.',

  technologies: [
    'ESP32',
    'Projeto de PCB e Esquemáticos',
    'Sensores VL53L0X (ToF)',
    'Sensor Inercial MPU6050',
    'Leitura PPM',
    'Controle de Motores',
    'Comunicação I2C'
  ],

  imageUrl: '/images/Sumo3k.jpeg',
  featured: true,

  summary: 'O Afrodite é um projeto de robô desenvolvido para competições de sumô autônomo na categoria de 3 kg. O objetivo foi desenvolver um sistema eletrônico capaz de identificar o adversário, detectar os limites da arena e controlar os movimentos do robô. O projeto utiliza um ESP32 como controlador principal, sensores de distância VL53L0X, sensores de borda e um sensor inercial MPU6050. Também foi considerada a utilização de um sistema de sucção para aumentar a aderência do robô ao solo. Durante o desenvolvimento, trabalhei principalmente na arquitetura do hardware, criação do esquemático e integração dos diferentes módulos eletrônicos.',

  problem: 'Um dos principais desafios foi integrar vários sensores e dispositivos de controle em um espaço reduzido, considerando as limitações de uma competição de robótica. O robô precisa identificar rapidamente a posição do adversário e detectar as bordas da arena para evitar sair da área de combate. Outro desafio foi utilizar cinco sensores VL53L0X no mesmo barramento I2C, já que esses sensores possuem o mesmo endereço padrão. Também foi necessário organizar a alimentação para reduzir possíveis interferências provocadas pelos motores.',

  contribution: '',

  engineeringDetails: {
    schematic: 'O esquemático eletrônico foi desenvolvido separando os circuitos em blocos de alimentação, sensores, processamento, comunicação e sinalização. Essa organização facilitou a distribuição das conexões e a integração dos componentes utilizados no robô.',

    controller: 'O ESP32-DEVKIT-V1 foi escolhido como controlador principal por possuir boa capacidade de processamento e diferentes interfaces de comunicação. Ele é utilizado para receber informações dos sensores, processar os comandos e controlar os sistemas eletrônicos do robô.',

    power: 'A alimentação foi planejada utilizando um conversor Step Down para fornecer 5 V a partir da bateria e reguladores de 3,3 V para os componentes que trabalham com essa tensão. Também foram utilizados capacitores de filtragem para ajudar a reduzir ruídos e variações na alimentação dos circuitos.',

    communication: 'Um dos pontos principais do projeto foi a integração de cinco sensores de distância VL53L0X utilizando o barramento I2C. Como esses sensores possuem o mesmo endereço de fábrica, foi utilizado o controle individual dos pinos XSHUT para inicializá-los separadamente e configurar endereços diferentes. Dessa forma, é possível utilizar os cinco sensores no mesmo barramento.',

    inputs: 'O sistema conta com cinco sensores ToF VL53L0X para detectar o adversário, sensores de borda para identificar os limites da arena e um MPU6050 para obter informações de aceleração e orientação angular. Também foi incluída uma entrada para receptor de rádio PPM, utilizada no controle remoto de segurança e inicialização do robô.',

    display: 'O circuito possui um display OLED de 128x64 pixels e LEDs de sinalização. Esses componentes foram incluídos para facilitar a visualização de informações do sistema, como estados de funcionamento e leituras dos sensores durante os testes.',

    bom: 'Durante o desenvolvimento, também foi organizada a lista de componentes eletrônicos utilizados na placa, incluindo resistores, capacitores, LEDs, conectores, reguladores de tensão e módulos de sensores. Essa etapa ajudou a planejar a montagem e organizar os materiais necessários.',

    hardwareComponents: [
      'ESP32-DEVKIT-V1',
      '5 Sensores VL53L0X (ToF)',
      'Sensor Inercial MPU6050',
      'Sensores de Borda',
      'Receptor PPM Orange R616XN Nano',
      'Conversor Step Down 5 V',
      'Reguladores de 3,3 V',
      'Display OLED 128x64',
      'Receptor IR TSOP1838',
      'Resistores e Capacitores de Filtragem'
    ],

    engineeringSkills: [
      'Desenvolvimento de Hardware para Robótica',
      'Projeto de Esquemáticos Eletrônicos',
      'Integração de Sensores com ESP32',
      'Comunicação I2C',
      'Configuração de Endereços I2C',
      'Circuitos de Alimentação',
      'Leitura de Sinais PPM',
      'Desenvolvimento de PCB'
    ]
  },

  media: {
    roboMontado: {
      title: 'Robô Afrodite (3 kg)',
      description: 'Visão geral do robô de sumô autônomo, mostrando sua estrutura e montagem dos componentes.',
      url: '/images/Sumo3k.jpeg'
    },

    pcbLayout: {
      title: 'Layout da PCB',
      description: 'Desenvolvimento da placa de circuito impresso com a disposição dos componentes e o roteamento das conexões.',
      url: '/images/pcb.png'
    },

    schematic: {
      title: 'Esquemático Eletrônico',
      description: 'Esquemático do circuito principal, incluindo alimentação, ESP32, sensores e interfaces de comunicação.',
      url: '/images/esquematico.png'
    }
  },

  result: 'O projeto permitiu desenvolver a arquitetura eletrônica de um robô de sumô autônomo, integrando diferentes sensores e circuitos de controle em um único sistema. Um dos principais pontos do desenvolvimento foi a utilização de cinco sensores VL53L0X no mesmo barramento I2C, através do gerenciamento dos pinos XSHUT. O trabalho também envolveu o planejamento da alimentação, a integração de sensores inerciais e a criação do esquemático eletrônico e da PCB. O projeto foi importante para aplicar conhecimentos de eletrônica, sistemas embarcados e robótica em uma aplicação prática voltada para competições.',

  githubUrl: 'https://github.com/Mateusjrs/Projetos/tree/main/Sumo3K'
},

 {
    id: 'mini-sumo-autonomous',
    title: 'Mini Sumô Autônomo (500 g) — Projeto de Hardware',
    category: 'Hardware',
    shortDescription: 'Adaptação do hardware do robô Afrodite para um mini sumô de 500 g, com ESP32, sensores de distância e uma placa compacta com componentes SMD.',
    technologies: [
      'ESP32',
      'Projeto de PCB com componentes SMD',
      'Alta Densidade (High-Density Routing)',
      'Sensores VL53L0X',
      'Controle Inercial',
      'Eletrônica de Potência Compacta'
    ],
    imageUrl: '/images/MINISUMO_ANGULO.jpeg',
    featured: false,
    summary: 'O projeto teve como objetivo adaptar a parte eletrônica do robô Afrodite, de 3 kg, para um mini sumô de 500 g. Como o robô precisa ocupar um espaço menor, foi necessário reorganizar os componentes e desenvolver uma PCB mais compacta. O sistema utiliza um ESP32, cinco sensores de distância VL53L0X, um sensor inercial MPU6050 e circuitos para o controle dos motores. Durante o desenvolvimento, trabalhei principalmente na escolha dos componentes, no esquemático e no layout da placa.',
    problem: 'O principal desafio foi reduzir o tamanho e o peso da eletrônica sem perder as funções do robô maior. Era preciso acomodar os sensores, a alimentação e o controle dos motores em uma placa que coubesse no chassi, respeitando o limite de 10 x 10 cm da categoria. Também foi importante planejar o caminho das trilhas, porque os motores podem gerar ruídos elétricos que interferem na comunicação dos sensores.',
    contribution: '',
    engineeringDetails: {
      schematic: 'O circuito foi redesenhado para utilizar componentes SMD, incluindo resistores e capacitores nos tamanhos 0603 e 0402. Sempre que possível, os circuitos que antes utilizavam módulos prontos foram integrados diretamente à placa, como os sensores e o MPU6050. Isso ajudou a reduzir o espaço ocupado pelo hardware.',
      controller: 'O ESP32 foi mantido como controlador principal. O projeto considera a organização do firmware em tarefas com FreeRTOS para separar a leitura dos sensores e o controle dos motores, facilitando o gerenciamento das funções do robô.',
      power: 'A alimentação foi adaptada para uma placa menor, substituindo módulos Step-Down maiores por reguladores buck integrados. A escolha desses componentes ajudou a reduzir o espaço ocupado pelos circuitos de alimentação.',
      communication: 'Os cinco sensores VL53L0X compartilham o barramento I2C. Para evitar conflitos de endereço, foi mantido o controle individual dos pinos XSHUT. No layout, também procurei manter as trilhas de comunicação organizadas e afastadas, quando possível, das trilhas de corrente dos motores.',
      dimensions: 'O layout foi pensado para caber em um robô da categoria Mini Sumô, com limite de 10 x 10 cm e massa máxima de 500 g. O posicionamento dos componentes também levou em conta o espaço disponível no chassi e a posição dos sensores.',
      protection: 'Foram utilizados planos de terra e vias térmicas próximos aos circuitos de potência, buscando melhorar o retorno das correntes e a dissipação de calor. Esses cuidados são importantes porque os motores podem exigir correntes elevadas durante o funcionamento.',
      hardwareComponents: [
        'ESP32 (SMD)',
        'Sensores ToF VL53L0X (Integrados)',
        'Acelerômetro MPU6050',
        'Receptor PPM Nano',
        'Ponte H SMD (Alta Corrente)',
        'Reguladores Step-Down Monolíticos',
        'Componentes Passivos SMD 0603/0402'
      ],
      engineeringSkills: [
        'Roteamento de PCB compacta com componentes SMD',
        'Miniaturização de Hardware',
        'Cuidados com ruído elétrico no layout de PCB',
        'Gestão Térmica em PCB (Thermal Vias)',
        'Integração de componentes SMD'
      ]
    },
    media: {
      roboMontado1: {
        title: 'Mini Sumô Autônomo (500 g) — Projeto de Hardware',
        description: 'Vista em perspectiva do mini sumô e da disposição dos seus componentes.',
        url: '/images/MINISUMO_ANGULO.jpeg'
      },
      roboMontado2: {
        title: 'Mini Sumô Autônomo (500 g) — Projeto de Hardware',
        description: 'Detalhe da estrutura e do posicionamento dos sensores na parte frontal.',
        url: '/images/MINISUMO.jpeg'
      },
      pcbLayout: {
        title: 'Mini Sumô Autônomo (500 g) — Projeto de Hardware',
        description: 'Layout da PCB com os circuitos de controle, sensores e potência organizados em uma área compacta.',
        url: '/images/AfroditeMini.png'
      },
      schematic: {
        title: 'Mini Sumô Autônomo (500 g) — Projeto de Hardware',
        description: 'Esquemático eletrônico desenvolvido com componentes integrados diretamente à placa.',
        url: '/images/esquematico.png'
      }
    },
    result: 'O projeto resultou em uma versão mais compacta do circuito eletrônico do Afrodite, com componentes SMD e integração dos sensores na PCB. Durante o desenvolvimento, pratiquei a criação de esquemáticos e o roteamento de placas com pouco espaço disponível, além de estudar alimentação, comunicação I2C e dissipação de calor. Para confirmar a resistência a ruídos e o desempenho térmico, ainda são necessários testes na placa montada.',
    githubUrl: 'https://github.com/Mateusjrs/Projetos/tree/main/MiniSumo'
  },
 {
    id: 'can-bus-obd2-hacking',
    title: 'Scanner Automotivo com ESP32 e CAN-BUS',
    category: 'Hardware',
    
    shortDescription: 'Desenvolvimento de um scanner OBD-II com ESP32 e MCP2515 para ler mensagens CAN, consultar informações do veículo e enviar dados por Bluetooth.',
    
    technologies: [
      'C/C++',
      'ESP32',
      'CAN-BUS (MCP2515)',
      'Protocolo ISO-TP',
      'OBD-II (SAE J1979)',
      'Bluetooth Serial',
      'Sistemas Embarcados'
    ],
    
    imageUrl: '/images/CanBus.jpg',
    
    featured: true,
    
    summary: 'O projeto consiste no desenvolvimento de um scanner automotivo com ESP32 e controlador CAN MCP2515. A ideia foi criar uma ferramenta para acompanhar mensagens da rede CAN e consultar informações disponíveis pelo padrão OBD-II, como dados de funcionamento do motor, códigos de falha e identificação do veículo (VIN). Também implementei a transmissão das informações por Bluetooth, permitindo acompanhar as leituras sem precisar conectar o computador diretamente ao circuito.',
    
    problem: 'Uma das maiores dificuldades foi trabalhar com a comunicação entre o ESP32 e os módulos eletrônicos do veículo. Algumas respostas OBD-II cabem em uma única mensagem CAN, enquanto outras precisam ser divididas em vários quadros. Por isso, foi necessário estudar o protocolo ISO-TP, organizar as solicitações feitas à ECU e tratar diferentes velocidades de comunicação.',
    
    contribution: '',
    
    engineeringDetails: {
      firmwareArchitecture: 'O firmware foi organizado com uma máquina de estados para controlar as consultas OBD-II, incluindo leitura do VIN, códigos de falha e Freeze Frame. Essa organização ajuda a executar as solicitações sem interromper constantemente a leitura do barramento CAN.',
      
      isoTpStack: 'Implementei uma rotina para tratar mensagens ISO-TP, utilizadas quando uma resposta OBD-II precisa de mais de um quadro CAN. O código identifica Single Frames e First Frames, envia mensagens de controle de fluxo e junta os Consecutive Frames em um buffer para reconstruir a resposta.',
      
      diagnostics: 'O firmware possui rotinas para os modos OBD-II 01 (dados em tempo real), 02 (Freeze Frame), 03 (leitura de códigos de falha), 04 (limpeza de códigos) e 09 (informações do veículo, como VIN). A disponibilidade de cada informação depende do veículo e de sua ECU.',
      
      hardware: 'O ESP32 se comunica com o MCP2515 pelo barramento SPI. O controlador CAN permite receber mensagens de diagnóstico e observar quadros da rede. Também foram previstas tentativas de comunicação em diferentes velocidades, como 500, 250 e 125 kbit/s.',
      
      connectivity: 'Foi utilizada a biblioteca BluetoothSerial do ESP32 para enviar as informações coletadas e receber comandos. Assim, é possível acompanhar os dados do scanner por meio de uma conexão Bluetooth.',
      
      safety: 'O código prevê diferentes identificadores CAN para realizar as consultas e inclui uma verificação de RPM antes do comando de limpeza de falhas. Essa proteção é uma medida adicional de software e não substitui os cuidados necessários ao conectar equipamentos à rede de um veículo.'
    },
    
    codeSnippet: {
      language: 'cpp',
      code: `// Implementação customizada de Flow Control (ISO-TP) para CAN-BUS
if (pciType == 0x1) { // FIRST FRAME detectado
  isotp.rxId = rxId;
  isotp.txId = rxId - 0x8; // Define o ID de resposta para a ECU

  isotp.length = ((data[0] & 0x0F) << 8) | data[1];
  isotp.offset = len - 2;
  memcpy(isotp.buffer, &data[2], isotp.offset);

  isotp.expected_sn  = 1;
  isotp.active       = true;

  // Monta e envia o FLOW CONTROL - Clear To Send (CTS)
  uint8_t fc[8] = {
    0x30,  // PCI 3 (Flow Control) | Status 0 (CTS)
    0x00,  // Block Size = 0 (Ilimitado)
    0x02,  // STmin = 2 ms entre frames
    0, 0, 0, 0, 0
  };

  CAN.sendMsgBuf(isotp.txId, 0, 8, fc); // Autoriza a ECU a continuar o envio
  return false;
}`
    },
    
    result: 'O projeto permitiu colocar em prática conhecimentos de C++, ESP32 e comunicação automotiva. O firmware foi desenvolvido para consultar parâmetros OBD-II, tratar respostas divididas em vários quadros pelo ISO-TP e enviar informações por Bluetooth. A atividade também ajudou a compreender melhor o funcionamento da rede CAN e a importância de organizar as mensagens e seus tempos de resposta.',
    
    githubUrl: 'https://github.com/Mateusjrs/Projetos/tree/main/CarControl'
  },
 {
    id: 'ir-universal-cloner',
    title: 'Controle Infravermelho Universal para Ar-Condicionado',
    category: 'IoT',
    shortDescription: 'Sistema com ESP32 para controlar aparelhos de ar-condicionado por infravermelho, monitorar temperatura e trocar informações pela rede Wi-Fi usando MQTT.',
    technologies: [
      'ESP32', 
      'C/C++', 
      'IoT', 
      'MQTT', 
      'SmartConfig',
      'Controle Preditivo (EMA)',
      'IR Protocols'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    summary: 'O projeto teve como objetivo desenvolver um dispositivo com ESP32 para controlar diferentes modelos de ar-condicionado por sinais infravermelhos. O sistema utiliza um sensor DS18B20 para acompanhar a temperatura do ambiente e pode enviar comandos aos aparelhos de acordo com a temperatura desejada. Também foram incluídas funções de comunicação Wi-Fi e MQTT para permitir o controle remoto e o acompanhamento das informações.',
    problem: 'O principal desafio foi criar um firmware capaz de trabalhar com diferentes protocolos de controle infravermelho, já que cada fabricante utiliza comandos próprios. Além disso, era necessário ler a temperatura, controlar o aparelho e manter a comunicação com a rede sem deixar uma função atrapalhar a outra. Outro cuidado foi evitar ajustes muito frequentes de temperatura.',
    contribution: '',
    engineeringDetails: {
      firmwareArchitecture: 'Para organizar os diferentes aparelhos, utilizei uma interface chamada ACInterface, baseada em ponteiros de função e macros em C/C++. Essa estrutura permite reunir drivers de diferentes fabricantes e selecionar as funções necessárias para cada modelo. O projeto contempla suporte a 19 conjuntos de drivers/protocolos de climatização.',
      thermostatControl: 'A temperatura é lida por um sensor DS18B20 e passa por um filtro de média móvel exponencial (EMA), usado para suavizar pequenas variações nas leituras. O firmware também calcula a taxa de mudança da temperatura (dT/dt). Com essas informações, a lógica procura ajustar o setpoint do ar-condicionado de forma gradual, respeitando um intervalo mínimo entre comandos.',
      connectivity: 'A conexão Wi-Fi utiliza SmartConfig/ESP-Touch para configurar a rede sem precisar alterar o código do dispositivo. A comunicação MQTT permite enviar informações e receber comandos de uma plataforma externa. Também foram previstas rotinas de reconexão em caso de perda da rede.',
      memoryManagement: 'As configurações de rede, do aparelho selecionado e do controle de temperatura são armazenadas em memória não volátil. Isso permite recuperar os parâmetros após reiniciar ou desligar o equipamento.',
      components: [
        'Microcontrolador ESP32', 
        'Sensor de Temperatura 1-Wire DS18B20', 
        'Receptor IR e Emissor IR de Alta Potência', 
        'LED RGB de Status de Conectividade'
      ],
      engineeringSkills: [
        'Polimorfismo e abstração de hardware em C/C++',
        'Teoria de Controle Aplicada (Derivativa e Filtro Exponencial)',
        'FreeRTOS (Task Management e Multiplexing)',
        'Stack ESP-IDF e SmartConfig WiFi',
        'Protocolo MQTT IoT'
      ]
    },
    codeSnippet: {
      language: 'cpp',
      code: `// Termostato Preditivo (Cálculo Derivativo e Filtro EMA)
void runThermostat() {
  if (activeAC == nullptr || !thermostatEnabled) return;
  
  if (millis() - last_read_time > 5000) {
    sensors.requestTemperatures();
    T_raw = sensors.getTempCByIndex(0);

    // Filtro Exponencial (EMA) para suavizar ruído térmico
    T_filt = alpha * T_raw + (1.0 - alpha) * T_filt;

    // Cálculo da Taxa de Variação (Derivativa dT/dt em graus/min)
    float dt = (millis() - last_read_time) / 1000.0;
    if (dt > 0) dTdt = (T_filt - T_prev) / dt * 60.0;

    T_prev = T_filt;
    last_read_time = millis();

    float error = T_filt - targetTemp;

    // Lógica Preditiva de Ambiente Quente
    if (error > hysteresis) {
      // Se a temperatura já está caindo rápido (-0.2 C/min), não envia sinal para baixar mais
      if (dTdt < -0.2) return; 
      
      if (millis() - last_action_time >= settling_time) {
        AC_setpoint = constrain(--AC_setpoint, AC_MIN_TEMP, AC_MAX_TEMP);
        activeAC->setTemp(activeAC->obj, AC_setpoint);
        activeAC->send(activeAC->obj);
        last_action_time = millis();
      }
    }
  }
}`
    },
    result: 'O desenvolvimento resultou em um firmware que reúne controle por infravermelho, leitura de temperatura e comunicação Wi-Fi/MQTT em um único dispositivo. O uso da interface ACInterface facilitou a organização dos protocolos, enquanto o filtro EMA e o cálculo da variação de temperatura permitiram experimentar uma lógica de controle mais gradual. O projeto foi importante para praticar programação embarcada, integração de sensores e comunicação IoT.',
    githubUrl: 'https://github.com/Mateusjrs/Projetos/tree/main/InflaCold/itw600_v001'
  },
  {
    id: 'naca-5312-aerodynamic-analysis',
    title: 'Análise Aerodinâmica do Perfil NACA 5312',
    category: 'Aerospace',
    shortDescription: 'Estudo do perfil NACA 5312 no XFLR5, com comparação de alterações geométricas e análise dos resultados por meio de gráficos gerados em Python.',
    technologies: [
      'XFLR5',
      'Python',
      'Aerodinâmica',
      'Método dos Painéis',
      'Camada Limite',
      'Análise Paramétrica',
      'Processamento de Dados'
    ],
    imageUrl: '/images/naca.jpg',
    
   
    gallery: [
      '/images/naca-cl-alpha.png',
      '/images/naca-efficiency.png',
      '/images/naca-cd-alpha.png',
      '/images/naca-boundary-layer.png'
    ],
   

    featured: true,
    summary: 'O projeto teve como objetivo estudar como mudanças no formato do perfil NACA 5312 influenciam seu comportamento aerodinâmico. Utilizei o XFLR5 para comparar diferentes geometrias, alterando características como espessura, camber e formato dos bordos de ataque e fuga. Depois, organizei os resultados em Python e gerei gráficos para observar as mudanças na sustentação, no arrasto, no momento aerodinâmico e em outras características do escoamento.',
    problem: 'O principal desafio foi entender quais alterações da geometria tinham maior influência nos resultados aerodinâmicos. Em vez de comparar perfis muito diferentes ao mesmo tempo, organizei o estudo para modificar um parâmetro de cada vez e manter os demais constantes. Dessa forma, foi possível observar melhor o efeito da espessura, do camber e das alterações nos bordos do perfil.',
    contribution: '',
    engineeringDetails: {
      baseline: 'O perfil utilizado como referência foi o NACA 5312, que possui camber máximo de 5% da corda, localizado a 30% da corda, e espessura máxima de 12% da corda. As outras configurações foram comparadas com esse perfil inicial.',
      simulation: 'As análises foram realizadas no XFLR5, utilizando métodos de painéis e modelos de camada limite. Foram consideradas condições com números de Reynolds entre 4 × 10^6 e 6 × 10^6, Mach de 0,15 a 0,22 e ângulos de ataque de -2° a 14°.',
      postProcessing: 'Os resultados foram exportados do XFLR5 e organizados em Python. Com isso, foi possível gerar gráficos comparativos e analisar as diferenças entre os perfis de maneira mais clara.',
      parameters: 'As geometrias foram modificadas de forma separada, variando um parâmetro por vez. Essa organização ajudou a relacionar cada mudança de formato com as diferenças observadas nas curvas aerodinâmicas.',
      thickness: 'Foram comparadas espessuras máximas de 8% e 16% da corda, além de mudanças na posição da espessura máxima, de 30% para 40% da corda. Essas análises ajudaram a observar como a espessura e sua posição influenciam o arrasto e o comportamento do perfil em diferentes ângulos de ataque.',
      camber: 'Também foram analisados valores de camber máximo de 3% e 6%, além de posições de 30% e 40% da corda. Os resultados mostraram mudanças na sustentação, no arrasto e na distribuição de pressão, destacando a influência da curvatura do perfil.',
      leadingEdge: 'O raio do bordo de ataque foi alterado para 0,80R, 1,12R e 1,15R em relação ao valor original. A comparação permitiu observar o efeito dessas mudanças nas características aerodinâmicas, principalmente na região frontal do perfil.',
      trailingEdge: 'Foram testadas alterações na forma e na espessura do bordo de fuga. A comparação ajudou a observar mudanças na distribuição de pressão, no momento aerodinâmico e no comportamento da região posterior do perfil.',
      aerodynamicCurves: [
        'CL × α (Sustentação)',
        'CD × α (Arrasto)',
        'CM × α (Momento)',
        'CL/CD × α (Eficiência)',
        'Estimativa de CL,max no modelo',
        'Estimativa do ângulo de estol no modelo',
        'Análise do momento de arfagem'
      ],
      pressureAnalysis: 'A distribuição do coeficiente de pressão (Cp) foi comparada ao longo da corda para diferentes ângulos de ataque. Os gráficos ajudaram a identificar regiões de maior sucção e mudanças na distribuição de carga aerodinâmica.',
      boundaryLayer: 'Também observei resultados relacionados à camada limite, como a espessura de deslocamento ao longo da corda. Essa etapa ajudou a entender como diferentes geometrias influenciam o comportamento do escoamento próximo à superfície.',
      centerOfPressure: 'Foi analisada a variação do centro de pressão com o ângulo de ataque, relacionando sua posição às mudanças na distribuição de pressão e no momento aerodinâmico.',
      analysis: 'Ao todo, foram gerados mais de 40 gráficos para comparar as configurações. A análise incluiu curvas de sustentação, arrasto, eficiência e momento, além de resultados de pressão, camada limite e centro de pressão.',
      mainFindings: [
        'Aumento do CL associado ao aumento do Reynolds, camber e modificações no bordo de fuga.',
        'Aumento do arrasto associado à redução do Reynolds, aumento da espessura e camber.',
        'O aumento do camber teve influência importante na sustentação e na eficiência nas condições analisadas.',
        'O raio do bordo de ataque apresentou influência pequena nos coeficientes aerodinâmicos globais.',
        'O deslocamento da espessura máxima e do camber modificou significativamente a distribuição de pressão.',
        'As alterações apresentaram efeitos diferentes dependendo do ângulo de ataque analisado.'
      ],
      engineeringSkills: [
        'Modelagem de perfis aerodinâmicos',
        'Análise paramétrica',
        'Aerodinâmica computacional (método dos painéis)',
        'Método dos Painéis',
        'Análise de camada limite',
        'Distribuição de pressão',
        'Processamento de dados (Python)',
        'Geração e interpretação de curvas',
        'Análise de centro de pressão e momento aerodinâmico'
      ]
    },
    result: 'O estudo mostrou que alterações no formato do NACA 5312 podem modificar bastante os resultados aerodinâmicos, dependendo do ângulo de ataque e das condições do escoamento. O camber e algumas mudanças no bordo de fuga apresentaram influência importante na sustentação, enquanto outras alterações afetaram o arrasto e a distribuição de pressão. O projeto foi uma oportunidade de praticar o XFLR5, organizar resultados em Python e compreender melhor a relação entre geometria e desempenho aerodinâmico.',
    githubUrl: 'https://github.com/Mateusjrs/Projetos/tree/main/AnaliseNaca',
    // @ts-ignore
    report: 'Relatório técnico completo: Análise do Perfil Aerodinâmico NACA 5312.'
  },
  {
    id: 'quilli-smart-aquarium',
    title: 'Quilli — Aquário Inteligente',
    category: 'IoT',
    shortDescription: 'Sistema de automação de aquário com ESP32, controle de temperatura, alimentação programada, iluminação ajustável e comunicação Wi-Fi/MQTT.',
    technologies: [
      'C/C++',
      'ESP32',
      'IoT',
      'Wi-Fi',
      'MQTT',
      'TFT',
      'Sensores de temperatura',
      'RTC',
      'EEPROM',
      'PWM',
      'Sistemas Embarcados'
    ],
    imageUrl: '/images/Aquario.jpeg',
    featured: true,
    summary: 'O Quilli é um sistema de automação de aquário desenvolvido com ESP32. O projeto reúne funções de controle de temperatura, alimentação automática, iluminação programável e uma interface gráfica em display TFT. Também utiliza Wi-Fi e MQTT para troca de informações e comandos. Durante o desenvolvimento, trabalhei no firmware e na integração entre sensores, atuadores, interface e comunicação, buscando reunir as principais funções do aquário em um único sistema.',
    problem: 'Manter um aquário exige acompanhar a temperatura da água, alimentar os peixes em horários definidos e controlar a iluminação. O desafio foi automatizar essas tarefas sem precisar de um controlador separado para cada uma. Também foi necessário organizar o código para que leitura de sensores, acionamento dos equipamentos, atualização da tela e comunicação com a rede funcionassem de maneira coordenada.',
    contribution: '',
    engineeringDetails: {
      systemArchitecture: 'O ESP32 é o controlador principal do sistema. O firmware foi dividido em partes para leitura de sensores, controle dos equipamentos, interface gráfica, armazenamento de configurações e comunicação. Essa divisão facilitou a organização do código e a integração entre as funções.',
      temperatureControl: 'O sistema acompanha a temperatura da água e permite configurar um valor desejado e uma faixa de controle. A partir das leituras do sensor, o firmware decide quando acionar o aquecimento ou o resfriamento.',
      thermostat: 'Quando a água está abaixo da faixa configurada, o ESP32 pode acionar o aquecedor por meio do circuito de controle. O aquecimento é interrompido quando a temperatura alcança a condição definida.',
      cooler: 'Se a temperatura ultrapassar o limite configurado, o sistema pode ligar um cooler para ajudar no resfriamento da água. Assim, o controle atua tanto no aquecimento quanto no resfriamento.',
      temperatureSafety: 'O firmware verifica se a leitura de temperatura está dentro de uma faixa considerada válida. Caso a leitura esteja fora desses limites, o aquecedor e o cooler são desligados para evitar acionamentos inadequados.',
      feedingControl: 'O aquário conta com uma rotina para acionar automaticamente o alimentador. É possível definir os horários e a quantidade de acionamentos do mecanismo de alimentação.',
      feedingSchedule: 'Os horários de alimentação são comparados com a hora informada pelo relógio de tempo real (RTC). Quando chega o horário programado, o ESP32 executa a rotina de alimentação.',
      feedingMemory: 'As configurações da alimentação são salvas em memória não volátil para que os horários continuem disponíveis após reiniciar o dispositivo.',
      lightingControl: 'O sistema permite controlar canais diferentes de iluminação de forma independente, ajustando o funcionamento conforme a configuração escolhida.',
      lightingIntensity: 'A intensidade das luzes pode ser ajustada por PWM, permitindo definir diferentes níveis de iluminação para cada canal.',
      lightingSchedule: 'É possível programar os horários em que as luzes devem acender ou apagar. O RTC fornece a referência de tempo para executar essas rotinas.',
      lightingRoutines: 'Além de ligar e desligar as luzes, o firmware permite programar períodos do dia com intensidades diferentes para cada canal.',
      realTimeClock: 'O RTC é utilizado para manter os horários das rotinas de alimentação e iluminação, mesmo quando o sistema não está conectado à internet.',
      interface: 'A interface foi desenvolvida em um display TFT e mostra informações como temperatura, estado dos equipamentos, iluminação, horários de alimentação e conexão Wi-Fi. Também possui menus para alterar as configurações.',
      wifi: 'O ESP32 utiliza Wi-Fi para se conectar à rede e possui rotinas para tentar restabelecer a conexão quando ela é perdida.',
      mqtt: 'O protocolo MQTT é utilizado para enviar informações e receber comandos, permitindo integrar o aquário a uma plataforma externa de monitoramento e controle.',
      memory: 'As configurações de temperatura, iluminação e alimentação são armazenadas em memória não volátil, utilizando a interface EEPROM do firmware.',
      multitasking: 'O código utiliza tarefas e temporizadores para organizar a leitura dos sensores, o controle dos atuadores, a atualização da tela e a comunicação com a rede, evitando concentrar tudo em uma única rotina.',
      mainFunctions: [
        'Monitoramento da temperatura da água',
        'Controle automático do termostato',
        'Controle automático do cooler para resfriamento',
        'Configuração da temperatura desejada',
        'Programação dos horários de alimentação',
        'Controle automático do alimentador',
        'Configuração da intensidade da iluminação',
        'Controle independente dos canais de iluminação',
        'Programação dos horários de iluminação',
        'Criação de rotinas de iluminação',
        'Interface gráfica TFT',
        'Conectividade Wi-Fi',
        'Comunicação MQTT',
        'Armazenamento em EEPROM',
        'Execução multitarefa (Timers/Tasks)'
      ],
      engineeringSkills: [
        'Desenvolvimento de firmware C/C++',
        'Programação ESP32',
        'Controle de temperatura',
        'Automação e controle de atuadores',
        'Sinais PWM',
        'Comunicação MQTT e Wi-Fi',
        'Desenvolvimento de interface gráfica',
        'Integração com RTC e EEPROM',
        'Gerenciamento de tarefas e multithreading'
      ]
    },
    media: {
      gif1: {
        title: 'Quilli — Aquário Inteligente',
        description: 'Demonstração da interface TFT e da navegação entre as funções de controle do aquário.',
        url: '/images/AquarioFuncionamento2.gif'
      },
      gif2: {
        title: 'Quilli — Aquário Inteligente',
        description: 'Demonstração do funcionamento automático da rotina de alimentação e iluminação.',
        url: '/images/AquarioFuncionamento.gif'
      },
      image1: {
        title: 'Quilli — Aquário Inteligente',
        description: 'Imagem do protótipo, mostrando o hardware e os principais componentes (ESP32, TFT, Sensores).',
        url: '/images/Aquario.jpeg'
      },

    },
    result: 'O projeto reuniu em um único sistema o monitoramento da temperatura, o controle de aquecimento e resfriamento, a alimentação automática e a programação da iluminação. A integração do ESP32 com sensores, RTC, display TFT, memória e comunicação Wi-Fi/MQTT permitiu desenvolver uma solução de automação para aquários. O trabalho foi importante para praticar C/C++, sistemas embarcados, controle de atuadores e organização de um firmware com várias funções.',
    githubUrl: 'https://github.com/mateusjrs/quilli-smart-aquarium'
  }
  ,
  {
    id: 'emb-110-flight-dynamics',
    title: 'Análise do Comportamento de Voo do EMB-110 Bandeirante',
    category: 'Aerospace',

    shortDescription: 'Estudo da aerodinâmica, estabilidade e dinâmica de voo do EMB-110 Bandeirante, utilizando AutoCAD, AVL e MATLAB.',

    technologies: [
      'MATLAB',
      'AVL',
      'AutoCAD',
      'Vortex Lattice Method (VLM)',
      'Dinâmica de Voo',
      'Mecânica do Voo'
    ],

    imageUrl: '/images/bandeirante-real.jpg',
    gallery: [
      '/images/bandeirante-avl.png',
      '/images/bandeirante-plot.png'
    ],
    featured: true,

    summary: 'O projeto foi desenvolvido na disciplina de Mecânica do Voo e teve como objetivo estudar o comportamento do EMB-110 Bandeirante. Comecei pela reconstrução da geometria da aeronave a partir de desenhos e informações técnicas. Depois, utilizei o AVL para analisar a aerodinâmica e obter as derivadas de estabilidade e controle. Com esses dados, desenvolvi no MATLAB um simulador de seis graus de liberdade (6-DOF) para observar como a aeronave responde a comandos no aileron, profundor e leme. O estudo também comparou duas condições de massa e centro de gravidade.',

    problem: 'Uma das principais dificuldades foi obter as dimensões necessárias para representar a aeronave, já que nem todas estavam disponíveis diretamente na documentação. Foi necessário utilizar as três vistas como referência e conferir as proporções com os dados conhecidos. Outro desafio foi transformar os resultados aerodinâmicos do AVL em um modelo de dinâmica de voo no MATLAB, permitindo analisar a trimagem e a resposta da aeronave a diferentes comandos.',

    contribution: '',

    engineeringDetails: {
      aircraft: 'A aeronave estudada foi o EMB-110 Bandeirante (C-95), um bimotor turboélice de asa baixa e empenagem convencional. Como referência, foram utilizados dados encontrados em manuais técnicos e na documentação de certificação indicada no estudo.',

      geometry: 'A geometria foi reconstruída no AutoCAD utilizando as vistas superior, frontal e lateral da aeronave. Os desenhos foram ajustados à escala para obter dimensões e posições das superfícies. No modelo adotado, foram considerados envergadura de 15,33 m, área alar de 29,10 m², alongamento de 8,08, corda média aerodinâmica de 1,98 m, diedro de 7°, incidência da asa de 3° e comprimento de fuselagem de 15,10 m.',

      cad: 'No AutoCAD, utilizei as três vistas para acompanhar os contornos da asa, da fuselagem e da empenagem. A comparação entre as vistas ajudou a estimar dimensões que não estavam indicadas diretamente. Os valores obtidos foram comparados com as referências disponíveis e serviram de base para criar o modelo utilizado no AVL.',

      massAndCG: 'Foram consideradas duas condições de carregamento: uma com massa de 5.000 kg e centro de gravidade (CG) em aproximadamente 6,534 m, e outra com 3.380 kg e CG em aproximadamente 6,645 m. A comparação foi feita para observar como a mudança de massa e de posição do CG influencia as respostas da aeronave.',

      inertia: 'Os momentos de inércia foram estimados a partir da massa, das dimensões gerais da aeronave e de valores aproximados de raios de giração. Essas estimativas foram utilizadas no modelo de dinâmica de voo para representar as duas condições de carregamento.',

      aerodynamicModel: 'A modelagem aerodinâmica foi realizada no Athena Vortex Lattice (AVL), que utiliza o método dos vórtices em malha (VLM). Modelei as superfícies sustentadoras e defini os parâmetros necessários para as análises. A fuselagem foi representada de forma simplificada devido às limitações do método para esse tipo de geometria.',

      derivatives: 'No AVL, obtive derivadas de estabilidade e controle que relacionam o ângulo de ataque, a derrapagem, as taxas angulares e os comandos das superfícies às forças e aos momentos aerodinâmicos. Esses resultados foram utilizados tanto nos cálculos de trimagem quanto no simulador desenvolvido em MATLAB.',

      trim: 'Foi realizada uma análise de trimagem longitudinal para encontrar o ângulo de ataque e a deflexão do profundor necessários ao voo reto e nivelado. Os cálculos foram feitos para velocidades entre 70 e 130 m/s e comparados com os resultados gerados pelo AVL.',

      trimValidation: 'Os valores obtidos pelos cálculos analíticos ficaram próximos dos resultados do AVL. Na comparação apresentada, a maior diferença foi inferior a 0,2°, ocorrendo nas menores velocidades analisadas. Isso ajudou a conferir a implementação dos cálculos de trimagem.',

      simulation: 'No MATLAB, desenvolvi um simulador não linear de seis graus de liberdade (6-DOF), utilizando o integrador ode45. O código calcula a evolução das velocidades, taxas angulares, atitude e posição da aeronave a partir das equações de movimento.',

      equations: 'O simulador utiliza as equações de movimento translacional e rotacional da aeronave. Para calcular as forças e os momentos, os coeficientes aerodinâmicos foram combinados com a pressão dinâmica e as dimensões de referência da aeronave.',

      aerodynamicForces: 'O modelo considera sustentação, arrasto, força lateral e momentos de rolagem, arfagem e guinada. Também inclui a influência do ângulo de ataque, da derrapagem, das taxas angulares e das deflexões de aileron, profundor e leme.',

      dynamicTests: 'Para observar a resposta da aeronave, apliquei perturbações do tipo pulso e doublet nas superfícies de controle. Os gráficos permitiram acompanhar mudanças de velocidade, atitude, taxas angulares, altitude e trajetória.',

      pulse: 'Nos testes com pulso, foram utilizadas deflexões de 2°, iniciadas em t = 1 s e mantidas por 1 s. A partir dessas entradas, analisei a evolução das variáveis de voo ao longo do tempo.',

      doublet: 'Nos testes do tipo doublet, apliquei uma deflexão seguida por outra no sentido oposto. Esse tipo de comando ajudou a observar a resposta transitória da aeronave sem manter uma deflexão constante.',

      dynamicModes: 'A partir das respostas, estudei comportamentos relacionados aos modos de curto período, fugóide, Dutch roll e espiral. Os comandos no profundor destacaram principalmente o movimento longitudinal, enquanto os comandos laterais permitiram observar o acoplamento entre rolagem e guinada.',

      massComparison: 'Comparei os resultados das condições de 5.000 kg e 3.380 kg. Na configuração mais leve, com CG mais recuado, algumas perturbações produziram oscilações e variações de atitude mais intensas.',

      stabilityAnalysis: 'A comparação mostrou que a combinação de massa e posição do CG altera a resposta dinâmica do modelo. Em alguns testes, a condição de 3.380 kg apresentou oscilações maiores e menor amortecimento aparente. Esses resultados descrevem o comportamento do modelo nas condições simuladas e não substituem uma avaliação completa da estabilidade da aeronave real.',

      analyses: [
        'Reconstrução da geometria pelas três vistas (AutoCAD)',
        'Modelagem aerodinâmica no AVL',
        'Cálculo de derivadas de estabilidade e controle',
        'Análise de trimagem longitudinal',
        'Simulação de seis graus de liberdade no MATLAB',
        'Aplicação de comandos de pulso e doublet',
        'Estudo de modos de dinâmica de voo',
        'Comparação de duas condições de massa e centro de gravidade'
      ]
    },

    result: 'O projeto reuniu diferentes etapas de uma análise de Mecânica do Voo, desde a reconstrução da geometria até a simulação das respostas da aeronave. Foi possível comparar os resultados de trimagem com o AVL e observar, no MATLAB, como o modelo reage a comandos de controle. Também identifiquei diferenças entre as duas condições de massa e centro de gravidade estudadas. O trabalho foi importante para colocar em prática conceitos de aerodinâmica, estabilidade, programação e dinâmica de voo.',

    githubUrl: 'https://github.com/Mateusjrs/Projetos/tree/main/DinamicaVooBandeirante',
    // @ts-ignore
    report: 'Relatório Técnico Completo: Análise do Comportamento de Voo do EMB-110 Bandeirante'
  },
  {
    id: 'cessna-182-avionics-modification',
    title: 'Estudo de Modificação do Sistema Aviônico — Cessna 182',
    category: 'Aerospace',

    shortDescription: 'Estudo de substituição de um equipamento aviônico por um Garmin GNS 430W, incluindo componentes, consumo elétrico e proposta de integração com a aeronave.',

    technologies: [
      'Engenharia Aeronáutica',
      'Sistemas Elétricos de Aeronaves',
      'Aviônicos',
      'Balanço de Carga Elétrica',
      'Diagramas Elétricos (Wiring)',
      'Documentação Técnica',
      'Regulamentação Aeronáutica'
    ],

    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Cessna182t_skylane_n2231f_cotswoldairshow_2010_arp.jpg/1280px-Cessna182t_skylane_n2231f_cotswoldairshow_2010_arp.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail',
    featured: false,

    summary: 'O projeto consistiu em um estudo de modificação do sistema aviônico de um Cessna 182, considerando a substituição do equipamento RT-385 por um Garmin GNS 430W. O trabalho envolveu a consulta à documentação técnica, o levantamento dos componentes necessários e a análise do consumo elétrico dos equipamentos. Também organizei uma proposta simplificada de ligações elétricas, incluindo alimentação, aterramento e proteção dos circuitos. O objetivo foi entender quais verificações de engenharia são necessárias antes de realizar uma alteração desse tipo em uma aeronave.',

    problem: 'A substituição de um equipamento aviônico não depende apenas de verificar se ele cabe no painel. Também é necessário avaliar a alimentação elétrica, o consumo de corrente, as conexões e os componentes necessários para a instalação. O principal desafio foi reunir essas informações a partir da documentação e utilizá-las para propor uma integração coerente com o sistema elétrico considerado no estudo.',

    contribution: '',

    engineeringDetails: {
      aircraft: 'O estudo considerou um Cessna 182 de 1979, utilizando como referência uma arquitetura elétrica de 28 V e os equipamentos descritos na atividade.',

      modification: 'A proposta foi substituir o sistema RT-385 por um Garmin GNS 430W, que reúne funções de navegação e comunicação. Para isso, foram levantados os requisitos de montagem, alimentação, conectores, proteção elétrica e antena GPS/WAAS.',

      regulatory: 'Durante o estudo, consultei a Instrução Suplementar IS nº 21-021, com atenção à seção 5.6.1 indicada na atividade. Essa etapa ajudou a entender a importância da documentação e dos requisitos aplicáveis a modificações de aeronaves. O trabalho é um estudo acadêmico e não representa uma instalação aprovada para uso em voo.',

      equipment: 'Foi elaborada uma relação dos principais itens previstos para a instalação: Garmin GNS 430W, suporte de montagem (mounting rack), conjunto de conectores (connector kit), placa traseira (back plate) e antena GA 35 GPS/WAAS. A seleção foi organizada para facilitar a identificação e a consulta aos documentos técnicos.',

      equipmentList: [
        '01 × Garmin GNS 430W',
        '01 × Mounting Rack',
        '01 × Connector Kit',
        '01 × Back Plate',
        '01 × GA 35 GPS/WAAS Antenna'
      ],

      electricalSystem: 'Foi considerado um sistema elétrico de 28 V. O estudo comparou as correntes atribuídas ao equipamento removido e ao novo equipamento para estimar como a substituição poderia alterar a carga elétrica da aeronave.',

      loadAnalysis: 'No levantamento utilizado, o RT-385A foi considerado com corrente típica de 2,0 A. Para o GNS 430W, foram adotados 0,8 A em operação típica e 3,0 A durante a transmissão. A comparação direta resulta em uma redução de 1,2 A na condição típica e um aumento de 1,0 A quando o novo equipamento está transmitindo, em relação aos 2,0 A usados como referência para o equipamento removido. Trata-se de uma comparação simplificada entre as condições informadas.',

      generator: 'Para os cálculos, foram considerados um alternador de 28 V e 60 A e uma bateria de 24 V e 14 Ah. Esses valores serviram como referência para discutir a capacidade de alimentação e os efeitos da mudança no sistema elétrico.',

      electricalMargin: 'Como critério de estudo, foi adotado o uso de até 80% da capacidade nominal do alternador, correspondente a 48 A. Esse valor foi utilizado como referência para a análise de carga. Para confirmar a margem disponível, seria necessário conhecer também o consumo dos demais equipamentos ligados à aeronave nas condições de operação.',

      wiring: 'Foi elaborada uma proposta simplificada de integração elétrica, indicando as ligações de alimentação, aterramento e proteção e sua relação com o barramento de aviônicos existente.',

      protection: 'No exercício, foram considerados circuit breakers de 5 A para a alimentação principal e 10 A para o circuito de comunicação (COM). Esses valores fazem parte da proposta estudada e precisariam ser conferidos na documentação de instalação aplicável antes de qualquer implementação real.',

      connections: 'As conexões foram organizadas a partir dos conectores indicados no estudo. No P4001 (Main), foram considerados os pinos 19 e 20 para Aircraft Power 1 e os pinos 77 e 78 para Aircraft Ground. No P4002 (COM), os pinos 11 e 12 foram associados à alimentação COM e os pinos 21 e 22 ao aterramento. No P4006 (NAV), foi considerado o pino 44 para NAV Power. Essas indicações são parte do estudo e não devem ser usadas como instruções de instalação sem conferência no manual correspondente.',

      antenna: 'A proposta também incluiu a antena GA 35 GPS/WAAS, prevista como parte do conjunto necessário ao funcionamento das funções de navegação do novo equipamento.',

      documentation: 'As informações foram reunidas em uma documentação de engenharia com lista de equipamentos, identificação de componentes, comparação do consumo elétrico e proposta de conexões. Essa organização facilitou o acompanhamento das decisões tomadas durante o estudo.',

      engineeringSkills: [
        'Leitura de documentação técnica aeronáutica',
        'Interpretação de requisitos de instalação',
        'Sistemas elétricos de aeronaves',
        'Balanço de carga elétrica',
        'Levantamento de componentes e part numbers',
        'Estudo de proteção e alimentação elétrica',
        'Interpretação de diagramas de wiring',
        'Estudo de integração de equipamentos aviônicos',
        'Noções de regulamentação e aeronavegabilidade',
        'Organização de documentação de engenharia'
      ]
    },

    result: 'O projeto resultou em um estudo técnico para a substituição do RT-385 pelo Garmin GNS 430W em um Cessna 182. Foram identificados os principais componentes envolvidos, comparadas as correntes elétricas adotadas e organizadas as conexões previstas para o equipamento. O trabalho ajudou a compreender como uma modificação aviônica envolve documentação, integração elétrica e avaliação de requisitos, além da escolha do equipamento. Para uma instalação real, ainda seriam necessárias verificações específicas da aeronave, da documentação aprovada e do balanço completo de cargas.',

    githubUrl: 'https://github.com/Mateusjrs/Projetos/tree/main/ControleCargaCessna'
  }
]