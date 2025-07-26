import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('hamburger');

  const menuData = {
    hamburger: [
      {
        name: "Classic American",
        description: "Manzo 200g, cheddar, lattuga, pomodoro, cipolla, salsa burger",
        price: "€12.50",
        popular: true
      },
      {
        name: "BBQ Bacon",
        description: "Manzo 200g, bacon croccante, cheddar affumicato, cipolla caramellata, salsa BBQ",
        price: "€14.50",
        popular: false
      },
      {
        name: "Spicy Jalapeño",
        description: "Manzo 200g, jalapeños, pepper jack, guacamole, salsa piccante",
        price: "€13.50",
        popular: false
      },
      {
        name: "Mushroom Swiss",
        description: "Manzo 200g, funghi champignon, formaggio svizzero, cipolla grigliata",
        price: "€13.00",
        popular: false
      }
    ],
    birre: [
      {
        name: "IPA Artigianale",
        description: "Birra luppolata dal sapore intenso e fruttato - 50cl",
        price: "€6.50",
        popular: true
      },
      {
        name: "Lager Premium",
        description: "Birra chiara e rinfrescante, perfetta con i burger - 50cl",
        price: "€5.50",
        popular: false
      },
      {
        name: "Stout Imperial",
        description: "Birra scura cremosa con note di caffè e cioccolato - 40cl",
        price: "€7.00",
        popular: false
      },
      {
        name: "Wheat Beer",
        description: "Birra di frumento non filtrata, servita con limone - 50cl",
        price: "€6.00",
        popular: false
      }
    ],
    antipasti: [
      {
        name: "Buffalo Wings",
        description: "10 alette di pollo piccanti servite con salsa ranch",
        price: "€9.50",
        popular: true
      },
      {
        name: "Nachos Supreme",
        description: "Tortilla chips con formaggio fuso, jalapeños, guacamole e panna acida",
        price: "€8.50",
        popular: false
      },
      {
        name: "Onion Rings",
        description: "Anelli di cipolla dorati e croccanti con salsa BBQ",
        price: "€6.50",
        popular: false
      },
      {
        name: "Mozzarella Sticks",
        description: "Bastoncini di mozzarella impanati serviti con salsa marinara",
        price: "€7.50",
        popular: false
      }
    ],
    dolci: [
      {
        name: "Cheesecake New York",
        description: "Cremosa cheesecake servita con frutti di bosco",
        price: "€6.50",
        popular: true
      },
      {
        name: "Brownie al Cioccolato",
        description: "Brownie caldo con gelato alla vaniglia e salsa al cioccolato",
        price: "€5.50",
        popular: false
      },
      {
        name: "Apple Pie",
        description: "Torta di mele americana servita calda con gelato",
        price: "€6.00",
        popular: false
      },
      {
        name: "Cookies & Cream Shake",
        description: "Milkshake cremoso con biscotti Oreo e panna montata",
        price: "€5.00",
        popular: false
      }
    ]
  };

  const categories = [
    { id: 'hamburger', name: 'Hamburger', icon: '🍔' },
    { id: 'birre', name: 'Birre', icon: '🍺' },
    { id: 'antipasti', name: 'Antipasti', icon: '🥨' },
    { id: 'dolci', name: 'Dolci', icon: '🍰' }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-wood/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6">
            Il Nostro Menu
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Scopri le nostre specialità preparate con ingredienti freschi e ricette autentiche
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`px-6 py-3 text-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'border-gold text-gold hover:bg-gold hover:text-charcoal'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {menuData[activeCategory as keyof typeof menuData].map((item, index) => (
            <Card key={index} className="bg-card/80 border-border hover:bg-card/90 transition-all duration-300 hover:scale-102 group">
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-cream group-hover:text-gold transition-colors">
                      {item.name}
                    </h3>
                    {item.popular && (
                      <Badge className="bg-primary text-primary-foreground">
                        Popolare
                      </Badge>
                    )}
                  </div>
                  <span className="text-2xl font-bold text-gold">
                    {item.price}
                  </span>
                </div>
                
                <p className="text-foreground/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-foreground/70 mb-4">
            Tutti i prezzi sono comprensivi di IVA
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-3"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Prenota il Tuo Tavolo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;