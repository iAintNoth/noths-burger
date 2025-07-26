import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gold">
            Noth's Burger
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-gold transition-colors"
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-gold transition-colors"
            >
              Chi Siamo
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('menu')}
              className="text-foreground hover:text-gold transition-colors"
            >
              Menu
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('gallery')}
              className="text-foreground hover:text-gold transition-colors"
            >
              Galleria
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-gold transition-colors"
            >
              Contatti
            </Button>
          </div>

          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2"
          >
            Prenota Tavolo
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;