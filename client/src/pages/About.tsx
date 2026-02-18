import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { CheckCircle2, Award, History, Users } from "lucide-react";

export default function About() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20">
        {/* Header */}
        <div className="container mx-auto px-6 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Our <span className="text-secondary">Mission</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Partner Gloves, we believe that safety is the foundation of innovation. 
              Since 1998, we have dedicated ourselves to creating protective gear that empowers 
              workers to perform at their best, regardless of the environment.
            </p>
          </motion.div>
        </div>

        {/* Content Split */}
        <div className="container mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden h-[600px] border border-white/10 group"
            >
              {/* Warehouse/Team image */}
              <img 
                src="/assets/gloves2_1771408710952.jpg" 
                alt="Our Manufacturing Unit" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                  <p className="text-white font-medium italic">"We don't just make gloves. We engineer confidence."</p>
                  <p className="text-primary mt-2 font-bold">- Sarah Jenkins, CEO</p>
                </div>
              </div>
            </motion.div>

            {/* Text Side */}
            <div className="space-y-8">
              {[
                {
                  icon: History,
                  title: "Our Heritage",
                  desc: "Founded in a small workshop, we've grown into a global leader in industrial safety solutions."
                },
                {
                  icon: Award,
                  title: "Certified Excellence",
                  desc: "ISO 9001 certified manufacturing with rigorous quality control at every stage of production."
                },
                {
                  icon: Users,
                  title: "Customer First",
                  desc: "We partner directly with industries to understand their unique challenges and develop tailored solutions."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-6"
                >
                  <div className="shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white/5 border-y border-white/10 py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Innovation Timeline</h2>
            <div className="max-w-5xl mx-auto space-y-12 relative before:absolute before:left-4 md:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-white/10">
              {[
                { year: "1998", title: "Foundation", desc: "Partner Gloves established in Chicago." },
                { year: "2005", title: "Global Expansion", desc: "Opened first international distribution center in Berlin." },
                { year: "2012", title: "Tech Integration", desc: "Launched first smart-fabric safety line." },
                { year: "2023", title: "Sustainability", desc: "Achieved 100% renewable energy in manufacturing." },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} relative`}
                >
                  <div className="flex-1 w-full p-6">
                    <div className={`bg-background border border-white/10 p-6 rounded-2xl hover:border-primary/50 transition-colors ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <span className="text-4xl font-bold text-primary/20 block mb-2">{item.year}</span>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_var(--primary)]" />
                  <div className="flex-1 w-full hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
