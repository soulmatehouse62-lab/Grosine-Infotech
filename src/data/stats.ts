export type Stat = {
  value: number;
  /** Text shown directly after the number, e.g. "+" or "%". */
  suffix?: string;
  label: string;
};

// Every figure below is a placeholder. Do not publish until replaced.
export const stats: Stat[] = [
  // TODO: replace with real data
  { value: 100, suffix: "+", label: "Projects delivered" },
  // TODO: replace with real data
  { value: 50, suffix: "+", label: "Clients served" },
  // TODO: replace with real data
  { value: 5, suffix: "+", label: "Years of experience" },
  // TODO: replace with real data
  { value: 95, suffix: "%", label: "Client retention" },
];
