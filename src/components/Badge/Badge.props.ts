import { DetailedHTMLProps, HTMLAttributes } from "react";
import { TThemeColor } from "../../theme/colors";

export interface BadgeProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    color?: TThemeColor;
}
