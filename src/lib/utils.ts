import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const HEADER_OFFSET = 72;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top, behavior: 'smooth' });
  }, [hash]);

  return null;
}