"use client";

import { useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { SmartImage } from "@/components/ui/SmartImage";

type BeforeAfterSliderProps = {
  beforeSrc?: string;
  afterSrc?: string;
  beforeAlt?: string;
  afterAlt?: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before",
  afterAlt = "After",
}: BeforeAfterSliderProps) {
  const [value, setValue] = useState(50);

  return (
    <div className="@container relative w-full overflow-hidden rounded-2xl aspect-[4/3]">
      <div className="absolute inset-0">
        {afterSrc ? (
          <SmartImage src={afterSrc} alt={afterAlt} label="After photo" />
        ) : (
          <div className="h-full w-full bg-brand-50" />
        )}
      </div>

      <div
        className="absolute inset-y-0 left-0 z-10 overflow-hidden"
        style={{ width: `${value}%` }}
      >
        <div className="absolute inset-y-0 left-0 h-full w-[100cqw]">
          {beforeSrc ? (
            <SmartImage src={beforeSrc} alt={beforeAlt} label="Before photo" />
          ) : (
            <div className="h-full w-full bg-surface" />
          )}
        </div>
        <div className="absolute inset-y-0 right-0 w-0.5 bg-white" />
        <div className="absolute top-1/2 right-0 flex h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink shadow-md">
          <MoveHorizontal aria-hidden="true" className="h-5 w-5" />
        </div>
      </div>

      <span className="pointer-events-none absolute top-3 left-3 z-20 rounded-full bg-ink/70 px-3 py-1 text-sm text-white">
        Before
      </span>
      <span className="pointer-events-none absolute top-3 right-3 z-20 rounded-full bg-ink/70 px-3 py-1 text-sm text-white">
        After
      </span>

      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        aria-label="Before and after comparison"
        className="absolute inset-0 z-30 h-full w-full cursor-ew-resize touch-pan-y opacity-0"
      />
    </div>
  );
}
