/// <reference types="react" />
import { Currency } from '@uniswap/sdk-core';
interface BaseProps {
    token: Currency & {
        logoURI?: string;
    };
    size?: number;
}
type TokenImgProps = BaseProps & Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof BaseProps>;
declare function TokenImg({ token, size }: TokenImgProps): import("react/jsx-runtime").JSX.Element;
declare const _default: import("styled-components").StyledComponent<typeof TokenImg, import("styled-components").DefaultTheme, {
    size?: number | undefined;
}, never>;
export default _default;
