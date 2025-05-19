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
  { name: "Jan", varA: 400, varB: 240 },
  { name: "Feb", varA: 300, varB: 139 },
  { name: "Mar", varA: 200, varB: 980 },
  { name: "Apr", varA: 278, varB: 390 },
  { name: "May", varA: 189, varB: 480 },
  { name: "Jun", varA: 239, varB: 380 },
]

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
              <YAxis yAxisId="right" orientation="right" />
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
                yAxisId="right"
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
