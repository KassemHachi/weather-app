'use client';
import { useState } from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { useRouter } from 'next/navigation';
import { fetchWeather } from '@/utils/api';
import { City } from '@/types/city';
type Props = {
  className?: string;
}
const CitySearch = ({ className }: Props) => {
  const [city, setCity] = useState<string>("");
  const router = useRouter()
  const handleSearch = async (cityName: string) => {
    const data = await fetchWeather(cityName)
    console.log("search", data);

    if (!data) return;
    const cities = localStorage.getItem("cities");
    if (!cities) {
      localStorage.setItem("cities", `${data.location.name}`);
    } else {
      const citiesArray = cities.split(",");
      const isCityExist = citiesArray.includes(cityName);
      if (!isCityExist) {
        localStorage.setItem("cities", `${cities},${data.location.name}`);
      }
    }
    router.push(`/${data.location.name}`)
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch(city);
    }
  };

  return (
    <div className={"relative w-full " + className}>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSearch(city);
      }} className="flex w-full items-center space-x-2">
        <div className="relative flex-grow">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search for cities"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full border bg-white pl-10 text-gray-900 placeholder:text-gray-400"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CitySearch;