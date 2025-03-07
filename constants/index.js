import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareFontAwesome,
  faLinkedin,
  faSquareGithub,
} from '@fortawesome/free-brands-svg-icons';
import {
  faSquarePhone,
  faSquareEnvelope,
  faMicrochip,
  faDna,
  faPersonDigging,
} from '@fortawesome/free-solid-svg-icons';

import profilePicture from '../public/assets/profilePicture.webp';
import geomesLogo from '../public/assets/certifications/geomes_logo.webp';
import motLogo from '../public/assets/certifications/ministry_of_transport_and_infrastructure_turkey_logo.webp';
import wissenLogo from '../public/assets/certifications/wissen_teknoloji_logo.webp';

export const SITE_LAST_UPDATE_TIME = `8 Mar 2025`;
export const SITE_BASE_URL = `https://berkcankucukoglu.com`;

export const USER_INFO = {
  name: 'Berkcan',
  surname: 'Küçükoğlu',
  image: profilePicture,
  title: 'Software Developer',
  contactInfo: [
    {
      fieldName: 'Email',
      fieldValue: `berkcankucukoglu@gmail.com`,
      icon: <FontAwesomeIcon icon={faSquareEnvelope} />,
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+90)-537-5098710',
      icon: <FontAwesomeIcon icon={faSquarePhone} />,
    },
    {
      fieldName: 'Address',
      fieldValue: 'Istanbul - Turkey',
      icon: <FontAwesomeIcon icon={faSquareFontAwesome} />,
    },
  ],
};

