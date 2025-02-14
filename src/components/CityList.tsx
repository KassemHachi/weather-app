'use client';
import Link from 'next/link';
import { City } from '../types/city';
import CitySearch from './CitySearch';
import WeatherCard from './WeatherCard';

type Props = {
  cities: City[]
}
const CityList = ({ cities }: Props) => {
  return (

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cities?.map((city, index) => (
        <Link href={`/${city.name}`} key={index}>
          <WeatherCard city={city} />
        </Link>
      ))}
    </div>

  );
};

export default CityList;