import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

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
