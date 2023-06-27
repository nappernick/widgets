import { HTMLProps } from 'react';
declare const Input: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, {}, never>;
export default Input;
interface InputProps extends Omit<HTMLProps<HTMLInputElement>, 'onChange' | 'as' | 'value'> {
    value: string;
    onChange: (input: string) => void;
    placeholder?: string;
}
export declare const StringInput: import("react").ForwardRefExoticComponent<Omit<InputProps, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export declare const IntegerInput: import("react").ForwardRefExoticComponent<Omit<InputProps, "ref"> & import("react").RefAttributes<unknown>>;
export declare const DecimalInput: import("react").ForwardRefExoticComponent<Omit<InputProps, "ref"> & import("react").RefAttributes<unknown>>;
export declare const inputCss: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
