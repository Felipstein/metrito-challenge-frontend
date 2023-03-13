export type TagStatusColor = 'green' | 'red' | 'cyan';

export interface TagStatusProps {
  text: string;
  color: TagStatusColor;
  small?: boolean;
}
