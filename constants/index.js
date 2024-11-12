import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareFontAwesome,
  faLinkedin,
  faSquareGithub,
} from '@fortawesome/free-brands-svg-icons';
import {
  faSquarePhone,
  faSquareEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import profilePicture from '../public/assets/profilePicture.jpg';
import geomesLogo from '../public/assets/certifications/geomes_logo.webp';
import motLogo from '../public/assets/certifications/ministry_of_transport_and_infrastructure_turkey_logo.webp';
import wissenLogo from '../public/assets/certifications/wissen_teknoloji_logo.webp';

export const USER_INFO = {
  name: 'Berkcan',
  surname: 'Küçükoğlu',
  image: profilePicture,
  title: 'Full Stack Developer',
  contactInfo: [
    {
      fieldName: 'Email',
      fieldValue: 'berkcankucukoglu@gmail.com',
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
    timespan: 'Jan 2021 - Present',
    role: 'Full Stack Developer',
    company: 'Company Inc.',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptates perferendis optio reprehenderit dolorem libero quia, praesentium, quasi voluptatem ratione sequi a maxime, temporibus provident id officiis quo ut dignissimos?`,
    technologies: ['Javascript', 'React.js', 'MsSQL'],
  },
  {
    timespan: 'Jan 2020 - Jan 2021',
    role: 'Full Stack Developer',
    company: 'Company Inc.',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptates perferendis optio reprehenderit dolorem libero quia, praesentium, quasi voluptatem ratione sequi a maxime, temporibus provident id officiis quo ut dignissimos?`,
    technologies: ['HTML', 'CSS', 'C#', 'MySQL'],
  },
];

export const EDUCATION = [
  {
    timespan: 'Jan 2021 - Present',
    faculty: 'Engineering',
    school: 'University',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptates perferendis optio reprehenderit dolorem libero quia, praesentium, quasi voluptatem ratione sequi a maxime, temporibus provident id officiis quo ut dignissimos?`,
  },
  {
    timespan: 'Jan 2020 - Jan 2021',
    faculty: 'Engineering',
    school: 'University',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptates perferendis optio reprehenderit dolorem libero quia, praesentium, quasi voluptatem ratione sequi a maxime, temporibus provident id officiis quo ut dignissimos?`,
  },
  {
    timespan: 'Jan 2020 - Jan 2021',
    faculty: 'Engineering',
    school: 'University',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptates perferendis optio reprehenderit dolorem libero quia, praesentium, quasi voluptatem ratione sequi a maxime, temporibus provident id officiis quo ut dignissimos?`,
  },
  {
    timespan: 'Jan 2020 - Jan 2021',
    faculty: 'Engineering',
    school: 'University',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptates perferendis optio reprehenderit dolorem libero quia, praesentium, quasi voluptatem ratione sequi a maxime, temporibus provident id officiis quo ut dignissimos?`,
  },
];

export const LICENSURE = [
  {
    issueDate: 'Mar 2023',
    issuingOrganization: 'Wissen Akademie',
    title: `Full Stack Developer`,
    credentialText: `BAU Bright Bootcamp`,
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
    issuingOrganization: 'Geomes Mühendislik Hizmetleri',
    title: `UAV-1 Commercial Pilot Certificate`,
    credentialText: `Credential ID: TR-IHA1T2749951`,
    image: geomesLogo,
  },
];

export const CONTACT_TEXT = `If you didn’t find the information you’re looking for, feel free to reach out directly. I’m always open to discussing my work, experience, or any questions you might have.`;

export const CONTACT_PRIVACRY = [
  `Information provided through the contact form is to be used only and exclusively for professional communication.`,
  `If offensive or irrelevant messages are received, I reserve the right to stop communicating with you or choose not to respond to your messages.`,
  `For more information, please visit to Terms of Use and Privacy Policy pages down below.`,
];

export const PRIVACRY_CONTENT = [
  {
    title: `Privacy Policy`,
    listItems: [
      `Your privacy is valued, and this site does not collect sensitive personal data.`,
      `Information provided through the contact form will only be used for professional communication.`,
      `Misuse of the contact options, including sending irrelevant or excessive messages, may result in restrictions on further communication attempts.`,
      `Please reach out with genuine interest and respect for privacy.`,
    ],
  },
  {
    title: `Terms of Use`,
    listItems: [
      `This website is intended to showcase my professional experience and skills.`,
      `By using this website, you agree to using it in a polite and ethical manner.`,
      `If offensive or irrelevant messages are received, I reserve the right to stop communicating with you or choose not to respond to your messages.`,
      `I reserve the right to block any communication channels to maintain a productive environment.`,
    ],
  },
];
