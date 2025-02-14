'use client';
import { City } from "@/types/city";
import { fetchWeather } from "@/utils/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const useGetWeather = () => {
  const [cities, setCities] = useState<City[] | null>(null);
  const storedCities = localStorage.getItem("cities")?.split(',') || [];
  const predefinedCities = ['Dubai', 'New York', 'London', 'Tokyo', 'Sydney', ...storedCities];
  const fetchCitiesWeather = async () => {
    const citiesData = await Promise.all(predefinedCities.map(city => fetchWeather(city)));
    setCities(citiesData.map(data => ({
      name: data.location.name,
      country: data.location.country,
      ...data?.current

    })));
  };
  useEffect(() => {
    fetchCitiesWeather();
  }, []);

  return cities;
};
