import { FiNavigation } from 'react-icons/fi';
import { weddingData } from '../../data/weddingData';

function Map({ location, title, embedSrc }) {
  return (
    <div className="glass overflow-hidden rounded-xl p-2 sm:rounded-[2rem] sm:p-3">
      <div className="overflow-hidden rounded-lg sm:rounded-[1.5rem]">
        <iframe
          src={embedSrc}
          width="100%"
          height="280"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
                  className="sm:h-[440px]"
        />
      </div>
      <div className="flex flex-col gap-2 p-2.5 sm:gap-3 sm:p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[.25em] text-amber-200">{title}</p>
          <h3 className="font-display text-lg text-white sm:text-2xl">{location.label}</h3>
        </div>
        <a href={location.mapsUrl} target="_blank" rel="noreferrer" className="
    group
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-full
    bg-gradient-to-r
    from-[#006D5B]
    to-[#007A63]
    px-5
    py-3
    text-sm
    font-semibold
    text-white
    shadow-[0_10px_35px_rgba(0,109,91,0.35)]
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-[0_18px_45px_rgba(0,109,91,0.45)]
    active:scale-95
    sm:px-6
    sm:py-3.5
    sm:text-base
  ">
          <FiNavigation className="mr-2" />
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}

export default function VenueMap() {
  const churchLocation = weddingData.location;
  const receptionLocation = weddingData.receptionLocation;
  const churchEmbed = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15836.350128460317!2d125.65021519052819!3d7.115854676946435!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f91642bc6ac679%3A0x450c454e33a0adb0!2sSaint%20Joseph%20The%20Worker%20Parish%20Church!5e0!3m2!1sen!2sph!4v1781112558758!5m2!1sen!2sph';
  const receptionEmbed = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.250899976147!2d125.60691440000001!3d7.096890899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96cff051dd9af%3A0xe1566d10d2b8d2b2!2sLadislawa%20Clubhouse!5e0!3m2!1sen!2sph!4v1781112435094!5m2!1sen!2sph';

  return (
    <section className="bg-ivory">
      <div className="section-shell pt-0">
        <div className="mb-12">
          <Map location={churchLocation} title="Church Ceremony" embedSrc={churchEmbed} />
        </div>
        <div>
          <Map location={receptionLocation} title="Reception Venue" embedSrc={receptionEmbed} />
        </div>
      </div>
    </section>
  );
}
