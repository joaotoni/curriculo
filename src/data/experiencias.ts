export interface Experiencia {
    cargo: string;
    empresa: string;
    periodo: string;
    descricao: string[];
    tecnologias: string[];
  }
  
  export const experiencias: Experiencia[] = [
    {
        cargo: "Desenvolvedor Full-Stack",
        empresa: "BSafe",
        periodo: "Mar/2024 – Atual",
        descricao: [
          "Desenvolvi novas funcionalidades e melhorias no sistema web e mobile para um sistema SaaS de anúncios privados.",
          "Utilizei React e Next para alcançar alta performance no sistema web, garantindo responsividade e fluidez na experiência do usuário.",
          "Trabalhei na API desenvolvida em Node, otimizando consultas e cadastros.",
          "Contribuí para a redução de tempo de resposta das requisições da API ao otimizar a comunicação entre back-end e front-end.",
          "Participei de reuniões de planejamento e definição de features, utilizando metodologias ágeis como Kanban.",
        ],
        tecnologias: ["React", "Next", "Javascript", "Typescript", "React Native", "Node", "Nest", "BitBucket", "Jira"]
    },
    {
      cargo: "Desenvolvedor Mobile Full-Stack",
      empresa: "Cast Group",
      periodo: "Ago/2024 – Fev/2025",
      descricao: [
        "Desenvolvi novas funcionalidades e melhorias nos aplicativos de fiscalização de rodovias e estabelecimentos para funcionários do Governo Estadual de Goiás.",
        "Utilizei Flutter para alcançar alta performance no aplicativo, garantindo responsividade e fluidez na experiência do usuário.",
        "Trabalhei na API desenvolvida em Java, aplicando Lombok, Maven, JDBC e JPA, otimizando consultas e integrando novos serviços.",
        "Contribuí para a redução de tempo de resposta das requisições da API ao otimizar a comunicação entre back-end e front-end."
      ],
      tecnologias: ["Flutter", "Java", "Maven", "JDBC", "JPA", "PostgreSQL", "Git", "Scrum"]
    },
    {
      cargo: "Desenvolvedor Full-Stack",
      empresa: "Locavibe",
      periodo: "Dez/2023 – Ago/2024",
      descricao: [
        "Desenvolvi novas funcionalidades e otimizações no sistema de aluguel de veículos, incluindo melhorias no cadastro de clientes e veículos e automação de processos internos.",
        "Implementei um sistema de cobrança de assinaturas e multas, integrado à API do Asaas, reduzindo o tempo de gestão de penalidades em 80%.",
        "Trabalhei no front-end utilizando React.js e TailwindCSS, garantindo design responsivo e eficiente.",
        "No back-end, utilizei Node.js, Express e MongoDB, melhorando a escalabilidade do sistema e reduzindo o tempo médio de resposta da API ."
      ],
      tecnologias: ["JavaScript", "TypeScript", "React.js", "TailwindCSS", "Node.js", "Express", "MongoDB", "Asaas API", "Axios", "AWS S3"]
    },
    {
      cargo: "Desenvolvedor Web Front-End",
      empresa: "InsiderB2B",
      periodo: "Fev/2023 – Nov/2023",
      descricao: [
        "Desenvolvi e otimizei landing pages, sites e aplicações web, impactando diretamente estratégias de marketing digital da empresa.",
        "Trabalhei na implementação de SEO e otimização de performance, aumentando a taxa de conversão de páginas.",
        "Integrei APIs e tecnologias de rastreamento de dados, permitindo análises detalhadas de desempenho das campanhas.",
        "Implementei boas práticas de segurança, garantindo proteção de dados e conformidade com LGPD."
      ],
      tecnologias: ["HTML", "CSS", "JavaScript", "React.js", "SEO", "Google Analytics", "API Integrations"]
    }
  ];
  