'use client';
import CityList from '@/components/CityList';
import { useGetWeather } from '@/hooks/useGetWeather';
import { City } from '@/types/city';
import { useGetWeatherByCity } from '@/hooks/useGetWeatherByCity';
import CitySearch from '@/components/CitySearch';
const Home = () => {
  const cities = useGetWeather();
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-between">
          <h1 className="mb-8 text-3xl font-bold">Weather Dashboard</h1>
          <CitySearch className='max-w-sm' />
        </div>
        <CityList cities={cities as City[]} />
      </div>
    </div>
  );
};

export default Home;