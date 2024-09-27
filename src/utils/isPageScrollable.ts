// src/utils/isPageScrollable.ts

export function isPageScrollable(): boolean {
  if (typeof window !== 'undefined') {
    const { scrollHeight, clientHeight } = document.documentElement;
    return scrollHeight > clientHeight;
  }
  return false;
}
