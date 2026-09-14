export interface ThemeDefinition {
  /** Stable identifier, persisted in localStorage and used as the data-theme value. */
  id: string;
  /** Shown in the theme switcher dropdown. */
  label: string;
  /**
   * CSS custom property overrides (name without the leading "--") applied to
   * <html> when this theme is active. Omitted keys fall back to the values
   * defined in src/styles/tokens.css. The "base" theme intentionally has no
   * overrides — it *is* tokens.css.
   */
  vars?: Record<string, string>;
  /**
   * Stylesheet URLs (e.g. Google Fonts) to inject when this theme is selected,
   * so alternate typefaces don't need to be installed as local packages to
   * try out.
   */
  fontLinks?: string[];
}

export const themes: ThemeDefinition[] = [
  {
    id: "base",
    label: "Base (current)",
  },
{
  "id": "custom-palette-mu1t1ibd",
  "label": "Custom palette",
  "vars": {
    "accent": "#558B6E",
    "accent-muted": "#86A5D9",
    "accent-dark": "#237864",
    "accent-cool": "#6fa9b8",
    "bg-primary": "#ffffff",
    "bg-secondary": "#dbd2d8",
    "bg-elevated": "#dbd2d8",
    "bg-light": "#edf3f0",
    "bg-light-bright": "#f7faf8",
    "text-primary": "#000000",
    "text-secondary": "#223843",
    "text-muted": "#474350",
    "text-dark": "#13201c",
    "text-dark-secondary": "#4c5e57",
    "font-heading": "\"Montserrat\", ui-sans-serif, system-ui, sans-serif",
    "font-sans": "\"Lora\", Georgia, \"Times New Roman\", serif",
    "font-mono": "\"Hind Madurai\", ui-sans-serif, system-ui, sans-serif"
  },
  "fontLinks": [
    "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Hind+Madurai:wght@400;500;600;700&display=swap"
  ]
},
  {
    id: "lavender-feel-mu1sjyty",
    label: "lavender_feel",
    vars: {
      accent: "#d77a61",
      "accent-muted": "#86A5D9",
      "accent-dark": "#237864",
      "accent-cool": "#6fa9b8",
      "bg-primary": "#ffffff",
      "bg-secondary": "#dbd2d8",
      "bg-elevated": "#dbd2d8",
      "bg-light": "#edf3f0",
      "bg-light-bright": "#f7faf8",
      "text-primary": "#000000",
      "text-secondary": "#223843",
      "text-muted": "#474350",
      "text-dark": "#13201c",
      "text-dark-secondary": "#4c5e57",
      "font-sans": '"Geist Variable", "Inter", ui-sans-serif, system-ui, sans-serif',
      "font-mono": '"Geist Mono Variable", "IBM Plex Mono", ui-monospace, monospace',
    },
  },
];

export const DEFAULT_THEME_ID = "base";

/**
 * Every CSS custom property the live palette editor (and the theme-apply
 * script) knows how to read, override, and clear. Kept as an explicit list
 * (rather than derived from `themes`) so a locally-saved custom palette can
 * introduce any of these keys even though no built-in theme currently uses
 * it.
 */
export const THEME_COLOR_KEYS = [
  "accent",
  "accent-muted",
  "accent-dark",
  "accent-cool",
  "bg-primary",
  "bg-secondary",
  "bg-elevated",
  "bg-light",
  "bg-light-bright",
  "text-primary",
  "text-secondary",
  "text-muted",
  "text-dark",
  "text-dark-secondary",
] as const;

export const THEME_FONT_KEYS = ["font-heading", "font-sans", "font-mono"] as const;

export const THEME_VAR_KEYS = [...THEME_COLOR_KEYS, ...THEME_FONT_KEYS];

/** localStorage keys shared by the head script and the editor UI. */
export const STORAGE_KEYS = {
  activeTheme: "afh:design-theme",
  customPalettes: "afh:custom-palettes",
};
