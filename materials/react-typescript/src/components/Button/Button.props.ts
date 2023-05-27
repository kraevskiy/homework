import { DetailedHTMLProps, HTMLAttributes } from 'react';

type TAppearanceButtonProps = 'info' | 'success' | 'error';

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
	appearance?: TAppearanceButtonProps;
}
