import { Biography } from '../types';
import napoleonCoverImage from '../assets/images/regenerated_image_1792209438929.jpg';

export const BIOGRAPHIES: Biography[] = [
  {
    id: 'napoleon-bonaparte',
    slug: 'napoleon-bonaparte-rise-and-fall',
    name: 'Napoleon Bonaparte',
    title: 'Napoleon Bonaparte Biography: Rise and Fall',
    subtitle: 'From Corsican Artillery Officer to Continental Emperor: Operational Mastery, Institutional Revolution, and the Collapse of an Empire',
    era: '19th Century',
    dates: '1769 – 1821',
    category: 'World Leaders',
    readTime: '14 min read',
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
        significance: 'Born Napoleone di Buonaparte just fifteen months after Genoa ceded sovereignty of Corsica to the Kingdom of France.',
        location: 'Ajaccio, Corsica'
      },
      {
        year: '1785',
        event: 'Graduation from École Militaire',
        significance: 'Completed the two-year artillery officer curriculum in a single year, becoming second lieutenant in the Régiment de La Fère.',
        location: 'Paris, France'
      },
      {
        year: '1793',
        event: 'Breakthrough at the Siege of Toulon',
        significance: 'Devised the artillery battery plan that expelled Anglo-Spanish fleets; promoted to Brigadier General at age twenty-four.',
        location: 'Toulon, France'
      },
      {
        year: '1796–1797',
        event: 'First Italian Campaign',
        significance: 'Decimated Piedmontese and Austrian armies at Montenotte, Lodi, Castiglione, and Rivoli, imposing the Treaty of Campo Formio.',
        location: 'Northern Italy'
      },
      {
        year: '1799',
        event: 'Coup of 18 Brumaire',
        significance: 'Overthrew the corrupt Directory to become First Consul of the French Republic under the Constitution of Year VIII.',
        location: 'Saint-Cloud, Paris'
      },
      {
        year: '1804',
        event: 'Promulgation of the Civil Code & Imperial Coronation',
        significance: 'Enacted the landmark Napoleonic Code and crowned himself Emperor of the French at Notre-Dame Cathedral.',
        location: 'Notre-Dame, Paris'
      },
      {
        year: '1805',
        event: 'Triumph at the Battle of Austerlitz',
        significance: 'Crushed the combined armies of Tsar Alexander I and Emperor Francis II in his undisputed tactical masterpiece.',
        location: 'Moravia (Czech Republic)'
      },
      {
        year: '1807',
        event: 'Treaties of Tilsit',
        significance: 'Formed an alliance with the Russian Empire on the Neman River, carving continental hegemony between East and West.',
        location: 'Sovetsk (Tilsit), East Prussia'
      },
      {
        year: '1812',
        event: 'Invasion of Russia & Catastrophic Retreat',
        significance: 'La Grande Armée entered a burning Moscow but suffered fatal attrition during the winter retreat, losing over 500,000 men.',
        location: 'Smolensk, Moscow & Berezina'
      },
      {
        year: '1814',
        event: 'First Abdication and Exile to Elba',
        significance: 'Allied armies seized Paris; Napoleon signed the Treaty of Fontainebleau and was sovereign exile of Elba.',
        location: 'Fontainebleau / Elba'
      },
      {
        year: '1815',
        event: 'The Hundred Days and Waterloo',
        significance: 'Escaped Elba, rallied the French Army, but suffered definitive defeat against Wellington and Blücher at Waterloo.',
        location: 'Waterloo, Belgium'
      },
      {
        year: '1821',
        event: 'Death on Saint Helena',
        significance: 'Passed away at Longwood House under British custody; his memoirs dictated on the island established the Napoleonic mythos.',
        location: 'Saint Helena Island'
      }
    ],
    majorAchievements: [
      'Codification of the Civil Code of 1804 (Code Napoléon), establishing equal citizenship before the law, secular jurisprudence, and modern property contracts.',
      'Operational perfection of the Corps d’Armée doctrine, transforming military logistics through self-sufficient combined-arms divisions.',
      'Founding of key French modern institutions: the Banque de France, Cour des Comptes, Conseil d’État, and the Legion of Honour meritocracy.',
      'Restructuring European secondary and tertiary schooling through state Lycées and the standardized Imperial University curriculum.',
      'Modernization of European legal and municipal codes across Belgium, the Netherlands, western Germany, and northern Italy.',
      'Execution of the Concordat of 1801, repairing the national schism between the Catholic Church and the secularized post-revolutionary Republic.'
    ],
    sections: [
      {
        id: 'early-life-and-influences',
        heading: 'Early Life & Influences: The Corsican Roots',
        content: [
          'Napoleon Bonaparte was born Napoleone di Buonaparte on August 15, 1769, in Ajaccio, Corsica, mere months after the maritime Republic of Genoa ceded sovereignty of the rugged Mediterranean island to Louis XV of France. Descended from Tuscan minor nobility who had settled in Corsica in the early sixteenth century, the Buonaparte household inhabited a precarious social stratum: possessing patent aristocratic pedigree and proud regional heritage, yet chronically constrained by scarce liquid wealth and agrarian land leases. His father, Carlo Buonaparte, an attorney and opportunist, chose conciliation with the French royal governor over futile island rebellion, securing royal scholarships for his sons that would fundamentally alter the geopolitical trajectory of modern Europe.',
          'Uprooted at age nine to the mainland religious college at Autun and subsequently the Royal Military School of Brienne-le-Château, young Napoleon endured pervasive ostracization. His provincial Italian cadence, fiery temperament, and threadbare garments alienated him from aristocratic French cadets. Rather than retreating into despair, Napoleon sought refuge in voracious classical scholarship. He read omnivorously across Polybius, Plutarch’s Parallel Lives, and Enlightenment political tracts, analyzing the foundational governance paradigms first articulated by [Aristotle](/philosophers/aristotle) alongside the radical civic sovereignty formulated by Jean-Jacques Rousseau.',
          'In October 1784, his exceptional mathematical aptitude gained him admittance to the prestigious École Militaire in the Champ de Mars, Paris. Assigned to the artillery—the sole military branch where mathematical precision and ballistics outweighed aristocratic bloodlines—he conquered the grueling forty-eight-month curriculum in an astonishing eleven months. Commissioned as a second lieutenant in the Régiment de La Fère at age sixteen, he stood on the precipice of a collapsing feudal order, armed with technical proficiency, acute social resentment, and an unquenchable thirst for historical agency.'
        ]
      },
      {
        id: 'turning-points-artillery-strategist',
        heading: 'Turning Points: The Artillery Strategist’s Ascension',
        content: [
          'The detonation of the French Revolution in 1789 dissolved the calcified noble ceilings that had stifled middle-class advancement across Europe. While aristocratic officers deserted their regiments to wage royalist counter-revolutions abroad, Bonaparte aligned himself with the ascendant Jacobin faction. His decisive breakthrough materialized in December 1793 at the Siege of Toulon, where Anglo-Spanish naval forces occupied the vital southern Mediterranean naval arsenal. Appointed artillery commander, Bonaparte discarded conventional siege methods and accurately diagnosed that capturing Fort l’Aiguillette would grant direct cannon trajectory over the enemy fleet’s anchorage, forcing their immediate evacuation. His successful tactical execution expelled the British armada, liberated Toulon, and earned the twenty-four-year-old officer a meteoric promotion to Brigadier General.',
          'Following the fall of Maximilien Robespierre and the Thermidorian Reaction, Bonaparte demonstrated cold-eyed political pragmatism. In October 1795 (13 Vendémiaire Year IV), when thirty thousand armed royalist insurgents marched against the National Convention in Paris, Napoleon deployed artillery batteries loaded with canister shot outside the Church of Saint-Roch. His ruthless "whiff of grapeshot" crushed the counter-revolution in twenty minutes, cementing his position as the protector of the young Directory and winning him command of the impoverished Army of Italy.',
          'Assuming command in Nice in March 1796, Napoleon encountered forty-three thousand starving, mutinous French soldiers facing seventy thousand entrenched Austrian and Piedmontese troops. Through sheer force of will, rapid forced marches, and the strategic doctrine of the central position—driving a wedge between allied adversaries and crushing each separated column with local numerical superiority—he inflicted catastrophic defeats at Montenotte, Millesimo, Lodi, and Castiglione. By forcing Austria to sign the Treaty of Campo Formio in 1797, Bonaparte redrew the map of Northern Italy, founded the Cisalpine Republic, and established himself as the premier military and diplomatic power in the French sphere.'
        ]
      },
      {
        id: 'master-of-the-battlefield',
        heading: 'Master of the Battlefield: Strategic Innovation & Imperial Zenith',
        content: [
          'The military supremacy achieved throughout this Napoleon Bonaparte biography derived not from revolutionary weaponry, but from unprecedented institutional organization and logistical velocity. Napoleon perfected the Corps d’Armée doctrine: dividing monolithic armies into self-contained operational corps composed of infantry divisions, light and heavy cavalry, and mobile artillery batteries. Each corps, commanded by a battle-tested marshal, could march along distinct parallel roads, forage independently, live off the countryside without cumbersome supply wagons, and sustain combat against superior enemy numbers for twenty-four to thirty-six hours until neighboring columns converged upon the sound of the guns.',
          'On December 2, 1805, upon the rolling hills of Moravia, Bonaparte orchestrated his undisputed masterpiece: the Battle of Austerlitz. Confronting seventy-five thousand Austro-Russian troops commanded by Tsar Alexander I and Holy Roman Emperor Francis II, Napoleon deliberately exposed his right flank along the Goldbach stream to invite an allied encirclement. As the allied columns drained their central reserves to press the trap, Marshal Soult’s IV Corps surged through the morning mists to seize the towering heights of the Pratzen Plateau, splitting the allied army in half and routing the Third Coalition. The victory dissolved the thousand-year-old Holy Roman Empire, established the Confederation of the Rhine, and established French continental dominance.',
          'Subsequent blitzkrieg campaigns in 1806 obliterated the vaunted Prussian army at Jena and Auerstedt within a single fortnight, followed by the bloody attrition of Eylau and the decisive triumph at Friedland in 1807. At the Niemen River in July 1807, Tsar Alexander I embraced Napoleon aboard a gilded pavilion raft to sign the Treaties of Tilsit. Yet unlike the defensive wartime coalitions that [Winston Churchill](/leaders/winston-churchill) would later mobilize to preserve sovereign parliaments, Napoleon’s continental dominance relied on total subjection of foreign crowns under client kingdoms ruled by his siblings.'
        ]
      },
      {
        id: 'institutional-revolution-civil-code',
        heading: 'Institutional Revolution: The Napoleonic Code & Administrative Centralization',
        content: [
          'While battle honours proved ephemeral, Napoleon’s administrative architecture forged the bedrock of modern civil society. Before his ascendancy, France was splintered into over four hundred localized legal customs, royal ordinances, and feudal jurisdictions. Through five years of relentless drafting personally overseen by Bonaparte during marathon midnight sessions of the Council of State, the Civil Code of 1804 (Code Napoléon) was promulgated.',
          'The Civil Code codified the paramount egalitarian tenets of 1789: juridical equality for all adult male citizens, religious toleration, freedom of conscience, the absolute abolition of feudal privilege, and contractual property rights. Much like the profound legal struggles for human dignity spearheaded decades later by [Abraham Lincoln](/leaders/abraham-lincoln), the Napoleonic Code struck a death blow against hereditary aristocracy across Western Europe. Transported by French armies into the Low Countries, the Rhineland, Switzerland, and Italy, it became the global paradigm for civil jurisprudence across Europe, Latin America, and portions of North America.',
          'Beyond jurisprudence, Bonaparte constructed an enduring administrative apparatus. He created the Banque de France in 1800, introduced the stable germinal franc that halted hyperinflation, and instituted the Cour des Comptes to audit public expenditures. To foster civic excellence and technological research, he restructured secondary education into state-run Lycées and centralized the national curriculum to prioritize mathematical rigor and empirical physics—a pedagogical lineage that would later nurture scientific breakthroughs by pioneers like [Marie Skłodowska-Curie](/scientists/marie-curie) and polymathic innovators reminiscent of [Leonardo da Vinci](/scientists/leonardo-da-vinci).'
        ]
      },
      {
        id: 'the-overreach-blockade-and-russia',
        heading: 'The Overreach: Continental Blockade and the Russian Catastrophe',
        content: [
          'The structural fatal flaw of the Napoleonic Empire lay in its inability to overcome British maritime supremacy, especially after Admiral Horatio Nelson annihilated the Franco-Spanish fleet at Trafalgar in October 1805. Incapable of launching an amphibious cross-Channel invasion, Bonaparte retaliated with economic warfare via the Berlin and Milan Decrees, constructing the "Continental System"—a total commercial blockade designed to starve the British manufacturing economy by barring British goods from European ports.',
          'The Continental Blockade caused immense friction across Europe. Coercing allied and neutral states to shutter their ports wrecked Baltic maritime commerce, generated systemic smuggling, and forced Napoleon into catastrophic military adventures. His unprovoked 1807–1808 invasion of the Iberian Peninsula to force Portuguese compliance ignited the Peninsular War—the "Spanish Ulcer." The conflict tied down three hundred thousand imperial veterans in a savage guerrilla war, draining French treasuries while Regency England observed the drama described by contemporary chroniclers like [Jane Austen](/literature/jane-austen).',
          'When Tsar Alexander I openly repudiated the Continental System in 1810 by reopening Russian ports to neutral merchantmen, Napoleon mobilized the largest military force Western civilization had ever assembled: La Grande Armée, numbering over six hundred thousand soldiers from twenty nations. Crossing the Niemen in June 1812, Bonaparte sought a swift, decisive battle of annihilation. Instead, Russian commanders Barclay de Tolly and Mikhail Kutuzov executed a masterly strategic withdrawal, burning crops, arsenals, and villages across hundreds of miles of scorched earth.',
          'Following the apocalyptic carnage of the Battle of Borodino on September 7, 1812, where over seventy thousand men fell in a twelve-hour slaughter, Napoleon entered a deserted, burning Moscow. Refusing to sue for peace, Tsar Alexander let winter do what armies could not. On October 19, Bonaparte ordered the retreat from Moscow. Trapped in sub-zero blizzards, harassed relentlessly by Cossack cavalry, and starving in the snow-choked wastes, the Grande Armée disintegrated. Fewer than ninety thousand frostbitten survivors stumbled back across the frozen Berezina River.'
        ]
      },
      {
        id: 'waterloo-exile-and-st-helena',
        heading: 'Waterloo, Exile, and the St. Helena Epilogue',
        content: [
          'The catastrophic ruin in Russia shattered the myth of Napoleonic invincibility. A Sixth Coalition of Britain, Russia, Prussia, Austria, and Sweden converged upon Germany. Despite displaying tactical genius during the 1813 German Campaign and his brilliant 1814 Six Days’ Campaign defending French soil, Bonaparte was decisively overwhelmed by numerical superiority at the colossal Battle of Leipzig (the Battle of the Nations). On March 31, 1814, allied armies marched triumphantly into Paris. Deserted by his marshals, Napoleon signed his unconditional abdication at Fontainebleau on April 6 and was dispatched into sovereign exile on the Mediterranean isle of Elba.',
          'Ten months later, on March 1, 1815, Bonaparte staged the most audacious gamble in military history. Slipping past British surveillance frigates with a thousand guardsmen, he landed on the southern coast of France. King Louis XVIII sent royal regiments to arrest him at Laffrey; Napoleon walked forward alone into their rifle sights, parted his overcoat, and proclaimed: "Soldiers of the Fifth! Here is your Emperor! Shoot him if you wish!" The ranks broke into delirious cheers of "Vive l’Empereur!", marching alongside him to Paris without firing a single bullet.',
          'The frantic Hundred Days culminated on the rain-soaked ridge of Mont-Saint-Jean near Waterloo, Belgium, on June 18, 1815. Pitted against the Duke of Wellington’s resolute Anglo-Allied squares and Field Marshal Blücher’s late-arriving Prussian corps, Napoleon’s command was marred by sluggish coordination from Marshal Ney and delayed artillery deployment caused by muddy soil. When the Imperial Guard retreated for the first time in history, the French army dissolved into pandemonium. Surrendering to the Royal Navy warship HMS Bellerophon, Napoleon was permanently exiled to Longwood House on the wind-scoured South Atlantic rock of Saint Helena.',
          'Confined under the suspicious gaze of British governor Sir Hudson Lowe, Napoleon spent his final six years engaging in an ideological battle for historical posterity. Dictating his memoirs to Emmanuel de Las Cases and General Gaspard Gourgaud, he cast his imperial rule as the shield of European liberty against reactionary tyrannies—a transformation of memory echoing the prolonged confinement and moral endurance exemplified by figures like [Nelson Mandela](/leaders/nelson-mandela). On May 5, 1821, at age fifty-one, Napoleon passed away, murmuring his famous final words: "France, l’armée, tête d’armée, Joséphine."'
        ]
      },
      {
        id: 'historical-legacy-and-historiography',
        heading: 'Historical Legacy & Enduring Historiography',
        content: [
          'More than two centuries after his death, this Napoleon Bonaparte biography reveals a monumental historical paradox: an enlightened reformer who codified universal civil equality alongside an imperial autocrat whose continental ambitions claimed between three and six million European lives. In evaluating his dual nature, historiography recognizes that Napoleon permanently modernized the institutional machinery of the modern nation-state.',
          'His insistence on meritocracy destroyed hereditary feudal exclusivity across the European continent. In warfare, his analytical precision, calculated probability, and logistics reflected the systematic methodology that later enabled analytical trailblazers like [Ada Lovelace](/scientists/ada-lovelace) to systematize complex algorithmic structures. Today, the legal systems of over seventy sovereign nations trace their fundamental civil protections directly to the Napoleonic Code, while the public institutions he established remain the framework of French civic life.',
          'Ultimately, Napoleon Bonaparte embodied the volcanic transition from the ancient regime of divine-right monarchs to the modern epoch of mass mobilized statecraft. His life stands as a testament to the heights attainable by human intellect and boundless will, accompanied by the sobering, inexorable warning that even the most brilliant strategic vision collapses when divorced from moderation, diplomacy, and the sovereign desires of free peoples.'
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
        title: 'The Campaigns of Napoleon: The Mind and Art of History’s Greatest Soldier',
        institution: 'David G. Chandler, Bodleian Library Collections, Oxford',
        year: '1966'
      },
      {
        title: 'Napoleon: A Life (Primary Source Archival Synthesis)',
        institution: 'Andrew Roberts, British Library Historical Archives',
        year: '2014'
      },
      {
        title: 'Code Civil des Français: Édition originale et manuscrits annotés du Conseil d’État',
        institution: 'Ministère de la Justice & Archives Nationales, Fontainebleau',
        year: '1804'
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
