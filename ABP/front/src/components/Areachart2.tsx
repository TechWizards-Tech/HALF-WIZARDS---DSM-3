"use client"

import {
  AreaChart as RechartsAreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { name: "Jan", varA: 150, varB: 620 },
  { name: "Feb", varA: 220, varB: 540 },
  { name: "Mar", varA: 310, varB: 490 },
  { name: "Apr", varA: 430, varB: 330 },
  { name: "May", varA: 390, varB: 270 },
  { name: "Jun", varA: 480, varB: 310 },
];


export default function Areachart2() {
  return (
    <Card className="p-4 rounded-2xl shadow-md">
      <CardHeader>
        <CardTitle className="text-xl">Comparativo de Variáveis (Área)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsAreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <Tooltip />
              <Legend />
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="varA"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.3}
              />
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="varB"
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.3}
              />
            </RechartsAreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
