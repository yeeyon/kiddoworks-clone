const UNITS: { label: string; seconds: number }[] = [
  { label: "year", seconds: 31536000 },
  { label: "month", seconds: 2592000 },
  { label: "week", seconds: 604800 },
  { label: "day", seconds: 86400 },
  { label: "hour", seconds: 3600 },
  { label: "minute", seconds: 60 },
  { label: "second", seconds: 1 },
];

export function timeAgo(dateInput: string | Date): string {
  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

  if (seconds < 0) return "just now";

  for (const unit of UNITS) {
    const count = Math.floor(seconds / unit.seconds);
    if (count >= 1) {
      return `${count} ${unit.label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}
