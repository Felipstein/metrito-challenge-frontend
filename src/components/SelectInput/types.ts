import { SelectHTMLAttributes } from 'react';

export interface SelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}
