import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function placeholderAction(label: string) {
  return () => {
    window.console.info(`${label} clicked`);
  };
}
