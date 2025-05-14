import { CloudRainWind, LogIn } from "lucide-react";
import Wavecard from "./Wavecard";
import Windspeedcard from "./Windspeedcard";
import Customcard from "./Customcard";
import Linechart from "./Linechart";
import Areachart from "./Areachart";
import WeatherTable from "./Weathertable";
import { useState } from "react";
import StationSelector from "./Stationselector";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [selectedStation, setSelectedStation] = useState("estacao1");

  function generateLineChartData1() {
    return [
      { name: "Jan", value: 186 },
      { name: "Fev", value: 305 },
      { name: "Mar", value: 237 },
      { name: "Abr", value: 73 },
      { name: "Mai", value: 209 },
      { name: "Jun", value: 214 },
      { name: "Jul", value: 198 },
      { name: "Ago", value: 250 },
      { name: "Set", value: 276 },
      { name: "Out", value: 230 },
      { name: "Nov", value: 210 },
      { name: "Dez", value: 260 },
    ];
  }

  const generateAreaChartData = (days: number) => {
    const data = [];
    const today = new Date();

    for (let i = days; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);

      data.push({
        name: date.toLocaleDateString("pt-BR", {
          month: "short",
          day: "numeric",
        }),
        value: Math.floor(Math.random() * 400) + 100,
        secondaryValue: Math.floor(Math.random() * 300) + 100,
      });
    }

    return data;
  };

  const generateWeatherTableData = (days: number) => {
    const data = [];
    const today = new Date();

    for (let i = 0; i < days; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);

      data.push({
        date: date.toLocaleDateString("pt-BR", {
          weekday: "short",
          day: "numeric",
          month: "short",
        }),
        waveHeight: Math.random() * 2 + 0.5, // Ondas entre 0.5m e 2.5m
        wavePeriod: Math.floor(Math.random() * 6) + 5, // Período entre 5s e 10s
        windSpeed: Math.floor(Math.random() * 30) + 10, // Vento entre 10km/h e 40km/h
        windDirection: ["N", "NE", "L", "SE", "S", "SO", "O", "NO"][
          Math.floor(Math.random() * 8)
        ],
        temperature: Math.floor(Math.random() * 10) + 20, // Temperatura entre 20°C e 30°C
        precipitation: Math.floor(Math.random() * 30), // Precipitação entre 0mm e 30mm
      });
    }

    return data;
  };

  const timeRanges = [
    "Últimos 3 meses",
    "Último mês",
    "Últimas 2 semanas",
    "Última semana",
  ];

  const [lineChartData] = useState(generateLineChartData1());
  const [areaChartData, setAreaChartData] = useState(generateAreaChartData(90));
  const [weatherData] = useState(generateWeatherTableData(7)); // 7 dias de previsão

  const handleTimeRangeChange = (value: string) => {
    let days = 90;

    switch (value) {
      case "Último mês":
        days = 30;
        break;
      case "Últimas 2 semanas":
        days = 14;
        break;
      case "Última semana":
        days = 7;
        break;
      default:
        days = 90;
    }

    setAreaChartData(generateAreaChartData(days));
  };

  return (
    <>
      <div className="sticky top-0 bg-white">
        <header className="flex flex-row h-16 shrink-0 items-center gap-2 border-b px-4 justify-between ">
          <div className=" not-only:flex justify-center gap-2 md:justify-start items-end flex-row-reverse">
            <a href="#" className="flex items-center text-3xl font-bold">
              TechWinds
              <CloudRainWind className="stroke-2 size-15" />
            </a>
          </div>

          <div className="flex items-center gap-10">
            <StationSelector
              selectedStation={selectedStation}
              onStationChange={setSelectedStation}
              className="hidden sm:flex"
            />

            <Button asChild className="w-64 gap-2">
              <Link to="/login">
                Deseja logar?
                <LogIn className="w-4 h-4" />
              </Link>
            </Button>

          </div>
        </header>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 ">
        <Wavecard currentHeight={1.5} maxHeight={3} />
        <Windspeedcard currentSpeed={30} maxSpeed={60} />
      </div>

      <div className="custom-card p-1 flex">
        <Customcard
          frontContent={
            <div className="flex flex-row w-full gap-6 place-content-around">
              <div className="w-1/2">
                <Linechart
                  title="Tendência Mensal"
                  subtitle="Janeiro - Dezembro 2024"
                  data={lineChartData}
                  className="animate-fade-in"
                />
              </div>
              <div className="w-1/2">
                <Areachart
                  title="Gráfico Interativo"
                  subtitle="Mostrando total de visitantes por período"
                  data={areaChartData}
                  timeRanges={timeRanges}
                  onTimeRangeChange={handleTimeRangeChange}
                  className="animate-fade-in"
                />
              </div>
            </div>
          }
          backContent={
            <div className="mb-6">
              <WeatherTable data={weatherData} className="animate-fade-in" />
            </div>
          }
          className="w-full"
        />
      </div>
    </>
  );
}
