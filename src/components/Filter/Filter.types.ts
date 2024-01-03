import { ChangeEvent } from 'react';

export interface FilterProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
