import { create } from 'zustand';

type Theme = 'dark' | 'light';

interface ThemeState {
    theme: Theme;
    toggleTheme: () => void;
    initTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set, get) => ({
    theme: 'dark',
    toggleTheme: () => {
        const newTheme = get().theme === 'dark' ? 'light' : 'dark';
        set({ theme: newTheme });
        localStorage.setItem('cv-theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    },
    initTheme: () => {
        const saved = localStorage.getItem('cv-theme') as Theme;
        if (saved && (saved === 'dark' || saved === 'light')) {
            set({ theme: saved });
            document.documentElement.setAttribute('data-theme', saved);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const theme = prefersDark ? 'dark' : 'light';
            set({ theme });
            document.documentElement.setAttribute('data-theme', theme);
        }
    },
}));
