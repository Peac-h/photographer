export const georgianAlphabet = [
  "ა",
  "ბ",
  "გ",
  "დ",
  "ე",
  "ვ",
  "ზ",
  "თ",
  "ი",
  "კ",
  "ლ",
  "მ",
  "ნ",
  "ო",
  "პ",
  "ჟ",
  "რ",
  "ს",
  "ტ",
  "უ",
  "ფ",
  "ქ",
  "ღ",
  "ყ",
  "შ",
  "ჩ",
  "ც",
  "ძ",
  "წ",
  "ჭ",
  "ხ",
  "ჯ",
  "ჰ",
];

export type DataItemType = {
  id: number;
  link: string;
  published: string;
  location: string;
  camera?: string;
  description?: string;
  externalLink?: string;
  comment?: string;
  commentLink?: string;
  artist: string;
  group: "mountains" | "people" | "animals" | "abkhazia" | "city";
};

export const data: DataItemType[] = [
  // Mountains
  {
    id: 102,
    link: "https://images.unsplash.com/photo-1538590888307-8417d434e15f?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    published: "October 3, 2018",
    location: "Atsunta Pass",
    camera: "Unknown",
    description:
      "Located in between Khevsureti and Tusheti national parks, Atsunta pass is frequently visited by hikers or horse riders on their week long journey through Eastern Caucasus mountains.",
    externalLink: "https://adventure.ge/national-parks/atsunta-pass/",
    group: "mountains",
    artist: "https://unsplash.com/@dominik_jirovsky",
  },
  {
    id: 103,
    link: "https://images.unsplash.com/photo-1565067703613-c64e364c204f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    published: "August 6, 2019",
    location: "Kazbegi",
    artist: "https://unsplash.com/@hikersbay",
    camera: "FUJIFILM, X-T3",
    description:
      "Mount Kazbek or Mount Kazbegi is a dormant stratovolcano and one of the major mountains of the Caucasus, located in Georgia, just south of the border with Russia. Lying at 5,054 meters (16,581 ft) above at sea level, Mount Kazbek is the highest mountain in Eastern Georgia. It is also the third-highest peak in the country (after Mount Shkhara and Janga). Kazbegi is the second-highest volcanic summit in the Caucasus, after Mount Elbrus. The summit lies directly to the west of the town of Stepantsminda and is the most prominent geographic feature of the area. The last eruption occurred c.750 BCE.",
    externalLink: "https://en.wikipedia.org/wiki/Mount_Kazbek",
    group: "mountains",
  },
  {
    id: 104,
    link: "https://images.unsplash.com/photo-1543076499-a6133cb932fd?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    published: "November 24, 2018",
    location: "Martvili Canyon",
    camera: "Canon, EOS 5D Mark III",
    description:
      "Martvili (Georgian: მარტვილი) is a small town in Samegrelo-Zemo Svaneti province of Western Georgia. Its monastery was Samegrelo's clerical centre in the Middle Ages. Under Soviet rule, from 1936 to 1990, it was named Gegechkori after Sasha Gegechkori, an Old Bolshevik.",
    artist: "https://unsplash.com/@vruyr",
    externalLink: "https://en.wikipedia.org/wiki/Martvili",
    group: "mountains",
  },
  {
    id: 105,
    link: "https://images.unsplash.com/photo-1569498283068-140e58143192?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    published: "September 26, 2019",
    location: "Ushguli",
    camera: "Canon, EOS RP",
    description:
      "Ushguli (Georgian: უშგული) is a community of five villages located at the head of the Enguri gorge in Svaneti, Georgia. Ushguli is one of the highest continuously inhabited settlements in Europe. Compared to somewhat more developed towns like Mestia, Ushguli is not in an accessible location, which has preserved many of the villages' medieval characteristics, including unique defensive tower houses called Svan towers. Because of their preservation and traditional architecture, Ushguli, Mestia, and the surrounding area was recognized as the Upper Svaneti UNESCO World Heritage Site in 1996.",
    externalLink: "https://en.wikipedia.org/wiki/Ushguli",
    group: "mountains",
    artist: "https://unsplash.com/@malcoo",
  },
  {
    id: 106,
    link: "https://images.unsplash.com/photo-1603393352078-9b6135f1fa85?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    published: "October 22, 2020",
    location: "Gudauri",
    camera: "Nikon, FG",
    group: "mountains",
    artist: "https://unsplash.com/@mishotek",
  },
  {
    id: 107,
    link: "https://images.unsplash.com/photo-1606928359897-d3dc5dd872df?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    published: "December 2, 2020",
    location: "Kazbegi",
    camera: "Canon, EOS 5D Mark III",
    description:
      "Kazbegi (Georgian: ყაზბეგის მუნიციპალიტეტი) is a district of Georgia, in the region of Mtskheta-Mtianeti in east-north Georgia. The main settlement is Stepantsminda, accounting for about half of the total population. Kazbegi Municipality is situated in the upper valley of the Terek River, which goes on to traverse the Georgia–Russia border to the north and eventually drains into the Caspian Sea in Dagestan, Russian Federation. By the conventional definition of the Europe-Asia boundary as following the watershed of the Greater Caucasus, Kazbegi Municipality is geographically a European part of Georgia.",
    externalLink: "https://en.wikipedia.org/wiki/Kazbegi_Municipality",
    group: "mountains",
    artist: "https://unsplash.com/@dobrynin_video",
  },
  {
    id: 108,
    link: "https://images.unsplash.com/photo-1631362199849-a8a331b5dc81?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    published: "September 11, 2021",
    location: "Shovi",
    camera: "SONY, ILCE-7",
    description:
      "Shovi (Georgian: შოვი) is a village in the Oni Municipality of Racha-Lechkhumi and Kvemo Svaneti in Georgia. It is a mountain climatic and health resort known for its carbonated water, situated on the confluence of the Buba and Chanchakhi Rivers, left tributaries of the Rioni River. The village faces the main ridge of the Greater Caucasus to the north, and the Shoda-Kedela Range to the south. A mudslide on August 3, 2023 coming down the Buba River destroyed much of the settlement, causing more than 200 people to be evacuated via airlift with 32 confirmed deaths and 1 missing person.",
    artist: "https://unsplash.com/@nika9447",
    externalLink: "https://en.wikipedia.org/wiki/Shovi",
    group: "mountains",
  },
  {
    id: 109,
    link: "https://images.unsplash.com/photo-1546706442-373624e9c90b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    published: "January 5, 2019",
    location: "Gudauri",
    camera: "Canon, EOS 5D Mark III",
    description:
      "Gudauri (Georgian: გუდაური) is a ski resort located on the south-facing plateau of The Greater Caucasus Mountain Range in Georgia. The resort is situated in the Stepantsminda District, along the Georgian Military Highway near the Jvari Pass, at an elevation of 2,200 meters (7,200 ft.) above sea level. Gudauri lies 120 km (75 mi) to the north of the Georgian capital Tbilisi. Gudauri is 4.1 km away from the nearest borderline to with the unrecognized South Ossetia. The slopes of Gudauri are above the tree line and considered to be avalanche-safe. The ski season lasts from December to April. Heliskiing is available throughout the season.",
    externalLink: "https://en.wikipedia.org/wiki/Gudauri",
    group: "mountains",
    artist: "https://unsplash.com/@vruyr",
  },

  // People
  {
    id: 110,
    link: "https://images.unsplash.com/photo-1630919170952-106ba279a618?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    published: "September 6, 2021",
    location: "Tbilisi",
    camera: "SONY, ILCE-6000",
    description:
      "The Georgians, or Kartvelians[d] (/kɑːrtˈvɛliənz/; Georgian: ქართველები, romanized: kartvelebi, pronounced [kʰaɾtʰʷelebi]), are a nation and Caucasian ethnic group native to present-day Georgia and surrounding areas historically associated with the Georgian kingdoms. Significant Georgian diaspora communities are also present throughout Russia, Turkey, Greece, Iran, Ukraine, the United States, and the European Union. The Georgian nation was formed out of a diverse set of geographic subgroups, each with its characteristic traditions, manners, dialects and, in the case of Svans and Mingrelians, own regional languages. The Georgian language, with its own unique writing system and extensive written tradition, which goes back to the 5th century, is the official language of Georgia as well as the language of education of all Georgians living in the country. According to the State Ministry on Diaspora Issues of Georgia, unofficial statistics say that there are more than 5 million Georgians in the world.",
    externalLink: "https://en.m.wikipedia.org/wiki/Georgians",
    comment:
      "Tonis puri (Georgian: თონის პური) is a traditional Georgian bread, known for its unique baking method and distinctive taste. Tonis puri is baked in a special type of clay oven called a 'tone' (Georgian: თონე), which is similar to a tandoor. The dough is prepared and shaped into long, oval loaves. Once the dough is ready, it is slapped onto the inner walls of the preheated tone, where it sticks and bakes.",
    commentLink: "https://en.wikipedia.org/wiki/Tonis_puri",
    group: "people",
    artist: "https://unsplash.com/@artycial",
  },
  {
    id: 111,
    link: "https://images.unsplash.com/photo-1530456932221-657330863be4?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    published: "July 1, 2018",
    camera: "SONY, ILCE-7SM2",
    description:
      "The Georgians, or Kartvelians[d] (/kɑːrtˈvɛliənz/; Georgian: ქართველები, romanized: kartvelebi, pronounced [kʰaɾtʰʷelebi]), are a nation and Caucasian ethnic group native to present-day Georgia and surrounding areas historically associated with the Georgian kingdoms. Significant Georgian diaspora communities are also present throughout Russia, Turkey, Greece, Iran, Ukraine, the United States, and the European Union. The Georgian nation was formed out of a diverse set of geographic subgroups, each with its characteristic traditions, manners, dialects and, in the case of Svans and Mingrelians, own regional languages. The Georgian language, with its own unique writing system and extensive written tradition, which goes back to the 5th century, is the official language of Georgia as well as the language of education of all Georgians living in the country. According to the State Ministry on Diaspora Issues of Georgia, unofficial statistics say that there are more than 5 million Georgians in the world.",
    externalLink: "https://en.m.wikipedia.org/wiki/Georgians",
    comment:
      "Fishing in the country of Georgia offers a unique and varied experience due to its diverse ecosystems, including the Black Sea coastline, numerous rivers, and high mountain lakes. Georgia places importance on conserving its natural habitats and fish populations. Many areas may have specific conservation rules to ensure sustainable fishing practices. Fishing in Georgia can be a rewarding experience, offering both adventure and tranquility amid stunning natural landscapes.",
    commentLink: "https://georgia.travel/summer-adventures/fishing",
    group: "people",
    artist: "https://unsplash.com/@tbelabuseridze",
    location: "Batumi",
  },
  {
    id: 112,
    link: "https://images.unsplash.com/photo-1653056996663-7b79e005fc2f?q=80&w=2436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    published: "May 20, 2022",
    location: "Tbilisi",
    camera: "Canon, EOS 7D",
    description:
      "The Georgians, or Kartvelians[d] (/kɑːrtˈvɛliənz/; Georgian: ქართველები, romanized: kartvelebi, pronounced [kʰaɾtʰʷelebi]), are a nation and Caucasian ethnic group native to present-day Georgia and surrounding areas historically associated with the Georgian kingdoms. Significant Georgian diaspora communities are also present throughout Russia, Turkey, Greece, Iran, Ukraine, the United States, and the European Union. The Georgian nation was formed out of a diverse set of geographic subgroups, each with its characteristic traditions, manners, dialects and, in the case of Svans and Mingrelians, own regional languages. The Georgian language, with its own unique writing system and extensive written tradition, which goes back to the 5th century, is the official language of Georgia as well as the language of education of all Georgians living in the country. According to the State Ministry on Diaspora Issues of Georgia, unofficial statistics say that there are more than 5 million Georgians in the world.",
    externalLink: "https://en.m.wikipedia.org/wiki/Georgians",
    artist: "https://unsplash.com/@nikoloz_g",
    comment:
      "The world asks: Why do Georgians live to be over 100? Georgia has earned a global reputation as home to the population with the greatest longevity in the world. Adjara is the area where the highest number of people aged over 100 lived in the country. In 2012 Georgian woman Antisa Khvichava, who claimed to be 132 – and her age was confirmed by Georgia’s registry officials – died in Georgia. If her ID documents were real, she was the world’s oldest person. However this was not officially recognised by Guinness World Records before she died.",
    commentLink: "https://agenda.ge/en/news/2015/2220#gsc.tab=0",
    group: "people",
  },
  {
    id: 113,
    link: "https://images.unsplash.com/photo-1693067363389-f7ad6db3be8e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    published: "August 26, 2023",
    location: "LoveBar, Tbilisi",
    camera: "FUJIFILM, X100F",
    description:
      "With the perfect blend of pubs, clubs, and entertaining shows, Tbilisi's nightlife offers an unforgettable experience. As neon lights illuminate the streets and people flock to nightclubs and bars, the city's vibrant and relaxing atmosphere comes alive. Tbilisi Georgia Nightlife Tours provide an excellent opportunity to fully immerse in this lively scene. The city boasts a plethora of discos, pubs, clubs, restaurants, and bars, allowing guests to enjoy its astonishing cuisine and dynamic nightlife to the fullest.",
    externalLink: "https://www.dookinternational.com/georgia-nightlife",
    artist: "https://unsplash.com/@5tep5",
    comment:
      "LoveBar is a dynamic and multifunctional space in Tbilisi, place to meet, drink, have fun good music.",
    commentLink: "https://events-ge.com/en/tbilisi/places/5349",
    group: "people",
  },
  {
    id: 114,
    link: "https://images.unsplash.com/photo-1570980263385-9bd0c0cf7d25?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    published: "October 13, 2019",
    location: "Parliament of Georgia",
    camera: "SONY, ILCE-7M3",
    description:
      "From ancient times, Georgians have fought to defend their territory from numerous invasions by Persians, Romans, Arabs, Mongols, and Ottomans. This history of constant resistance forged a strong sense of identity and resilience. During the medieval period, the Kingdom of Georgia experienced both periods of great power and cultural renaissance, as well as times of fragmentation and foreign domination. Leaders like Queen Tamar the Great symbolize the spirit of unity and strength that has inspired resistance throughout Georgian history. The 19th and 20th centuries were particularly turbulent. Georgian uprisings against the Russian Empire, such as the Georgian Uprising of 1924, exemplify the nation's enduring quest for independence. During the Soviet era, Georgians continued to express their dissent, culminating in the mass protests of April 9, 1989, which became a significant milestone on the path to independence.",
    comment:
      "Georgian people are renowned for their rebellious and protester spirit, a characteristic deeply embedded in their history and culture. This indomitable spirit has been shaped by centuries of resistance against various forms of domination and oppression. Today, Georgians continue to protest against political corruption, social injustices, and external threats to their sovereignty. Civil society organizations and grassroots movements are active in advocating for human rights, environmental protection, and political reforms.",
    commentLink: "https://civil.ge/archives/category/multimedia/photogallery",
    artist: "https://unsplash.com/@tbelabuseridze",
    externalLink:
      "https://en.wikipedia.org/wiki/List_of_protests_in_Georgia_(country)",
    group: "people",
  },

  // Gagra
  {
    id: 115,
    link: "https://images.unsplash.com/photo-1695037401087-de118b8786f6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    published: "September 18, 2023",
    location: "Sukhumi, Abkhazia",
    camera: "Canon, EOS 6D Mark II",
    description:
      "Sukhumi (see also other names) is a city in a wide bay on the Black Sea's eastern coast. It is both the capital and largest city of the Republic of Abkhazia, a partially recognised state that most countries consider a part of Georgia. The city has been controlled by Abkhazia since the Abkhazian war in 1992–93. The city, which has an airport, is a port, major rail junction and a holiday resort because of its beaches, sanatoriums, mineral-water spas and semitropical climate. It is also a member of the International Black Sea Club. <br/> <br/> Sukhumi's history can be traced to the 6th century BC, when it was settled by Greeks, who named it Dioscurias. During this time and the subsequent Roman period, much of the city disappeared under the Black Sea. The city was named Tskhumi when it became part of the Kingdom of Abkhazia and then the Kingdom of Georgia. Contested by local princes, it became part of the Ottoman Empire in the 1570s, where it remained until it was conquered by the Russian Empire in 1810.",
    artist: "https://unsplash.com/@headofnarnia23",
    group: "abkhazia",
    externalLink: "https://en.wikipedia.org/wiki/Sukhumi",
  },
  {
    id: 116,
    link: "https://images.unsplash.com/photo-1598523136846-a1e53b4e412f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    published: "August 27, 2020",
    location: "Gagra, Abkhazia",
    camera: "OnePlus, GM1910",
    description:
      "Gagra (Georgian: გაგრა; Abkhaz and Russian: Гагра) is a town in Abkhazia/Georgia, sprawling for 5 km on the northeast coast of the Black Sea, at the foot of the Caucasus Mountains. Its subtropical climate made Gagra a popular health resort in Imperial Russian and Soviet times. It had a population of 26,636 in 1989, but this has fallen considerably due to the ethnic cleansing of Georgians in Abkhazia and other demographic shifts during and after the War in Abkhazia (1992–93). Gagra is the centre of the district of the same name. It is located in the western part of Region of Abkhazia, and river Psou serves as a border with Krasnodar Krai of Russia. <br /> <br /> The political status of Abkhazia is disputed. Having unilaterally declared independence from Georgia in 1992, Abkhazia is formally recognised as an independent state by 5 UN member states (two other states previously recognised it but then withdrew their recognition), while the remainder of the international community recognizes it as as de jure Georgian territory. Georgia continues to claim the area as its own territory, designating it as Russian-occupied territory.",
    artist: "https://unsplash.com/@photogolic",
    group: "abkhazia",
    externalLink: "https://en.wikipedia.org/wiki/Gagra",
  },

  // Animals
  {
    id: 117,
    link: "https://images.unsplash.com/photo-1566496059427-3d3d13611f85?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    published: "August 22, 2019",
    location: "Stefantsminda",
    camera: "Canon, EOS 600D",
    artist: "https://unsplash.com/@artemisfaul",
    group: "animals",
    comment:
      "Sheep farming in Georgia is one of the oldest and most traditional sectors of agriculture, playing a significant role in the country's economic and cultural life. Georgia's diverse geography and climate provide ideal conditions for sheep breeding, making it an integral part of rural livelihoods, especially in mountainous regions. Sheep farming in Georgia dates back thousands of years, with archaeological evidence suggesting its presence since the Bronze Age. The country's historical reliance on sheep for meat, milk, wool, and hides has helped shape its cultural and economic development.",
    description:
      "The main regions for sheep farming in Georgia include: Kakheti - Known for its extensive pastures and favorable climate, Kakheti is a central hub for sheep breeding. Samtskhe-Javakheti - This highland region provides ideal summer grazing pastures. Mtskheta-Mtianeti - Includes the mountainous areas that are suitable for transhumance (seasonal movement of livestock). <br /> <br /> Georgia is home to several indigenous sheep breeds, such as: Tushetian Sheep: Known for their hardiness and ability to thrive in mountainous terrains. Imeretian Sheep: Valued for their fine wool and adaptability to different environments. Sheep farming contributes to Georgia's economy by providing: Meat: Lamb and mutton are staple foods in the Georgian diet. Wool: Used for traditional textiles and carpets, a craft deeply rooted in Georgian culture. Dairy Products: Sheep milk is used to produce cheese, particularly in regions like Tusheti.",
  },
  {
    id: 118,
    link: "https://images.unsplash.com/photo-1570629581469-009f4ac37b39?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    published: "October 9, 2019",
    location: "Tusheti",
    camera: "NIKON CORPORATION, NIKON D7200",
    artist: "https://unsplash.com/@heiner",
    group: "animals",
    comment:
      "For centuries dogs similar to the Caucasian mountain dogs have served shepherds in the Caucasus Mountains as livestock guardian dogs, defending sheep from predators, mainly wolves and human sheep-thieves.",
    description:
      "The Caucasian Shepherd Dog or Caucasian Ovcharka is a large livestock guardian dog native to the Caucasus region, notably Georgia, Armenia, Azerbaijan, and Dagestan. It was bred in the Soviet Union from about 1920 from dogs of the Caucasus Mountains and the steppe regions of Southern Russia. The Caucasus Mountains in Georgia has historically been the principal region of distribution of Caucasian Shepherd dogs, both in terms of numbers and the quality of the dogs present in the area.",
    externalLink: "https://en.wikipedia.org/wiki/Caucasian_Shepherd_Dog",
  },
  {
    id: 119,
    link: "https://images.unsplash.com/photo-1596276567596-8eb1b5994cfb?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    published: "August 1, 2020",
    location: "Tbilisi",
    camera: "OnePlus, ONEPLUS A5000",
    comment:
      "Street dogs, or stray dogs, have been a common sight in Georgia, and mainly in Tbilisi for many years. Georgia’s stray dogs are remarkably well-kept by Georgian society. They are generally well-fed, well-behaved, and even fully vaccinated. There are also an incredible number of them, seeming to move through the city and village streets of Georgia just like any other citizens.",
    artist: "https://unsplash.com/@abrizgalov",
    commentLink: "https://srasstudents.org/street-dogs-georgia/",
    group: "animals",
  },
  {
    id: 120,
    link: "https://images.unsplash.com/photo-1712591060239-1a38c668e965?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    published: "April 8, 2024",
    location: "Tbilisi",
    camera: "SONY, ILCE-6400",
    comment:
      "The streets are bustling with a lively community of stray cats, each with a unique personality and story. These resilient felines navigate their environment with remarkable agility and resourcefulness. Recognizing their potential for companionship, communities are increasingly aware of the importance of providing support and care. Organizations like Shelter Peteasy are stepping in to make a difference, sheltering these cats, giving them the medical treatment they need, and finding them loving homes.",
    artist: "https://unsplash.com/@ksulazypie",
    commentLink: "https://peteasy.org/",
    group: "animals",
  },

  // Cities
  {
    id: 121,
    link: "https://images.unsplash.com/photo-1650301818411-2e41e2331719?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Tbilisi",
    published: "April 18, 2022",
    camera: "FUJIFILM, X20",
    artist: "https://unsplash.com/@ninekh",
    group: "city",
    description:
      "Tbilisi (English: /təbɪˈliːsi, təˈbɪlɪsi/ ⓘ tə-bil-EE-see, tə-BIL-iss-ee; Georgian: თბილისი, pronounced [ˈtʰbilisi] ⓘ), in some languages still known by its pre-1936 name Tiflis[a] (/ˈtɪflɪs/ ⓘ TIF-liss), (Georgian: ტფილისი, romanized: t'pilisi) is the capital and largest city of Georgia, lying on the banks of the Kura River with a population of around 1.2 million people. Tbilisi was founded in the fifth century AD by Vakhtang I of Iberia, and since then has served as the capital of various Georgian kingdoms and republics. Between 1801 and 1917, then part of the Russian Empire, Tiflis was the seat of the Caucasus Viceroyalty, governing both the northern and the southern parts of the Caucasus.",
    externalLink: "https://en.wikipedia.org/wiki/Tbilisi",
  },
  {
    id: 122,
    link: "https://images.unsplash.com/photo-1715258400290-c095d69ac3e0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Mtskheta",
    published: "May 9, 2024",
    camera: "SONY, ILCE-6400",
    artist: "https://unsplash.com/@ksulazypie",
    group: "city",
    description:
      "Mtskheta (Georgian: მცხეთა, romanized: mtskheta [ˈmtsʰχetʰa]) is a city in the region of Mtskheta-Mtianeti, Georgia. It is one of the oldest cities in Georgia as well as one of the oldest continuously inhabited cities in the world.[2] It is located approximately 20 km (12 mi) north of Tbilisi, at the confluence of the Mtkvari and Aragvi rivers. Currently a small provincial capital, for nearly a millennium until the 5th century AD, Mtskheta was a large fortified city, a significant economical and political centre of the Kingdom of Iberia.",
    externalLink: "https://en.wikipedia.org/wiki/Mtskheta",
  },
  {
    id: 123,
    link: "https://images.unsplash.com/photo-1625566360146-918001e76064?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Batumi",
    published: "July 6, 2021",
    camera: "DJI, FC3411",
    artist: "https://unsplash.com/@maxslch",
    group: "city",
    description:
      "Batumi (/bɑːˈtuːmi/; Georgian: ბათუმი pronounced [ˈbatʰumi] ⓘ), historically Batum[3] or Batoum,[4] is the second-largest city of Georgia and the capital of the Autonomous Republic of Adjara, located on the coast of the Black Sea in Georgia's southwest, 20 kilometers north of the border with Turkey. It is situated in a subtropical zone at the foot of the Caucasus. Much of Batumi's economy revolves around tourism and gambling (it is nicknamed 'The Las Vegas of the Black Sea'), but the city is also an important seaport and includes industries like shipbuilding, food processing and light manufacturing. Since 2010, Batumi has been transformed by the construction of modern high-rise buildings, as well as the restoration of classical 19th-century edifices lining its historic Old Town.",
    externalLink: "https://en.wikipedia.org/wiki/Batumi",
  },
  {
    id: 124,
    link: "https://images.unsplash.com/photo-1707908884236-8cb6cd22fe5b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Dzveli Tbilisi",
    published: "February 14, 2024",
    camera: "Canon, EOS 6D Mark II",
    artist: "https://unsplash.com/@solomonikvik",
    group: "city",
    description:
      "Old Tbilisi (Georgian: ძველი თბილისი, dzveli t'bilisi) refers to the historical parts of Tbilisi. Although the term 'Old Tbilisi' has long been used to denote the oldest part of the city, it was only in 2007 that it became an official administrative distinct, while also incorporating several historical neighbourhoods formerly included in the districts of Mtatsminda-Krtsanisi, Isani-Samgori, and Didube-Chugureti. The official district was abolished in 2013, with its territories allotted to several other divisions of the capital; however, locals and visitors continue to refer to historical districts as 'Old Tbilisi' without precise boundaries.",
    externalLink: "https://en.wikipedia.org/wiki/Old_Tbilisi",
  },
];
