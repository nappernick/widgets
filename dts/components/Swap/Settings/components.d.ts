import { ReactNode } from 'react';
import { AnyStyledComponent } from 'styled-components/macro';
export declare const optionCss: (selected: boolean) => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
export declare function value(Value: AnyStyledComponent): import("styled-components").StyledComponent<any, import("styled-components").DefaultTheme, any, any>;
interface LabelProps {
    name: ReactNode;
    tooltip?: ReactNode;
}
export declare function Label({ name, tooltip }: LabelProps): import("react/jsx-runtime").JSX.Element;
export {};
