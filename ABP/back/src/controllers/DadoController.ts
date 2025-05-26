import { Request, Response } from "express";
import { DadoMeteorologico } from "../models/DadoMeteorologico";

export const getChartData = async (req: Request, res: Response) => {
  try {
    // Busca os 12 registros mais recentes
    const dados = await DadoMeteorologico.find().sort({ createdAt: -1 }).limit(12);

    const chartData = dados.map((item) => {
      const date = new Date(item.reading_time);
      const hora = date.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      });

      return {
        month: hora,
        year: "",
        desktop: item.wind_rt,
        mobile: item.wind_avg,
      };
    });

    res.status(200).json(chartData);
  } catch (error) {
    console.error("Erro ao obter dados para gráfico:", error);
    res.status(500).json({ message: "Erro ao obter dados do gráfico" });
  }
};
