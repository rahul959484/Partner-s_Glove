import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Shield, Activity, Globe, Users, Award, CheckCircle, Zap, Droplets, Flame, HardHat } from "lucide-react";
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
            <source src="/WhatsApp_Video_2026-02-18_at_3.23.18_PM_1771408727902.mp4" type="video/mp4" />
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
                color: "text-primary",
                image: "/h.jpg"
              },
              {
                icon: Activity,
                title: "Ergonomic Design",
                desc: "Precision fit technology that reduces fatigue and maintains dexterity.",
                color: "text-secondary",
                image: "/p.jpg"
              },
              {
                icon: Globe,
                title: "Sustainable Materials",
                desc: "Eco-conscious manufacturing processes utilizing recycled polymers.",
                color: "text-green-400",
                image: "/c.jpg"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-8 rounded-2xl relative overflow-hidden group"
              >
                {/* Feature Image */}
                <div className="relative h-40 mb-6 rounded-xl overflow-hidden group">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-background/80 to-transparent`} />
                </div>
                
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <feature.icon size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-${feature.color.split('-')[1]}-500/10 to-transparent blur-2xl rounded-full -translate-y-1/2 translate-x-1/2`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-black/40 backdrop-blur-sm relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-semibold tracking-wider mb-6 backdrop-blur-md">
              OUR SERVICES
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Comprehensive Safety Solutions</h2>
            <p className="text-muted-foreground text-lg">
              From manufacturing to deployment, we provide end-to-end protective equipment solutions tailored to your industry needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: HardHat,
                title: "Industrial Gloves",
                desc: "Heavy-duty protection for manufacturing, construction, and industrial applications with reinforced materials.",
                image: "/h.jpg"
              },
              {
                icon: Shield,
                title: "Medical Grade PPE",
                desc: "Certified medical protection equipment meeting healthcare standards for hospitals and medical facilities.",
                image: "/m.jpg"
              },
              {
                icon: Zap,
                title: "Electrical Safety",
                desc: "Insulated protective gear designed for electrical work with voltage resistance up to 40kV.",
                image: "/e.jpg"
              },
              {
                icon: Flame,
                title: "Heat & Fire Resistance",
                desc: "Specialized thermal protection gear for welding, foundries, and high-temperature environments.",
                image: "/f.jpg"
              },
              {
                icon: Droplets,
                title: "Chemical Protection",
                desc: "Chemical-resistant gloves and equipment for handling hazardous materials safely.",
                image: "/c.jpg"
              },
              {
                icon: Users,
                title: "Custom Solutions",
                desc: "Bespoke protective equipment designed specifically for your unique operational requirements.",
                image: "/gloves1_1771408702326.jpg"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl overflow-hidden group"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <Link href="/services">
                    <button className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                      Learn More <ArrowRight size={16} />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-semibold tracking-wider mb-6 backdrop-blur-md">
                CERTIFICATIONS
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Globally Recognized <span className="text-primary">Safety Standards</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our commitment to excellence is validated through rigorous international certifications and compliance with the highest safety standards in the industry.
              </p>
              
              <div className="space-y-4">
                {[
                  "ISO 9001:2015 Quality Management System",
                  "ISO 45001:2018 Occupational Health & Safety",
                  "CE Marking for European Compliance",
                  "ANSI/ISEA 105 American National Standards",
                  "ASTM International Certification",
                  "NIOSH Approved for Respiratory Protection"
                ].map((cert, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/90">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="glass-card p-6 rounded-2xl text-center">
                    <Award className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h4 className="text-2xl font-bold text-white mb-1">25+</h4>
                    <p className="text-muted-foreground text-sm">Years Experience</p>
                  </div>
                  <div className="glass-card p-6 rounded-2xl text-center">
                    <Shield className="w-12 h-12 text-secondary mx-auto mb-3" />
                    <h4 className="text-2xl font-bold text-white mb-1">100%</h4>
                    <p className="text-muted-foreground text-sm">Quality Tested</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="glass-card p-6 rounded-2xl text-center">
                    <Globe className="w-12 h-12 text-green-400 mx-auto mb-3" />
                    <h4 className="text-2xl font-bold text-white mb-1">50+</h4>
                    <p className="text-muted-foreground text-sm">Countries Served</p>
                  </div>
                  <div className="glass-card p-6 rounded-2xl text-center">
                    <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h4 className="text-2xl font-bold text-white mb-1">2M+</h4>
                    <p className="text-muted-foreground text-sm">Products Sold</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-2xl backdrop-blur-sm" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-secondary/20 rounded-full backdrop-blur-sm" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Break / CTA */}
      <section className="py-32 relative overflow-hidden">
        {/* Industrial background image */}
        <div className="absolute inset-0 bg-[url('/gloves2_1771408710952.jpg')] bg-cover bg-fixed bg-center opacity-20" />
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
