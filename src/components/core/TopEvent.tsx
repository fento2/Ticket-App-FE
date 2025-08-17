"use client";
import Image from "next/image";
import { Card } from "../ui/card";

const TopEvent = () => {
  const top3 = [
    {
      top: 1,
      banner:
        "https://images.pexels.com/photos/4022332/pexels-photo-4022332.jpeg",
    },
    {
      top: 2,
      banner:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    },
    {
      top: 3,
      banner:
        "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
    },
  ];

  return (
    <div className="overflow-x-auto scrollbar-hide space-y-2">
      <div className="grid grid-cols-3 gap-6 min-w-max">
        {top3.map((event) => (
          <div
            key={event.top}
            className="flex items-center gap-4 min-w-[300px]"
          >
            {/* Angka */}
            <p className="text-8xl font-bold text-white drop-shadow-2xl">
              {event.top}
            </p>

            {/* Banner */}
            <div className="flex-1 h-40 overflow-hidden shadow-md rounded-xl relative min-w-[300px]">
              <Image
                src={event.banner}
                alt={`Event ${event.top}`}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopEvent;
