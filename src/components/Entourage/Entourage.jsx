import { motion } from 'framer-motion';
import { weddingData } from '../../data/weddingData';

const articleAnimation = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const articleClass =
  'w-full p-0 text-center transition-transform duration-300 hover:scale-[1.01]';

const headingClass =
  'mt-4 text-center font-display text-sm font-semibold uppercase tracking-widest text-white sm:text-lg lg:text-2xl';

const threeColumnHeadingClass =
  'mt-4 font-display text-xs font-semibold uppercase tracking-[0.12em] text-white sm:text-base lg:text-xl';

const nameClass =
  'text-xs font-normal leading-relaxed text-white sm:text-sm lg:text-lg';

function Divider() {
  return (
    <div className="mx-auto my-2 h-1 w-12 rounded-full bg-gradient-to-r from-transparent via-amber-200 to-transparent sm:my-3 sm:w-14 lg:my-4 lg:w-20" />
  );
}

function NameList({ names }) {
  return (
    <div className="space-y-1 sm:space-y-1.5 lg:space-y-2">
      {names.map((name, index) => (
        <p key={`${name}-${index}`} className={nameClass}>
          {name}
        </p>
      ))}
    </div>
  );
}

function TwoColumnGroup({
  leftTitle,
  leftNames,
  rightTitle,
  rightNames,
}) {
  return (
    <div className="grid grid-cols-2 items-start gap-3 sm:gap-6 lg:gap-12">
      <div className="min-w-0 px-1 sm:px-3 lg:px-6">
        <h3 className={headingClass}>{leftTitle}</h3>
        <Divider />
        <NameList names={leftNames} />
      </div>

      <div className="min-w-0 px-1 sm:px-3 lg:px-6">
        <h3 className={headingClass}>{rightTitle}</h3>
        <Divider />
        <NameList names={rightNames} />
      </div>
    </div>
  );
}

function ThreeColumnGroup({ groups }) {
  return (
    <div className="grid grid-cols-3 items-start gap-2 text-center sm:gap-5 lg:gap-10">
      {groups.map((group) => (
        <div key={group.title} className="min-w-0 px-0.5 sm:px-2 lg:px-4">
          <h3 className={threeColumnHeadingClass}>
            {group.title}
          </h3>

          <Divider />

          <NameList names={group.names} />
        </div>
      ))}
    </div>
  );
}

export default function Entourage() {
  return (
    <section id="entourage" className="bg-ivory">
      <div className="section-shell">
        <p className="eyebrow">With love and honor</p>

        <h2 className="section-title">
          Wedding Entourage
        </h2>

        {/* 
          Always stays as one main column.
          Desktop uses the same stacked format as mobile.
        */}
        <div className="mx-auto mt-10 grid w-full max-w-5xl grid-cols-1 gap-8 sm:mt-12 sm:gap-10 lg:mt-14 lg:gap-12">
          {Object.entries(weddingData.entourage).map(
            ([role, names], index) => {
              /*
               * Principal Sponsors:
               * Ninongs and Ninangs
               */
              if (role === 'Ninongs') {
                const ninangs =
                  weddingData.entourage.Ninangs || [];

                return (
                  <motion.article
                    key="ninong-ninang"
                    {...articleAnimation}
                    transition={{
                      duration: 0.45,
                      delay: (index % 3) * 0.08,
                    }}
                    className={articleClass}
                  >
                    <TwoColumnGroup
                      leftTitle="Principal Sponsors"
                      leftNames={names}
                      rightTitle="Principal Sponsors"
                      rightNames={ninangs}
                    />
                  </motion.article>
                );
              }

              /*
               * Best Man and Maid of Honor
               */
              if (role === 'Best Man') {
                const maid =
                  weddingData.entourage['Maid of Honor'] || [];

                return (
                  <motion.article
                    key="best-maid"
                    {...articleAnimation}
                    transition={{
                      duration: 0.45,
                      delay: (index % 3) * 0.08,
                    }}
                    className={articleClass}
                  >
                    <TwoColumnGroup
                      leftTitle="Best Man"
                      leftNames={names}
                      rightTitle="Maid of Honor"
                      rightNames={maid}
                    />
                  </motion.article>
                );
              }

              /*
               * Groomsmen and Bridesmaids
               */
              if (role === 'Groomsmen') {
                const bridesmaids =
                  weddingData.entourage.Bridesmaids || [];

                return (
                  <motion.article
                    key="groom-bride-list"
                    {...articleAnimation}
                    transition={{
                      duration: 0.45,
                      delay: (index % 3) * 0.08,
                    }}
                    className={articleClass}
                  >
                    <TwoColumnGroup
                      leftTitle="Groomsmen"
                      leftNames={names}
                      rightTitle="Bridesmaids"
                      rightNames={bridesmaids}
                    />
                  </motion.article>
                );
              }

              /*
               * Candle, Veil, and Cord Sponsors
               */
              if (role === 'Candle Sponsors') {
                const veil =
                  weddingData.entourage['Veil Sponsors'] || [];

                const cord =
                  weddingData.entourage['Cord Sponsors'] || [];

                return (
                  <motion.article
                    key="sponsors-trio"
                    {...articleAnimation}
                    transition={{
                      duration: 0.45,
                      delay: (index % 3) * 0.08,
                    }}
                    className={articleClass}
                  >
                    <ThreeColumnGroup
                      groups={[
                        {
                          title: 'Candle Sponsors',
                          names,
                        },
                        {
                          title: 'Veil Sponsors',
                          names: veil,
                        },
                        {
                          title: 'Cord Sponsors',
                          names: cord,
                        },
                      ]}
                    />
                  </motion.article>
                );
              }

              /*
               * Bible, Ring, and Coin Bearers
               */
              if (role === 'Bible Bearers') {
                const ring =
                  weddingData.entourage['Ring Bearers'] || [];

                const coin =
                  weddingData.entourage['Coin Bearers'] || [];

                return (
                  <motion.article
                    key="bearers-trio"
                    {...articleAnimation}
                    transition={{
                      duration: 0.45,
                      delay: (index % 3) * 0.08,
                    }}
                    className={articleClass}
                  >
                    <ThreeColumnGroup
                      groups={[
                        {
                          title: 'Bible Bearers',
                          names,
                        },
                        {
                          title: 'Ring Bearers',
                          names: ring,
                        },
                        {
                          title: 'Coin Bearers',
                          names: coin,
                        },
                      ]}
                    />
                  </motion.article>
                );
              }

              /*
               * Skip roles already displayed
               * inside combined sections.
               */
              if (
                [
                  'Ninangs',
                  'Maid of Honor',
                  'Bridesmaids',
                  'Veil Sponsors',
                  'Cord Sponsors',
                  'Ring Bearers',
                  'Coin Bearers',
                ].includes(role)
              ) {
                return null;
              }

              /*
               * All remaining entourage roles
               */
              return (
                <motion.article
                  key={role}
                  {...articleAnimation}
                  transition={{
                    duration: 0.45,
                    delay: (index % 3) * 0.08,
                  }}
                  className={articleClass}
                >
                  <h3 className={headingClass}>
                    {role}
                  </h3>

                  <Divider />

                  <NameList names={names} />
                </motion.article>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}