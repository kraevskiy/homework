import { DetailedHTMLProps, HTMLAttributes } from 'react';

type TAppearanceLoaderProps = 'blue' | 'red';

export interface LoaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
	appearance?: TAppearanceLoaderProps;
}
