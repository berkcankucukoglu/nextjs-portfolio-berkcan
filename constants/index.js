// import project1 from '../assets/projects/5aoE9pwrER4-unsplash.jpg';
// import project2 from '../assets/projects/aVf9CI1kZ0s-unsplash.jpg';
// import project3 from '../assets/projects/IhxM7w392e0-unsplash.jpg';
// import project4 from '../assets/projects/sK0dKnDOcEM-unsplash.jpg';
import profilePicture from '../public/assets/profilePicture.jpg';

export const USER_INFO = {
  name: 'Berkcan',
  surname: 'Küçükoğlu',
  address: 'Istanbul - Turkey',
  phoneNo: '+0090-537-5098710',
  email: 'berkcankucukoglu@gmail.com',
  image: profilePicture,
  title: 'Full Stack Developer',
  siteLastUpdateTime: `02 Nov 2024`,
};

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

export const PROJECTS = [
  {
    title: 'ABC Website',
    // image: project1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptates perferendis optio reprehenderit dolorem libero quia, praesentium, quasi voluptatem ratione sequi a maxime, temporibus provident id officiis quo ut dignissimos?',
    technologies: ['HTML', 'CSS', 'React'],
  },
  {
    title: 'ABC Platform',
    // image: project2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    technologies: ['Vue.js', 'MySQL'],
  },
  {
    title: 'ABC App',
    // image: project3,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptates perferendis optio reprehenderit dolorem libero quia, praesentium.',
    technologies: ['HTML', 'CSS', 'Angular'],
  },
  {
    title: 'ABC Test',
    // image: project4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptates perferendis optio reprehenderit dolorem libero quia, praesentium.',
    technologies: ['HTML', 'CSS', 'Angular'],
  },
];

export const HERO_CONTENT = [
  {
    text: `My name is Berkcan Küçükoğlu, and I blend an engineering foundation with a focus on software development. This transition allows me to bring a unique perspective to my work in developing technology-driven solutions, combining my engineering expertise with software skills.`,
  },
  {
    text: `Currently, I’m working as a software developer after completing a master’s that focused on the impact of autonomous vehicles on Istanbul’s traffic. Before moving into to software, I gained valuable experience as a transportation engineer in both technical offices and on-site, where I gaining valuable experience in project management and workflow development. I am passionate about merging software development with engineering to create innovative and impactful tools.`,
  },
];

export const CONTACT_TEXT = `If you didn’t find the information you’re looking for, feel free to reach out directly. I’m always open to discussing my work, experience, or any questions you might have.`;

export const CONTACT_PRIVACRY = [
  `Information provided through the contact form is to be used only and exclusively for professional communication.`,
  `If offensive or irrelevant messages are received, I reserve the right to stop communicating with you or choose not to respond to your messages.`,
  `For more information, please visit to Terms of Use and Privacy Policy pages down below.`,
];

export const FOOTER_CONTENT = `“Victory is for those who can say "Victory is mine". Success is for those who can begin saying "I will succeed" and say "I have succeeded" in the end.”`;

export const FOOTER_AUTHOR = `Mustafa Kemal Atatürk: The First President and Founder of the Republic of Turkey.`;

export const PRIVACRY_CONTENT = [
  {
    title: `Privacy Policy`,
    text: ``,
    listItems: [
      `Your privacy is valued, and this site does not collect sensitive personal data.`,
      `Information provided through the contact form will only be used for professional communication.`,
      `Misuse of the contact options, including sending irrelevant or excessive messages, may result in restrictions on further communication attempts.`,
      `Please reach out with genuine interest and respect for privacy.`,
    ],
  },
  {
    title: `Terms of Use`,
    text: ``,
    listItems: [
      `This website is intended to showcase my professional experience and skills.`,
      `By using this website, you agree to using it in a polite and ethical manner.`,
      `If offensive or irrelevant messages are received, I reserve the right to stop communicating with you or choose not to respond to your messages.`,
      `I reserve the right to block any communication channels to maintain a productive environment.`,
    ],
  },
];

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
