
export function formatDuration(totalSeconds: number): string {
  const units = [
    { label: 'y', value: 60 * 60 * 24 * 365 },
    { label: 'mo', value: 60 * 60 * 24 * 30 },
    { label: 'w', value: 60 * 60 * 24 * 7 },
    { label: 'd', value: 60 * 60 * 24 },
    { label: 'h', value: 60 * 60 },
    { label: 'm', value: 60 },
    { label: 's', value: 1 },
  ];

  let remaining = Math.max(0, Math.floor(totalSeconds));
  const parts: string[] = [];

  for (const { label, value } of units) {
    const amount = Math.floor(remaining / value);
    if (amount > 0) {
      parts.push(`${amount}${label}`);
      remaining %= value;
    }
  }

  return parts.length ? parts.join(' ') : '-';
}

export function formatGitLabDuration(totalSeconds: number): string {
  const HOUR = 60 * 60;
  const DAY = 8 * HOUR;
  const WEEK = 5 * DAY;
  const MONTH = 20 * DAY;
  const YEAR = 12 * MONTH;

  const units = [
    { label: 'y', value: YEAR },
    { label: 'mo', value: MONTH },
    { label: 'w', value: WEEK },
    { label: 'd', value: DAY },
    { label: 'h', value: HOUR },
    { label: 'm', value: 60 },
    { label: 's', value: 1 },
  ];

  let remaining = Math.max(0, Math.floor(totalSeconds));
  const parts: string[] = [];

  for (const { label, value } of units) {
    const amount = Math.floor(remaining / value);
    if (amount > 0) {
      parts.push(`${amount}${label}`);
      remaining %= value;
    }
  }

  return parts.length ? parts.join(' ') : '-';
}
