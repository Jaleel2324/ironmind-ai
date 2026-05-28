"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { week: "W1", weight: 242 },
  { week: "W2", weight: 238 },
  { week: "W3", weight: 234 },
  { week: "W4", weight: 229 },
  { week: "W5", weight: 225 },
  { week: "W6", weight: 221 },
];

export default function AnalyticsChart() {
  return (
    <div className="glass-panel rounded-[35px] p-8 mt-10 card-shine">
      <div className="mb-8">
        <p className="text-zinc-500 text-sm">Athlete Analytics</p>
        <h3 className="text-3xl font-bold mt-2">Transformation Progress</h3>
      </div>

      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="week" stroke="#71717a" />
            <YAxis stroke="#71717a" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="weight"
              stroke="#60a5fa"
              strokeWidth={4}
              dot={{ r: 6, fill: "#60a5fa" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}