import { Card } from "@/components/ui/card"
import { Thermometer, Wind, Droplets, CloudRain, ArrowUp } from "lucide-react"

interface AirConditionsProps {
  temp: number|undefined
  windSpeed: number|undefined
  humidity: number|undefined
  precipitation:number|undefined
  windDegree:number|undefined
}

export function AirConditions({ temp, windSpeed, humidity,precipitation,windDegree=0 }: AirConditionsProps) {
  return (
    <Card className="border bg-white p-6">
      <h3 className="mb-4 text-sm font-medium text-gray-500">AIR CONDITIONS</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-start gap-4">
          <Thermometer className="h-5 w-5 text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">Temperature</p>
            <p className="text-lg font-semibold text-gray-900">{temp||0}°</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Wind className="h-5 w-5 text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">Wind</p>
           <div className="flex items-center">
            <ArrowUp className={'mr-2 h-4 w-4 text-gray-400'} style={{rotate:`${windDegree}deg`}} />
            <p className="text-lg font-semibold text-gray-900">{windSpeed||0} km/h</p>
           </div>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Droplets className="h-5 w-5 text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">Humidity</p>
            <p className="text-lg font-semibold text-gray-900">{humidity||0}%</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <CloudRain className="h-5 w-5 text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">Precipitation</p>
            <p className="text-lg font-semibold text-gray-900">{precipitation||0}</p>
          </div>
        </div>
      </div>
    </Card>
  )
}

