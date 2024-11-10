import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMicrochip,
  faDna,
  faPersonDigging,
} from '@fortawesome/free-solid-svg-icons';

export const HERO_MISSIONS = [
  {
    title: 'Efficient Solutions',
    description:
      'Leverage engineering and software expertise to create innovative, workflow-enhancing applications that drive productivity and efficiency.',
    icon: <FontAwesomeIcon icon={faPersonDigging} />,
  },
  {
    title: 'Advance Technology',
    description:
      'Pursue projects that bridge engineering and software, shaping sustainable, impactful solutions for real-world challenges.',
    icon: <FontAwesomeIcon icon={faMicrochip} />,
  },
  {
    title: 'Continuous Evolution',
    description:
      'Commit to learning new tech, embracing challenges, and expanding my expertise to make a meaningful impact in the industry.',
    icon: <FontAwesomeIcon icon={faDna} />,
  },
];
