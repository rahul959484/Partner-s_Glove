import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Shield, Activity, Globe, Users } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          >
            <source src="/assets/WhatsApp_Video_2026-02-18_at_3.23.18_PM_1771408727902.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          <div className="absolute inset-0 mesh-gradient opacity-40" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-semibold tracking-wider mb-6 backdrop-blur-md">
              THE FUTURE OF SAFETY
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
              <span className="block text-white">ADVANCED</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-secondary text-glow">
                PROTECTION
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Partner Gloves engineers next-generation protective gear for industries demanding 
              uncompromising safety and precision.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/services">
                <button className="px-8 py-4 rounded-full bg-primary text-black font-bold text-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300 flex items-center gap-2 group">
                  Explore Solutions
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-semibold text-lg hover:bg-white/5 transition-all duration-300 backdrop-blur-sm">
                  Contact Sales
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Abstract Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-24 h-24 border border-primary/20 rounded-2xl hidden lg:block backdrop-blur-sm"
        />
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-10 w-32 h-32 border border-secondary/20 rounded-full hidden lg:block backdrop-blur-sm"
        />
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/5 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Global Partners", value: "500+" },
              { label: "Products Sold", value: "2M+" },
              { label: "Safety Rating", value: "A++" },
              { label: "Years Innovation", value: "25" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-muted-foreground uppercase tracking-wider text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Engineered for Excellence</h2>
            <p className="text-muted-foreground text-lg">
              We combine advanced materials science with ergonomic design to create protective gear 
              that enhances performance rather than hindering it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Maximum Protection",
                desc: "Impact resistant materials tested against the harshest industrial standards.",
                color: "text-primary"
              },
              {
                icon: Activity,
                title: "Ergonomic Design",
                desc: "Precision fit technology that reduces fatigue and maintains dexterity.",
                color: "text-secondary"
              },
              {
                icon: Globe,
                title: "Sustainable Materials",
                desc: "Eco-conscious manufacturing processes utilizing recycled polymers.",
                color: "text-green-400"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-8 rounded-2xl relative overflow-hidden group"
              >
                <div className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-${feature.color.split('-')[1]}-500/10 to-transparent blur-2xl rounded-full -translate-y-1/2 translate-x-1/2`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Break / CTA */}
      <section className="py-32 relative overflow-hidden">
        {/* Industrial background image */}
        <div className="absolute inset-0 bg-[url('/assets/gloves2_1771408710952.jpg')] bg-cover bg-fixed bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 max-w-4xl leading-tight">
            Ready to equip your team with <span className="text-primary">superior protection</span>?
          </h2>
          <Link href="/contact">
            <button className="px-10 py-5 rounded-full bg-white text-black font-bold text-xl hover:bg-primary hover:shadow-[0_0_40px_rgba(0,240,255,0.4)] transition-all duration-300">
              Get Started Today
            </button>
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
