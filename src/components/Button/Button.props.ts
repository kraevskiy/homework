import { TThemeColor } from '../../theme/colors';
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    color?: TThemeColor;
}
