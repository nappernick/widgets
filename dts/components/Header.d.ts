import { PropsWithChildren, ReactElement } from 'react';
export interface HeaderProps {
    title?: ReactElement;
}
export default function Header({ title, children }: PropsWithChildren<HeaderProps>): import("react/jsx-runtime").JSX.Element;
