/* ============================================================================
   BAJA NORTE — SURF & SPEAR EXPEDITION
   Spot data + research. North-to-south along the Pacific coast.

   Each surf spot is scored HONESTLY for a LATE-AUGUST trip (south-swell
   season) — not for its all-time winter potential. Most northern Baja points
   are NW-swell winter breaks, so several read "long shot" for these dates;
   the spearfishing/diving, by contrast, is at its annual peak.

   coord: "exact"  = confident within ~0.5 km
          "approx" = best estimate, confirm on the ground / with your friend
   ========================================================================= */

window.TRIP = {
  title: "Baja Norte",
  subtitle: "Surf & Spear Expedition",
  dates: "Late August 2026",

  // Trip-wide intel (not tied to one pin) — shown in the "Field Notes" panel
  intel: {
    driving: [
      "Blow through Tijuana & Rosarito — don't stop.",
      "Never drive at night. It's not crime — it's open-range cows, unlit trucks, and no shoulders.",
      "Mountain roads: take corners really slow. Assume a cow or a truck is around every blind one.",
      "Hwy 1 is the only road south, two lanes, shared with 18-wheelers and buses."
    ],
    gear: [
      "Tire pump + 4WD recovery kit. For the Seven Sisters: a come-along and a t-post driver in case the car gets stuck.",
      "Sat phone — most of this coast has zero cell service.",
      "Warm layers — desert nights get cold.",
      "4/3 wetsuit — the Pacific side stays cold year-round even in August.",
      "Booties — most of these points are rock/reef bottom with urchins."
    ],
    etiquette: [
      "Take people up on offers to camp or stay at their place — even if it costs a little. Often the best spots.",
      "Lots of restaurants will let you sleep there. Worth asking.",
      "Rolling up to a local's break? Say hi. Offering a six-pack goes a long way."
    ],
    season: [
      "Late August = peak south/SW swell season + warmest water + best dive visibility of the year.",
      "It's also the heart of hurricane/chubasco season (Jun–Nov). A tropical storm off mainland Mexico can send pulse swell AND wash out sections of Hwy 1.",
      "Check road conditions daily via the Facebook groups 'Talk Baja' / 'Talk Baja Road Conditions' once you're rolling."
    ]
  },

  spots: [
    {
      id: "tj-rosarito", order: 0, name: "Tijuana → Rosarito", region: "The Border Run",
      lat: 32.405, lng: -117.045, coord: "exact",
      types: ["tip"], primary: "tip",
      friend: "Drive past Tijuana and Rosarito without stopping. Don't drive at night.",
      summary: "Don't stop — just get south. The trip really starts past Ensenada.",
      take: "Cross early, fuel up south of the border, and push through. Save daylight for the good stuff.",
      links: []
    },

    {
      id: "popotla", order: 1, name: "Playa Popotla", region: "Rosarito Corridor",
      lat: 32.296, lng: -117.045, coord: "approx",
      types: ["surf", "food", "stay"], primary: "food",
      friend: "Fun surf and places to eat and stay.",
      summary: "Funky fishing village with a famous seafood market — easy first stop for food + a stay.",
      surf: { aug: 2, swell: "W–NW / combo", swellDeg: [260, 305], period: "8–14s", tide: "mid", season: "Year-round (small)", skill: "Beginner–Intermediate", hazards: "Rocks, fishing pangas" },
      stay: { options: "Cabins & camping near the village; cheap eats everywhere.", nights: "1", tip: "Hit the seafood market — pick your fish, they cook it." },
      take: "More a food/first-night stop than a surf mission. Fun, mellow, easy in.",
      links: []
    },

    {
      id: "santorini", order: 2, name: "Santorini (Puerto Nuevo area)", region: "Rosarito Corridor",
      lat: 32.268, lng: -117.040, coord: "approx",
      types: ["food", "spear", "surf"], primary: "food",
      friend: "Good diving right out front, good surf if big.",
      summary: "Eat here, dive right out front. Surf only shows on a bigger swell.",
      surf: { aug: 1, swell: "W–NW (needs size)", swellDeg: [265, 300], period: "12s+", tide: "mid", season: "Winter when big", skill: "Intermediate", hazards: "Rock reef" },
      spear: { aug: 3, species: ["calico bass", "sheephead", "lobster"], viz: "15–30 ft", notes: "Rocky reef right out front — good poke around for bass and bugs when the water's clean." },
      take: "Late August: treat it as a dive + meal stop. Surf needs a real swell to turn on.",
      links: []
    },

    {
      id: "las-gaviotas", order: 3, name: "Las Gaviotas", region: "Rosarito Corridor",
      lat: 32.205, lng: -116.965, coord: "exact",
      types: ["stay", "surf"], primary: "surf",
      friend: "Good place to stay, and surf.",
      summary: "Soft right reef just south of K-38 — mellow, longboard-friendly, easy rentals.",
      surf: { aug: 2, swell: "W–NW", swellDeg: [260, 300], period: "10–15s", tide: "mid–high", season: "Best Nov–Mar; surfable year-round", skill: "Beginner–Intermediate", hazards: "Shallow reef at low tide" },
      stay: { options: "Vacation rentals in the gated Las Gaviotas community (golasgaviotas / lasgaviotas.net).", nights: "1–2", tip: "Comfortable, safe base to ease into Baja before going remote." },
      take: "A soft, forgiving wave and a comfy stay — good warm-up. Will likely be small but fun in August.",
      links: [{ label: "Surfline forecast", url: "https://www.surfline.com/surf-report/las-gaviotas/584204204e65fad6a77091b9" }]
    },

    {
      id: "la-salina", order: 4, name: "La Salina Cantina & Jetty", region: "Rosarito Corridor",
      lat: 32.102, lng: -116.866, coord: "exact",
      types: ["stay", "food", "surf", "spear"], primary: "stay",
      friend: "Good food and can pay to park and sleep there. Great jetty surf and halibut fishing at Salina.",
      summary: "Pay-to-park-and-sleep cantina with jetty surf and halibut on the sand flats.",
      surf: { aug: 2, swell: "W–SW (jetty bends swell)", swellDeg: [230, 290], period: "10–15s", tide: "mid", season: "Year-round; jetty holds sand", skill: "Intermediate", hazards: "Rip by the jetty, rocks" },
      spear: { aug: 3, species: ["California halibut", "corbina", "sand bass"], viz: "10–25 ft", notes: "Halibut on the sand flats around the jetty — flat-sand stalking more than reef hunting. Best on a clean, calm morning." },
      stay: { options: "Pay to park/camp/sleep at the cantina; Baja Seasons resort nearby.", nights: "1", tip: "Solid food + a safe place to crash right on the water." },
      take: "Underrated all-rounder for August: jetty bends in swell when the points are flat, plus easy halibut and a place to sleep.",
      links: []
    },

    {
      id: "salsipuedes", order: 5, name: "Mirador Salsipuedes", region: "Ensenada",
      lat: 31.966, lng: -116.806, coord: "exact",
      types: ["surf", "camp"], primary: "surf",
      friend: "Check surf. World class wave can get crowded. Pay to stay close to the break or park further down near construction and walk up. Over 6–8ft S swell, surf here (crowded w/ pros).",
      summary: "Northern Baja's most celebrated right point — but a true winter, big-NW wave.",
      surf: { aug: 1, swell: "W–NW groundswell", swellDeg: [275, 312], period: "14s+", tide: "Very low", season: "Nov–Mar ONLY", skill: "Advanced–Expert", hazards: "Heavy, hollow, rock reef; crowded with pros; historically boat-access (no land access since '07 — your friend's pay-to-park/walk-up is the workaround)" },
      take: "Honest call for late August: long shot. It needs a big W–NW winter groundswell and goes flat under ~6ft. Your friend lists it as a big-S-swell play — if a strong S/SW or tropical pulse hits, check it, but don't count on it. Worth a drive-by look from the mirador regardless.",
      links: [{ label: "Surf-Forecast", url: "https://www.surf-forecast.com/breaks/Salsipuedes" }]
    },

    {
      id: "san-miguel", order: 6, name: "San Miguel", region: "Ensenada",
      lat: 31.897, lng: -116.738, coord: "exact",
      types: ["surf", "food"], primary: "surf",
      friend: "Fun like Rincon. Super sick if big and a kooky crowd. Over 6–8ft S swell, surf here (crowded w/ goofs).",
      summary: "The birthplace of Mexican surf culture — a long, Rincon-style right point.",
      surf: { aug: 1, swell: "WNW ideal (290°)", swellDeg: [270, 310], period: "12–15s", tide: "mid–high", season: "Nov–Mar", skill: "Intermediate–Advanced", hazards: "Rocky bottom + urchins (booties!). South swell is largely blocked by Punta Banda & the Todos Santos islands." },
      take: "Like Salsipuedes, this is a NW-swell winter wave and S swell is mostly blocked here. In late August it's usually small. It IS your best bet among the marquee points if a big swell shows — and the easiest to check. Otherwise grab tacos and keep moving.",
      links: [{ label: "Surf-Forecast", url: "https://www.surf-forecast.com/breaks/San-Miguel" }]
    },

    {
      id: "ensenada", order: 7, name: "Ensenada (resupply + tacos)", region: "Ensenada",
      lat: 31.857, lng: -116.626, coord: "exact",
      types: ["food", "tip"], primary: "food",
      friend: "Tacos de Franc, los traileros are good eats. Gnarlier adventure starts south of Ensenada.",
      summary: "Last real city. Top off fuel, water, ice, cash, and tacos before it gets wild.",
      stay: { options: "Plenty of hotels if you want one comfortable night before going remote.", nights: "0–1", tip: "This is your staging point — everything south is smaller and rougher." },
      take: "Fuel up fully, hit an ATM, stock water/ice, and eat at Tacos de Franc or Los Traileros. South of here, services thin out fast.",
      links: []
    },

    {
      id: "punta-cabras", order: 8, name: "Punta Cabras", region: "Eréndira Coast",
      lat: 31.330, lng: -116.460, coord: "approx",
      types: ["surf", "spear", "camp"], primary: "spear",
      friend: "(listed alongside Eréndira / Coyote Cal's)",
      summary: "Remote rocky point with two sandy beaches — kayak, snorkel, surf, grab lobster.",
      surf: { aug: 2, swell: "W–NW", swellDeg: [260, 305], period: "10–15s", tide: "mid", season: "Year-round, swell-dependent", skill: "Intermediate", hazards: "Cold water, rocks, very remote — no services" },
      spear: { aug: 3, species: ["lobster", "rockfish", "calico bass"], viz: "15–30 ft", notes: "Rocky outcrops, tide pools, and reef hold lobster, rockfish and mussels. Beaches Media Luna & Bahía Almeja. Calm mornings only — Pacific side is cold and can turn rough." },
      stay: { options: "Primitive beach camping.", nights: "1", tip: "Pair it with Coyote Cal's just south for a base." },
      take: "This stretch is the real start of the spearfishing. Warm-for-the-Pacific August water + reef = good poke diving on a clean morning.",
      links: []
    },

    {
      id: "erendira", order: 9, name: "Ejido Eréndira — Coyote Cal's", region: "Eréndira Coast",
      lat: 31.276, lng: -116.385, coord: "exact",
      types: ["stay", "food", "spear", "surf"], primary: "stay",
      friend: "Hostel and can stay in lighthouse. Coyote Cal's. Talk to Cal and take mining road over ridge to Gonzaga for epic diving and fishing. Ask Cal at Coyotes if Mama's is still there — great restaurant.",
      summary: "The hub. A legendary fishing-village hostel — base for surf, spear, and off-road.",
      surf: { aug: 2, swell: "W–NW", swellDeg: [260, 305], period: "10–15s", tide: "varies", season: "Year-round in the coves", skill: "All levels", hazards: "Cold water (4/3 wetsuit). Very remote." },
      spear: { aug: 4, species: ["yellowtail", "white seabass", "lobster", "rockfish"], viz: "15–30 ft", notes: "ASK CAL about the mining road over the ridge — your friend's insider tip for 'epic diving and fishing.' Bring 4WD. This is local knowledge you won't find online; confirm the exact spot with Cal." },
      stay: { options: "Coyote Cal's hostel (since '97): bunks, private rooms, tent/RV sites, even a lighthouse stay. Free waffles at 7:30am, wetsuit & soft-top rentals.", nights: "2–3", tip: "Ask Cal if 'Mama's' restaurant is still around. Make this your basecamp for the area." },
      take: "Set up here for 2–3 nights and run day missions. The single highest-value lead in your friend's notes — Cal is the key that unlocks the local spots.",
      links: [{ label: "Coyote Cal's", url: "https://www.coyotecals.com/" }]
    },

    {
      id: "k181", order: 10, name: "K-181 Rivermouth", region: "Eréndira Coast",
      lat: 31.230, lng: -116.395, coord: "approx",
      types: ["surf"], primary: "surf",
      friend: "K181 fun rivermouth.",
      summary: "A fun rivermouth sandbar in the Eréndira / San Isidro zone.",
      surf: { aug: 3, swell: "W–SW (rivermouth bends swell)", swellDeg: [230, 300], period: "10–15s", tide: "low–mid", season: "Best when the sandbar's built up", skill: "Intermediate", hazards: "Cold, remote; sandbar shifts with the seasons" },
      take: "Rivermouth sandbars are less picky about swell direction than the points, so this can be a fun, more reliable peak in August. Exact spot is approximate — confirm with Cal at Coyote's (he groups K-181 with the Cabras/San Isidro area).",
      links: []
    },

    {
      id: "cuatro-casas", order: 11, name: "Cuatro Casas", region: "Colonet",
      lat: 30.889, lng: -116.323, coord: "approx",
      types: ["surf", "stay", "camp"], primary: "surf",
      friend: "Say hi to a neighbor, offer a 6 pack or something. Good waves and can camp on beach.",
      summary: "Wind-sheltered right reef/point with a cliff-top hostel — surf since the '60s.",
      surf: { aug: 3, swell: "W–NW (well sheltered from wind)", swellDeg: [260, 305], period: "10–16s", tide: "mid", season: "Works much of the year", skill: "Intermediate–Advanced", hazards: "Reef bottom, remote; 8 km of dirt road off Hwy 1 (follow signs, not GPS)" },
      stay: { options: "Cuatro Casas Hostel on the cliff + beach camping.", nights: "1–2", tip: "Say hi to the neighbors, offer a six-pack — local goodwill matters here." },
      take: "One of your better surf odds for August: it's a sheltered right that handles a range of conditions, not a pure winter point. Camp on the beach and settle in.",
      links: [{ label: "Cuatro Casas Hostel", url: "https://hostelcuatrocasas.com/" }, { label: "Surf-Forecast", url: "https://es.surf-forecast.com/breaks/Quatro-Casas" }]
    },

    {
      id: "shipwrecks", order: 12, name: "Shipwrecks (Punta San Jacinto)", region: "Colonet", bonus: true,
      lat: 30.835, lng: -116.105, coord: "approx",
      types: ["surf", "camp", "bonus"], primary: "bonus",
      friend: "(bonus spot I found — fits right between Cuatro Casas and San Quintín)",
      summary: "BONUS: a dependable point with an actual shipwreck — the Isla del Carmen — in the lineup.",
      surf: { aug: 3, swell: "W–NW", swellDeg: [255, 305], period: "10–15s", tide: "mid", season: "Dependable / consistent", skill: "Intermediate", hazards: "The wreck itself; rocks. ~4–6 km from Camalú." },
      stay: { options: "Beach camping at the point.", nights: "1", tip: "Camalú nearby for supplies; mushy longboard wave just south." },
      take: "Bonus add: one of the more consistent breaks on this stretch and a wild photo op with the beached ship in the water. Easy detour off Hwy 1.",
      links: [{ label: "Surf-Forecast", url: "https://www.surf-forecast.com/breaks/Punta-San-Jacinto" }]
    },

    {
      id: "jardines", order: 13, name: "Jardines Baja", region: "San Quintín", uncertain: true,
      lat: 30.560, lng: -115.945, coord: "approx",
      types: ["food"], primary: "food",
      friend: "Epic meal at jardines baja.",
      summary: "Your friend's 'epic meal' stop — location needs confirming.",
      take: "Flagged: I couldn't verify exactly where this is — I've placed it in the San Quintín stretch as a guess. Ask your friend to drop a pin so I can move it.",
      links: []
    },

    {
      id: "la-chorera", order: 14, name: "Campo La Chorera — Volcanoes / Negros / Glasses", region: "San Quintín", bonus: true,
      lat: 30.420, lng: -115.975, coord: "approx",
      types: ["surf", "spear", "bonus"], primary: "bonus",
      friend: "Cool volcanos near campo la chorera. Lots of obsidian. Waves called glasses, volcanos, negros (research where).",
      summary: "SOLVED: this is the San Quintín Volcanic Field — 'Volcanoes' is a real expert-only lava-reef break out here.",
      surf: { aug: 2, swell: "W–NW", swellDeg: [255, 305], period: "12s+", tide: "varies", season: "Winter when it's on", skill: "EXPERT ONLY", hazards: "Volcanic-rock bottom, strong undercurrent, unpredictable, rough access. A series of lava-reef breaks down the outside of the peninsula that forms San Quintín bay. Serious off-roading to reach." },
      spear: { aug: 3, species: ["yellowtail", "rockfish", "lobster"], viz: "15–30 ft", notes: "Volcanic reef structure = fishy. Same caution as the surf — exposed, rough, expert water." },
      take: "Mystery cracked: 11 Pleistocene cinder cones right on the coast; 'Glasses' ≈ the obsidian (volcanic glass), 'Volcanoes' & 'Negros' are the dark lava-reef breaks on the outer Cabo San Quintín peninsula. Incredible to see, genuinely heavy/expert to surf. Go for the geology + the dive even if the surf's out of range.",
      links: [{ label: "SQ Volcanic Field (Wikipedia)", url: "https://en.wikipedia.org/wiki/San_Quint%C3%ADn_Volcanic_Field" }]
    },

    {
      id: "la-bocana", order: 15, name: "Playa La Bocana (El Socorro)", region: "San Quintín", uncertain: true,
      lat: 30.323, lng: -115.852, coord: "approx",
      types: ["surf", "camp"], primary: "surf",
      friend: "Playa la bocana rivermouth.",
      summary: "A rivermouth break south of San Quintín — likely the El Socorro mouth.",
      surf: { aug: 3, swell: "W–SW (rivermouth)", swellDeg: [235, 300], period: "10–15s", tide: "low–mid", season: "Swell + sandbar dependent", skill: "Intermediate", hazards: "Remote, no services; sandbar shifts" },
      stay: { options: "Beach camping.", nights: "1", tip: "Rivermouths take more swell angles — decent August odds." },
      take: "Rivermouth = more forgiving on swell direction, so a reasonable August surf bet. There are a couple of 'La Bocana's on this coast — I've placed it at El Socorro; confirm with your friend.",
      links: []
    },

    {
      id: "el-rosario", order: 16, name: "El Rosario — Mama Espinoza's & Baja's Best B&B", region: "El Rosario",
      lat: 30.058, lng: -115.728, coord: "exact",
      types: ["food", "stay", "tip"], primary: "stay",
      friend: "El Rosario de arriba. Bajas best bed and breakfast. [Mama Espinoza's nearby]",
      summary: "Last real fuel/supplies before the remote south. Famous food + a great B&B.",
      stay: { options: "Baja's Best Bed & Breakfast (your friend's pick); Mama Espinoza's restaurant (Baja 1000 checkpoint — get the lobster burrito).", nights: "1", tip: "Top off EVERYTHING here — fuel, water, cash. It gets very remote past this point." },
      take: "Pivot point of the trip. Sleep at the B&B, eat at Mama Espinoza's, fuel up completely. Everything south — Punta Baja and the Seven Sisters — is committing and self-supported.",
      links: []
    },

    {
      id: "punta-baja", order: 17, name: "Punta Baja (ask Ed)", region: "El Rosario",
      lat: 29.952, lng: -115.812, coord: "exact",
      types: ["surf", "stay", "spear", "camp"], primary: "surf",
      friend: "Ask Ed if he still owns his property out on punta baja, offer beer and stuff to try to stay there. Insane surf on his place. 'My friend had a great time staying on your property and highly recommended.'",
      summary: "Long rocky right point that wraps on SW swell — the best S-swell surf odds on the trip.",
      surf: { aug: 3, swell: "W–SW (wraps into the bay)", swellDeg: [215, 290], period: "12–16s", tide: "mid; offshore on E wind", season: "Best in winter, but takes SW", skill: "Intermediate–Advanced", hazards: "Rocky point, remote fishing camp" },
      spear: { aug: 3, species: ["yellowtail", "lobster", "rockfish"], viz: "15–30 ft", notes: "Working fishing camp on a productive point — good reef structure. Warm August water helps." },
      stay: { options: "Camp at the point; ASK ED about staying on his property (use your friend's referral line, bring beer).", nights: "1–2", tip: "Marks the Northern/Central Baja border on the Pacific. Long rocky right with stairs down to the beach." },
      take: "Because it wraps SW swell, this is one of the FEW points here genuinely likely to break for you in August. Combine it with the Ed connection and it's a highlight target. Use your friend's referral exactly as written.",
      links: [{ label: "Surf-Forecast", url: "https://www.surf-forecast.com/breaks/Punta-Baja" }]
    },

    {
      id: "punta-san-carlos", order: 18, name: "Punta San Carlos", region: "Seven Sisters", bonus: true,
      lat: 29.620, lng: -115.498, coord: "approx",
      types: ["surf", "camp", "bonus"], primary: "bonus",
      friend: "(north end of the Seven Sisters zone)",
      summary: "Famous remote right point + wind-sport camp at the north end of the Seven Sisters.",
      surf: { aug: 2, swell: "W–NW", swellDeg: [265, 305], period: "12s+", tide: "mid", season: "Winter NW magnet; windy in spring/summer", skill: "Advanced", hazards: "Extremely remote — carry ALL fuel, water, supplies. Hours of dirt road." },
      take: "The northern anchor of the right-point coast. A NW magnet, so August surf is a long shot — but the spearfishing and the sheer remoteness are the draw. Only go fully self-supported.",
      links: [{ label: "Surfline", url: "https://www.surfline.com/surf-report/punta-san-carlos/584204204e65fad6a77091fb/spot-guide" }]
    },

    {
      id: "seven-sisters", order: 19, name: "Seven Sisters (Cono → The Wall)", region: "Seven Sisters",
      lat: 28.850, lng: -114.450, coord: "approx",
      types: ["surf", "camp"], primary: "surf",
      friend: "7 sister points of Baja. The northern ones are ~2hr drive out from inland hwy. Bring a come-along and t-post driver if car gets stuck.",
      summary: "Seven legendary remote right points: Cono, Maria, Lobos, Negra, Rocosa, Santa Rosalillita & The Wall.",
      surf: { aug: 1, swell: "W–NW", swellDeg: [270, 308], period: "14s+", tide: "varies", season: "Wintertime, on W/NW swell", skill: "Advanced–Expert", hazards: "Known for size & power. ~2 hr of dirt off the inland highway for the northern ones. No services, no signal." },
      stay: { options: "Self-supported camping only.", nights: "as long as you're equipped for", tip: "Bring the come-along + t-post driver (per your friend) in case you bog the car. Carry all water/fuel." },
      take: "Bucket-list right points, but pure winter NW waves — in late August expect them small. This leg is about the adventure and the camping more than scoring surf. Marker is approximate; the points string ~29.0°N down to ~28.6°N.",
      links: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Seven_Sisters,_Baja_California" }]
    },

    {
      id: "santa-rosaliita", order: 20, name: "Santa Rosaliíta (jetty)", region: "Seven Sisters",
      lat: 28.661, lng: -114.237, coord: "exact",
      types: ["surf", "camp", "tip"], primary: "surf",
      friend: "Santa Rosalita is the last one going south. Great jetty surf there.",
      summary: "Southernmost Sister and the most accessible — small fishing town with jetty surf.",
      surf: { aug: 2, swell: "W–NW; jetty shapes sandbars", swellDeg: [255, 305], period: "10–15s", tide: "mid", season: "Jetty holds sand year-round", skill: "Intermediate", hazards: "The man-made 'ghost harbor' jetty; remote but paved access off Hwy 1" },
      stay: { options: "Camp near the harbor / small town services.", nights: "1", tip: "Paved spur road in — the easiest Seven Sister to reach. A natural turnaround point for the trip." },
      take: "Your southern endpoint. Jetty surf is less swell-picky so it can offer a fun final wave, and there's a town for basics. Good place to call it and start the drive back north.",
      links: [{ label: "Surf-Forecast (The Wall)", url: "https://www.surf-forecast.com/breaks/Punta-Santa-Rosalillita" }]
    }
  ]
};
