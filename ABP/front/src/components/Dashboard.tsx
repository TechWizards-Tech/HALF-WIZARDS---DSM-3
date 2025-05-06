import { Chartone } from "./Chartone";
import { Charttwo } from "./Charttwo";
import { CloudRainWind } from "lucide-react";
import Wavecard from "./Wavecard";
import Windspeedcard from "./Windspeedcard";

export default function Dashboard() {
  return (
    <div className="flex flex-col  h-screen">

      <div className="sticky top-0 bg-white">
        <header className="flex flex-row h-16 shrink-0 items-center gap-2 border-b px-4 justify-between ">
        
          <div className=" not-only:flex justify-center gap-2 md:justify-start items-end flex-row-reverse">
            <a href="#" className="flex items-center text-3xl font-bold">
              TechWinds
              <CloudRainWind className="stroke-2 size-15" />
            </a>
          </div>
        </header>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-blue-500 h-[60vh]">
        <Wavecard currentHeight={1.5} maxHeight={3} />
        <Windspeedcard currentSpeed={30} maxSpeed={60} />
      </div>

      <div className="flex flex-row w-full gap-4 p-4 bg-red-500 place-content-around">
        <div className="w-1/2">
          <Chartone />
        </div>
        <div className="w-1/2">
          <Charttwo />
        </div>
      </div>

    </div>
  );
}
