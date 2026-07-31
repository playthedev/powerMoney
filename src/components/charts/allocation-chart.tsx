"use client";

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

export function AllocationChart({
  data,
}: {
  data: { label: string; value: number; color: string }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="label"
          innerRadius={55}
          outerRadius={80}
          paddingAngle={3}
          isAnimationActive={false}
        >
          {data.map((entry) => (
            <Cell key={entry.label} fill={entry.color} stroke="transparent" />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value}%`} />
        <Legend
          verticalAlign="bottom"
          height={36}
          iconType="circle"
          formatter={(value: string) => (
            <span className="text-xs text-foreground/65">{value}</span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
