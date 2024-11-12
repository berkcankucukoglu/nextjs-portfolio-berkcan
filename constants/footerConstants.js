export const FOOTER_CONTENT = `“Victory is for those who can say "Victory is mine". Success is for those who can begin saying "I will succeed" and say "I have succeeded" in the end.”`;

export const FOOTER_AUTHOR = `Mustafa Kemal Atatürk: The First President and Founder of the Republic of Turkey.`;

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
