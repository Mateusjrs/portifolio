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
    shortDescription: 'Modelagem estrutural e análise de deformação de uma estrutura treliçada utilizando o Método dos Elementos Finitos no ANSYS Mechanical.',
    technologies: [
      'ANSYS Mechanical',
      'FEA (Elementos Finitos)',
      'Análise Estática Estrutural',
      'Mecânica dos Sólidos'
    ],
    imageUrl: '/images/trel-1.png', 
    featured: false,
    summary: 'Este projeto consiste na análise estrutural de uma estrutura treliçada utilizando o ANSYS Mechanical, com o objetivo de investigar seu comportamento sob as condições de carregamento aplicadas. A geometria é composta por barras interconectadas, cuja configuração permite estudar a distribuição de esforços e os deslocamentos resultantes da interação entre seus elementos.',
    problem: 'O objetivo principal era aplicar conceitos de mecânica dos sólidos para compreender a resposta de estruturas treliçadas, relacionando geometria, condições de contorno e carregamentos. Além disso, o projeto visava desenvolver competências avançadas em simulação numérica e interpretação crítica de resultados de engenharia.',
    contribution: 'Execução de simulação estática estrutural para avaliar a deformação total e a deformação direcional no eixo X. A configuração da simulação e a visualização dos resultados permitiram identificar as regiões com os maiores deslocamentos e compreender como a montagem geométrica influencia a resposta da estrutura aos esforços.',
    engineeringDetails: {
      analysis: 'A interpretação da distribuição dos deslocamentos permitiu a identificação de regiões nodais e barras que exigem maior atenção no comportamento global da estrutura.',
      'Deformação Total': 'Avaliação dos deslocamentos globais resultantes ao longo da estrutura, com valor máximo de aproximadamente 0,000649 mm na simulação apresentada.',
      'Deformação Direcional (Eixo X)': 'Investigação dos deslocamentos específicos ao longo do eixo horizontal, registrando valor máximo de aproximadamente 0,000288 mm e mínimo de -0,00000765 mm.',
      mainFindings: [
        'A geometria das barras dita diretamente a distribuição dos esforços e o deslocamento nodal.',
        'O deslocamento máximo global (0,000649 mm) localiza-se nas regiões de menor restrição.',
        'A deformação no eixo X apresentou compressão e tração com pico de 0,000288 mm.',
        'Os resultados obtidos refletem condições específicas de carregamento e não comprovam, isoladamente, a segurança estrutural final do modelo.'
      ],
      engineeringSkills: [
        'Simulação em ANSYS Mechanical',
        'Método dos Elementos Finitos (FEA)',
        'Mecânica dos Sólidos Aplicada',
        'Interpretação de Resultados Numéricos'
      ]
    },
    result: 'A análise forneceu um mapeamento detalhado da mecânica da treliça sob carga, destacando a interação entre os elementos. A simulação atendeu ao objetivo de consolidar conceitos de análise estrutural, fornecendo métricas exatas de deslocamento que podem servir como base para dimensionamento e verificações futuras de falha ou fadiga.',
    githubUrl: 'https://github.com/Mateusjrs/Projetos',
    media: {
      totalDeformation: {
        title: 'Deformação Total',
        description: 'Distribuição dos deslocamentos globais resultantes ao longo da estrutura treliçada.',
        url: '/images/trel-1.png'
      },
      directionalDeformation: {
        title: 'Deformação Direcional (Eixo X)',
        description: 'Investigação dos deslocamentos específicos ao longo do eixo horizontal (tração/compressão).',
        url: '/images/trel-2.png'
      }
    }
  },
  {
    id: 'quilli-hardware-design',
    title: 'Projeto Eletrônico e Hardware — Aquário Inteligente',
    category: 'Hardware',
    shortDescription: 'Desenvolvimento do esquemático e arquitetura de hardware para automação de aquários, focando em isolamento óptico, eletrônica de potência e controle de cargas.',
    technologies: [
      'Design de PCB / Esquemáticos',
      'Eletrônica de Potência',
      'Isolamento Óptico',
      'MOSFETs / Relés',
      'Comunicação RS-485',
      'Barramentos I2C e SPI'
    ],
    imageUrl: '/images/esquematicoAquario.png', 
    featured: false,
    summary: 'O Aquário Inteligente foi desenvolvido como um sistema embarcado completo, tendo um ESP32 como controlador central e uma arquitetura eletrônica dedicada para integrar sensores, atuadores, interfaces de usuário, comunicação e alimentação. O hardware foi organizado em blocos funcionais, separando os circuitos de processamento e sinais dos circuitos responsáveis pelo acionamento de potência.',
    problem: 'Controlar aquecedores, coolers de 12V e fitas de LED de alta potência através de um microcontrolador que opera em 3.3V (ESP32) apresenta riscos graves, como transientes, ruídos elétricos e até a queima do controlador. Era necessário desenvolver um projeto de hardware robusto, que isolasse a parte lógica da parte de potência, e que coubesse em um layout pequeno.',
    contribution: 'Fui responsável pela engenharia e projeto elétrico do sistema. Especifiquei os estágios de acionamento utilizando optoacopladores, transistores BC817 e MOSFETs. Dimensionei a rede de distribuição de energia (HLK-5V e linhas de 12V) e estruturei a comunicação (SPI para TFT, I2C para RTC, e módulo RS-485 via MAX485).',
    engineeringDetails: {
      schematic: 'O projeto eletrônico foi desenvolvido a partir de um esquemático completo, onde estão representados o ESP32, fontes de alimentação, entradas, sensores, circuitos de acionamento, interfaces de comunicação, display, RTC e conectores. A organização em blocos facilita a identificação e montagem do sistema.',
      controller: 'O ESP32-DEVKIT-V1 atua como unidade central de processamento. Ele é responsável pela aquisição dos sinais analógicos, processamento da lógica, controle de atuadores via PWM, display gráfico e conectividade sem fio.',
      power: 'A alimentação utiliza uma fonte isolada HLK-5V para a lógica e possui uma linha de 12V destinada aos atuadores (cooler/luzes). A distribuição foi organizada para que o ESP32 comande cargas de maior potência sem submetê-lo diretamente às correntes dessas cargas.',
      thermostat: 'O aquecedor é acionado por um estágio dedicado com transistor BC817 e relé de 5V. Essa configuração permite que o pino do ESP32 atue de maneira isolada. Um diodo 1N4007 flyback é utilizado no circuito para proteção contra transientes da bobina do relé.',
      cooler: 'O cooler é acionado por um estágio eletrônico baseado em optoacoplador PC817 e MOSFET de potência, garantindo separação galvânica entre o controle (3.3V) e a potência (12V).',
      lighting: 'O sistema possui múltiplos canais independentes (lâmpadas e fitas LED) controlados via MOSFETs e optoacopladores PC817, habilitando ajuste de intensidade da iluminação via PWM sem sobrecarregar a fonte primária.',
      adc: 'O projeto incorpora um conversor analógico-digital ADS1115 (16 bits) via I2C para aquisição de sinais analógicos com maior resolução do que os ADCs internos do ESP32 permitem.',
      communication: 'Foi utilizado um transceptor MAX485 (Half-Duplex) para interface física RS-485. Sinais de controle do ESP32 alternam entre transmissão e recepção, permitindo integração futura com sensores ou atuadores industriais em rede Modbus.',
      rtc: 'O controle temporal utiliza um módulo RTC DS3231 via barramento I2C, mantido por uma bateria de lítio CR2032 (RTC Backup) para não perder as agendas programadas do aquário em caso de queda de energia.',
      display: 'O hardware disponibiliza barramento SPI de alta velocidade dedicado ao Display TFT, e botões físicos nas entradas do ESP (pull-up/pull-down) para interface de usuário (IHM).',
      protection: 'A arquitetura é focada na proteção do microcontrolador: uso intenso de optoacopladores (PC817), MOSFETs de nível lógico (Logic Level) com resistores de gate, e diodos de proteção. As cargas nunca encontram diretamente os pinos do ESP32.',
      bom: 'A lista de materiais (BOM) foi estruturada englobando toda a arquitetura de CIs, transistores, reguladores HLK, relés, capacitores de filtro, resistores limitadores e terminais de conexão padronizados tipo JST-XH.',
      hardwareComponents: [
        'ESP32-DEVKIT-V1',
        'Fonte Hi-Link HLK-5M05',
        'ADC de 16 bits ADS1115',
        'Transceptor RS-485 (MAX485)',
        'RTC DS3231 + Bateria CR2032',
        'Relé SRD-05VDC-SL-C',
        'Optoacopladores PC817',
        'Power MOSFETs (IRF)',
        'Transistores NPN BC817',
        'Diodo Flyback 1N4007',
        'Conectores tipo JST-XH'
      ],
      engineeringSkills: [
        'Projeto de Circuitos Eletrônicos (Schematic Design)',
        'Isolamento Galvânico e Eletrônica de Potência',
        'Dimensionamento de Relés e Flyback',
        'Acionamento de MOSFETs e Optoacopladores',
        'Barramentos industriais: RS-485 / Modbus',
        'Barramentos embarcados: I2C e SPI',
        'Interfaceamento ADC de alta resolução',
        'Estruturação de BOM'
      ]
    },
    
    media: {
      schematicImg: {
        title: 'Esquemático Eletrônico do Aquário Inteligente',
        description: 'Desenho unifilar completo separando os blocos de sensores, lógica e potência.',
        url: '/images/esquematicoAquario.png' // <-- Certifique-se de salvar sua foto do esquemático com este nome
      },
      pcb3d: {
        title: 'Modelo 3D da PCB / Engenharia de Layout',
        description: 'Visualização 3D da placa de circuito impresso projetada para abrigar a fonte HLK, o ESP32, os blocos de relés, MOSFETs e os conectores JST-XH.',
        url: '/images/pcbAquario.png' // <-- Certifique-se de salvar sua foto 3D com este nome
      }
    },
    result: 'O desenvolvimento arquitetural resultou em uma placa (hardware) centralizada e extremamente segura. A divisão física entre as seções lógica, medição e potência protege o processador principal de ruídos elétricos. O emprego de MOSFETs de potência junto a optoacopladores permitiu acionamento contínuo das rotinas térmicas e de PWM sem sobreaquecimento ou danos elétricos à unidade central.',
    githubUrl: 'https://github.com/Mateusjrs/Projetos/tree/main/AquarioHardware/Aquario'
  },
  {
    id: 'afrodite-autonomous-sumo',
    title: 'Afrodite — Robô Sumô Autônomo (3kg)',
    category: 'Hardware',
    shortDescription: 'Projeto de hardware e integração eletrônica para um robô de sumô autônomo da categoria 3kg, projetado para suportar até 100kg de peso virtual.',
    technologies: [
      'ESP32',
      'Design de PCB / Esquemáticos',
      'Sensores VL53L0X (ToF)',
      'Acelerômetro MPU6050',
      'Leitura PPM',
      'Controle de Motores',
      'Barramento I2C'
    ],
    imageUrl: '/images/Sumo3k.jpeg',
    featured: true,
    summary: 'A Afrodite é um projeto de robótica competitiva desenvolvido para a categoria Sumô Autônomo (3kg). O grande desafio mecânico e eletrônico deste projeto foi projetar um sistema capaz de gerar um "peso virtual" superior a 100kg (através de aerodinâmica/sucção) e, ao mesmo tempo, possuir um tempo de resposta extremamente rápido para localizar o oponente e desviar de bordas utilizando um conjunto avançado de sensores ToF e inerciais.',
    problem: 'Na categoria de sumô autônomo de 3kg, a tração e a velocidade de resposta são os fatores decisivos para a vitória. O desafio eletrônico consistia em integrar múltiplos sensores de distância (VL53L0X) via barramento I2C sem conflito de endereços, ler comandos de segurança (rádio PPM), monitorar a orientação (MPU6050) e acionar a lógica de motores sem que o ruído elétrico da alta corrente dos motores afetasse a estabilidade do ESP32.',
    contribution: 'Fui responsável pela arquitetura do hardware e elaboração do esquemático completo da placa principal. Desenvolvi a lógica de integração dos 5 sensores de distância VL53L0X gerenciando os pinos XSHUT, a interface do módulo inercial MPU6050 e a rede de distribuição de energia (Step Down 5V e reguladores 3V3). Também estruturei a leitura de sinais PPM do receptor de segurança e os barramentos para os sensores de borda.',
    engineeringDetails: {
      schematic: 'O esquemático foi desenhado separando claramente os blocos vitais do robô: alimentação, sensores de linha/borda, sensores de distância I2C, interface de rádio (PPM) e feedback visual (Display OLED e LEDs).',
      controller: 'O cérebro do robô é um ESP32-DEVKIT-V1, escolhido por sua alta capacidade de processamento (Dual Core), permitindo rodar a malha de controle dos motores em um núcleo enquanto processa a fusão de dados dos sensores I2C no outro.',
      power: 'Para suportar os picos de corrente e isolar a lógica, o projeto conta com um módulo Step Down dedicado para baixar a tensão da bateria para 5V, e reguladores g108433 para fornecer 3.3V limpo aos sensores e ao ESP32, com ampla filtragem por capacitores.',
      communication: 'O projeto faz uso intensivo do barramento I2C. Para utilizar 5 sensores VL53L0X simultaneamente, o ESP32 controla os pinos XSHUT de cada um (XSHUT1 a XSHUT5), inicializando-os um por vez e trocando seus endereços I2C dinamicamente no boot.',
      inputs: 'As entradas incluem 5 sensores ToF, sensores de borda (g1113), sensor inercial (MPU6050), e um receptor Nano R616XN para leitura do sinal PPM, que atua como chave de segurança/start remoto exigida pelas regras da competição.',
      display: 'O robô possui um Display OLED 128x64 e LEDs de debug para feedback visual instantâneo do estado da bateria e da leitura dos sensores durante os testes no dojô.',
      bom: 'A lista de materiais foi rigorosamente mapeada, totalizando 40 resistores (100Ω, 10kΩ, 20kΩ), 19 capacitores de filtro, 12 LEDs de status, receptor IR TSOP1838, além de conectores padronizados para módulos PPM, Display e Motores.',
      hardwareComponents: [
        'ESP32-DEVKIT-V1',
        'Sensores ToF (VL53L0X / I2c)',
        'Módulo Inercial (MPU6050)',
        'Sensores de Borda (g1113)',
        'Receptor PPM (Orange R616XN Nano)',
        'Módulo Step Down 5V',
        'Regulador 3.3V (g108433)',
        'Display OLED 128x64',
        'Receptor IR TSOP1838',
        'Rede de Capacitores (100nF, 10uF) e Resistores'
      ],
      engineeringSkills: [
        'Arquitetura de Hardware para Robótica',
        'Gerenciamento de Barramento I2C Multi-Device',
        'Condicionamento de Energia (Step-Down e LDOs)',
        'Design de Esquemático Eletrônico',
        'Integração de Sensores Inerciais e Ópticos',
        'Leitura de Sinais de Rádio (PPM)'
      ]
    },
    
    // === GALLERY SUBSTITUÍDA POR MEDIA ===
    media: {
      roboMontado: {
        title: 'Robô Afrodite (3kg)',
        description: 'Visão geral da montagem estrutural e eletrônica do robô de sumô.',
        url: '/images/Sumo3k.jpeg'
      },
      pcbLayout: {
        title: 'Design da PCB',
        description: 'Layout da placa de circuito impresso com o roteamento focado em minimizar ruídos.',
        url: '/images/pcb.png'
      },
      schematic: {
        title: 'Esquemático Eletrônico',
        description: 'Diagrama unifilar separando os blocos de alimentação, sensores e processamento.',
        url: '/images/esquematico.png'
      }
    },
    
    result: 'O projeto de hardware garantiu que o ESP32 operasse com energia limpa e estável, essencial para o funcionamento sem travamentos da malha de controle de alta velocidade. A estratégia de usar os pinos XSHUT permitiu a leitura simultânea de 5 sensores ToF, cobrindo um amplo campo de visão frontal e lateral. A placa se tornou o núcleo confiável que permitiu ao robô focar exclusivamente em sua estratégia de combate e no acionamento do sistema de vácuo (peso virtual).',
    githubUrl: 'https://github.com/Mateusjrs/Projetos/tree/main/Sumo3K'
  },
  {
    id: 'mini-sumo-autonomous',
    title: 'Mini Sumô Autônomo (500g) — Alta Densidade',
    category: 'Hardware',
    shortDescription: 'Miniaturização extrema da arquitetura do robô Afrodite, mantendo o processamento dual-core e múltiplos sensores ToF em uma PCB de alta densidade.',
    technologies: [
      'ESP32',
      'Design de PCB SMD',
      'Alta Densidade (High-Density Routing)',
      'Sensores VL53L0X',
      'Controle Inercial',
      'Eletrônica de Potência Compacta'
    ],
    imageUrl: '/images/MINISUMO_ANGULO.jpeg', // Substitua pela capa do seu robô
    featured: false,
    summary: 'Adaptação da arquitetura eletrônica e de controle do robô Afrodite (3kg) para a categoria Mini Sumô (500g). O desafio principal consistiu em compactar todo o processamento dual-core do ESP32, a leitura paralela de 5 sensores de distância (VL53L0X), o controle inercial e a eletrônica de potência dos motores em uma área rigorosamente restrita a 10x10 cm.',
    problem: 'A redução drástica de volume e massa agrava severamente os problemas de interferência eletromagnética (EMI) e dissipação térmica. Posicionar trilhas de alta corrente para os motores a poucos milímetros de distância de barramentos de comunicação sensíveis (I2C) exigia um roteamento de placa de circuito impresso (PCB) extremamente rigoroso para evitar ruídos e travamentos do microcontrolador durante os embates.',
    contribution: 'Realizei a transição do projeto de módulos comerciais para componentes discretos totalmente SMD (Surface-Mount Device). Refatorei o esquemático e executei o roteamento da placa garantindo o isolamento entre a área lógica e a de potência. Mantive a topologia XSHUT para o I2C e implementei reguladores monolíticos de alta frequência para reduzir o tamanho físico dos indutores da fonte.',
    engineeringDetails: {
      schematic: 'Transição completa para componentes SMD (pacotes 0603 e 0402). Eliminação de módulos "prontos" (breakout boards) em favor da integração dos circuitos integrados (como o MPU6050 e os próprios sensores ToF) diretamente na placa-mãe do robô.',
      controller: 'Uso otimizado do ESP32 soldado diretamente na placa, mantendo o processamento paralelo (FreeRTOS) que separa a malha de navegação (leitura I2C) da malha de controle PID dos motores.',
      power: 'Redesenho radical da fonte de alimentação. Substituição dos módulos Step-Down grandes por CIs reguladores buck monolíticos de alta frequência, que requerem capacitores e indutores drasticamente menores e reduzem o peso global.',
      communication: 'Roteamento focado do barramento I2C, utilizando trilhas mais curtas e vias de blindagem (ground shielding) para comunicação limpa com o MPU6050 e os 5 sensores VL53L0X multiplexados.',
      dimensions: 'Design estrutural confinado às regras da categoria Mini Sumô (máximo de 10x10 cm). A própria PCB precisou ser otimizada mecanicamente para se integrar de forma eficiente ao chassi metálico, sem exceder as cotas regulamentares.',
      protection: 'Implementação de planos de terra (GND planes) reforçados e vias térmicas (thermal vias) sob os controladores de motor (ponte H) para dissipar o calor gerado durante as disputas travadas no dojô, onde a corrente sobe drasticamente devido à alta tração mecânica.',
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
        'Roteamento de PCB de Alta Densidade (HDI)',
        'Miniaturização de Hardware',
        'Controle de EMI/EMC em Espaços Reduzidos',
        'Gestão Térmica em PCB (Thermal Vias)',
        'Soldagem e Integração de Componentes SMD Discretos'
      ]
    },
    media: {
      roboMontado1: {
        title: 'Robô Mini Sumô (Perspectiva)',
        description: 'Visão geral da montagem .',
        url: '/images/MINISUMO_ANGULO.jpeg' // <-- Adicione a imagem na pasta
      },
      roboMontado2: {
        title: 'Detalhe Estrutural',
        description: 'Posiocionamento dos sensores frontais.',
        url: '/images/MINISUMO.jpeg' // <-- Adicione a imagem na pasta
      },
      pcbLayout: {
        title: 'Layout da PCB ',
        description: 'Roteamento SMD focado no isolamento de ruídos eletromagnéticos entre a potência dos motores e o processamento lógico.',
        url: '/images/AfroditeMini.png' // <-- Adicione a imagem na pasta
      },
      schematic: {
        title: 'Esquemático Eletrônico',
        description: 'Diagrama de transição evidenciando a substituição de módulos prontos por componentes integrados diretamente.',
        url: '/images/esquematico.png' // <-- Adicione a imagem na pasta
      }
    },
    result: 'A miniaturização foi bem-sucedida, resultando em uma PCB extremamente compacta e otimizada termicamente. O layout rigoroso blindou os sinais lógicos contra os picos de ruído induzidos pela ponte H, garantindo ao robô um tempo de reação impecável e comunicação I2C estável mesmo sob intenso estresse elétrico e mecânico.',
    githubUrl: 'https://github.com/Mateusjrs/Projetos/tree/main/MiniSumo'
  },
 {
    id: 'can-bus-obd2-hacking',
    title: 'Scanner Automotivo e Engenharia Reversa via CAN-BUS',
    category: 'Hardware',
    
    shortDescription: 'Desenvolvimento de um scanner OBD-II sem fio com ESP32, implementando stack ISO-TP customizada para decodificação de telemetria, DTCs e Freeze Frames.',
    
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
    
    summary: 'Projeto completo de um datalogger e scanner automotivo sem fio. O sistema utiliza um ESP32 e um controlador MCP2515 para acessar a rede CAN veicular. Além de ler dados brutos (RAW), o firmware foi projetado para atuar como um scanner OBD-II ativo, solicitando o chassi (VIN), varrendo Códigos de Falha (DTCs), extraindo o contexto do erro (Freeze Frame) e transmitindo a telemetria em tempo real via Bluetooth.',
    
    problem: 'Ferramentas de diagnóstico comerciais costumam atuar como "caixas pretas", ocultando os dados RAW e limitando a análise de engenharia. O desafio era construir um hardware de baixo custo e desenvolver, do zero, uma stack de comunicação capaz não apenas de ler mensagens simples de 8 bytes, mas de remontar pacotes longos e gerenciar o fluxo de dados com a ECU em diferentes taxas de transmissão.',
    
    contribution: 'Desenvolvi o firmware em C++ implementando uma arquitetura baseada em Máquina de Estados para orquestrar as requisições OBD-II de forma não-bloqueante. Programei a detecção automática de baud rate (500k, 250k, 125k), a rotina de PID Discovery e, principalmente, uma camada ISO-TP customizada para gerenciar a fragmentação de mensagens, permitindo o tráfego de pacotes extensos como a leitura do VIN (Modo 09) e falhas ativas (Modo 03).',
    
    engineeringDetails: {
      firmwareArchitecture: 'Implementação de uma Máquina de Estados (OBD_IDLE, REQUEST_VIN, REQUEST_DTC, REQUEST_FF) para evitar o bloqueio do processador e garantir a prioridade máxima para a leitura do barramento CAN através de interrupções (emuladas por polling rápido).',
      
      isoTpStack: 'Desenvolvimento manual do protocolo de transporte ISO 15765-2 (ISO-TP). O firmware é capaz de processar Single Frames, identificar First Frames, responder com mensagens de controle de fluxo (Flow Control / CTS) respeitando os tempos de STmin, e remontar Consecutive Frames em um buffer local.',
      
      diagnostics: 'Suporte a múltiplos modos OBD-II: Mode 01 (Live Data), Mode 02 (Freeze Frame), Mode 03 (Leitura de DTCs), Mode 04 (Limpeza de falhas com trava de segurança de RPM) e Mode 09 (VIN).',
      
      hardware: 'Utilização do microcontrolador ESP32 integrado ao controlador CAN MCP2515 (via barramento SPI a 8MHz) em modo promíscuo (Filtros e Máscaras em 0x00) para capturar tanto mensagens de diagnóstico (0x7DF-0x7EF) quanto tráfego proprietário das montadoras.',
      
      connectivity: 'Integração com a stack Bluetooth clássica do ESP32 (BluetoothSerial) para streaming bidirecional da telemetria e recepção de comandos do usuário (ex: limpar falhas) de forma remota.',
      
      safety: 'Implementação de fallback de endereçamento (0x7DF, 0x7E0, 0x7E1) para aumentar a compatibilidade entre diferentes módulos do motor e rotina de segurança que bloqueia o comando de limpeza de falhas caso o motor esteja em funcionamento (RPM > 0).'
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
    
    result: 'O hardware e o firmware operaram com sucesso, estabelecendo comunicação estável, identificando os parâmetros suportados pelo veículo (PID Discovery) e processando telemetria e códigos de falha em tempo real através da interface Bluetooth, validando a robustez da stack ISO-TP desenvolvida.',
    
    githubUrl: 'https://github.com/Mateusjrs/Projetos/tree/main/CarControl' // <-- Ajuste o link do seu repositório aqui
  },
 {
    id: 'ir-universal-cloner',
    title: 'Clonador Universal Infravermelho para Automação',
    category: 'IoT',
    shortDescription: 'Sistema embarcado IoT com termostato preditivo e interface universal baseada em macros C para abstração de 19 protocolos de climatização.',
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
    summary: 'Projeto de um nó IoT (ITW-600) para automação de centrais de ar-condicionado. O sistema realiza engenharia reversa e reprodução de sinais infravermelhos (IR), e integra um sensor de temperatura (DS18B20) para operar como um termostato preditivo autônomo conectado à rede via MQTT. O projeto foi projetado para ambientes corporativos, suportando provisionamento via SmartConfig e atualização contínua do banco de dados na EEPROM.',
    problem: 'O ecossistema de climatização corporativa possui dezenas de marcas (Samsung, Carrier, Midea, Hitachi, etc.), cada uma com sua própria estrutura de codificação IR. Era necessário criar um dispositivo universal, capaz de autodetectar o modelo do equipamento, controlar ativamente a temperatura do ambiente sem oscilações bruscas (liga/desliga frequente) e comunicar-se de forma segura com um broker MQTT, sem travar o processador durante as tentativas de reconexão de rede.',
    contribution: 'Desenvolvi um firmware no padrão RTOS, onde a comunicação de rede e o provisionamento (ESP-Touch/SmartConfig) operam em background, enquanto o controle térmico roda continuamente. A principal contribuição arquitetural foi a criação de uma interface genérica de controle (ACInterface) estruturada via Macros C e ponteiros de função, permitindo integrar 19 bibliotecas de fabricantes diferentes em uma única lista gerenciável, reduzindo drasticamente o consumo de memória RAM do ESP32.',
    engineeringDetails: {
      firmwareArchitecture: 'Implementação de arquitetura baseada em abstração de ponteiros de função (`ACInterface`) para polimorfismo em C, instanciando drivers apenas sob demanda através de macros de pré-compilação (`DEF_DRIVER_...`).',
      thermostatControl: 'O controle de temperatura não usa apenas limite superior/inferior. Implementei um Filtro de Média Móvel Exponencial (EMA) sobre o sinal RAW do sensor e o cálculo da Taxa de Variação (Derivativa dT/dt). O algoritmo prediz a inércia térmica da sala e ajusta o setpoint do AC de forma suave, respeitando margens de overshoot e tempos de acomodação (Settling Time).',
      connectivity: 'Provisionamento de rede WiFi sem contato físico (headless) utilizando o protocolo SmartConfig/ESP-Touch. O dispositivo entra na rede e se cadastra automaticamente no Broker MQTT (iotew.com.br), gerenciando payloads dinâmicos (JSON) e tolerância a falhas (reconexões automáticas e salvamento de estado de pânico na EEPROM).',
      memoryManagement: 'Estruturação avançada de gravação na memória Flash/EEPROM, salvando as credenciais de rede, perfil do driver AC autodetectado e configurações do termostato, garantindo a recuperação integral do estado do sistema após quedas de energia e proteção contra loops infinitos de reset de Watchdog.',
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
    result: 'Dispositivo IoT altamente estável, capaz de controlar ativamente o conforto térmico e minimizar gastos energéticos evitando oscilações excessivas. A abstração universal (`ACInterface`) reduziu o código repetitivo, permitindo suporte "plug-and-play" para novas marcas de AC no futuro através de atualizações OTA (Over-The-Air).',
    githubUrl: 'https://github.com/Mateusjrs/Projetos/tree/main/InflaCold/itw600_v001' // <-- Coloque o seu link
  },
  {
    id: 'naca-5312-aerodynamic-analysis',
    title: 'Análise Aerodinâmica e Otimização Paramétrica do NACA 5312',
    category: 'Aerospace',
    shortDescription: 'Estudo paramétrico do perfil NACA 5312 utilizando XFLR5 e Python para investigar a influência da geometria sobre sustentação, arrasto, eficiência, pressão e camada limite.',
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
    
    // === BASTA ADICIONAR ESTE BLOCO AQUI ===
    gallery: [
      '/images/naca-cl-alpha.png',
      '/images/naca-efficiency.png',
      '/images/naca-cd-alpha.png',
      '/images/naca-boundary-layer.png'
    ],
    // =======================================

    featured: true,
    summary: 'Estudo computacional do perfil aerodinâmico NACA 5312 com o objetivo de investigar como alterações individuais em sua geometria modificam o desempenho aerodinâmico...',
    problem: 'O desempenho de um perfil aerodinâmico depende diretamente de sua geometria e das condições do escoamento. O desafio do projeto foi separar a influência de diferentes parâmetros geométricos sobre o comportamento do NACA 5312, evitando analisar apenas o perfil como uma configuração única. Para isso, foram desenvolvidas variações controladas de espessura, posição da espessura máxima, camber, posição do camber máximo, raio do bordo de ataque e geometria do bordo de fuga, permitindo comparar sistematicamente os efeitos de cada modificação.',
    contribution: 'Participei do desenvolvimento da análise aerodinâmica do NACA 5312, estruturando as comparações entre diferentes geometrias e interpretando os resultados das simulações. O estudo envolveu a configuração das análises no XFLR5, avaliação das curvas aerodinâmicas e processamento dos resultados em Python. Foram analisadas as relações entre geometria e coeficientes aerodinâmicos, distribuição de pressão, camada limite e centro de pressão, permitindo identificar quais modificações apresentavam maior impacto sobre o desempenho do perfil.',
    engineeringDetails: {
      baseline: 'O perfil de referência utilizado foi o NACA 5312. Sua nomenclatura indica 5% de camber máximo, localizado a 30% da corda, e espessura máxima correspondente a 12% da corda. O perfil foi utilizado como referência para todas as modificações geométricas realizadas ao longo do estudo.',
      simulation: 'As simulações foram realizadas utilizando o XFLR5, baseado em métodos de painel combinados a modelos de camada limite. As condições analisadas abrangeram números de Reynolds entre 4 × 10^6 e 6 × 10^6, números de Mach entre 0,15 e 0,22 e ângulos de ataque entre -2° e 14°.',
      postProcessing: 'Os resultados das simulações foram exportados e posteriormente tratados em Python. O processamento permitiu organizar os dados, gerar gráficos comparativos e avaliar de maneira consistente as diferenças entre as configurações geométricas analisadas.',
      parameters: 'O estudo foi estruturado de forma paramétrica, alterando individualmente características geométricas do perfil enquanto os demais parâmetros eram mantidos constantes. Essa abordagem permitiu associar diretamente cada alteração geométrica às mudanças observadas no comportamento aerodinâmico.',
      thickness: 'Foi analisada a influência da espessura máxima e de sua posição ao longo da corda. Foram comparadas configurações com espessura de 8% e 16%, além do deslocamento da posição da espessura máxima de 30% para 40% da corda. Os resultados mostraram que a posição da espessura pode ser tão relevante quanto seu valor absoluto, especialmente em relação ao arrasto, separação do escoamento e comportamento em elevados ângulos de ataque.',
      camber: 'A influência do camber também foi investigada por meio de configurações com 3% e 6% de curvatura máxima, além do deslocamento da posição do camber máximo de 30% para 40% da corda. O aumento do camber apresentou forte influência sobre a sustentação e sobre a eficiência aerodinâmica, enquanto o deslocamento da curvatura alterou a distribuição de pressão e a posição do centro de pressão.',
      leadingEdge: 'O raio do bordo de ataque foi analisado por meio de três configurações relativas ao valor original: 0,80R, 1,12R e 1,15R. A análise mostrou que alterações no raio modificam principalmente características associadas à região frontal e à transição do escoamento, apresentando influência relativamente limitada sobre os coeficientes aerodinâmicos globais.',
      trailingEdge: 'Também foi investigada a influência da forma e da espessura do bordo de fuga. As modificações permitiram avaliar o efeito da distribuição de carga na região posterior do perfil, incluindo alterações no momento aerodinâmico, no centro de pressão e no comportamento da esteira.',
      aerodynamicCurves: [
        'CL × α (Sustentação)',
        'CD × α (Arrasto)',
        'CM × α (Momento)',
        'CL/CD × α (Eficiência)',
        'Identificação de CL,max',
        'Identificação do ângulo de estol',
        'Análise do momento de arfagem'
      ],
      pressureAnalysis: 'Foram analisadas distribuições do coeficiente de pressão Cp ao longo da corda para diferentes ângulos de ataque. A análise permitiu identificar picos de sucção, alterações na distribuição de pressão e mudanças no carregamento aerodinâmico provocadas pelas modificações geométricas.',
      boundaryLayer: 'A camada limite foi analisada por meio da espessura de deslocamento ao longo da corda. Essa análise permitiu avaliar como diferentes geometrias modificam o crescimento da camada limite, os gradientes de pressão e a tendência à separação do escoamento.',
      centerOfPressure: 'O comportamento do centro de pressão foi avaliado em função do ângulo de ataque. A posição do centro de pressão foi utilizada para relacionar alterações na distribuição de pressão com mudanças no momento aerodinâmico e nas características de estabilidade longitudinal do perfil.',
      analysis: 'Ao todo, foram gerados mais de 40 gráficos para comparar os diferentes cenários. A análise conjunta dos resultados permitiu avaliar os efeitos da geometria não apenas sobre sustentação e arrasto, mas também sobre eficiência aerodinâmica, momento, pressão, camada limite e centro de pressão.',
      mainFindings: [
        'Aumento do CL associado ao aumento do Reynolds, camber e modificações no bordo de fuga.',
        'Aumento do arrasto associado à redução do Reynolds, aumento da espessura e camber.',
        'Aumento do camber apresentou forte influência positiva sobre a sustentação e a eficiência.',
        'O raio do bordo de ataque apresentou influência pequena nos coeficientes aerodinâmicos globais.',
        'O deslocamento da espessura máxima e do camber modificou significativamente a distribuição de pressão.',
        'As alterações apresentaram efeitos diferentes dependendo do ângulo de ataque analisado.'
      ],
      engineeringSkills: [
        'Modelagem de perfis aerodinâmicos',
        'Análise paramétrica',
        'Aerodinâmica computacional (CFD Básico)',
        'Método dos Painéis',
        'Análise de camada limite',
        'Distribuição de pressão',
        'Processamento de dados (Python)',
        'Geração e interpretação de curvas',
        'Análise de estabilidade longitudinal'
      ]
    },
    result: 'A análise demonstrou que pequenas alterações geométricas podem produzir mudanças significativas no comportamento aerodinâmico do perfil, embora a influência de cada parâmetro dependa da faixa de ângulo de ataque e das condições de escoamento. O aumento do camber e determinadas alterações na geometria do bordo de fuga apresentaram forte influência sobre a sustentação e a eficiência. O estudo evidenciou a importância da distribuição de pressão e do comportamento da camada limite para compreender as diferenças observadas nas curvas. A metodologia permitiu relacionar diretamente modificações geométricas com desempenho aerodinâmico.',
    githubUrl: 'https://github.com/Mateusjrs/Projetos/tree/main/AnaliseNaca', // <-- Altere para o seu repositório real
    // @ts-ignore
    report: 'Relatório técnico completo: Análise do Perfil Aerodinâmico NACA 5312.'
  },
  {
    id: 'quilli-smart-aquarium',
    title: 'Aquário Inteligente',
    category: 'IoT',
    shortDescription: 'Sistema embarcado para automação de aquário, integrando controle de temperatura, alimentação programada, iluminação com intensidade ajustável e conectividade Wi-Fi.',
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
    imageUrl: '/images/Aquario.jpeg', // Imagem principal provisória
    featured: true,
    summary: 'Desenvolvimento do Quilli, um aquário inteligente baseado em ESP32 desenvolvido para automatizar as principais tarefas de manutenção e controle do aquário. O sistema integra controle automático de temperatura, alimentação programada, iluminação com ajuste de intensidade e horários, interface gráfica TFT e conectividade Wi-Fi. A arquitetura foi desenvolvida para permitir que as diferentes funções operem de forma independente e coordenada, reduzindo a necessidade de intervenção manual do usuário.',
    problem: 'A manutenção de um aquário envolve tarefas que precisam ser realizadas de maneira periódica e consistente, como controlar a temperatura da água, alimentar os peixes em horários determinados e reproduzir ciclos adequados de iluminação. O objetivo do projeto foi desenvolver um sistema capaz de automatizar essas funções e centralizar seu controle em uma única plataforma, permitindo configurar horários, intensidades e parâmetros diretamente pela interface do equipamento ou remotamente.',
    contribution: 'Atuei no desenvolvimento do firmware e na integração entre hardware e software do Quilli. Implementei as rotinas de controle de temperatura, acionamento do termostato e cooler, programação dos horários de alimentação, controle da intensidade e dos horários da iluminação, além da interface gráfica e comunicação Wi-Fi/MQTT. Também trabalhei na organização do firmware em diferentes tarefas e temporizadores para que as funções de monitoramento, controle e comunicação pudessem operar simultaneamente.',
    engineeringDetails: {
      systemArchitecture: 'O Quilli utiliza um ESP32 como controlador principal, responsável pelo processamento das informações dos sensores, execução das rotinas de automação, controle dos atuadores, atualização da interface e comunicação com o servidor. O firmware foi dividido em módulos específicos para gerenciamento de memória, comunicação, interface, sensores e funções de controle.',
      temperatureControl: 'O sistema realiza o monitoramento contínuo da temperatura da água e permite ao usuário definir uma temperatura desejada e uma faixa de controle. A partir da temperatura medida, o firmware determina automaticamente qual atuador deve ser acionado para aproximar a água da temperatura configurada.',
      thermostat: 'O controle de aquecimento é realizado por meio de um termostato acionado pelo ESP32. Quando a temperatura está abaixo da condição desejada, o sistema pode ativar o aquecedor e mantê-lo funcionando até que a temperatura alcance a faixa estabelecida. O firmware também possui limites de segurança para evitar o acionamento do controle quando a temperatura medida estiver fora de uma faixa válida.',
      cooler: 'Quando a temperatura da água ultrapassa a faixa configurada, o sistema pode acionar um cooler para realizar o resfriamento. Dessa forma, o Quilli consegue atuar tanto no aquecimento quanto no resfriamento, mantendo a temperatura próxima ao valor definido pelo usuário.',
      temperatureSafety: 'Foram definidos limites mínimo e máximo para a temperatura considerada válida. Caso a leitura ultrapasse esses limites, o sistema interrompe o acionamento do aquecedor e do cooler, desabilitando temporariamente o controle automático para evitar que uma leitura inválida provoque um acionamento inadequado.',
      feedingControl: 'O sistema possui um alimentador automático capaz de executar rotinas de alimentação previamente programadas. O usuário pode definir os horários em que a alimentação deve ocorrer e a quantidade de acionamentos do mecanismo, permitindo automatizar completamente essa tarefa.',
      feedingSchedule: 'As rotinas de alimentação são associadas ao relógio de tempo real do sistema. O ESP32 compara continuamente o horário atual com os horários programados e executa automaticamente o alimentador quando uma rotina é atingida. O sistema também mantém informações sobre as rotinas configuradas e os próximos horários de alimentação.',
      feedingMemory: 'As configurações das rotinas são armazenadas em memória não volátil, permitindo preservar os horários e parâmetros configurados mesmo após uma reinicialização do equipamento.',
      lightingControl: 'O Quilli possui controle independente de diferentes canais de iluminação. Cada canal pode ter sua intensidade configurada, permitindo adaptar a iluminação às necessidades do aquário e criar diferentes cenários de funcionamento.',
      lightingIntensity: 'A intensidade das lâmpadas pode ser ajustada pelo sistema, permitindo controlar a quantidade de luz fornecida ao aquário. O controle da intensidade é realizado de forma independente para os diferentes canais de iluminação, possibilitando combinações distintas entre eles.',
      lightingSchedule: 'Além da intensidade, o usuário pode programar os horários de funcionamento da iluminação. O sistema utiliza o relógio de tempo real para determinar quando cada rotina deve ser iniciada e encerrada, automatizando o ciclo diário de iluminação.',
      lightingRoutines: 'O firmware permite armazenar diferentes rotinas de iluminação, associando horários a intensidades específicas para os canais disponíveis. Dessa maneira, é possível criar diferentes períodos de iluminação ao longo do dia em vez de utilizar apenas um estado ligado/desligado.',
      realTimeClock: 'O sistema utiliza um RTC (Real Time Clock) para manter o horário utilizado pelas funções de automação. O relógio é utilizado principalmente pelas rotinas de alimentação e iluminação, garantindo que os eventos programados sejam executados nos horários definidos pelo usuário.',
      interface: 'Foi desenvolvida uma interface gráfica utilizando um display TFT para permitir a interação direta com o aquário. A interface apresenta informações de temperatura, estado dos atuadores, iluminação, alimentação e conexão Wi-Fi, além de disponibilizar menus para configuração das principais funções.',
      wifi: 'O ESP32 possui conectividade Wi-Fi para permitir a configuração e comunicação do sistema com uma infraestrutura externa. O firmware também possui mecanismos para gerenciamento da conexão e reconexão da rede.',
      mqtt: 'A comunicação MQTT permite que parâmetros e comandos relacionados ao aquário sejam enviados e recebidos remotamente. Essa arquitetura possibilita integrar o Quilli a uma plataforma IoT e controlar funções do equipamento sem depender exclusivamente da interface física.',
      memory: 'A EEPROM é utilizada para armazenar configurações que precisam permanecer disponíveis após o desligamento do equipamento. Dessa forma, parâmetros de funcionamento, rotinas de iluminação e alimentação podem ser recuperados durante a inicialização do sistema.',
      multitasking: 'A arquitetura do firmware foi desenvolvida para executar diferentes funções de maneira coordenada. Temporizadores e tarefas independentes são utilizados para lidar com leitura de temperatura, atualização do relógio, comunicação com o servidor, atualização da interface, controle da iluminação, alimentação e controle térmico.',
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
        title: 'Interface e controle do Quilli',
        description: 'Demonstração da interface TFT e da navegação entre as funções de controle do aquário.',
        url: '/images/AquarioFuncionamento2.gif' // Troque pelo caminho real do seu GIF
      },
      gif2: {
        title: 'Automação do aquário',
        description: 'Demonstração do funcionamento automático da rotina de alimentação e iluminação.',
        url: '/images/AquarioFuncionamento.gif' // Troque pelo caminho real do seu GIF
      },
      image1: {
        title: 'Protótipo do Quilli',
        description: 'Imagem do protótipo, mostrando o hardware e os principais componentes (ESP32, TFT, Sensores).',
        url: '/images/Aquario.jpeg' // Troque pelo caminho real da sua Imagem
      },

    },
    result: 'O Quilli resultou em uma plataforma embarcada capaz de automatizar as principais funções de manutenção de um aquário. O sistema controla a temperatura por meio do acionamento de termostato e cooler, automatiza a alimentação de acordo com horários programados e permite controlar tanto a intensidade quanto os horários de funcionamento da iluminação. A integração entre ESP32, sensores, atuadores, RTC, memória, interface TFT e comunicação Wi-Fi/MQTT transformou diferentes tarefas independentes em um único sistema de automação avançado.',
    githubUrl: 'https://github.com/mateusjrs/quilli-smart-aquarium' // Substitua pelo link correto
  }
  ,
  {
    id: 'emb-110-flight-dynamics',
    title: 'Análise do Comportamento de Voo do EMB-110 Bandeirante',
    category: 'Aerospace',
    shortDescription: 'Modelagem aerodinâmica, análise de estabilidade e simulação da dinâmica de voo do EMB-110 Bandeirante utilizando AVL, AutoCAD e MATLAB.',
    technologies: [
      'MATLAB',
      'AVL',
      'AutoCAD',
      'Vortex Lattice Method (VLM)',
      'Dinâmica de Voo',
      'Mecânica do Voo'
    ],
imageUrl: '/images/bandeirante-real.jpg', // <--- Foto principal do card
    gallery: [
      '/images/bandeirante-avl.png', // <--- Imagem do AVL
      '/images/bandeirante-plot.png' // <--- Gráfico 3D do MATLAB
    ],
        featured: true,
    summary: 'Projeto desenvolvido na disciplina de Mecânica do Voo com foco na análise do comportamento aerodinâmico, estabilidade e dinâmica de voo do EMB-110 Bandeirante (C-95). O trabalho envolveu o levantamento e reconstrução da geometria da aeronave, modelagem aerodinâmica utilizando o método Vortex Lattice no AVL, determinação de derivadas aerodinâmicas, análise de trimagem e desenvolvimento de um simulador não linear de seis graus de liberdade (6-DOF) em MATLAB.',
    problem: 'O projeto exigia a construção de um modelo representativo do EMB-110 a partir de informações disponíveis em manuais técnicos, dados operacionais e documentação de certificação. Algumas dimensões necessárias para a modelagem não estavam disponíveis diretamente, exigindo um processo de reconstrução geométrica. Além disso, era necessário avaliar não apenas as condições de equilíbrio da aeronave, mas também sua resposta dinâmica a diferentes comandos de controle e condições de massa e centro de gravidade.',
    contribution: 'Realizei o levantamento geométrico da aeronave a partir de suas vistas ortográficas utilizando Autodesk AutoCAD, escalonando as dimensões para obter uma representação compatível com os dados de referência. Desenvolvi a modelagem aerodinâmica no AVL, defini os arquivos de geometria e massa e extraí as derivadas de estabilidade e controle. Em MATLAB, implementei um simulador não linear de seis graus de liberdade utilizando ode45, integrando as forças e momentos aerodinâmicos às equações de movimento e realizando análises das respostas da aeronave a diferentes comandos de controle.',
    engineeringDetails: {
      aircraft: 'O objeto de estudo foi o EMB-110 Bandeirante, aeronave bimotora turboélice de asa baixa, empenagem convencional e estrutura semimonocoque metálica. O estudo foi fundamentado em informações provenientes de manuais operacionais e de manutenção, além do Type Certificate Data Sheet (TCDS) EASA.IM.A.229.',
      geometry: 'A geometria da aeronave foi reconstruída utilizando três vistas ortográficas — lateral, superior e frontal — importadas para o Autodesk AutoCAD. As imagens foram escalonadas para dimensões reais e utilizadas para obter parâmetros necessários à modelagem aerodinâmica. O modelo considerado possui envergadura de 15,33 m, área alar de 29,10 m², alongamento de 8,08, corda média aerodinâmica de 1,98 m, diedro de 7° e ângulo de incidência da asa de 3°. O comprimento da fuselagem considerado foi de 15,10 m.',
      cad: 'O uso do AutoCAD permitiu realizar um processo de engenharia reversa da geometria da aeronave. As dimensões obtidas das vistas ortográficas foram comparadas com os valores disponíveis na documentação técnica, buscando manter a coerência entre a geometria reconstruída e os parâmetros oficiais da aeronave. Esse modelo serviu como base para a construção da geometria utilizada posteriormente no AVL.',
      massAndCG: 'Foram analisadas duas condições de carregamento da aeronave. A primeira considerou massa de 5000 kg e centro de gravidade de aproximadamente 6,534 m. A segunda considerou massa de 3380 kg e centro de gravidade de aproximadamente 6,645 m. A posição do CG foi determinada a partir dos limites de centragem e da condição de massa considerada. A variação de massa e CG foi posteriormente utilizada para avaliar a influência dessas características sobre a estabilidade e a resposta dinâmica da aeronave.',
      inertia: 'Os momentos de inércia da aeronave foram estimados por um método semiempírico baseado na geometria global, massa e raios de giração adimensionais. Para as condições de 3380 kg e 5000 kg foram obtidos, respectivamente, diferentes valores de Ixx, Iyy e Izz, permitindo representar a alteração das propriedades inerciais do modelo entre as condições de carregamento.',
      aerodynamicModel: 'A modelagem aerodinâmica foi realizada no Athena Vortex Lattice (AVL), utilizando o Vortex Lattice Method (VLM). A geometria das superfícies sustentadoras foi representada por uma malha de vórtices. A fuselagem foi simplificada no modelo devido às limitações do VLM para representar corpos rombudos, enquanto a asa principal foi prolongada até o plano de simetria para manter a representação aerodinâmica utilizada na análise.',
      derivatives: 'Foram extraídas do AVL as principais derivadas aerodinâmicas de estabilidade e controle. Esses coeficientes representam a influência de variáveis como ângulo de ataque, ângulo de derrapagem, taxas de rotação e deflexões das superfícies de controle sobre as forças e momentos aerodinâmicos. As derivadas foram utilizadas tanto na análise de trimagem quanto na construção do modelo matemático do simulador de voo.',
      trim: 'Foi realizada uma análise de trimagem longitudinal para determinar as condições necessárias para manter a aeronave em voo reto e nivelado. O ângulo de ataque e a deflexão do profundor foram calculados analiticamente a partir das derivadas aerodinâmicas e comparados com os resultados obtidos diretamente no AVL. A análise considerou velocidades entre 70 e 130 m/s.',
      trimValidation: 'A comparação entre os resultados analíticos e a solução numérica do AVL apresentou boa concordância. As maiores diferenças ocorreram nas menores velocidades analisadas, com discrepâncias inferiores a 0,2° no caso mais extremo. Esse resultado forneceu uma validação do modelo analítico de trimagem utilizado no estudo.',
      simulation: 'Foi desenvolvido em MATLAB um simulador não linear de dinâmica de voo com seis graus de liberdade (6-DOF), utilizando o integrador numérico ode45. O modelo representa os movimentos translacionais e rotacionais da aeronave nos eixos do corpo, as taxas angulares p, q e r, os ângulos de Euler e a posição da aeronave no sistema de referência inercial.',
      equations: 'O simulador utiliza as equações de movimento para determinar as acelerações lineares e angulares da aeronave. As forças e momentos aerodinâmicos são calculados a partir dos coeficientes obtidos no AVL, sendo posteriormente dimensionalizados utilizando a pressão dinâmica, área de referência, corda média aerodinâmica e envergadura.',
      aerodynamicForces: 'O modelo aerodinâmico considera os coeficientes de sustentação, arrasto e força lateral, além dos coeficientes de momento de rolagem, arfagem e guinada. As contribuições das derivadas aerodinâmicas são calculadas em função de α, β, p, q, r e das deflexões de aileron, profundor e leme. Os coeficientes são posteriormente transformados dos eixos aerodinâmicos para os eixos do corpo da aeronave.',
      dynamicTests: 'Para avaliar a dinâmica da aeronave foram aplicadas perturbações do tipo pulso e doublet nas superfícies de controle. Foram analisados comandos no aileron, profundor e leme, permitindo observar as respostas longitudinais e laterodirecionais da aeronave.',
      pulse: 'Nos ensaios com pulso foram aplicadas deflexões de 2°, iniciadas em t = 1 s e mantidas durante 1 s. As respostas foram avaliadas por meio da evolução temporal das velocidades, taxas angulares, ângulos de atitude, altitude e posições Norte e Leste.',
      doublet: 'Os ensaios do tipo doublet utilizaram uma deflexão seguida por um comando de sentido oposto. Essa configuração permitiu investigar a resposta transitória da aeronave e identificar o comportamento dos diferentes modos dinâmicos sem manter uma perturbação contínua no sistema.',
      dynamicModes: 'As simulações permitiram investigar diferentes modos característicos da dinâmica de voo. As perturbações no profundor evidenciaram principalmente os modos de curto período e fugóide. Os comandos no leme apresentaram respostas associadas ao Dutch roll e ao modo espiral. Os comandos laterais também demonstraram o acoplamento entre os movimentos laterodirecionais e longitudinais.',
      massComparison: 'A influência da massa e do centro de gravidade foi analisada comparando diretamente as condições de 5000 kg e 3380 kg. A configuração de menor massa e CG mais recuado apresentou respostas dinâmicas mais intensas em diversas perturbações, com maiores amplitudes de velocidade, atitude e taxas angulares.',
      stabilityAnalysis: 'A comparação das respostas mostrou que a redução da massa combinada ao deslocamento do CG modificou significativamente o comportamento dinâmico da aeronave. Em determinadas perturbações, a condição mais leve apresentou menor amortecimento, maiores oscilações e maior perda de altitude, evidenciando a influência das propriedades de massa e centragem sobre a estabilidade e a qualidade de voo.',
      analyses: [
        'Levantamento geométrico (AutoCAD)',
        'Modelagem aerodinâmica (AVL)',
        'Extração de derivadas aerodinâmicas',
        'Análise de trimagem longitudinal e validação',
        'Desenvolvimento de simulador 6-DOF (MATLAB)',
        'Pulso e Doublet (aileron, profundor, leme)',
        'Análise de modos: fugóide, curto período, Dutch roll e espiral',
        'Influência de massa e posição de CG nas trajetórias 3D'
      ]
    },
    result: 'O projeto resultou em um modelo integrado da aeronave, combinando reconstrução geométrica, modelagem aerodinâmica, análise de estabilidade e simulação de dinâmica de voo. A comparação entre a trimagem analítica e os resultados do AVL apresentou boa concordância. O simulador 6-DOF em MATLAB permitiu avaliar a resposta a perturbações e identificar os modos dinâmicos, provando que a configuração de 3380 kg e CG recuado apresenta respostas mais sensíveis. O código completo (scripts MATLAB e modelos AVL) está disponível no repositório.',
    githubUrl: 'https://github.com/Mateusjrs/Projetos/tree/main/DinamicaVooBandeirante', // <--- COLOQUE SEU LINK AQUI
    // @ts-ignore
    report: 'Relatório Técnico Completo: Análise do Comportamento de Voo do EMB-110 Bandeirante'
  },
  {
    id: 'cessna-182-avionics-modification',
    title: 'Projeto de Modificação de Sistema Aviônico — Cessna 182',
    category: 'Aerospace',
    shortDescription: 'Análise de engenharia para substituição de um sistema de navegação e comunicação por um Garmin GNS 430W, incluindo balanço de carga elétrica, especificação de componentes e integração elétrica.',
    technologies: [
      'Engenharia Aeronáutica',
      'Sistemas Elétricos de Aeronaves',
      'Aviónica',
      'Balanço de Carga Elétrica',
      'Wiring',
      'Documentação Técnica',
      'Regulamentação Aeronáutica'
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Cessna182t_skylane_n2231f_cotswoldairshow_2010_arp.jpg/1280px-Cessna182t_skylane_n2231f_cotswoldairshow_2010_arp.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail',
    featured: false,
    summary: 'Resolução de um estudo de modificação de uma aeronave Cessna 182, envolvendo a substituição do sistema RT-385 pelo Garmin GNS 430W. O trabalho foi desenvolvido com foco na análise dos requisitos técnicos da modificação, especificação dos equipamentos necessários, avaliação do balanço de carga elétrica da aeronave e elaboração da integração elétrica do novo sistema. A atividade também envolveu a interpretação de documentação técnica e requisitos aplicáveis à instalação de sistemas aviônicos.',
    problem: 'A modificação de um sistema aviônico exige avaliar não apenas a compatibilidade do novo equipamento, mas também seu impacto sobre o sistema elétrico da aeronave e sua integração com a infraestrutura existente. O desafio proposto consistia em analisar a substituição do equipamento original por um Garmin GNS 430W, determinar os componentes necessários para a instalação, verificar o consumo elétrico adicional e estruturar uma solução de alimentação e conexão compatível com a aeronave.',
    contribution: 'Desenvolvi a resolução técnica da modificação, analisando os requisitos apresentados na Instrução Suplementar, consultando a documentação de instalação do equipamento e estruturando a solução de integração elétrica. Realizei o levantamento dos equipamentos removidos e instalados, analisei o consumo elétrico do sistema, determinei o impacto da modificação no balanço de carga e organizei as principais conexões elétricas, incluindo alimentação, aterramento e proteção por circuit breakers.',
    engineeringDetails: {
      aircraft: 'A aeronave analisada foi um Cessna 182 do ano de 1979, utilizado como plataforma para o estudo da modificação do sistema aviônico. O projeto considerou a arquitetura elétrica de 28 V da aeronave e a infraestrutura existente do sistema de aviônicos.',
      modification: 'A modificação proposta consiste na substituição do sistema RT-385 por um Garmin GNS 430W. O novo equipamento integra funções relacionadas à navegação e comunicação, exigindo a análise dos requisitos de alimentação, proteção elétrica, conectores, montagem e antena GPS/WAAS.',
      regulatory: 'A análise considerou a Instrução Suplementar IS Nº 21-021, especificamente a seção 5.6.1 indicada no teste, relacionada à aprovação de modificações em aeronaves. O estudo também considerou a necessidade de utilização de dados técnicos aprovados e a verificação do impacto da instalação sobre o sistema elétrico da aeronave.',
      equipment: 'Foram identificados os principais componentes necessários para a instalação do Garmin GNS 430W: unidade principal GNS 430W, mounting rack, connector kit, back plate e antena GA 35 GPS/WAAS. A especificação foi organizada considerando modelo, part number, quantidade e função de cada componente.',
      equipmentList: [
        '01 × Garmin GNS 430W',
        '01 × Mounting Rack',
        '01 × Connector Kit',
        '01 × Back Plate',
        '01 × GA 35 GPS/WAAS Antenna'
      ],
      electricalSystem: 'O sistema elétrico considerado possui arquitetura de 28 V. A análise levou em consideração a capacidade de geração da aeronave, o consumo dos equipamentos removidos e o consumo dos novos equipamentos instalados, permitindo determinar a variação líquida de carga provocada pela modificação.',
      loadAnalysis: 'O balanço de carga elétrica comparou o consumo do equipamento RT-385A removido com o consumo do Garmin GNS 430W instalado. O RT-385A foi considerado com consumo típico de 2,0 A, enquanto o GNS 430W apresenta consumo de aproximadamente 0,8 A em operação típica e até 3,0 A durante a transmissão. Dessa forma, a modificação representa um aumento líquido de aproximadamente 1,8 A no pico de transmissão.',
      generator: 'Para a análise da capacidade de geração foi considerado um alternador de 28 V e 60 A. O estudo também considerou uma bateria de 24 V e 14 Ah como referência para a aeronave. A capacidade do sistema de geração foi comparada com o limite de carga contínua considerado na análise.',
      electricalMargin: 'Considerando o critério de utilização de até 80% da capacidade do alternador para operação contínua, o limite de referência calculado foi de 48 A. O acréscimo de aproximadamente 1,8 A associado à modificação representa uma parcela pequena da capacidade disponível, indicando margem elétrica suficiente para a instalação proposta dentro das premissas adotadas no estudo.',
      wiring: 'Foi estruturada uma proposta de integração elétrica simplificada para o novo equipamento, considerando alimentação, aterramento, proteção por circuit breaker e conexão ao barramento de aviônicos. A solução diferencia os novos circuitos instalados dos elementos existentes que permanecem na aeronave.',
      protection: 'A proteção elétrica foi considerada por meio de circuit breakers dedicados. O estudo especificou um disjuntor de 5 A para a alimentação principal e um disjuntor de 10 A associado à alimentação do circuito de comunicação (COM), conforme a solução apresentada na documentação da atividade.',
      connections: 'As principais conexões foram organizadas de acordo com os conectores do Garmin. No P4001 (Main), os pinos 19 e 20 foram destinados à entrada de alimentação Aircraft Power 1 e os pinos 77 e 78 ao Aircraft Ground. No P4002 (COM), os pinos 11 e 12 foram associados à alimentação Aircraft Power COM e os pinos 21 e 22 ao aterramento. No P4006 (NAV), o pino 44 foi associado à alimentação NAV Power.',
      antenna: 'A integração também contempla a instalação da antena GA 35, utilizada para o sistema GPS/WAAS. O componente foi incluído no levantamento de materiais e considerado parte da arquitetura necessária para a implementação do novo sistema aviônico.',
      documentation: 'A solução foi organizada como uma documentação de engenharia, contemplando identificação dos equipamentos, part numbers, análise de carga elétrica, capacidade de geração, lista de materiais e conexões principais. Essa estrutura permite rastrear as decisões de engenharia e facilitar a análise da modificação.',
      engineeringSkills: [
        'Interpretação de documentação técnica',
        'Análise de requisitos de instalação',
        'Sistemas elétricos aeronáuticos',
        'Balanço de carga elétrica',
        'Dimensionamento de proteção elétrica',
        'Integração de equipamentos aviônicos',
        'Análise de wiring',
        'Identificação de componentes e part numbers',
        'Interpretação de requisitos de aeronavegabilidade',
        'Elaboração de documentação técnica'
      ]
    },
    result: 'A análise resultou em uma proposta estruturada para a substituição do sistema RT-385 pelo Garmin GNS 430W, contemplando os principais componentes necessários, a arquitetura de alimentação, proteção elétrica, conexões e integração com o sistema aviônico existente. O balanço de carga indicou um acréscimo líquido de aproximadamente 1,8 A no pico de transmissão e, considerando o limite de 80% da capacidade do alternador, uma margem suficiente dentro das premissas adotadas. O projeto demonstrou a aplicação integrada de conhecimentos de sistemas elétricos aeronáuticos, aviônicos, regulamentação, análise de requisitos e documentação de engenharia. O material desenvolvido para a resolução técnica e os arquivos utilizados no estudo estão disponibilizados no repositório.',
    githubUrl: 'https://github.com/Mateusjrs/Projetos/tree/main/ControleCargaCessna' // Lembre-se de colocar o link correto
  },
  
];
