interface ScrollbarOptions {
    padded?: boolean;
    hideScrollbar?: boolean;
}
export default function useScrollbar(element: HTMLElement | null, { padded, hideScrollbar }?: ScrollbarOptions): import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
export {};
