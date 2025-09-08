import type { HTMLAttributes, ReactNode } from "react";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
    children: ReactNode;
    type?: 'main' | 'description';
}