import { useState } from 'react';

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sections = [
    {
      type: 'image',
      src: '/path-to-your-software-development-image.jpg', // Replace with the actual path
      alt: 'Software Development',
      header: 'Journey of Software Development',
      description: 'My journey in software development...',
    },
    {
      type: 'video',
      src: 'https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/409ab2fc369ba5e1fe50bac10c6676d7d1365a9f.mp4',
      alt: 'Gamer',
      header: 'Gamer Life',
      description: 'Your gamer-related text here...',
    },
    {
      type: 'image',
      src: '/path-to-your-photography-image.jpg', // Replace with the actual path
      alt: 'Photography',
      header: 'Photography Passion',
      description: 'Some lines about photography...',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sections.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === sections.length - 1 ? 0 : prevIndex + 1));
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
            {sections[currentIndex].type === 'video' ? (
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
          <p className="text-lg md:text-xl lg:text-2xl text-white">
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
