"use client"

import {
  LineChart as RechartsLineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { name: "Jan", varA: 520, varB: 310 },
  { name: "Feb", varA: 410, varB: 205 },
  { name: "Mar", varA: 325, varB: 890 },
  { name: "Apr", varA: 290, varB: 470 },
  { name: "May", varA: 175, varB: 530 },
  { name: "Jun", varA: 260, varB: 410 },
];


export default function Linechart2() {
  return (
    <Card className="p-4 rounded-2xl shadow-md">
      <CardHeader>
        <CardTitle className="text-xl">Comparativo de Variáveis (Linha)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsLineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="varA"
                stroke="#8884d8"
                strokeWidth={2}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="varB"
                stroke="#82ca9d"
                strokeWidth={2}
              />
            </RechartsLineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
