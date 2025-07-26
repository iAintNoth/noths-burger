import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-burger.jpg';

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-cream mb-6 leading-tight">
          Benvenuti al
          <span className="block text-gold text-6xl md:text-8xl mt-2">
            Noth's Burger
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-cream/90 mb-8 max-w-2xl mx-auto">
          Sapori autentici americani nel cuore della città. 
          Hamburger gourmet, birre artigianali e l'atmosfera che ami.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            onClick={scrollToMenu}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Scopri il Menu
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-gold text-gold hover:bg-gold hover:text-charcoal font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Prenota Ora
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;