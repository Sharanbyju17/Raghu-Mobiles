import { Link } from 'react-router';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, CalendarDays } from 'lucide-react';
import { Separator } from './ui/separator';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Raghu Mobile</h3>
            <p className="text-sm mb-4 leading-relaxed">
              Your trusted mobile shop in Erode. We offer the latest smartphones, accessories,
              and repair services with genuine products and honest prices since 2010.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/raghu__mobiles__?igsh=NTFycm1kbmcyczFt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {/* <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li>
                <Link to="/book-appointment" className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors font-medium">
                  <CalendarDays className="w-4 h-4" />
                  Book an Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-400" />
                <span>2nd Floor, RR Complex, Erode Fort, Erode, Tamil Nadu 638001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <a href="tel:+919698237458" className="hover:text-white transition-colors">+91 9698237458 / +91 9361099610</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <a href="mailto:raghu25dharmalingam@gmail.com" className="hover:text-white transition-colors">raghu25dharmalingam@gmail.com</a>
              </li>
            </ul>
            <div className="mt-4 text-sm">
              <p className="text-gray-400">Store Hours:</p>
              <p>Mon – Sat: <span className="text-white">9:00 AM – 8:30 PM</span></p>
              <p>Sunday: <span className="text-white">10:00 AM – 6:00 PM</span></p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Raghu Mobile. All rights reserved.</p>
          <p>Designed by Sharan Byju</p>
        </div>
      </div>
    </footer>
  );
}