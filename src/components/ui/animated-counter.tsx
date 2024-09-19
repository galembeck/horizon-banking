"use client";

import CountUp from "react-countup";

export const AnimatedCounter = ({ value }: { value: number }) => {
  return (
    <div className="w-full">
      <CountUp 
        duration={4}
        decimals={2}
        decimal=","
        prefix="$"
        end={value}
      />
    </div>
  );
}