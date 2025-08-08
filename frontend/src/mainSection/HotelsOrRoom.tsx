import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useRef } from "react";
import HotelCard from "../components/HotelCard";
import img from "/public/51d6e969-95e3-4c06-a653-e4a93fc22dd4.avif";
import SectionWrapper from "../components/SectionWrapper";

interface Property {
  id: number;
  type: string;
  price: string;
  rating: number;
  image: string;
  isFavorite: boolean;
}

const lahoreProperties: Property[] = [
  {
    id: 1,
    type: "Studio in DHA Lahore",
    price: "$65 for 2 nights",
    rating: 4.8,
    image: img,
    isFavorite: false,
  },
  {
    id: 2,
    type: "Modern Flat in Gulberg",
    price: "$78 for 2 nights",
    rating: 4.95,
    image: img,
    isFavorite: true,
  },
  {
    id: 3,
    type: "Loft near Fortress",
    price: "$49 for 2 nights",
    rating: 4.75,
    image: img,
    isFavorite: false,
  },
  {
    id: 4,
    type: "Family Suite in Johar Town",
    price: "$95 for 2 nights",
    rating: 4.9,
    image: img,
    isFavorite: true,
  },
  {
    id: 5,
    type: "Entire home in Model Town",
    price: "$120 for 2 nights",
    rating: 5.0,
    image: img,
    isFavorite: false,
  },
  {
    id: 6,
    type: "Stylish BnB near Canal",
    price: "$80 for 2 nights",
    rating: 4.85,
    image: img,
    isFavorite: false,
  },
  {
    id: 7,
    type: "Stylish BnB near Canal",
    price: "$80 for 2 nights",
    rating: 4.85,
    image: img,
    isFavorite: false,
  },
  {
    id: 8,
    type: "Stylish BnB near Canal",
    price: "$80 for 2 nights",
    rating: 4.85,
    image: img,
    isFavorite: false,
  },
  {
    id: 9,
    type: "Stylish BnB near Canal",
    price: "$80 for 2 nights",
    rating: 4.85,
    image: img,
    isFavorite: false,
  },
];

const rawalpindiProperties: Property[] = [
  {
    id: 7,
    type: "Guest House in Saddar",
    price: "$55 for 2 nights",
    rating: 4.7,
    image: img,
    isFavorite: false,
  },
  {
    id: 8,
    type: "Apartment near Airport",
    price: "$60 for 2 nights",
    rating: 4.82,
    image: img,
    isFavorite: false,
  },
  {
    id: 9,
    type: "Hill View Room",
    price: "$70 for 2 nights",
    rating: 4.9,
    image: img,
    isFavorite: true,
  },
  {
    id: 10,
    type: "Luxury Flat in Bahria Town",
    price: "$100 for 2 nights",
    rating: 4.93,
    image: img,
    isFavorite: true,
  },
  {
    id: 11,
    type: "Budget Stay in Commercial Market",
    price: "$40 for 2 nights",
    rating: 4.6,
    image: img,
    isFavorite: false,
  },
  {
    id: 12,
    type: "Entire Home - PWD",
    price: "$90 for 2 nights",
    rating: 4.88,
    image: img,
    isFavorite: true,
  },
  {
    id: 13,
    type: "Entire Home - PWD",
    price: "$90 for 2 nights",
    rating: 4.88,
    image: img,
    isFavorite: true,
  },
  {
    id: 14,
    type: "Entire Home - PWD",
    price: "$90 for 2 nights",
    rating: 4.88,
    image: img,
    isFavorite: false,
  },
  {
    id: 15,
    type: "Entire Home - PWD",
    price: "$90 for 2 nights",
    rating: 4.88,
    image: img,
    isFavorite: true,
  },
  {
    id: 16,
    type: "Entire Home - PWD",
    price: "$90 for 2 nights",
    rating: 4.88,
    image: img,
    isFavorite: false,
  },
];

const karachiProperties: Property[] = [
  {
    id: 13,
    type: "Sea View Apartment",
    price: "$110 for 2 nights",
    rating: 5.0,
    image: img,
    isFavorite: true,
  },
  {
    id: 14,
    type: "Studio near Clifton",
    price: "$75 for 2 nights",
    rating: 4.8,
    image: img,
    isFavorite: false,
  },
  {
    id: 15,
    type: "Entire home in DHA Phase 5",
    price: "$130 for 2 nights",
    rating: 4.95,
    image: img,
    isFavorite: false,
  },
  {
    id: 16,
    type: "Luxury Flat in Gulshan",
    price: "$85 for 2 nights",
    rating: 4.9,
    image: img,
    isFavorite: false,
  },
  {
    id: 17,
    type: "Affordable Stay in Nazimabad",
    price: "$45 for 2 nights",
    rating: 4.65,
    image: img,
    isFavorite: false,
  },
  {
    id: 18,
    type: "High-rise Apartment",
    price: "$99 for 2 nights",
    rating: 4.87,
    image: img,
    isFavorite: false,
  },
  {
    id: 19,
    type: "High-rise Apartment",
    price: "$99 for 2 nights",
    rating: 4.87,
    image: img,
    isFavorite: false,
  },
  {
    id: 20,
    type: "High-rise Apartment",
    price: "$99 for 2 nights",
    rating: 4.87,
    image: img,
    isFavorite: false,
  },
  {
    id: 21,
    type: "High-rise Apartment",
    price: "$99 for 2 nights",
    rating: 4.87,
    image: img,
    isFavorite: false,
  },
];

export default function HotelsOrRoom() {
  const lahoreRef = useRef<HTMLDivElement>(null);
  const rawalpindiRef = useRef<HTMLDivElement>(null);
  const karachiRef = useRef<HTMLDivElement>(null);

  const scroll = (
    ref: React.RefObject<HTMLDivElement>,
    direction: "left" | "right"
  ) => {
    const cardWidth = 300;
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  const renderCarousel = (
    title: string,
    data: Property[],
    ref: React.RefObject<HTMLDivElement>
  ) => (
    <div className="w-full mt-5">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        <div className="flex gap-2">
          <button onClick={() => scroll(ref, "left")}>
            <ChevronLeft />
          </button>
          <button onClick={() => scroll(ref, "right")}>
            <ChevronRight />
          </button>
        </div>
      </div>

      <div
        ref={ref}
        className="flex  overflow-x-auto scroll-smooth pb-4 scrollbar-hide "
        style={{ scrollbarWidth: "none" }}
      >
        {data.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-full snap-start basis-40 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 px-2">
            <HotelCard
              image={item.image}
              night={item.price}
              rating={item.rating}
              title={item.type}
              isGuestFavorite={item.isFavorite}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <SectionWrapper>
      {renderCarousel("Popular homes in Lahore", lahoreProperties, lahoreRef)}
      {renderCarousel(
        "Available in Rawalpindi this weekend",
        rawalpindiProperties,
        rawalpindiRef
      )}
      {renderCarousel("Stay In Karachi", karachiProperties, karachiRef)}
    </SectionWrapper>
  );
}
