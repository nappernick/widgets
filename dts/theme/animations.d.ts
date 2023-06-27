export declare enum TransitionDuration {
    Fast = 125,
    Medium = 200,
    Slow = 250
}
export declare const AnimationSpeed: {
    Fast: string;
    Medium: string;
    Slow: string;
};
export declare enum SlideAnimationType {
    /** Used when the Dialog is closing. */
    CLOSING = "closing",
    /**
     * Used when the Dialog is paging to another Dialog screen.
     * Paging occurs when multiple screens are sequenced in the Dialog, so that an action that closes
     * one will simultaneously open the next. Special-casing paging animations can make the user feel
     * like they are not leaving the Dialog, despite the initial screen closing.
     */
    PAGING = "paging"
}
export declare const fadeIn: import("styled-components").Keyframes;
export declare const fadeOut: import("styled-components").Keyframes;
export declare const fadeAnimationCss: import("styled-components").FlattenSimpleInterpolation;
