import { City } from "@/types/city";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Droplets, Wind } from "lucide-react";

type Props = {
    city:City
}
const WeatherCard = ({ city }:Props) => {
    return (
        <Card className="overflow-hidden transition-all hover:shadow-lg">
        <CardHeader className="bg-gradient-to-br from-white to-gray-50 pb-8">
            
          <CardTitle className="flex items-center justify-between">
            <span>{city.name}</span>
            {/* <city.icon className="h-6 w-6 text-blue-500" /> */}
            <img src={city.condition?.icon} alt={city.condition?.text} />
          </CardTitle>
          <div className="mt-4">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-light">{city.temp_c.toFixed(1)}</span>
              <span className="text-xl">°C</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{city.condition?.text}</p>
          </div>
        </CardHeader>
        <CardContent className="bg-white pt-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Wind className="h-4 w-4 text-muted-foreground" />
              <div className="space-y-0.5">
                <p className="text-sm text-muted-foreground">Wind Speed</p>
                <p className="font-medium">
                  {city.wind_kph} <span className="text-xs">km/h</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Droplets className="h-4 w-4 text-muted-foreground" />
              <div className="space-y-0.5">
                <p className="text-sm text-muted-foreground">Humidity</p>
                <p className="font-medium">
                  {city.humidity}
                  <span className="text-xs">%</span>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };
  
export default WeatherCard;