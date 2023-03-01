import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TData } from '../../data/data.types';

export interface TableRowProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
    data: TData;
}