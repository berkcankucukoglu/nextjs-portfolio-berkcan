import profilePicture from '../public/assets/profilePicture.jpg';
import geomesLogo from '../public/assets/certifications/geomes_logo.webp';
import motLogo from '../public/assets/certifications/ministry_of_transport_and_infrastructure_turkey_logo.webp';
import wissenLogo from '../public/assets/certifications/wissen_teknoloji_logo.webp';

export const USER_INFO = {
  name: 'Berkcan',
  surname: 'Küçükoğlu',
  address: 'Istanbul - Turkey',
  image: profilePicture,
  title: 'Full Stack Developer',
  info: [
    {
      fieldName: 'name',
      fieldValue: 'Berkcan Küçükoğlu',
    },
    {
      fieldName: 'phone',
      fieldValue: '(+90)-537-5098710',
    },
    {
      fieldName: 'email',
      fieldValue: 'berkcankucukoglu@gmail.com',
    },
    {
      fieldName: 'address',
      fieldValue: 'Istanbul - Turkey',
    },
  ],
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
