import type { HTMLAttributes, ReactNode } from "react";


export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children: ReactNode;
}