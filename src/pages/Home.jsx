import { lazy, Suspense } from 'react';

import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
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
  return (
    <>
      <Navbar />

      <main>
        <Hero />
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