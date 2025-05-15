import React, { createContext, useContext, useState } from 'react';

const MountainContext = createContext();
  const almatyMountains = [
    {
      id: 1,
      name: "Medeu & Shymbulak",
      altitude: "1,691–3,200 m",
      location: "15 km south of Almaty",
      travelTime: "30–40 min",
      difficulty: "Easy–Medium",
      activities: ["Cable car", "Skiing", "Hiking"],
      facts: [
        "Medeu is the world’s highest Olympic-sized ice skating rink.",
        "Shymbulak is Central Asia’s largest ski resort.",
        "You can reach Talgar Pass (3,200 m) via cable car."
      ],
      image: "https://kompastour.com/useruploads/excurs/excurs_fbbccd0307.jpg"
    },
    {
      id: 2,
      name: "Furmanov Peak",
      altitude: "3,050 m",
      location: "South of Almaty (from Medeu/Shymbulak)",
      travelTime: "1–1.5 hrs",
      difficulty: "Medium",
      activities: ["Hiking", "Photography"],
      facts: [
        "Named after a Soviet hero.",
        "One of the most popular hikes among locals.",
        "Famous swing at the top for photos."
      ],
      image: "https://www.asia-hikes.com/wp-content/uploads/2021/05/Hiking-to-Peak-Furmanov-Pano.jpg"
    },
    {
      id: 3,
      name: "Panorama Peak",
      altitude: "~3,200 m",
      location: "Beyond Furmanov Peak",
      travelTime: "1.5 hrs",
      difficulty: "Medium",
      activities: ["Hiking", "Ridge trekking"],
      facts: [
        "Offers 360° views of the Almaty region.",
        "Ideal for sunrise hikes and ridge walks."
      ],
      image: "https://www.craiggoodwinphoto.com/images/xl/mount-rainier-tolmie-peak-panorama-1.jpg"
    },
    {
      id: 4,
      name: "Kok-Zhailau Plateau",
      altitude: "~2,250 m",
      location: "Between Medeu and Big Almaty Lake",
      travelTime: "1 hr",
      difficulty: "Easy",
      activities: ["Hiking", "Picnic", "Wildlife watching"],
      facts: [
        "A peaceful alpine meadow popular on weekends.",
        "Protected natural zone, no ski development allowed.",
        "Foxes and marmots often seen."
      ],
      image: "https://img.freepik.com/premium-photo/fantastic-colorful-sunset-kok-zhailau-plateau-tianshan-mountains-almaty-kazakhstan_607400-145.jpg"
    },
    {
      id: 5,
      name: "Big Almaty Lake",
      altitude: "2,511 m",
      location: "~28 km south of Almaty",
      travelTime: "1 hr",
      difficulty: "Easy",
      activities: ["Scenic viewing", "Photography"],
      facts: [
        "Turquoise alpine lake featured in Kazakhstan tourism.",
        "Drinking water source for the city — no swimming.",
        "Surrounded by peaks over 4,000 m."
      ],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlVVqn-9Swa8K2U1i-EaL33KtwHqsoiUksjQ&s"
    },
    {
      id: 6,
      name: "Pik Talgar",
      altitude: "4,979 m",
      location: "East of Almaty in Trans-Ili Alatau range",
      travelTime: "2–3 hrs drive + multi-day trek",
      difficulty: "Hard",
      activities: ["Alpinism", "Multi-day trekking"],
      facts: [
        "Highest peak near Almaty.",
        "First ascended in 1938.",
        "Visible from Almaty on clear days."
      ],
      image: "https://morena.kz/foto/allfoto/large/talgar2.jpg"
    },
    {
      id: 7,
      name: "Kumbel Peak",
      altitude: "3,686 m",
      location: "Accessible via Alma-Arasan Gorge",
      travelTime: "1.5 hrs",
      difficulty: "Medium",
      activities: ["Trekking", "Camping"],
      facts: [
        "Name means 'sand ridge' in Kazakh.",
        "Peaceful and less crowded.",
        "Wild and natural environment."
      ],
      image: "https://static.tildacdn.pro/tild3865-6364-4364-a534-303233303034/_6pHz6fG7v8-min.jpg"
    },
    {
      id: 8,
      name: "Tuyuksu Glacier Area",
      altitude: "3,500–4,200 m",
      location: "Past Shymbulak, south of Almaty",
      travelTime: "2 hrs",
      difficulty: "Hard",
      activities: ["High-altitude trekking", "Glacier exploration"],
      facts: [
        "Site of Kazakhstan’s glaciology research station.",
        "Offers glacier and alpine scenery.",
        "Near Tuyuksu and Ordzhonikidze peaks."
      ],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYdKBu7FRshHU2GtSWhu1Ac2bRwbq1B_OkTw&s"
    },
    {
      id: 9,
      name: "Butakovka Gorge & Waterfall",
      altitude: "~1,800–2,200 m",
      location: "10 km east of Medeu",
      travelTime: "40 min",
      difficulty: "Easy",
      activities: ["Short hike", "Waterfall", "Picnic"],
      facts: [
        "Easy trail with river and waterfall.",
        "Great for families and beginners.",
        "Beautiful wildflowers in spring."
      ],
      image: "https://welcome.kz/en/assets/images/products/0_gallery/locations/almaty/butakovsky-waterfall-butakovka-almaty-city-(6).jpeg"
    },
    {
      id: 10,
      name: "Manzhilki Meadow",
      altitude: "~2,250 m",
      location: "Above Medeu near Shymbulak",
      travelTime: "1 hr",
      difficulty: "Easy",
      activities: ["Nature walk", "Relaxing", "Photography"],
      facts: [
        "Alpine meadow with open views.",
        "Good for a light hike or rest stop.",
        "Popular in spring/summer for flowers."
      ],
      image: "https://thumbs.dreamstime.com/b/white-flowers-mountain-green-meadow-evening-landscape-butakovskoe-gorge-almaty-kazakhstan-zailiysky-alatau-range-forest-pass-192369784.jpg"
    }
  ];
  
export const MountainProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <MountainContext.Provider value={{ almatyMountains, isAuthenticated, setIsAuthenticated}}>
      {children}
    </MountainContext.Provider>
  );
};

export const useMountains = () => useContext(MountainContext);
