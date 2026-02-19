import { Link } from "wouter";
import { ShieldCheck, Twitter, Linkedin, Facebook, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/glovelogo_1771408692026.jpg" alt="Partner Gloves Logo" className="w-8 h-8 object-contain rounded-lg" />
              <span className="text-xl font-bold tracking-tighter text-white">
                PARTNER<span className="text-primary">GLOVES</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Engineering the future of industrial safety. Premium protection solutions for the modern workforce.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { label: "Our Services", href: "/services" },
                { label: "Industry Sectors", href: "/sectors" },
                { label: "About Us", href: "/about" },
                { label: "Contact Support", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6">Solutions</h3>
            <ul className="space-y-4">
              {["Industrial Safety", "Medical Grade", "Construction", "Chemical Protection"].map((item) => (
                <li key={item} className="text-muted-foreground hover:text-white transition-colors cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>jai baba chawal waki pada,<br />Naigaon east</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 98678 93902</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>contact@partnergloves.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Partner Gloves Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
