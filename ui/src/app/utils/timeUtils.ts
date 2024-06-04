import homeContent from "@content/home.json";

export function getTimePassedLabel(pastDate: string) {
  const timePassedMs = new Date().getTime() - new Date(pastDate).getTime();
  const timePassedSec = timePassedMs / 1000;
  let timePassedLabel;
  if (timePassedSec < 60) {
    timePassedLabel = `0 ${homeContent.news.timestamp.minutesAgo}`;
  } else if (timePassedSec < 3600) {
    timePassedLabel = `${Math.floor(timePassedSec / 60)} ${homeContent.news.timestamp.minutesAgo}`;
  } else if (timePassedSec < 3600 * 24) {
    timePassedLabel = `${Math.floor(timePassedSec / 3600)} ${homeContent.news.timestamp.hoursAgo}`;
  } else {
    timePassedLabel = `${Math.floor(timePassedSec / 3600 / 24)} ${homeContent.news.timestamp.daysAgo}`;
  }

  return timePassedLabel;
}
