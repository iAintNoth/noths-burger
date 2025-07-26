import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-foreground py-12 border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gold">Noth's Burger</h3>
            <p className="text-foreground/80 leading-relaxed">
              Il tuo posto preferito per gustare autentici sapori americani 
              in un'atmosfera calda e accogliente nel cuore della città.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-cream">Link Rapidi</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-foreground/80 hover:text-gold transition-colors">
                Home
              </a>
              <a href="#about" className="block text-foreground/80 hover:text-gold transition-colors">
                Chi Siamo
              </a>
              <a href="#menu" className="block text-foreground/80 hover:text-gold transition-colors">
                Menu
              </a>
              <a href="#gallery" className="block text-foreground/80 hover:text-gold transition-colors">
                Galleria
              </a>
              <a href="#contact" className="block text-foreground/80 hover:text-gold transition-colors">
                Contatti
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-cream">Contatti</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gold" />
                <span className="text-foreground/80 text-sm">Via Roma 123, 00100 Roma</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gold" />
                <span className="text-foreground/80 text-sm">+39 06 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gold" />
                <span className="text-foreground/80 text-sm">info@nothsburger.it</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-gold" />
                <span className="text-foreground/80 text-sm"><ul><li>Lun-Gio 18:00-01:00</li><li>Ven - Sab: 18:00-02:00</li><li>Dom 18:00-24:00</li></ul></span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 text-sm">
              © 2025 Noth's Burger "iAintNoth". Tutti i diritti riservati.
            </p>
            <div className="mt-4 md:mt-0 text-foreground/60 text-sm">
              <span>Made with ❤️ in Italy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;