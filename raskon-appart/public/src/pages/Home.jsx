import Hero from '../Hero';
import Amenities from '../Amenities';
import ApartmentGrid from '../ApartmentGrid';
import AvailabilityCalendar from '../AvailabilityCalendar';
import LocationMap from '../LocationMap';
import Reviews from '../Reviews';
import FAQ from '../FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <Amenities />
      <ApartmentGrid />
      <AvailabilityCalendar />
      <LocationMap />
      <Reviews />
      <FAQ />
    </>
  );
}
