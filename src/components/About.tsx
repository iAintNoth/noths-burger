import { Card } from '@/components/ui/card';
import pubInterior from '@/assets/pub-interior.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-wood/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6">
            Chi Siamo
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Dal 2010 portiamo l'autentica esperienza del pub americano 
            nel cuore della nostra città
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-cream mb-4">
              La Nostra Storia
            </h3>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              Nato dalla passione per la cultura gastronomica americana, il nostro pub 
              è diventato un punto di riferimento per chi cerca sapori autentici e 
              un'atmosfera calda e accogliente.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              Utilizziamo solo ingredienti freschi e di qualità, preparando ogni 
              hamburger artigianalmente. Le nostre birre vengono selezionate 
              direttamente dai migliori birrifici americani e locali.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <Card className="bg-card/50 border-border p-6 text-center">
                <div className="text-3xl font-bold text-gold mb-2">15+</div>
                <div className="text-foreground/80">Anni di Esperienza</div>
              </Card>
              
              <Card className="bg-card/50 border-border p-6 text-center">
                <div className="text-3xl font-bold text-gold mb-2">50+</div>
                <div className="text-foreground/80">Specialità nel Menu</div>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={pubInterior} 
                alt="Interno del pub" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;