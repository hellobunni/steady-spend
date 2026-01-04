import { cn } from "@/lib/utils";

type SliderProps = {
  value: number[];
  onValueChange: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
};

const Slider = ({ value, onValueChange, min = 0, max = 100, step = 1, className }: SliderProps) => {
  return (
    <input
      type="range"
      className={cn(
        "w-full accent-emerald-600 h-2 rounded-full bg-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500",
        className
      )}
      value={value[0]}
      min={min}
      max={max}
      step={step}
      onChange={(event) => onValueChange([Number(event.target.value)])}
    />
  );
};

export { Slider };