export const EXTERNAL_LINKS = [
  {
    name: 'linkedin',
    path: `https://www.linkedin.com/in/berkcankucukoglu/`,
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
  {
    name: 'github',
    path: `https://github.com/berkcankucukoglu/`,
    icon: <FontAwesomeIcon icon={faSquareGithub} />,
  },
];

export const EXPERIENCES = [
  {
    startTime: 'Jun 2024',
    endTime: '',
    role: 'Full Stack Developer',
    company: 'Faturamatik Elektronik Para ve Ödeme Kuruluşu',
    description: `I’m currently a full-stack developer on the sigortalarburada.com project, building an insurance portal to improve customer experience and streamline policy management.`,
    technologies: [
      'C#',
      '.NET Core',
      'ASP.NET MVC',
      'Language Integrated Query (LINQ)',
      'ASP.NET Web API',
    ],
  },
  {
    startTime: 'Apr 2023',
    endTime: 'Feb 2024',
    role: 'Full Stack Developer',
    company: 'DISC Akademi Eğitim ve Yazılım',
    description: `I had the privilege of working with a prominent HR company renowned for its comprehensive approach to personality tests and talent assessments. As a full-stack developer, I actively contributed to the development of the 'Yetenex' project, a dynamic job portal and application tracking system(ATS).`,
    technologies: [
      'C#',
      '.NET Core',
      'React.js',
      'MySQL',
      'Language Integrated Query (LINQ)',
      'ASP.NET Web API',
    ],
  },
  {
    startTime: 'Aug 2022',
    endTime: 'Mar 2023',
    role: 'Contract - Trainee',
    company: 'Wissen Akademie',
    description: `I completed a semester long course that covered Algorithms, Programming with C#, GitHub version control, Front-end Technologies (HTML, CSS, Bootstrap, JavaScript), Database Management with MsSQL, ADO.NET, Entity Framework, design patterns like Singleton and Factory, and SOLID principles.`,
    technologies: [
      'C#',
      '.NET Core',
      'MsSQL',
      'Entity Framework (EF) Core',
      'Language Integrated Query (LINQ)',
      'ASP.NET MVC',
      'ASP.NET Web API',
      'JavaScript',
      'HTML5',
      'Cascading Style Sheets (CSS)',
    ],
  },
  {
    startTime: 'Dec 2019',
    endTime: 'Jun 2022',
    role: 'Transportation Engineer',
    company: 'Emay International Engineering & Consulting',
    description: `Applied BIM knowledge in various Civil and Transportation Engineering projects. Participated in international meetings and negotiations. Notable contributions included work with the Istanbul Metro-Rail Systems Design Group, as well as producing architectural detailing, technical drawings, and presentations.`,
    technologies: [
      'BIM',
      'business analysis',
      'project management',
      'figma',
      'UI',
      'UX',
    ],
  },
  {
    startTime: 'Oct 2018',
    endTime: 'Dec 2019',
    role: 'Civil Engineer',
    company: 'Prizma Engineering',
    description: `Specialized in traffic safety planning and signage for highway design projects. Conducted and planned drainage system analysis on junctions.`,
    technologies: ['traffic studies', 'transportation engineering'],
  },
];

export const EDUCATION = [
  {
    timespan: 'Aug 2022 - Mar 2023',
    faculty: 'Wissen Akademie',
    school: `Bahcesehir University / Full-Stack Developer Bootcamp`,
    description: `By earning a Certificate of Achievement, I’ve proven my commitment to developing the essential skills needed for professional success.`,
    link: ``,
  },
  {
    timespan: 'Jan 2020 - Aug 2022',
    faculty: 'Transportation and Highway Engineering',
    school: 'Isik University / Master of Science - MS',
    description: `Thesis Topic: Determining The Highway Capacity and Examining The Improvements Via Connected and Autonomous Vehicles.`,
    link: `https://acikerisim.isikun.edu.tr/items/584f41ed-ef85-4987-9668-d850386f185a`,
  },
  {
    timespan: 'Feb 2019 - Jan 2021',
    faculty: 'Web/Multimedia Management and Webmaster',
    school: `Anadolu University / Associate's degree`,
    description: ``,
    link: ``,
  },
  {
    timespan: 'Sep 2011 - Jun 2018',
    faculty: `Civil Engineering`,
    school: `Isik University / Bachelor's degree`,
    description: `Concentration: Highway Design and Public Transportation`,
    link: ``,
  },
];

export const LICENSURE = [
  {
    issueDate: 'Mar 2023',
    issuingOrganization: 'Wissen Akademie - Bahcesehir University (BAU)',
    title: `Full Stack Developer Certificate`,
    credentialText: `BAU Bright Bootcamp - Full Stack Training Program`,
    image: wissenLogo,
  },
  {
    issueDate: 'Mar 2022',
    issuingOrganization:
      'Ministry of Transport and Infrastructure, Republic of Turkey',
    title: `HAREC - Ham Radio License`,
    credentialText: `Credential ID: TA2KUC`,
    image: motLogo,
  },
  {
    issueDate: 'Aug 2020',
    issuingOrganization: 'Geomes Engineering Services',
    title: `UAV-1 Commercial Pilot Certificate`,
    credentialText: `Credential ID: TR-IHA1T2749951`,
    image: geomesLogo,
  },
];

export const ABOUT_CONTENT = `I'm Berkcan, and I work as a software developer at the moment. I have a background that combines tech and engineering. During my master's program, I focused on Autonomous Vehicles after initially studying Civil Engineering. My goal is to push for effective, significant solutions that directly advance society and helping not only those around me but also supporting my own growth and success. My journey into software development has been driven by a passion for innovation, and I thrive on tackling challenges that blend engineering and code. In my spare time, I like to work on personal software projects, play video games, and participate in outdoor sports to keep active.`;

export const ABOUT_MISSIONS = [
  {
    title: 'What is my mission?',
    description: `Support my own growth and achievements while simultaneously providing effective, meaningful solutions that directly impact society and empower those around me.`,
    items: [],
  },
  {
    title: 'What is my vision?',
    description: `Bridge the gap between engineering and software, advancing fields like AI and AV to create lasting, positive impacts on society.`,
    items: [],
  },
  {
    title: 'What are my values?',
    description: ``,
    items: [
      {
        head: `curiosity`,
        text: `I always seek new knowledge and explore uncharted territories to drive meaningful advancements.`,
      },
      {
        head: `purpose`,
        text: `Prioritize work that has a tangible, positive impact on society and contributes to solutions that matter.`,
      },
      {
        head: `collaboration`,
        text: `Foster a culture of teamwork, where knowledge sharing and mutual support fuel collective success.`,
      },
      {
        head: `efficiency`,
        text: `Focus on what truly matters, eliminating unnecessary work and dedicating time to meaningful challenges.`,
      },
      {
        head: `quality`,
        text: `Be recognized for tackling complex challenges, and inspire others to aim for excellence.`,
      },
      {
        head: `accountability`,
        text: `I take responsibility for my work and approach every challenge with honesty and transparency.`,
      },
    ],
  },
];

export const HERO_CONTENT = [
  {
    text: `My name is Berkcan Küçükoğlu, and I blend an Engineering foundation with a focus on Software Development. This transition allows me to bring a unique perspective to my work in developing technology-driven solutions, combining my Engineering expertise with Software skills.`,
  },
  {
    text: `Currently, I’m working as a Software Developer. Before moving into software, I gained valuable experience as a Transportation Engineer in both technical offices and on-site settings, where I developed strong project management and workflow skills.`,
  },
];

export const HERO_MISSIONS = [
  {
    title: 'Working for Efficiency',
    description:
      'Leveraging engineering and software expertise to create innovative, workflow-enhancing applications that drive productivity and efficiency.',
    icon: <FontAwesomeIcon icon={faPersonDigging} />,
  },
  {
    title: 'Advancing Technology',
    description:
      'Pursuing projects that bridge engineering and software, shaping sustainable, impactful solutions for real-world challenges.',
    icon: <FontAwesomeIcon icon={faMicrochip} />,
  },
  {
    title: 'Continuous Evolution',
    description:
      'Committing to learning new tech, embracing challenges, and expanding my expertise to make a meaningful impact in the industry.',
    icon: <FontAwesomeIcon icon={faDna} />,
  },
];

export const CONTACT_TEXT = `If you didn’t find the information you’re looking for, feel free to reach out directly. I’m always open to discussing my work, experience, or any questions you might have.`;

export const CONTACT_PRIVACRY = [
  `Information provided through the contacts are to be used only and exclusively for professional communication.`,
  `If offensive or irrelevant messages are received, I reserve the right to stop communicating with you or choose not to respond to your messages.`,
];

export const PRIVACRY_CONTENT = [
  {
    title: `Terms of Use`,
    listItems: [
      `This website is intended to showcase professional experience and skills.`,
      `By using this website, you agree to using it in a polite and ethical manner.`,
      `If offensive or irrelevant messages are received, I reserve the right to stop communicating with you or choose not to respond to your messages.`,
      `I reserve the right to block any communication channels to maintain a productive environment.`,
    ],
  },
  {
    title: `Privacy Policy`,
    listItems: [
      `Your privacy is valued, and this site does not collect any data.`,
      `Please reach out with genuine interest and respect for privacy.`,
    ],
  },
];

export const FOOTER_CONTENT = `“Victory is for those who can say "Victory is mine". Success is for those who can begin saying "I will succeed" and say "I have succeeded" in the end.”`;

export const FOOTER_AUTHOR = `Mustafa Kemal Atatürk: The First President and Founder of the Republic of Turkey.`;

export const CURRENT_DATE = {
  formattedDate: getFormattedDate(),
  year: getYear(),
};

function getFormattedDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = months[today.getMonth()];
  const year = today.getFullYear();

  return `${day} ${month} ${year}`;
}

function getYear() {
  const today = new Date();
  const year = today.getFullYear();

  return `${year}`;
}

export function calculateExperienceDuration(sTime, eTime) {
  const sDate = new Date(sTime + ' 1');
  // Use current date if null or empty
  const eDate = eTime?.trim() ? new Date(eTime + ' 1') : new Date();

  let totalMonths =
    (eDate.getFullYear() - sDate.getFullYear()) * 12 +
    (eDate.getMonth() - sDate.getMonth()) +
    1;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return { years, months };
}
