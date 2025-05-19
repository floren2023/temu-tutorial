"use client";
import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const data = [
  {
    image: "/images/moda1.jpg",
    title: "moda1",
  },
  { image: "/images/moda2.jpg", title: "moda2" },
  { image: "/images/moda3.jpg", title: "moda3" },
  { image: "/images/moda4.jpg", title: "moda4" },
];

const Discount = () => {
  return (
    <div className="w-full ml-10 mr-10">
      <div className="bg-orange-600 text-white text-2xl text-center w-full py-2 flex flex-col ">
        JOIN THE SHOPAPP REVOLUTION -LIMITED TIME OFFER
      
      </div>

      <div className="w-full ">
        <Carousel
          interval={4000}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
        >
          {data.map((item, id) => {
            return (
              <div key={id} className="h-[400px]">
                <div className="rounded-b-md">
                  {/* <p className="bg-gray-200 rounded-t-md pt-6 pb-3 opacity-20 text-xl text-red-800 uppercase ">
                    {item.title}
                  </p> */}

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1400}
                    height={400}
                  />
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Discount;
