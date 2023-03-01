import { TThemeColor } from './../../../.history/src/components/Badge/colors_20230301190054';
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface BadgeProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    color?: TThemeColor;
}