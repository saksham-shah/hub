import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// eslint-disable-next-line no-explicit-any
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}