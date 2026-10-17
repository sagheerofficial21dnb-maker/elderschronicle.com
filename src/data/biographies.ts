import { Biography } from '../types';
import napoleonCoverImage from '../assets/images/regenerated_image_1792209438929.jpg';
import teslaCoverImage from '../assets/images/nikola_tesla_infographic_v2.jpg';

export const BIOGRAPHIES: Biography[] = [
  {
    id: 'napoleon-bonaparte',
    slug: 'napoleon-bonaparte',
    name: 'Napoleon Bonaparte',
    title: 'Napoleon Bonaparte Biography: Rise and Fall',
    subtitle: 'From Corsican Artillery Officer to Continental Emperor: Operational Mastery, Institutional Revolution, and the Collapse of an Empire',
    era: '19th Century',
    dates: '1769 – 1821',
    category: 'World Leaders',
    readTime: '13 min read',
    publishedDate: 'October 16, 2026',
    updatedDate: 'October 16, 2026',
    author: {
      name: 'Dr. Alistair Vance',
      role: 'Senior Fellow in Napoleonic Geopolitics & Archival Studies',
      credentials: 'D.Phil. Modern European History, Sorbonne / Oxford',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
      bio: 'Author of "The Imperial Engine: Statecraft and Mobilization in Post-Revolutionary France". Specializes in 18th- and 19th-century diplomatic correspondence and civil codification.'
    },
    excerpt: 'Explore this Napoleon Bonaparte biography detailing his rise from Corsican outsider to Emperor, military genius, sweeping civil reforms, and downfall.',
    coverImage: napoleonCoverImage,
    featured: true,
    trendingRank: 1,
    historicalQuote: 'Death is nothing, but to live defeated and inglorious is to die daily.',
    quoteSource: 'Letter to General Jean-Baptiste Kléber, Cairo Campaign (1799)',
    keyMilestones: [
      {
        year: '1769',
        event: 'Birth in Ajaccio, Corsica',
        significance: 'Born Napoleone di Buonaparte just months after the Republic of Genoa ceded Corsican sovereignty to France.',
        location: 'Ajaccio, Corsica'
      },
      {
        year: '1785',
        event: 'Graduation from École Militaire',
        significance: 'Completed the intensive artillery curriculum in one year, commissioned as second lieutenant in the Régiment de La Fère.',
        location: 'Paris, France'
      },
      {
        year: '1793',
        event: 'Breakthrough at the Siege of Toulon',
        significance: 'Directed the artillery assault that expelled Anglo-Spanish naval squadrons; promoted to Brigadier General at twenty-four.',
        location: 'Toulon, France'
      },
      {
        year: '1796–1797',
        event: 'First Italian Campaign',
        significance: 'Decimated Austrian and Sardinian armies through rapid maneuvers, dictating the Treaty of Campo Formio.',
        location: 'Northern Italy'
      },
      {
        year: '1799',
        event: 'Coup of 18 Brumaire',
        significance: 'Dismantled the Directory regime to establish the French Consulate, assuming executive authority as First Consul.',
        location: 'Saint-Cloud, Paris'
      },
      {
        year: '1804',
        event: 'Promulgation of the Civil Code & Imperial Coronation',
        significance: 'Enacted the landmark Civil Code and consecrated himself Emperor of the French at Notre-Dame Cathedral.',
        location: 'Paris, France'
      },
      {
        year: '1805',
        event: 'Tactical Triumph at Austerlitz',
        significance: 'Routed the combined forces of Austria and Russia, dissolving the Holy Roman Empire and forming the Confederation of the Rhine.',
        location: 'Moravia (Czech Republic)'
      },
      {
        year: '1807',
        event: 'Treaties of Tilsit',
        significance: 'Partitioned continental spheres of influence with Tsar Alexander I following victories at Eylau and Friedland.',
        location: 'Sovetsk (Tilsit), East Prussia'
      },
      {
        year: '1812',
        event: 'Invasion of Russia & Catastrophic Retreat',
        significance: 'Occupied an abandoned Moscow but lost over half a million men during the winter withdrawal across scorched territory.',
        location: 'Russian Empire'
      },
      {
        year: '1814',
        event: 'First Abdication & Exile to Elba',
        significance: 'Surrendered sovereign authority following the capture of Paris; sent to Elba under the Treaty of Fontainebleau.',
        location: 'Fontainebleau / Elba'
      },
      {
        year: '1815',
        event: 'The Hundred Days & Waterloo',
        significance: 'Reclaimed imperial power before suffering definitive military defeat against allied forces commanded by Wellington and Blücher.',
        location: 'Waterloo, Belgium'
      },
      {
        year: '1821',
        event: 'Death on Saint Helena',
        significance: 'Died in British custody at Longwood House; dictated voluminous memoirs framing his historical legacy.',
        location: 'Saint Helena Island'
      }
    ],
    majorAchievements: [
      'Codification of the Civil Code of 1804 (Code Napoléon), establishing civic equality before the law, secular property rights, and commercial consistency across Europe.',
      'Operational design of the Corps d’Armée combined-arms structure, transforming continental warfare through independent division logistics.',
      'Creation of enduring French civic foundations: the Banque de France, Cour des Comptes, the Prefectural administrative tier, and the Legion of Honour.',
      'Restructuring European secondary education through state-supervised Lycées and the centralized Imperial University curriculum.',
      'Standardization of metric measurements, civil registration records, and urban infrastructure across annexed territories.',
      'Execution of the Concordat of 1801, re-establishing peaceful relations with the Papacy while maintaining strict state authority over ecclesiastical affairs.'
    ],
    sections: [
      {
        id: 'early-life-lineage-and-formative-influences',
        heading: 'Early Life, Lineage & Formative Influences',
        content: [
          'Napoleon Bonaparte was born Napoleone di Buonaparte on August 15, 1769, in the coastal town of Ajaccio, Corsica. The island had been ceded to Louis XV by the Republic of Genoa only fifteen months prior, plunging its inhabitants into an uneasy transition between Italian civic culture and French monarchical rule. His father, Carlo Buonaparte, was an astute provincial attorney of Tuscan patrician lineage who navigated the new political landscape to secure patents of French nobility. This legal status enabled his sons to receive royal educational bursaries that would otherwise have remained unattainable to provincial gentry with limited financial capital.',
          'Uprooted from his Mediterranean home at age nine, Napoleon entered the Royal Military School of Brienne-le-Château in Champagne. His accented French, introspective disposition, and modest financial standing made him an immediate target for ridicule among aristocratic classmates. In response to this estrangement, the young cadet immersed himself in rigorous historical reading, classical philosophy, and geography. He examined the municipal constitutions of antiquity, the campaigns of Alexander the Great, and the political theories of Jean-Jacques Rousseau, developing a methodical temperament and an enduring distrust of hereditary privilege.',
          'In October 1784, his exceptional aptitude in advanced mathematics earned him transfer to the prestigious École Militaire in Paris. He elected to enter the artillery, the single branch of the royal army where technical competence and scientific calculation outweighed noble pedigree. Napoleon mastered the rigorous two-year artillery syllabus in a single grueling academic year, becoming the first Corsican officer to receive a commission from the academy. Stationed in Valence as a sixteen-year-old second lieutenant, he spent his evenings studying ballistics, siege craft, and political economy, positioning himself for the institutional ruptures ahead.'
        ]
      },
      {
        id: 'decisive-historical-and-political-turning-points',
        heading: 'Decisive Historical & Political Turning Points',
        content: [
          'The explosion of the French Revolution in 1789 destroyed the aristocratic monopoly over senior military ranks, creating opportunities for capable junior officers. When royalist emigrés surrendered the Mediterranean port of Toulon to an Anglo-Spanish naval fleet in 1793, Bonaparte was appointed artillery commander of the republican siege force. He recognized that capturing the high ground of Fort l’Aiguillette would bring the enemy fleet under direct cannon fire. The daring assault forced the immediate withdrawal of the allied armada, liberating the city and earning the twenty-four-year-old officer promotion to Brigadier General.',
          'In October 1795 (13 Vendémiaire), armed royalist counter-revolutionaries threatened to overthrow the National Convention in the streets of Paris. Bonaparte was entrusted with the defense of the legislative chambers and deployed artillery loaded with canister shot outside the Church of Saint-Roch. The lethal barrage dispersed the insurrection within minutes, establishing Napoleon as a dependable guardian of the republican government and earning him command of the Army of Italy.',
          'Assuming leadership of thirty-seven thousand poorly equipped soldiers in March 1796, Bonaparte launched a lightning campaign that stunned European observers. Employing the strategic concept of the central position, he drove wedges between allied Piedmontese and Austrian armies, defeating them separately at Montenotte, Lodi, and Castiglione. By personally dictating the Treaty of Campo Formio in 1797, he redrew the borders of northern Italy, created the Cisalpine Republic, and established himself as France’s premier military strategist.'
        ]
      },
      {
        id: 'core-contributions-civil-reforms-and-major-achievements',
        heading: 'Core Contributions, Civil Reforms & Major Achievements',
        content: [
          'Seizing supreme political authority through the bloodless Coup of 18 Brumaire in November 1799, Napoleon established the French Consulate and assumed the title of First Consul. His most enduring contribution was the promulgation of the Civil Code of 1804 (Code Napoléon), which replaced an inconsistent patchwork of regional customary laws and feudal rights with unified national statutes. The Code guaranteed legal equality for all male citizens, established freedom of conscience, secularized public records, and protected modern private contracts.',
          'Napoleon personally chaired more than half of the eighty-seven drafting sessions convened by the Council of State, insisting on concise language and clear legal definitions. The civil principles codified under his direction were subsequently implemented across Western Germany, Belgium, the Netherlands, and northern Italy, shaping the trajectory of modern civil law across Europe and Latin America. In addition to legal codification, he established the Banque de France in 1800, introduced the stable silver germinal franc to conquer runaway inflation, and created the Cour des Comptes to ensure rigorous audits of municipal expenditures.',
          'In public administration and learning, Bonaparte established the prefectural system, assigning central government prefects to supervise departmental governance with bureaucratic efficiency. He revolutionized secondary education by constructing state-sponsored Lycées designed to train engineers, administrators, and military officers on meritocratic criteria. To heal the deep civic divisions caused by the Revolution, he negotiated the Concordat of 1801 with Pope Pius VII, restoring Catholic worship while preserving government supremacy over ecclesiastical appointments.'
        ]
      },
      {
        id: 'strategic-overextension-climax-and-final-years',
        heading: 'Strategic Overextension, Climax & Final Years',
        content: [
          'Following his coronation as Emperor of the French at Notre-Dame in December 1804, Napoleon achieved his tactical masterpiece at the Battle of Austerlitz on December 2, 1805. Feigning vulnerability on his right flank, he drew allied Austro-Russian divisions off the Pratzen Plateau before launching a decisive assault through their center, splintering their army. The triumph broke the Third Coalition and established French dominance across central Europe, though the destruction of the Franco-Spanish fleet at Trafalgar permanently preserved British control of the seas.',
          'Unable to confront Britain directly on the water, Napoleon enacted the Berlin and Milan Decrees of 1806, establishing the Continental System to close European ports to British commercial traffic. Enforcing this economic blockade dragged the French Empire into disastrous military quagmires. The 1808 invasion of the Iberian Peninsula sparked the Peninsular War, tying down three hundred thousand French troops in a grueling counter-insurgency against Spanish guerrillas and allied forces.',
          'When Tsar Alexander I resumed trade with Britain in 1810, Napoleon assembled La Grande Armée of more than six hundred thousand men to invade the Russian Empire in June 1812. Russian commanders conducted an orderly strategic retreat, denying decisive engagement while burning grain fields and supply depots. After the brutal Battle of Borodino, Napoleon entered a deserted, burning Moscow, only to be forced into a disastrous winter retreat that decimated his army through starvation, freezing temperatures, and cavalry raids.',
          'Rallied allied powers of the Sixth Coalition overwhelmed Napoleon’s depleted forces at the Battle of Leipzig in October 1813, leading to the capture of Paris and his initial abdication in April 1814. Following ten months in sovereign exile on Elba, he escaped to France in March 1815, rallying the military during the Hundred Days. His final campaign ended on the rain-drenched field of Waterloo on June 18, 1815, when British squares commanded by the Duke of Wellington and Prussian corps led by Marshal Blücher broke the French line, precipitating his final exile to the remote South Atlantic island of Saint Helena.'
        ]
      },
      {
        id: 'historical-impact-and-enduring-global-legacy',
        heading: 'Historical Impact & Enduring Global Legacy',
        content: [
          'Confined at Longwood House on Saint Helena under the strict surveillance of the British governor, Napoleon spent his final six years dictating memoirs and letters that carefully shaped his historical image. Primary government dispatches, imperial orders, and diplomatic correspondence from this period are preserved for academic researchers at [The National Archives of the United Kingdom](https://www.nationalarchives.gov.uk). He succumbed to stomach cancer on May 5, 1821, at the age of fifty-one, leaving an archival record that continues to fuel intense historiographical debate.',
          'Unlike twentieth-century leaders who coordinated parliamentary coalitions in defense of national sovereignty, as documented in the archival profile of [Winston Churchill: The Architecture of Wartime Defiance & Global Geopolitics](/leaders/winston-churchill), Napoleon concentrated sovereign authority within his own person while fundamentally remodeling continental administration. His campaigns accelerated the collapse of feudalism, stimulated national consciousness across Germany and Italy, and permanently restructured the military corps system adopted by modern armies worldwide.',
          'More than two centuries after his death, this Napoleon Bonaparte biography reveals a complex legacy that resists simplistic categorization. He remains both an enlightened modernizer who codified universal civic equality and an imperial autocrat whose continental ambitions resulted in catastrophic losses of life. The legal systems of over seventy sovereign states continue to reflect his civil reforms, ensuring that the institutional architecture he erected remains central to the modern civic order.'
        ]
      }
    ],
    archivalSources: [
      {
        title: 'Correspondance de Napoléon Ier (32 volumes)',
        institution: 'Archives Nationales de France, Paris',
        year: '1858–1869'
      },
      {
        title: 'Mémoires pour servir à l’histoire de France sous Napoléon (Dictated at Saint Helena)',
        institution: 'Bibliothèque nationale de France (BnF), Paris',
        year: '1823'
      },
      {
        title: 'Foreign Office Records: Napoleon on Saint Helena (FO 8/1–12)',
        institution: 'The National Archives, Kew, Richmond',
        year: '1815–1821'
      },
      {
        title: 'The Campaigns of Napoleon: The Mind and Art of History’s Greatest Soldier',
        institution: 'David G. Chandler, Bodleian Library Collections, Oxford',
        year: '1966'
      },
      {
        title: 'Code Civil des Français: Édition originale et manuscrits annotés du Conseil d’État',
        institution: 'Ministère de la Justice & Archives Nationales, Fontainebleau',
        year: '1804'
      }
    ]
  },
  {
    id: 'nikola-tesla',
    slug: 'nikola-tesla-inventions',
    name: 'Nikola Tesla',
    title: 'Nikola Tesla Inventions That Changed the World',
    subtitle: 'The Genesis of Alternating Current, Electromagnetic Motors, Wireless Transmission, and the Dawn of the Modern Electrical Age',
    era: '19th Century',
    dates: '1856 – 1943',
    category: 'Scientists & Inventors',
    readTime: '14 min read',
    publishedDate: 'October 17, 2026',
    updatedDate: 'October 17, 2026',
    author: {
      name: 'Dr. Evelyn Sterling',
      role: 'Historian of Science & Technology Archival Fellow',
      credentials: 'Ph.D. History of Physics & Electrical Systems, Imperial College London',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80',
      bio: 'Author of "Currents of Genius: The Laboratory Notebooks of the High-Frequency Era". Specializes in 19th-century electromechanical patents and laboratory field records.'
    },
    excerpt: 'Discover the Nikola Tesla inventions that changed the world, from alternating current and induction motors to radio waves and wireless energy transmission.',
    coverImage: teslaCoverImage,
    featured: true,
    trendingRank: 2,
    historicalQuote: 'The present is theirs; the future, for which I really worked, is mine.',
    quoteSource: 'Address at the American Institute of Electrical Engineers, New York (1900)',
    keyMilestones: [
      {
        year: '1856',
        event: 'Birth in Smiljan, Austrian Military Frontier',
        significance: 'Born during a violent midnight electrical storm to an Eastern Orthodox archpriest and an inventive mother.',
        location: 'Smiljan, Austrian Empire (Croatia)'
      },
      {
        year: '1875',
        event: 'Polytechnic Training at Joanneum in Graz',
        significance: 'Observed the Gramme dynamo sparking and conceived the theoretical foundation for commutator-free alternating current motors.',
        location: 'Graz, Austria'
      },
      {
        year: '1882',
        event: 'Visual Conceptualization of the Rotating Magnetic Field',
        significance: 'Diagrammed the rotating magnetic field in the dust of Budapest’s City Park while reciting Goethe’s Faust.',
        location: 'Budapest, Hungary'
      },
      {
        year: '1884',
        event: 'Immigration to the United States & Continental Collaboration',
        significance: 'Arrived in Manhattan with four cents and an introduction letter to Thomas Edison; joined Edison Machine Works.',
        location: 'New York City, USA'
      },
      {
        year: '1887–1888',
        event: 'Filing of Foundational Polyphase AC Patents',
        significance: 'Granted landmark US patents for AC induction motors and transformers; partnered with industrialist George Westinghouse.',
        location: 'Pittsburgh / New York'
      },
      {
        year: '1891',
        event: 'Invention of the Resonant Tesla Coil',
        significance: 'Patented high-voltage, high-frequency resonant transformers; granted full United States naturalization citizenship.',
        location: 'New York City, USA'
      },
      {
        year: '1893',
        event: 'Illumination of the World’s Columbian Exposition',
        significance: 'Successfully powered the Chicago World’s Fair using Westinghouse AC generators, proving polyphase safety over direct current.',
        location: 'Chicago, Illinois, USA'
      },
      {
        year: '1895',
        event: 'Harnessing Niagara Falls Hydroelectric Power',
        significance: 'Engineered the Adams Power Plant generating station, transmitting high-voltage polyphase electricity twenty-two miles to Buffalo.',
        location: 'Niagara Falls, New York'
      },
      {
        year: '1898',
        event: 'Invention of the Radio Teleautomaton',
        significance: 'Demonstrated the world’s first radio-controlled robotic boat at Madison Square Garden, pioneering remote telecommunications.',
        location: 'Madison Square Garden, New York'
      },
      {
        year: '1899–1900',
        event: 'High-Altitude Experimental Station in Colorado Springs',
        significance: 'Investigated terrestrial stationary electrical waves, producing artificial lightning discharges exceeding one hundred feet.',
        location: 'Colorado Springs, Colorado'
      },
      {
        year: '1901–1905',
        event: 'Construction of the Wardenclyffe Tower',
        significance: 'Erected the 187-foot wireless telecommunication facility on Long Island backed by financier J. Pierpont Morgan.',
        location: 'Shoreham, Long Island, New York'
      },
      {
        year: '1943',
        event: 'Death at the Hotel New Yorker & Federal Archiving',
        significance: 'Passed away at age eighty-six; his technical trunks and laboratory notes were secured by the federal Alien Property Custodian.',
        location: 'New York City, USA'
      }
    ],
    majorAchievements: [
      'Invention and patenting of the polyphase alternating current (AC) power distribution system, establishing the foundation for global electrical utility infrastructure.',
      'Invention of the brushless AC induction motor, eliminating friction-heavy mechanical commutators through the application of rotating magnetic fields.',
      'Development of the resonant high-frequency, high-voltage transformer (the Tesla Coil), which proved vital for early radio, radiography, and neon illumination.',
      'Pioneering demonstration of wireless remote control via radio frequency teleautomatics at Madison Square Garden in 1898.',
      'Engineering of the Niagara Falls Adams Power Plant generators, successfully proving long-distance high-voltage electrical power transmission.',
      'Foundational investigations into radio wave transmission, resonant electrical tuning, high-frequency oscillators, and early vacuum tube radiation.'
    ],
    sections: [
      {
        id: 'early-life-lineage-and-formative-influences',
        heading: 'Early Life, Lineage & Formative Influences',
        content: [
          'Nikola Tesla was born on July 10, 1856, in the village of Smiljan within the Austrian Military Frontier, in modern-day Croatia. His father, Milutin Tesla, was a learned Eastern Orthodox archpriest renowned for his eidetic memory and pastoral oratory, while his mother, Đuka Mandić, was an inventive woman who fabricated domestic tools and mechanical farm apparatus without formal schooling. From his mother, Tesla inherited an astonishing faculty for visual imagination and mental calculation. Throughout his youth, he possessed the rare capacity to construct intricate mechanical models, perform advanced integral calculus, and debug running mechanisms entirely within his mind without recourse to preliminary sketches.',
          'Surviving a devastating bout with cholera in his adolescence, Tesla persuaded his father to let him pursue engineering rather than the priesthood. In 1875, he matriculated at the Joanneum Polytechnic School in Graz, Austria, on an imperial scholarship. There he demonstrated compulsive academic focus, frequently laboring from three in the morning until eleven at night across mathematics, physics, and electromechanics. When Professor Martin Poeschl demonstrated a newly acquired direct-current Gramme dynamo that sparked violently at its mechanical commutators, the nineteen-year-old Tesla boldly asserted that commutators were superfluous and that an alternating current machine could run without sparks.',
          'Although rebuked by his professors for proposing what conventional physics regarded as perpetual motion, Tesla refused to surrender the insight. Following periods of financial hardship, physical breakdown, and intellectual struggle in Prague and Budapest, his breakthrough arrived in February 1882. While walking through the City Park of Budapest with a colleague and reciting verses from Johann Wolfgang von Goethe’s Faust, the mathematical architecture of the rotating magnetic field struck him with sudden crystalline clarity. He drew the diagram of stator coils producing a rotating field in the dirt with a walking stick, formulating the fundamental electromagnetic principle behind the alternating current induction motor.'
        ]
      },
      {
        id: 'decisive-historical-and-political-turning-points',
        heading: 'Decisive Historical & Political Turning Points',
        content: [
          'In 1884, Tesla immigrated to the United States, docking in New York harbor with four cents in his pocket, a book of poetry, and an introductory letter from Charles Batchelor addressed to Thomas Edison. Edison immediately hired the brilliant Serbian engineer at the Edison Machine Works on Goerck Street, assigning him the complex redesign of direct-current dynamos aboard maritime steamers and municipal stations. However, the intellectual partnership between the empirical tinkerer and the mathematically rigorous theorist soon fractured. When Edison dismissed Tesla’s revolutionary polyphase alternating current concepts as dangerous and refused to honor an alleged fifty-thousand-dollar performance bonus, Tesla resigned, enduring a winter of manual ditch-digging on Manhattan street conduits.',
          'Tesla’s fortunes transformed in 1887 when a consortium of Manhattan attorneys and venture capitalists financed the Tesla Electric Company. Within months, he filed landmark patents for polyphase motors, dynamos, and power transformers that rendered direct current obsolete over long distances. Pittsburgh industrialist George Westinghouse recognized the commercial supremacy of Tesla’s patents, purchasing the exclusive rights and securing Tesla’s collaboration for the celebrated "War of the Currents" against Edison’s direct-current monopoly. Westinghouse’s victory was cemented in 1893 when Tesla’s alternating current system brilliantly illuminated the World’s Columbian Exposition in Chicago, bathing the "White City" in safe, dazzling electric light.',
          'The ultimate technological vindication materialized in 1895 with the construction of the Adams Power Plant at Niagara Falls. Leveraging Tesla’s polyphase patents and Westinghouse engineering, the installation transformed the hydraulic energy of the roaring cataract into twenty-two thousand volts of three-phase alternating current, delivering electric power across twenty-two miles to Buffalo, New York. This historic achievement inaugurated the modern electrical grid, proving that electrical energy could be generated at centralized natural reservoirs and distributed over continental distances to power industrial cities.'
        ]
      },
      {
        id: 'core-contributions-civil-reforms-and-major-achievements',
        heading: 'Core Contributions, Civil Reforms & Major Achievements',
        content: [
          'The breadth of Nikola Tesla inventions that changed the world extends far beyond industrial grid power. In 1891, he patented the Tesla Coil—an air-core resonant transformer capable of stepping up alternating voltages to millions of volts at high frequencies. Using this apparatus in his laboratory on Grand Street and later South Fifth Avenue, Tesla conducted pioneering experiments in wireless electrical conduction, gaseous discharge lighting, and high-frequency electrotherapy. His phosphorescent and neon discharge tubes illuminated his workspace decades before commercial fluorescent bulbs were manufactured for consumer markets.',
          'During his high-frequency laboratory investigations between 1894 and 1896, Tesla captured mysterious radiant shadows of human bones and metallic objects through thick wooden barriers, preceding Wilhelm Röntgen’s public announcement of X-radiation by several months. His laboratory notebooks preserved meticulously recorded electromagnetic spectrum observations, anticipating the investigative methods later employed in radiation physics by [Marie Skłodowska-Curie: The Pioneer of Radioactivity and Two Nobel Laureates](/scientists/marie-curie). Rather than patenting every peripheral observation, Tesla pursued unified field theories of electrical resonance and wireless communication.',
          'In November 1898, at the Electrical Exhibition in Madison Square Garden, Tesla astonished crowds by unveiling the "teleautomaton"—a six-foot iron vessel controlled wirelessly via radio frequency waves transmitted from a brass console. Utilizing an internal coherer, battery-operated rudder motors, and signal-decoding relays, the craft executed complex maneuvers upon verbal command from onlookers. This historic invention represented the foundational birth of modern robotics, wireless remote control, and radio-guided telecommunications, establishing fundamental protocols that govern guided aerospace and marine navigation in the modern era.'
        ]
      },
      {
        id: 'strategic-overextension-climax-and-final-years',
        heading: 'Strategic Overextension, Climax & Final Years',
        content: [
          'Driven by his vision of wireless power distribution, Tesla relocated to Colorado Springs in May 1899 to build an experimental high-voltage station on the high plateau. Operating a colossal magnifying transmitter connected to an eighty-foot mast and copper sphere, he generated artificial lightning arcs exceeding one hundred and thirty-five feet, rattling thunder that was audible fifteen miles away across Cripple Creek. During these experiments, Tesla detected rhythmic electromagnetic pulses that he believed were extraterrestrial communications, but were in fact the first recorded detections of low-frequency terrestrial stationary resonance waves produced by lightning storms.',
          'Returning to New York with triumphant conviction, Tesla secured one hundred and fifty thousand dollars from Wall Street financier J. Pierpont Morgan to construct the Wardenclyffe Tower at Shoreham, Long Island. Designed by architect Stanford White, the 187-foot wooden octagonal tower was topped by a fifty-five-ton hemispherical steel dome and anchored by a hundred-foot subterranean shaft driven deep into the water table. Tesla planned to use the tower not merely for transatlantic wireless telegraphy, but to resonate the entire electrical potential of the Earth, broadcasting free industrial electric power to homes, factories, and vessels worldwide.',
          'Wardenclyffe proved to be Tesla’s tragic financial overreach. When Guglielmo Marconi succeeded in transmitting simple Morse code signals across the Atlantic in December 1901 using far simpler radio equipment, Morgan withdrew additional financing. Unable to secure capital and burdened by mounting debts, Tesla suffered severe nervous exhaustion, and the unfinished Wardenclyffe Tower was dismantled for scrap during World War I in 1917. The visionary inventor spent his remaining decades living in residential New York hotels, feeding pigeons in Bryant Park while drafting conceptual blueprints for particle-beam defense systems and wireless turbines.'
        ]
      },
      {
        id: 'historical-impact-and-enduring-global-legacy',
        heading: 'Historical Impact & Enduring Global Legacy',
        content: [
          'On January 7, 1943, Nikola Tesla passed away quietly at the age of eighty-six in Room 3327 of the Hotel New Yorker. Within hours of his death, agents from the United States Alien Property Custodian impounded his laboratory trunks, technical papers, and correspondence. These historical documents, patent drafts, and engineering schematics are preserved today in national repositories, with extensive primary source records curated by the [Library of Congress Nikola Tesla Correspondence and Patent Collections](https://www.loc.gov). Just months after his passing, the United States Supreme Court overturned Marconi’s foundational radio patent (Case No. 369), officially restoring Nikola Tesla as the true inventor of continuous-wave radio transmission.',
          'The historical legacy of Nikola Tesla resides in the invisible electrical fabric that sustains contemporary civilization. Every alternating current generator in a hydroelectric dam, every brushless induction motor propelling an electric vehicle, and every high-frequency circuit in wireless communications owes its conceptual origin to his early patents. The International Electrotechnical Commission formally memorialized his scientific contributions in 1960 by naming the international standard unit of magnetic flux density the "Tesla" (T).',
          'Ultimately, this exploration of the Nikola Tesla inventions that changed the world demonstrates the triumph of visionary theoretical physics over commercial pragmatism. Tesla was neither a corporate executive nor an incremental optimizer; he was a natural philosopher whose mind perceived the subtle electromagnetic harmonies of the cosmos. His life reminds us that true scientific revolution requires both rigorous mathematical understanding and the courage to envision a luminous future beyond the comprehension of one’s contemporaries.'
        ]
      }
    ],
    archivalSources: [
      {
        title: 'The Inventions, Researches and Writings of Nikola Tesla (Thomas Commerford Martin, Ed.)',
        institution: 'The Electrical Engineer / Library of Congress Rare Book Division',
        year: '1894'
      },
      {
        title: 'Nikola Tesla: Guided Weapons & Teleautomaton Patent Papers (US Patent No. 613,809)',
        institution: 'United States Patent and Trademark Office (USPTO), Alexandria, VA',
        year: '1898'
      },
      {
        title: 'Colorado Springs Notes: 1899–1900 (Facsimile Field Notebooks)',
        institution: 'Nikola Tesla Museum Archives, Belgrade / Nolit Publishing',
        year: '1978'
      },
      {
        title: 'My Inventions: The Autobiography of Nikola Tesla',
        institution: 'Electrical Experimenter Magazine / Smithsonian Institution Libraries',
        year: '1919'
      },
      {
        title: 'FBI & Office of Alien Property Custodian Tesla Papers Investigation File',
        institution: 'National Archives and Records Administration (NARA), College Park, MD',
        year: '1943'
      }
    ]
  }
];

export const CATEGORIES = [
  'World Leaders',
  'Scientists & Inventors',
  'Literary Legends',
  'Philosophers'
] as const;

export const HISTORICAL_ERAS = [
  'All Eras',
  'Classical Antiquity',
  'Renaissance',
  '19th Century',
  '20th Century'
] as const;
