import { ICategory } from "@/data/categories/categories.interface";

export interface ICategoryCardProps {
  category: ICategory;
  borderRadius?: string;
  overlay?: boolean | string;
  shadow?: boolean | string;
  className?: string;
  href?: string;
  onClick?: () => void;
  height?: string | number;
};