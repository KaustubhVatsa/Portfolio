import { useState } from 'react';

const AboutMe = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      id: 1,
      title: 'Software Developer',
      image: 'path/to/your/image1.jpg',
      text: 'Write about your role as a software developer here.',
      type: 'image',
    },
    {
      id: 2,
      title: 'Gamer',
      video: 'path/to/your/game.mp4',
      text: 'Write about your experiences with Valorant here.',
      type: 'video',
    },
    {
      id: 3,
      title: 'Photographer',
      slideshow: [
        'path/to/your/photo1.jpg',
        'path/to/your/photo2.jpg',
        'path/to/your/photo3.jpg',
      ],
      text: 'Write about your interest in nature photography here.',
      type: 'slideshow',
    },
  ];

  const handleNextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const handlePrevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const renderContent = () => {
    const card = cards[currentCard];
    switch (card.type) {
      case 'image':
        return (
          <div className="flex items-center">
            <img src={card.image} alt={card.title} className="w-1/2" />
            <div className="w-1/2 p-4">{card.text}</div>
          </div>
        );
      case 'video':
        return (
          <div className="flex items-center">
            <video src={card.video} controls={false} muted className="w-1/2" />
            <div className="w-1/2 p-4">{card.text}</div>
          </div>
        );
      case 'slideshow':
        return (
          <div className="flex items-center">
            <div className="relative w-1/2">
              {card.slideshow.map((photo, index) => (
                <img key={index} src={photo} alt={`${card.title} ${index}`} className="w-full h-auto" />
              ))}
            </div>
            <div className="w-1/2 p-4">{card.text}</div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="my-12 p-8 bg-neutral-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{cards[currentCard].title}</h2>
      {renderContent()}
      <div className="flex justify-between mt-4">
        <button onClick={handlePrevCard} className="px-4 py-2 bg-cyan-500 text-white rounded">Previous</button>
        <button onClick={handleNextCard} className="px-4 py-2 bg-cyan-500 text-white rounded">Next</button>
      </div>
    </div>
  );
};

export default AboutMe;
