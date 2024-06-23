import { Link } from "react-router-dom";
import { data, georgianAlphabet } from "../data";

type DataItem = Record<string, unknown>;
type GroupedData<T extends DataItem> = Record<string, T[]>;
const groupDataBy = <T extends DataItem>(
  data: T[],
  key: keyof T,
): GroupedData<T> => {
  return data.reduce<GroupedData<T>>((acc, item) => {
    const groupKey = item[key] as string;
    if (!acc[groupKey]) acc[groupKey] = [];
    acc[groupKey].push(item);
    return acc;
  }, {});
};
const gallery = groupDataBy(data, "group");

const HeroParagraph = () => (
  <div className="flex max-w-xs flex-col gap-4 p-4 sm:max-w-sm md:max-w-lg md:p-0 md:pl-4 md:pt-4">
    <p>
      Georgia (Georgian: საქართველო, romanized: sakartvelo, IPA: [sakʰartʰʷelo])
      is a transcontinental country in Eastern Europe and West Asia. It is part
      of the Caucasus region, bounded by the Black Sea to the west, Russia to
      the north and northeast, Turkey to the southwest, Armenia to the south,
      and Azerbaijan to the southeast. Georgia covers an area of 69,700 square
      kilometres (26,900 sq mi). It has a population of 3.7 million.
    </p>
    <p>
      Georgia has been inhabited since prehistory, hosting the world's earliest
      known sites of winemaking, gold mining, and textiles. In the early fourth
      century, Georgians officially adopted Christianity, which contributed to
      the unification into the Kingdom of Georgia. Georgia reached its Golden
      Age during the High Middle Ages under the reigns of King David IV and
      Queen Tamar. Beginning in the 15th century, the kingdom declined and
      disintegrated under pressure from various regional powers, including the
      Mongols, the Ottoman Empire, and Persia, before being gradually annexed
      into the Russian Empire starting in 1801.
    </p>
    <p>
      After the Russian Revolution in 1917, Georgia briefly emerged as an
      independent republic under German protection, but was invaded and annexed
      by the Soviet Union in 1922, becoming one of its constituent republics. In
      the 1980s, an independence movement grew quickly, leading to Georgia's
      secession from the Soviet Union in April 1991. For much of the subsequent
      decade, the country endured economic crises, political instability, and
      secessionist wars in Abkhazia and South Ossetia. Following the peaceful
      Rose Revolution in 2003, Georgia strongly pursued a pro-Western foreign
      policy, introducing a series of democratic and economic reforms aimed at
      integration into the European Union and NATO. This Western orientation led
      to worsening relations with Russia, culminating in the Russo-Georgian War
      of 2008 and continued Russian occupation of parts of Georgia.
    </p>
    <p>
      Georgia is a representative democracy governed as a unitary parliamentary
      republic. It is a developing country with a very high Human Development
      Index. Economic reforms since independence have led to high levels of
      economic freedom, as well as reductions in corruption indicators. In 2018,
      it became the second country in the world to legalize cannabis, being the
      first former socialist state to do so. Georgia is a member of numerous
      international organizations, including the Council of Europe, Eurocontrol,
      BSEC, GUAM, Energy Community. As part of the Association Trio, Georgia is
      a candidate for membership in the European Union. ―{" "}
      <a
        href="https://en.wikipedia.org/wiki/Georgia_(country)"
        target="_blank"
        className="link"
      >
        Wikipedia
      </a>
    </p>
  </div>
);

const HeroAlbum = () => (
  <div className="flex flex-col gap-12 md:gap-4 md:p-4">
    {Object.values(gallery).map((data, i) => (
      <div className="flex flex-row gap-8" key={i}>
        <h2 className="hidden min-w-4 md:flex">{georgianAlphabet[i]}</h2>

        <div className="grid-cols grid flex-1 gap-12 md:max-w-full md:grid-cols-4 md:gap-4 lg:grid-cols-5 xl2:grid-cols-12">
          {data.map((el, i) => (
            <Link
              to={`/photo/${el.id}`}
              key={i}
              className="max-w-max md:max-w-full"
            >
              <div className="group flex cursor-pointer flex-col gap-2">
                <div className="relative flex max-w-md flex-col items-end gap-8 bg-zinc-800 sm:max-w-lg md:aspect-4/3 md:h-full md:w-full md:flex-row md:overflow-hidden md:bg-zinc-800">
                  <img
                    alt="An image of Georgia"
                    loading="lazy"
                    decoding="async"
                    className="m-0 transition-opacity group-hover:opacity-40 sm:max-w-4xl md:absolute md:h-full md:w-full md:object-cover md:object-center"
                    src={el.link}
                  />
                </div>

                <p className="link overflow-hidden text-ellipsis whitespace-nowrap group-hover:underline group-hover:decoration-stone-500">
                  <span className="text-stone-600">
                    {el.location} ― {el.published}
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const Hero = () => (
  <div className="flex flex-col gap-4">
    <HeroParagraph />
    <HeroAlbum />
  </div>
);
