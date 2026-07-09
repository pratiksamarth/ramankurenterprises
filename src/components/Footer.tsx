import { MapPin, Mail, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-balance text-white">
              Stop by the shop today.
            </h2>
            <p className="text-white/70 text-lg max-w-md mb-8 leading-relaxed">
              Whether it's a single copy or a bulk order for the whole school, we are here to help with a friendly smile and dependable service.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-primary-foreground">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg mb-1">Visit Us</h4>
                  <p className="text-white/70">Ramankur, Kaneri,<br />Gadchiroli, Maharashtra</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-primary-foreground">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg mb-1">Call Us</h4>
                  <p className="text-white/70">+91 7666115925<br />+91 9421728554</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-primary-foreground">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg mb-1">Email Us</h4>
                  <p className="text-white/70">ramankurenterprises@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:pl-12 flex flex-col justify-center">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-primary-foreground" size={24} />
                <h3 className="text-2xl font-serif font-bold text-white">Opening Hours</h3>
              </div>
              
              <ul className="space-y-4 text-white/80">
                <li className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="font-medium">Monday - Friday</span>
                  <span>9:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="font-medium">Saturday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between items-center pb-2 text-white/50">
                  <span className="font-medium">Sunday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Ramankur Enterprises. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Quality Products</span>
            <span className="w-1 h-1 rounded-full bg-white/30"></span>
            <span>Trusted Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
