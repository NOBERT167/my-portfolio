"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";

const THEME_EVENT = "portfolio-theme-change";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(THEME_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(THEME_EVENT, onStoreChange);
  };
}

function getThemeSnapshot() {
  return localStorage.getItem("theme") !== "light";
}

function getServerThemeSnapshot() {
  return true;
}

export function useDarkMode() {
  const isDark = useSyncExternalStore(
    subscribe,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
  }, [isDark]);

  const toggle = useCallback(() => {
    const next = !isDark;
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.style.colorScheme = next ? "dark" : "light";
    window.dispatchEvent(new Event(THEME_EVENT));
  }, [isDark]);

  return { isDark, toggle };
}
