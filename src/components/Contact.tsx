import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-wood/30 to-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6">
            Contatti
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Vieni a trovarci o prenota il tuo tavolo per un'esperienza indimenticabile
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-card/80 border-border p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cream mb-2">Indirizzo</h3>
                  <p className="text-foreground/80">
                    Via Roma 123<br />
                    00100 Roma, Italia
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-card/80 border-border p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gold/20 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cream mb-2">Orari di Apertura</h3>
                  <div className="text-foreground/80 space-y-1">
                    <p>Lunedì - Giovedì: 18:00 - 01:00</p>
                    <p>Venerdì - Sabato: 18:00 - 02:00</p>
                    <p>Domenica: 18:00 - 24:00</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-card/80 border-border p-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cream">Telefono</h4>
                    <p className="text-foreground/80">+39 06 123 456</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card/80 border-border p-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-gold/20 p-2 rounded-lg">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cream">Email</h4>
                    <p className="text-foreground/80">info@americanpub.it</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Social Media */}
            <Card className="bg-card/80 border-border p-6">
              <h3 className="text-xl font-bold text-cream mb-4">Seguici sui Social</h3>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gold text-gold hover:bg-gold hover:text-charcoal transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gold text-gold hover:bg-gold hover:text-charcoal transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
              </div>
            </Card>

            {/* <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Prenota il Tuo Tavolo Ora
            </Button> */}
          </div>

          {/* Map */}
          <Card className="bg-card/80 border-border overflow-hidden">
            <div className="relative h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.8437!2d12.4963655!3d41.9027835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b6532013ad%3A0x28f1c82e908503c4!2sPantheon%2C%20Rome%2C%20Italy!5e0!3m2!1sen!2sit!4v1620000000000!5m2!1sen!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent pointer-events-none"></div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;