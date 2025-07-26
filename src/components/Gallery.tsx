import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage from '@/assets/hero-burger.jpg';
import pubInterior from '@/assets/pub-interior.jpg';
import burgerClassic from '@/assets/burger-classic.jpg';
import beerSelection from '@/assets/beer-selection.jpg';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: heroImage,
      alt: "Hamburger gourmet con birra",
      title: "I Nostri Hamburger"
    },
    {
      src: pubInterior,
      alt: "Interno del pub",
      title: "Atmosfera Accogliente"
    },
    {
      src: burgerClassic,
      alt: "Classic American Burger",
      title: "Classic American"
    },
    {
      src: beerSelection,
      alt: "Selezione di birre artigianali",
      title: "Birre Artigianali"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-wood/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6">
            Galleria
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Scopri l'atmosfera del nostro pub e le nostre specialità attraverso le immagini
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Slider */}
          <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 transform translate-x-0' 
                    : index < currentSlide 
                      ? 'opacity-0 transform -translate-x-full'
                      : 'opacity-0 transform translate-x-full'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-cream">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm border-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm border-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gold scale-125' 
                    : 'bg-foreground/30 hover:bg-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* Thumbnail Preview */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative cursor-pointer overflow-hidden rounded-lg transition-all duration-300 ${
                  index === currentSlide 
                    ? 'ring-2 ring-gold scale-105' 
                    : 'hover:scale-102 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-20 object-cover"
                />
                {index === currentSlide && (
                  <div className="absolute inset-0 bg-gold/20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;