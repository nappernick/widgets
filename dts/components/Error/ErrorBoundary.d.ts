import { Component, ErrorInfo, PropsWithChildren } from 'react';
export type OnError = (error: Error, info?: ErrorInfo) => void;
interface ErrorBoundaryProps {
    onError?: OnError;
}
type ErrorBoundaryState = {
    error?: Error;
};
/**
 * Throws an error from outside of the React lifecycle.
 * Errors thrown through this method will correctly trigger the ErrorBoundary.
 *
 * @example
 * const throwError = useAsyncError()
 * useEffect(() => {
 *   fetch('http://example.com')
 *     .catch((e: Error) => {
 *       throwError(toWidgetError(e))
 *     })
 * }, [throwError])
 */
export declare function useAsyncError(): (error: unknown) => void;
export default class ErrorBoundary extends Component<PropsWithChildren<ErrorBoundaryProps>, ErrorBoundaryState> {
    static getDerivedStateFromError(error: Error): {
        error: Error;
    };
    constructor(props: ErrorBoundaryProps);
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    renderErrorView(error: Error): import("react/jsx-runtime").JSX.Element;
    render(): string | number | boolean | Iterable<import("react").ReactNode> | import("react/jsx-runtime").JSX.Element | null | undefined;
}
export {};
