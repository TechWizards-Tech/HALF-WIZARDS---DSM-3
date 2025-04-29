import { Appsidebar } from "./Appsidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarContent,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Chartone } from "./Chartone";
import { Charttwo } from "./Charttwo";
import { CloudRainWind } from "lucide-react";
import Wavecard from "./Wavecard";
import Windspeedcard from "./Windspeedcard";

export default function Page() {
  return (
    <SidebarProvider

    
    
    >
      <Appsidebar />
      <SidebarInset>
        <header className="flex flex-row h-16 shrink-0 items-center gap-2 border-b px-4 justify-between">
          <div className="flex">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>

          <div className=" not-only:flex justify-center gap-2 md:justify-start items-end flex-row-reverse">
            <a href="#" className="flex items-center text-3xl font-bold">
              TechWinds
              <CloudRainWind className="stroke-2 size-15" />
            </a>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Wavecard currentHeight={1.5} maxHeight={3}/>
            <Windspeedcard currentSpeed={30} maxSpeed={60} />
          </div>

          {/* <div className="grid auto-rows-min gap-4 md:grid-cols-4">
            <div className="aspect-video rounded-xl bg-muted/50 border-2  shadow-xl" />
            <div className="aspect-video rounded-xl bg-muted/50 border-2  shadow-xl" />
            <div className="aspect-video rounded-xl bg-muted/50 border-2  shadow-xl" />
            <div className="aspect-video rounded-xl bg-muted/50 border-2  shadow-xl" />
          </div> */}

          <div className="flex gap-4">
            <div className=" flex-1 rounded-xl bg-muted/50 md:min-h-min border-2 shadow-xl">
              <Chartone />
            </div>
            <div className=" flex-1 rounded-xl bg-muted/50 md:min-h-min border-2 shadow-xl">
              <Charttwo />
              {/* <Chartone /> */}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
