import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMicrochip,
  faDna,
  faPersonDigging,
} from '@fortawesome/free-solid-svg-icons';

export const HERO_CONTENT = [
  {
    text: `My name is Berkcan Küçükoğlu, and I blend an engineering foundation with a focus on software development. This transition allows me to bring a unique perspective to my work in developing technology-driven solutions, combining my engineering expertise with software skills.`,
  },
  {
    text: `Currently, I’m working as a software developer. Before moving into software, I gained valuable experience as a transportation engineer in both technical offices and on-site settings, where I developed strong project management and workflow skills.`,
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
