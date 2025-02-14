import { City } from "@/types/city";
import { fetchWeather } from "@/utils/api";
import { useEffect, useState } from "react";

export const useGetWeatherByCity = (cityName: string) => {
  const [city, setCity] = useState<City>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const handleSearch = async (city: string) => {
    setIsLoading(true);
    setError('');
    const data = await fetchWeather(city);
    if (!data) {
      setError('City not found');
    }
    setCity({
      name: data.location.name,
      country: data.location.country,
      ...data?.current,
    });
    setIsLoading(false);

  };
  useEffect(() => {
    handleSearch(cityName);
  }, [cityName]);

  return { city, isLoading, error, handleSearch };
};
