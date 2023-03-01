import { TThemeColor } from '../../theme/colors';
import { DetailedHTMLProps, AnchorHTMLAttributes } from 'react';

export interface ButtonLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    color?: TThemeColor;
}
