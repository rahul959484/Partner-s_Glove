import { PageTransition } from "@/components/PageTransition";
import { useSubmitContact } from "@/hooks/use-contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContactSubmission } from "@shared/schema";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Contact() {
  const mutation = useSubmitContact();
  const [showSuccess, setShowSuccess] = useState(false);
  
  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertContactSubmission) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);
      }
    });
  };

  return (
    <PageTransition>
      <div className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-primary font-bold tracking-wider text-sm">GET IN TOUCH</span>
              <h1 className="text-5xl font-bold mt-2 mb-6 text-white">Let's start a conversation</h1>
              <p className="text-muted-foreground text-lg mb-12">
                Interested in our safety solutions? Our team is ready to discuss your specific requirements and provide a tailored quote.
              </p>

              <div className="space-y-8">
                {[
                  { icon: Mail, title: "Email Us", content: "sales@partnergloves.com" },
                  { icon: Phone, title: "Call Us", content: "+91 98678 93902" },
                  { icon: MapPin, title: "Visit Us", content: "jai baba chawal waki pada Naigaon east" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-muted-foreground">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Maps Embed */}
              <div className="mt-12 h-64 rounded-2xl border border-white/10 bg-accent/20 relative overflow-hidden group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095919355!2d-74.00425878459395!3d40.71312937933039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb4b1c7%3A0x4e7b8b5b5b5b5b5b!2s123%20Innovation%20Blvd%2C%20Tech%20District%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-4 right-4">
                  <a 
                    href="https://www.google.com/maps/place/19%C2%B022'00.8%22N+72%C2%B053'06.1%22E/@19.3668883,72.8824574,17z/data=!3m1!4b1!4m4!3m3!8m2!3d19.3668883!4d72.8850323?hl=en&entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-white font-medium text-sm hover:bg-primary hover:text-black transition-colors inline-flex items-center"
                  >
                    <MapPin size={16} className="mr-2" />
                    View on Google Maps
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-accent/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
              
              {/* Success Message */}
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <p className="text-green-400 font-medium">Submitted!</p>
                </motion.div>
              )}
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            {...field} 
                            className="bg-white/5 border-white/10 focus:border-primary text-white h-12 rounded-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="john@company.com" 
                            {...field} 
                            className="bg-white/5 border-white/10 focus:border-primary text-white h-12 rounded-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Quote Request / General Inquiry" 
                            {...field} 
                            className="bg-white/5 border-white/10 focus:border-primary text-white h-12 rounded-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your requirements..." 
                            {...field} 
                            className="bg-white/5 border-white/10 focus:border-primary text-white min-h-[150px] rounded-xl resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <button
                    type="submit"
                    disabled={mutation.isPending}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
