import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// to replace hyphens with space 
// replace(/-/g, " ")


// to replace space with hyphens
// replace(/\s/g, "-")