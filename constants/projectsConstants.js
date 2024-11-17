import github_picture from '../public/assets/projects/github_project.webp';
import infra_gif from '../public/assets/projects/infraworks_project.gif';
import vissim_picture from '../public/assets/projects/vissim_project.webp';

export const PROJECTS = [
  {
    title: 'My GitHub Page',
    image: github_picture,
    description: `Visit my GitHub page to explore all my recent projects.`,
    technologies: [],
    url: 'https://github.com/berkcankucukoglu',
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
