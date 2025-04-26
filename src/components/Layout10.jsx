"use client";

import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout10() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-white text-black font-mono uppercase border-b-4 border-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-16 md:grid-cols-2 items-center">
        
        {/* Left Content */}
        <div>
          {/* Tag */}
          <p className="text-sm font-bold tracking-widest bg-yellow-300 border-4 border-black inline-block px-4 py-2 mb-6">
            Connect
          </p>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Our Vision for a <br /> Shared Movie Experience
          </h1>

          {/* Description */}
          <p className="text-sm mb-8">
            At BuddyTaste, we believe that movies are best enjoyed together.
            Our vision is to create a platform that fosters connections
            through shared cinematic experiences.
          </p>

          {/* Features */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <div className="bg-blue-400 border-4 border-black p-4 w-16 h-16 flex items-center justify-center mb-4">
                🎬
              </div>
              <h6 className="text-md font-bold">Community Focused</h6>
              <p className="text-xs">
                Bringing friends together through personalized movie
                recommendations and reviews.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="bg-red-400 border-4 border-black p-4 w-16 h-16 flex items-center justify-center mb-4">
                🍿
              </div>
              <h6 className="text-md font-bold">Shared Experiences</h6>
              <p className="text-xs">
                Plan movie nights based on shared genre preferences with your
                friends.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <button className="px-8 py-3 border-4 border-black bg-white text-blue-600 hover:bg-blue-600 hover:text-white font-bold uppercase transition-all">
              Learn More
            </button>
            <button className="flex items-center gap-2 px-8 py-3 border-4 border-black bg-white text-red-600 hover:bg-red-600 hover:text-white font-bold uppercase transition-all">
              Sign Up
              <RxChevronRight className="text-lg" />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="border-4 border-black p-4">
          <img
            src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=500&h=600&q=80"
            alt="Shared movie experience"
            className="object-cover w-full h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
