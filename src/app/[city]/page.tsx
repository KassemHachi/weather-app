
'use client'
import { AirConditions } from "@/components/AirConditions"
import CitySearch from "@/components/CitySearch"
import { Input } from "@/components/ui/input"
import { WeeklyForecast } from "@/components/WeeklyForecast"
import { useGetWeatherByCity } from "@/hooks/useGetWeatherByCity"
import { fetchWeatherFuture } from "@/utils/api"
import { ArrowLeft, Search } from "lucide-react"
import Link from "next/link"
import { useParams } from 'next/navigation'
import { useEffect, useState } from "react"

export default function CityPage() {
  const params = useParams()
  const [future, setFuture] = useState<any>();
  const { city } = useGetWeatherByCity(params.city as string);
  useEffect(() => {
    const fetchdata = async (city: string) => {
      const data = await fetchWeatherFuture(city);
      return data;
    };

    const loadData = async () => {
      if (params.city) {
        const data = await fetchdata(params.city as string);
        setFuture(data);
      }
    };

    loadData();
  }, [params.city]);

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="pl-10 flex py-6">

        <div className="grid gap-6 px-6 lg:grid-cols-[1fr_300px] w-full">

          <div className="space-y-6">
            {/* Search Bar */}

            <div className="flex items-center gap-2 -ml-8">
              <Link href="/">
                <ArrowLeft className="w-6 h-6 text-gray-600" />
              </Link>
              <CitySearch />
            </div>
            {/* City Header */}
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-4xl font-bold text-gray-900">{city?.name}, {city?.country}</h1>
                <p className="mt-1 text-gray-500">{city?.condition?.text}</p>
              </div>
              <div className="text-center">
                <img src={city?.condition?.icon} alt={city?.condition?.text} />
                <div className="mt-2 text-6xl font-light text-gray-900">{city?.temp_c}°</div>
              </div>
            </div>

            {/* Air Conditions */}
            <AirConditions
              temp={city?.temp_c}
              windSpeed={city?.wind_kph}
              humidity={city?.humidity}
              precipitation={city?.precipitation}
              windDegree={city?.wind_degree}
            />
          </div>

          {/* Weekly Forecast Sidebar */}
          <WeeklyForecast weeklyData={future?.forecast} />
        </div>
      </div>
    </div>
  )
}

