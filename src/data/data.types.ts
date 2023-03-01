export type TDataTypeValue = 'Lesson' | 'Materials';
export type TDataType = TDataTypeValue | TDataTypeValue[];
export type TDataLinks = { demo?: string; code?: string };


export type TData = {
    type?: TDataType;
    name: string;
    links?: TDataLinks
}
