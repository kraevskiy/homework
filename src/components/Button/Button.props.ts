import { TThemeColor } from '../../theme/colors';
import { DetailedHTMLProps, ButtonHTMLAttributes, LinkHTMLAttributes } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    color?: TThemeColor;
}

export interface LinkProps extends DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {
    color: TThemeColor;
}
