export const FOOTER_CONTENT = `“Victory is for those who can say "Victory is mine". Success is for those who can begin saying "I will succeed" and say "I have succeeded" in the end.”`;

export const FOOTER_AUTHOR = `Mustafa Kemal Atatürk: The First President and Founder of the Republic of Turkey.`;

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

export const SITE_LAST_UPDATE_TIME = `02 Nov 2024`;

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
