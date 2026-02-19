import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";

const sectors = [
  {
    name: "Automotive",
    image: "/automotive.jpg",
    desc: "Precision handling and heat resistance for assembly lines."
  },
  {
    name: "Construction",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop",
    desc: "Heavy-duty impact protection and durability."
  },
  {
    name: "Oil & Gas",
    image: "/oli.jpg",
    desc: "Chemical resistant and anti-slip technology for offshore rigs."
  },
  {
    name: "Healthcare",
    image: "/healthcare.jpg",
    desc: "Sterile, biological protection for critical environments."
  },
  {
    name: "Mining",
    image: "/mining.jpg",
    desc: "Crush protection and high visibility for subterranean work."
  },
  {
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    desc: "Anti-static (ESD) gloves for component handling."
  }
];

export default function Sectors() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="text-5xl font-bold mb-4">Industries <span className="text-secondary">We Serve</span></h1>
            <p className="text-xl text-muted-foreground">Trusted by leaders across the world's most demanding sectors.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, i) => (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${sector.image})` }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-3xl font-bold text-white mb-2">{sector.name}</h3>
                  <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {sector.desc}
                  </p>
                  <div className="mt-4 w-12 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
