export interface ProgressBarProps {
  percentage: number;
  label: string;
  labelId?: string;
  ariaValueNow?: number;
  minValue?: number;
  maxValue?: number;
  large?: boolean;
  showLabel?: boolean;
  qa?: string;
}
