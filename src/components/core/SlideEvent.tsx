"use client";
import Image from "next/image";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const events = [
  {
    title: "Cinta Kala Senja - Barasuara",
    image: "https://images.pexels.com/photos/4022332/pexels-photo-4022332.jpeg",
    startPrice: 200000,
    date: "25 Sep 2025",
    organizer: "Bengkel Space",
    organizerImage: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    title: "Tech Conference",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    startPrice: 150000,
    date: "30 Sep 2025",
    organizer: "Tech Hub",
    organizerImage: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    title: "Art Exhibition",
    image: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
    startPrice: 100000,
    date: "2 Oct 2025",
    organizer: "Art Center",
    organizerImage: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    title: "Startup Meetup",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    startPrice: 120000,
    date: "5 Oct 2025",
    organizer: "Startup Hub",
    organizerImage: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];
``;

const EventSlider = () => {
  useEffect(() => {
    const nextBtn = document.querySelector(".event-slider-next");
    const prevBtn = document.querySelector(".event-slider-prev");

    if (nextBtn && prevBtn) {
      nextBtn.setAttribute("tabindex", "0");
      prevBtn.setAttribute("tabindex", "0");
    }
  }, []);

  return (
    <div className="w-full relative group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={3}
        loop
        autoplay={{ delay: 12000 }}
        navigation={{
          nextEl: ".event-slider-next",
          prevEl: ".event-slider-prev",
        }}
        className="rounded-2xl"
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <Card className="overflow-hidden rounded-xl shadow-md">
              {/* Banner */}
              <div className="relative w-full h-48 -my-6">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Konten */}
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg truncate">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{event.date}</p>
                <p className="text-sm font-semibold mt-1">
                  Rp{event.startPrice.toLocaleString("id-ID")}
                </p>
              </CardContent>

              {/* Footer Organizer dengan foto */}
              <CardFooter className="px-4 py-2 border-t border-gray-200 flex items-center gap-2">
                <div className="relative w-6 h-6 rounded-full overflow-hidden">
                  <Image
                    src={event.organizerImage}
                    alt={event.organizer}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-sm text-gray-500">{event.organizer}</span>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Prev Button */}
      <Button
        variant="outline"
        size="icon"
        className="event-slider-prev absolute top-1/2 -left-0 -translate-y-1/2 translate-x-0 z-20 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:-translate-x-6 transition-all duration-300"
      >
        <ChevronLeft className="w-5 h-5 text-gray-800" />
      </Button>

      {/* Next Button */}
      <Button
        variant="outline"
        size="icon"
        className="event-slider-next absolute top-1/2 right-0 -translate-y-1/2 translate-x-0 z-20 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-x-6 transition-all duration-300"
      >
        <ChevronRight className="w-5 h-5 text-gray-800" />
      </Button>
    </div>
  );
};

export default EventSlider;
