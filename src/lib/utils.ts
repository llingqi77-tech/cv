import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Build a URL for files served from Vite `public/`, respecting `base`.
 * Works for GitHub Pages subpath deployments (e.g. `/cv/`).
 */
export function assetUrl(p: string) {
  if (!p) return p
  if (/^(https?:)?\/\//.test(p) || p.startsWith("data:") || p.startsWith("blob:")) return p
  const base = (import.meta as any)?.env?.BASE_URL ?? "/"
  const baseNorm = String(base).endsWith("/") ? String(base) : `${base}/`
  const pathNorm = p.startsWith("/") ? p.slice(1) : p
  return `${baseNorm}${pathNorm}`
}
