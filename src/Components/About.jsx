import { useState } from "react";
import softwaredevjourney from "../assets/portfolio_journey.jpeg";
import collage from "../assets/collage.jpg";
const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sections = [
    {
      type: "image",
      src: softwaredevjourney,
      alt: "Software Development",
      header: "Journey of Software Development",
      description: `I’ve always been drawn to the magic behind a simple click—my very first “apps” were little HTML/CSS/JavaScript games (clicker counters, button-popping fun). Curiosity then drove me to peek under the hood of everyday apps: I dove headfirst into building things with zero framework knowledge, wrestling with Node.js and learning what “MVC” even meant. It was overwhelming without a roadmap, but I loved the challenge.

To bring order to the chaos, I went back to fundamentals—mastering JavaScript inside and out—then layered on backend patterns (MVC, RESTful services, database integrations). Frontend development has been the toughest but most creative challenge: wrangling CSS quirks and UI state keeps me learning every day. Now I build software end-to-end—writing clean code, crafting intuitive interfaces, and continually expanding my knowledge in this vast, ever-evolving field.`,
    },
    {
      type: "video",
      src: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/409ab2fc369ba5e1fe50bac10c6676d7d1365a9f.mp4",
      alt: "Gamer",
      header: "Gamer Life",
      description: `It all began on a single mobile phone—PES 2008 duels with my brother for every precious minute of play.  
In my second year of college I got my first real gaming laptop and dove into epic story mode worlds like Genshin Impact and Spider-Man.  

Soon I discovered first-person shooters and found my true escape: competing in collegiate Valorant tournaments (call me a geek!) and chasing that perfect clutch.  

These days, following esports leagues and analyzing pro play is one of my favorite hobbies—gaming isn’t just fun, it’s a way to explore competition, community, and creativity.`,
    },
    {
      type: "image",
      src: collage, // Replace with the actual path
      alt: "Photography",
      header: "Photography Passion",
      description: `Ever since I first held a camera, I’ve been mesmerized by the way a single frame can freeze the light and color of a moment forever.  
I love chasing golden-hour sunlight across rolling hills, capturing the delicate symmetry of a dew-dropped spiderweb, or the wild serenity of a forest mist.  

For me, photography is more than just pointing and clicking—it’s about seeing the world’s natural beauty in new ways, framing emotions, and telling stories without words.  
Whether I’m on a weekend hike or exploring my own backyard, my camera is my constant companion in search of that perfect shot.`,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sections.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sections.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
        About Me
      </h1>
      <div className="relative flex flex-col lg:flex-row items-center justify-center h-auto w-full">
        {/* Media Div */}
        <div className="relative h-[800px] w-full lg:w-[700px] ml-0 lg:ml-4">
          <div className="absolute inset-0">
            {sections[currentIndex].type === "video" ? (
              <video
                src={sections[currentIndex].src}
                alt={sections[currentIndex].alt}
                className="object-cover w-full h-full"
                autoPlay
                loop
              />
            ) : (
              <img
                src={sections[currentIndex].src}
                alt={sections[currentIndex].alt}
                className="object-cover w-full h-full"
              />
            )}
            <div className="absolute inset-0 bg-black opacity-50 blur-sm"></div>
          </div>
        </div>

        {/* Text Div */}
        <div className="mt-8 lg:mt-0 ml-0 lg:ml-8 flex flex-col justify-center text-left max-w-md space-y-4 w-full lg:w-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white">
            {sections[currentIndex].header}
          </h2>
          <p className="text-lg md:text-xl lg:text-lg text-gray-300">
            {sections[currentIndex].description}
          </p>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-neutral-900 bg-opacity-50 transition-all hover:scale-150 hover:bg-opacity-100 hover:text-red-500 active:text-green-700"
        >
          &larr;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-neutral-900 bg-opacity-50 transition-all hover:scale-150 hover:bg-opacity-100 hover:text-red-500 active:text-green-700"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default About;
