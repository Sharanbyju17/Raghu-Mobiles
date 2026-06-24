import { Link, useLocation } from 'react-router';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from './ui/sheet';
import { Separator } from './ui/separator';
import {
  Menu,
  MapPin,
  Phone,
  CalendarDays,
} from 'lucide-react';
import { useState } from 'react';
import logoImage from '@/assets/logo.png';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  const isActive = (path: string) =>
    path === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2">
        <div className="container mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>Erode, Tamil Nadu</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              <Phone className="w-3 h-3" />
              <a href="tel:+919698237458" className="hover:underline">+91 9698237458 / +91 9361099610</a>
            </div>
          </div>
          <div className="text-sm">Welcome to Raghu Mobile Shop</div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-white-600 to-white-800 text-white p-2 rounded-[15px]">
              <img src={logoImage} alt="Raghu Mobile Logo" className="w-8 h-8 object-contain" />
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-900">Raghu Mobile</h1>
              <p className="text-xs text-gray-600">Erode's Trusted Store</p>
            </div>
          </Link>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button size="sm" asChild>
              <Link to="/book-appointment">
                <CalendarDays className="w-4 h-4 mr-2" />
                Book Appointment
              </Link>
            </Button>
          </div>

          {/* Mobile: Book + Menu */}
          <div className="flex items-center gap-2 md:hidden">
            <Button size="sm" asChild>
              <Link to="/book-appointment">Book</Link>
            </Button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>Navigate through our site</SheetDescription>
                </SheetHeader>
                <nav className="mt-6 space-y-1">
                  {navLinks.map(link => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`block py-2 px-3 rounded-lg font-medium transition-colors ${
                        isActive(link.to)
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block border-t">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-3 text-sm">
            <div className="flex items-center gap-6">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-medium transition-colors pb-0.5 border-b-2 ${
                    isActive(link.to)
                      ? 'text-blue-600 border-blue-600'
                      : 'text-gray-700 border-transparent hover:text-blue-600 hover:border-blue-300'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}