import { SITE_LAST_UPDATE_TIME, SITE_BASE_URL } from '@/constants';
import { NAV_LINKS } from '@/constants/navLinks';
export default function sitemap() {
  const modifiedDate = convertToSiteVersion(SITE_LAST_UPDATE_TIME);
  const sitemapEntries = NAV_LINKS.map((item) => ({
    url: `${SITE_BASE_URL}${item.path}`,
    lastModified: modifiedDate,
  }));

  return sitemapEntries;
}

function convertToSiteVersion(dateString) {
  const date = new Date(dateString);
  date.setUTCDate(date.getUTCDate() + 1);
  date.setUTCHours(0, 0, 0, 0);
  return date.toISOString();
}
