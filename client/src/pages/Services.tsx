import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { ArrowRight, Hammer, Pipette, HardHat, ShieldAlert } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    id: 1,
    title: "Heavy Industry Protection",
    desc: "Reinforced Kevlar® blend gloves designed for extreme abrasion resistance and cut protection in manufacturing environments.",
    icon: Hammer,
    color: "from-orange-500 to-red-600",
    image: "/h.jpg",
    features: ["Cut Level A9", "Impact Resistant", "High Heat Tolerance"]
  },
  {
    id: 2,
    title: "Chemical Safety",
    desc: "Advanced polymer barriers providing impermeable protection against corrosive acids, alkalis, and solvents.",
    icon: Pipette,
    color: "from-green-400 to-emerald-600",
    image: "/c.jpg",
    features: ["EN 374 Certified", "Textured Grip", "Long Cuff Design"]
  },
  {
    id: 3,
    title: "Precision Assembly",
    desc: "Ultra-thin, high-dexterity coatings for electronics and fine mechanics where tactile sensitivity is paramount.",
    icon: HardHat,
    color: "from-blue-400 to-cyan-500",
    image: "/p.jpg",
    features: ["Touchscreen Compatible", "Breathable Knit", "Anti-Static"]
  },
  {
    id: 4,
    title: "Medical & Lab",
    desc: "Sterile, powder-free nitrile solutions for healthcare professionals requiring biological barrier protection.",
    icon: ShieldAlert,
    color: "from-purple-500 to-pink-500",
    image: "/m.jpg",
    features: ["Medical Grade", "Chemo Tested", "Latex Free"]
  }
];

export default function Services() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our <span className="text-primary">Solutions</span></h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive protection for every hazardous environment. 
              Browse our specialized product lines designed for your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-full bg-accent/20 border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-all duration-500"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="p-10 relative z-10 flex flex-col h-full">
                  {/* Service Image */}
                  <div className="relative h-48 mb-6 rounded-2xl overflow-hidden group">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20`} />
                  </div>
                  
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500 flex-shrink-0`}>
                      <service.icon className="text-white w-8 h-8" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed flex-grow">
                    {service.desc}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {service.features.map(feat => (
                      <div key={feat} className="flex items-center text-sm font-medium text-white/80">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`} />
                        {feat}
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className="inline-flex items-center text-primary font-bold hover:text-white transition-colors">
                    Request Specs <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Custom Solution CTA */}
          <div className="mt-20 p-12 rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-white/10 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
             <div className="relative z-10">
               <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
               <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                 We engineer bespoke safety equipment for unique industrial challenges. 
                 Contact our R&D team to discuss your specific requirements.
               </p>
               <Link href="/contact">
                 <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-primary transition-colors">
                   Contact R&D Team
                 </button>
               </Link>
             </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
