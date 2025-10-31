import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "danger";

export interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
