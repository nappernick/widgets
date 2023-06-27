/**
 * Invokes callback after a timeout defined by the delay
 * @param callback
 * @param delay if null, the callback will not be invoked
 */
export default function useTimeout(callback: () => void, delay: null | number): void;
