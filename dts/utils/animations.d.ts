import { RefObject } from 'react';
export declare function isAnimating(node?: Animatable | Document): boolean;
/**
 * Delays a node's unmounting until any animations on that node are finished, so that an unmounting
 * animation may be applied. If there is no animation, this is a no-op.
 *
 * CSS should target the class returned from getAnimatingClass to determine when to apply the
 * animation.
 * Note that getAnimatingClass will be called when the node would normally begin unmounting.
 *
 * If the animation should be applied to an element that is not the root node of the removed subtree,
 * pass that element in the animatedElements array.
 *
 * Using the animatedElements array, you can apply exit animations to multiple elements at once.
 * Currently this only supports using the same className for all the elements, and uses
 * the animation of the first element in the array to determine when to unmount the node.
 */
export declare function useUnmountingAnimation(node: RefObject<HTMLElement>, getAnimatingClass: () => string, animatedElements?: RefObject<HTMLElement>[], skip?: boolean): void;
