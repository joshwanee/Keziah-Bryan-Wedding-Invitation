import { lazy, Suspense, useState } from 'react';

import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import GuestList from '../components/GuestList/GuestList';
import Countdown from '../components/Countdown/Countdown';
import LoveStory from '../components/LoveStory/LoveStory';
import EventDetails from '../components/EventDetails/EventDetails';
import Gallery from '../components/Gallery/Gallery';
import Entourage from '../components/Entourage/Entourage';
import DressCode from '../components/DressCode/DressCode';
import GiftRegistry from '../components/GiftRegistry/GiftRegistry';
import RSVP from '../components/RSVP/RSVP';
import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/Footer/Footer';

const VenueMap = lazy(() => import('../components/Map/VenueMap'));

export default function Home() {
  const [isGuestModalOpen, setGuestModalOpen] = useState(false);

  return (
    <>
      <Navbar />

      <main>
        <Hero onViewGuest={() => setGuestModalOpen(true)} />
        <GuestList
          isOpen={isGuestModalOpen}
          onClose={() => setGuestModalOpen(false)}
        />
        <LoveStory />
        <Countdown />
        <EventDetails />

        <Suspense fallback={<div className="h-96 bg-ivory" />}>
          <VenueMap />
        </Suspense>

        <Gallery />
        <Entourage />
        <DressCode />
        <GiftRegistry />
        <RSVP />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}