import { Card } from "@/components/ui/card"
import { Forecast } from "@/types/forecast";
import { Sun, Cloud, CloudRain } from "lucide-react"

export function WeeklyForecast({ weeklyData }: { weeklyData: Forecast[] }) {
  console.log(weeklyData);
  function getDayOfWeek(date: Date) {

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return daysOfWeek[date.getDay()];
  }
  return (
    <Card className="border bg-white p-6">
      <h3 className="mb-4 text-sm font-medium text-gray-500">7-DAY FORECAST</h3>
      <div className="space-y-4">
        {weeklyData && weeklyData?.map((data) => (
          <div key={data.date} className="flex items-center justify-between">
            <span className="w-20 text-gray-700">{getDayOfWeek(new Date(data.date))}</span>
            <div className="flex gap-1">
              <span>{data.day.maxtemp_c}°</span>
              <img src={data.day.condition.icon} className="h-6 w-6 text-yellow-500" />
            </div>
            <span className="w-24 text-gray-700">{data.day.condition.text}</span>
            <span className="text-gray-700">
            </span>
          </div>
        ))}
      </div>
    </Card>
  )
}

