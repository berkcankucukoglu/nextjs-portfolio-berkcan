import github_picture from '../public/assets/projects/github_project.webp';
import infra_gif from '../public/assets/projects/infraworks_project.gif';
import vissim_picture from '../public/assets/projects/vissim_project.webp';
import sigortalar_picture from '../public/assets/projects/sigortalar_project.webp';
import yetenex_picture from '../public/assets/projects/yetenex_project.webp';

export const PROJECTS = [
  {
    title: 'My GitHub Page',
    image: github_picture,
    description: `Visit my GitHub page to explore all my recent projects.`,
    technologies: [],
    url: 'https://github.com/berkcankucukoglu',
  },
  {
    title: 'sigortalarburada.com',
    image: sigortalar_picture,
    description: `Sigortalarburada allows you to compare insurance companies and present you with the most suitable insurance offer. Throughout the project, I contributed to both front-end and back-end development between Jun 2024 and Jun 2025 and also gained practical experience in handling asynchronous communication.`,
    technologies: [
      'C#',
      '.NET Core',
      'Vue.js',
      'ASP.NET MVC',
      'ASP.NET Web API',
      'MS SQL',
    ],
    url: 'https://sigortalarburada.com',
  },
  {
    title: 'yetenex.com',
    image: yetenex_picture,
    description: `Yetenex is a talent and job-finding platform where job seekers and employers come together, talents are discovered, and the right candidate-employer match is made. As a full-stack developer, I actively contributed to the development of the project, a dynamic job portal and application tracking system between Apr 2023 and Feb 2024.`,
    technologies: [
      'C#',
      '.NET Core',
      'xUnit',
      'React.js',
      'Material-UI',
      'Tailwind CSS',
      'Language Integrated Query (LINQ)',
      'ASP.NET Web API',
      'MySQL',
    ],
    url: 'https://yetenex.com',
  },
  {
    title: 'Vissim & Autonomous Vehicles',
    image: vissim_picture,
    description: `My master's thesis focused on freeway capacity improvements, micro simulations and usage of Autonomous Vehicles.`,
    technologies: [
      'Vissim',
      'project management',
      'traffic studies',
      'transportation engineering',
    ],
    url: '',
  },
  {
    title: `Metro station environment landscaping`,
    image: infra_gif,
    description: `I used Autodesk programs, particularly Civil3D and InfraWorks, for presentations, cut and fill quantity calculations, verifying structure positions, landscaping, obtaining early land/ground .xml files, BIM, and many other purposes.`,
    technologies: ['Civil 3D', 'InfraWorks', 'transportation engineering'],
    url: '',
  },
];
