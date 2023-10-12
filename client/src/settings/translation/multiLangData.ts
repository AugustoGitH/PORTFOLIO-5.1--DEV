import { TLanguage } from './types'

interface IMultiLang extends Record<TLanguage, string> {}
const multilanglData: IMultiLang[] = [
  {
    'pt-br': 'Contate-me',
    'en-us': 'Contact-me',
    es: 'Contáctame',
  },
  {
    'pt-br': 'Vamos conversar?',
    'en-us': "Let's talk?",
    es: 'Hablemos',
  },
  {
    'pt-br': 'Sobre mim',
    'en-us': 'About me',
    es: 'Sobre mí',
  },
  {
    'pt-br':
      '<i>Olá futuro cliente ou empresa!</i><br/>Sou um <strong>desenvolvedor full-stack</strong> experiente e pronto para transformar suas ideias em realidade no <strong>mundo digital</strong>. Se você está buscando por alguém que possa ajudar a criar ou dar um upgrade no seu site ou aplicativo, você acabou de encontrar. Não hesite em entrar em contato comigo, estou ansioso para discutir como posso ajudar a sua empresa a alcançar novos patamares digitais com minhas habilidades e criatividade. Vamos juntos criar algo incrível!',
    'en-us':
      "<i>Hello future client or company!</i><br/>I am an experienced <strong>full-stack developer</strong> ready to turn your ideas into reality in the <strong>digital world</strong>. If you're looking for someone who can help create or upgrade your website or app, you've just found them. Don't hesitate to get in touch with me; I'm excited to discuss how I can help your company reach new digital heights with my skills and creativity. Let's create something amazing together!",
    es: '<i>¡Hola futuro cliente o empresa!</i><br/>Soy un <strong>desarrollador full-stack</strong> experimentado y listo para convertir tus ideas en realidad en el <strong>mundo digital</strong>. Si estás buscando a alguien que pueda ayudar a crear o mejorar tu sitio web o aplicación, acabas de encontrarlo. No dudes en ponerte en contacto conmigo; estoy emocionado por discutir cómo puedo ayudar a tu empresa a alcanzar nuevas alturas digitales con mis habilidades y creatividad. ¡Creemos algo increíble juntos!',
  },
  {
    'pt-br': 'Porcentagem das tecnologias usadas em meus projetos',
    'en-us': 'Percentage of technologies used in my projects',
    es: 'Porcentaje de tecnologías utilizadas en mis proyectos',
  },
  {
    'pt-br': 'São mais de',
    'en-us': 'More than',
    es: 'Más de',
  },
  {
    'pt-br': 'projetos publicados em meu portfólio',
    'en-us': 'projects published on portfolio',
    es: 'proyectos publicados en portfolio',
  },
  {
    'pt-br': 'Meu Currículo',
    'en-us': 'My Resume',
    es: 'Mi Currículum',
  },
  {
    'pt-br':
      'Eu sou Augusto Caetano Westphal, um <strong>apaixonado por tecnologia</strong>, atuando como <strong>desenvolvedor full-stack</strong> e <strong>web designer</strong>. Minha paixão é criar <strong>soluções digitais impactantes</strong>. Além de projetos como <strong>freelancer</strong>, também me envolvo em <strong>trabalhos voluntários relacionados à tecnologia</strong>. Minha jornada é marcada por habilidades no <strong>desenvolvimento web</strong>, <strong>design de interfaces</strong> e <strong>otimização de desempenho</strong>. Sempre em busca de aprimorar minhas habilidades e conhecimentos, estive envolvido em <strong>diversos projetos</strong>. Meu objetivo é contribuir como <strong>desenvolvedor júnior</strong> em uma <strong>empresa de tecnologia inovadora</strong>, trazendo minha energia para <strong>projetos estimulantes</strong>. Sou movido pela <strong>proatividade</strong>, com uma aptidão natural para <strong>trabalho em equipe</strong> e uma habilidade notável para <strong>me adaptar com fluidez</strong> a uma variedade de desafios.',
    'en-us':
      'I am Augusto Caetano Westphal, a <strong>technology enthusiast</strong>, working as a <strong>full-stack developer</strong> and <strong>web designer</strong>. My passion lies in creating <strong>impactful digital solutions</strong>. In addition to freelancing, I also engage in <strong>volunteer work related to technology</strong>. My journey is marked by skills in <strong>web development</strong>, <strong>interface design</strong>, and <strong>performance optimization</strong>. Always striving to enhance my skills and knowledge, I have been involved in <strong>various projects</strong>. My goal is to contribute as a <strong>junior developer</strong> in an <strong>innovative technology company</strong>, bringing my enthusiasm to <strong>stimulating projects</strong>. I am driven by <strong>proactivity</strong>, with a natural aptitude for <strong>teamwork</strong> and a remarkable ability to <strong>fluidly adapt</strong> to a variety of challenges.',
    es: 'Soy Augusto Caetano Westphal, un <strong>entusiasta de la tecnología</strong>, trabajando como <strong>desarrollador full-stack</strong> y <strong>diseñador web</strong>. Mi pasión radica en crear <strong>soluciones digitales impactantes</strong>. Además de trabajar como <strong>freelancer</strong>, también participo en <strong>trabajos voluntarios relacionados con la tecnología</strong>. Mi trayectoria se caracteriza por habilidades en <strong>desarrollo web</strong>, <strong>diseño de interfaces</strong> y <strong>optimización de rendimiento</strong>. Siempre esforzándome por mejorar mis habilidades y conocimientos, he participado en <strong>varios proyectos</strong>. Mi objetivo es contribuir como <strong>desarrollador junior</strong> en una <strong>empresa de tecnología innovadora</strong>, llevando mi entusiasmo a <strong>proyectos estimulantes</strong>. Me impulsa la <strong>proactividad</strong>, con una aptitud natural para el <strong>trabajo en equipo</strong> y una notable capacidad para <strong>adaptarme fluidamente</strong> a una variedad de desafíos.',
  },
  {
    'pt-br': 'Meu nome é',
    'en-us': 'My name is',
    es: 'Mi nombre es',
  },
  {
    'pt-br': 'Também sou',
    'en-us': 'I am also',
    es: 'También soy',
  },
  {
    'pt-br': 'Entre em contato',
    'en-us': 'Get in touch',
    es: 'Ponte en contacto',
  },
  {
    'pt-br': 'Designer <br/>Gráfico',
    'en-us': 'Graphic <br/>Designer',
    es: 'Diseñador <br/>Gráfico',
  },
  {
    'pt-br': 'Desenvolvedor Full-Stack',
    'en-us': 'Full-Stack Developer',
    es: 'Desarrollador Full-Stack',
  },
  {
    'pt-br': 'Tecnologias e Ferramentas',
    'en-us': 'Technologies and Tools',
    es: 'Tecnologías y Herramientas',
  },
  {
    'pt-br': 'Meus Projetos',
    'en-us': 'My Projects',
    es: 'Mis Proyectos',
  },
  {
    'pt-br': 'Todos',
    'en-us': 'All',
    es: 'Todos',
  },
  {
    'pt-br': 'Visitar',
    'en-us': 'Visit',
    es: 'Visitar',
  },
  {
    'pt-br': 'Prévia',
    'en-us': 'Preview',
    es: 'Vista previa',
  },
  {
    'pt-br': 'Repositório',
    'en-us': 'Repository',
    es: 'Repositorio',
  },
  {
    'pt-br': 'curtidas',
    'en-us': 'likes',
    es: 'me gusta',
  },
  {
    'pt-br': 'curtida',
    'en-us': 'like',
    es: 'me gusta',
  },
  {
    'pt-br': 'visualizações',
    'en-us': 'views',
    es: 'vistas',
  },
  {
    'pt-br': 'visualização',
    'en-us': 'view',
    es: 'vista',
  },
  {
    'pt-br': 'Imagem gerada pelo MidJourney de Augusto Westphal',
    'en-us': "Image generated by Augusto Westphal's MidJourney",
    es: 'Imagen generada por MidJourney de Augusto Westphal',
  },
  {
    'pt-br': 'Meu Email',
    'en-us': 'My Email',
    es: 'Mi Correo Electrónico',
  },
  {
    'pt-br': 'Meu Whatsapp',
    'en-us': 'My Whatsapp',
    es: 'Mi Whatsapp',
  },
  {
    'pt-br': 'Meu Linkedin',
    'en-us': 'My Linkedin',
    es: 'Mi Linkedin',
  },
  {
    'pt-br': 'Meu Github',
    'en-us': 'My Github',
    es: 'Mi Github',
  },
  {
    'pt-br': 'Baixe meu currículo!',
    'en-us': 'Download my resume!',
    es: '¡Descarga mi currículum!',
  },
  {
    'pt-br': 'Estátisticas',
    'en-us': 'Statistics',
    es: 'Estadísticas',
  },
  {
    'pt-br': 'Projeto curtido',
    'en-us': 'Liked project',
    es: 'Proyecto gustado',
  },
  {
    'pt-br': 'Curtir projeto',
    'en-us': 'Like project',
    es: 'Me gusta el proyecto',
  },
  {
    'pt-br': 'Mudar idioma',
    'en-us': 'Change language',
    es: 'Cambiar idioma',
  },
  {
    'pt-br':
      'Ocorreu um erro ao buscar os projetos. Por favor, tente novamente mais tarde.',
    'en-us':
      'An error occurred while fetching the projects. Please try again later.',
    es: 'Ocurrió un error al obtener los proyectos. Por favor, inténtalo nuevamente más tarde.',
  },
  {
    'pt-br': 'Não existe nenhum projeto disponível no momento.',
    'en-us': 'There are no available projects at the moment.',
    es: 'No hay proyectos disponibles en este momento.',
  },
  {
    'pt-br': 'Nenhum projeto corresponde a essa categoria no momento.',
    'en-us': 'No projects match this category at the moment.',
    es: 'Ningún proyecto coincide con esta categoría en este momento.',
  },
  {
    'pt-br': 'Este projeto não possui índices de tecnologias mais usadas!',
    'en-us': 'This project has no indices of most used technologies!',
    es: '¡Este proyecto no tiene índices de tecnologías más utilizadas!',
  },
]

export default multilanglData