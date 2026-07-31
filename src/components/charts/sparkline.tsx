"use client";

import { Line, LineChart, ResponsiveContainer } from "recharts";

export function Sparkline({ data, positive }: { data: number[]; positive: boolean }) {
  const points = data.map((value, i) => ({ i, value }));

  return (
    <ResponsiveContainer width={100} height={36}>
      <LineChart data={points} margin={{ top: 4, right: 2, bottom: 4, left: 2 }}>
        <Line
          type="monotone"
          dataKey="value"
          stroke={positive ? "#178a4c" : "#d93025"}
          strokeWidth={2}
          dot={false}
          isAnimationActive={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
