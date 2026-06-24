import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '../components/ui/carousel';
import logoImage from '../../assets/logo.png';
import {
  Star,
  TrendingUp,
  Truck,
  Shield,
  CreditCard,
  Award,
  ChevronRight,
  Smartphone,
  Wrench,
  Headphones,
  MapPin,
  Phone,
  CheckCircle,
  CalendarDays,
} from 'lucide-react';

export default function HomePage() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [api]);

  const banners = [
    {
      id: 1,
      title: 'Welcome to Raghu Mobile',
      description:
        "Erode's most trusted mobile shop. Get the latest smartphones at the best prices with unmatched service.",
      badge: "Erode's #1 Mobile Shop",
      icon: TrendingUp,
      image: logoImage,
      bgColor: 'bg-gradient-to-r from-blue-600 to-blue-800',
      primaryText: 'View Products',
      primaryLink: '/products',
      secondaryText: 'Book Appointment',
      secondaryLink: '/book-appointment',
    },
    {
      id: 2,
      title: 'Up to 40% off on Accessories',
      description:
        'Premium chargers, earphones, cases and more — all genuine, all affordable.',
      badge: 'Special Offer',
      icon: Star,
      image:
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bgColor: 'bg-gradient-to-r from-purple-600 to-indigo-800',
      primaryText: 'View Accessories',
      primaryLink: '/products?category=accessories',
    },
    {
      id: 3,
      title: 'Premium Smart Phones',
      description:
        'Experience luxury and cutting-edge technology. iPhone, Samsung, OnePlus and more.',
      badge: 'New Arrivals',
      icon: Smartphone,
      image:
        'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bgColor: 'bg-gradient-to-r from-gray-900 to-gray-700',
      primaryText: 'Explore Phones',
      primaryLink: '/products?category=smart-phone',
    },
  ];

  const services = [
    {
      icon: Smartphone,
      title: 'Phone Sales',
      desc: 'Latest smartphones from all top brands at best prices. Exchange & upgrade welcome.',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: Wrench,
      title: 'Repair & Service',
      desc: 'Screen replacement, battery service, software fixes by certified technicians.',
      color: 'text-red-600',
      bg: 'bg-red-50',
    },
    {
      icon: Headphones,
      title: 'Accessories',
      desc: 'Genuine chargers, earphones, cases, screen guards and more for every phone.',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      icon: CreditCard,
      title: 'Easy EMI Plans',
      desc: 'Flexible installment options with 0% interest on select models.',
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
  ];

  const features = [
    { icon: Truck, title: 'Free Delivery', desc: 'On orders above ₹5,000' },
    { icon: Shield, title: 'Warranty', desc: 'Official warranty included' },
    { icon: CreditCard, title: 'EMI Available', desc: 'Easy installment plans' },
    { icon: Award, title: 'Genuine Products', desc: '100% authentic' },
  ];

  const testimonials = [
    {
      name: 'Suresh M.',
      location: 'Erode',
      rating: 5,
      text: 'Best mobile shop in Erode! Got my iPhone 15 at a great price with all accessories. Very helpful staff.',
    },
    {
      name: 'Kavitha R.',
      location: 'Bhavani',
      rating: 5,
      text: 'My Samsung screen was repaired in just 2 hours. Very professional team and reasonable rates.',
    },
    {
      name: 'Arun K.',
      location: 'Gobichettipalayam',
      rating: 5,
      text: 'Bought a OnePlus phone on EMI with zero interest. The staff explained everything clearly. Highly recommend!',
    },
  ];

  return (
    <div>
      {/* Hero Carousel */}
      <section className="bg-gray-100 overflow-hidden">
        <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {banners.map(banner => (
              <CarouselItem key={banner.id}>
                <div className={`relative w-full ${banner.bgColor} text-white`}>
                  <div className="container mx-auto px-4 py-16 md:py-24">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <Badge className="mb-4 bg-white text-black hover:bg-gray-100 border-none">
                          {banner.icon && <banner.icon className="w-3 h-3 mr-1 inline-block" />}
                          {banner.badge}
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">{banner.title}</h1>
                        <p className="text-xl mb-8 text-white/90">{banner.description}</p>
                        <div className="flex flex-wrap gap-4">
                          <Button size="lg" variant="secondary" asChild>
                            <Link to={banner.primaryLink}>
                              {banner.primaryText}
                              <ChevronRight className="w-5 h-5 ml-2" />
                            </Link>
                          </Button>
                          {banner.secondaryText && (
                            <Button
                              size="lg"
                              variant="outline"
                              className="bg-transparent border-white text-white hover:bg-white hover:text-black"
                              asChild
                            >
                              <Link to={banner.secondaryLink!}>{banner.secondaryText}</Link>
                            </Button>
                          )}
                        </div>
                      </div>
                      <div className="hidden md:flex justify-center">
                        <img
                          src={banner.image}
                          alt={banner.title}
                          className="rounded-2xl shadow-2xl h-[400px] w-full max-w-md object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 md:left-8 bg-black/20 text-white hover:bg-black/40 hover:text-white border-none h-12 w-12" />
          <CarouselNext className="right-4 md:right-8 bg-black/20 text-white hover:bg-black/40 hover:text-white border-none h-12 w-12" />
        </Carousel>
      </section>

      {/* Trust Features */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-3">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-blue-100 text-blue-700 hover:bg-blue-100">What We Do</Badge>
            <h2 className="text-3xl font-bold mb-3">Our Services</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              From purchasing your dream phone to keeping it in perfect condition — we're your
              one-stop mobile destination in Erode.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all hover:-translate-y-1 border-none shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${service.bg} ${service.color} rounded-2xl mb-4`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Are */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-500 text-black">Where We Are</Badge>
              <h2 className="text-4xl font-bold mb-4">Find Us in Erode</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Conveniently located in the heart of Erode Fort, our store is easy to find and
                well-stocked with the latest phones and accessories. Walk in any day of the week!
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">2nd Floor, RR Complex, Erode Fort, Erode, Tamil Nadu 638001</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a href="tel:+919698237458" className="text-gray-300 hover:text-white transition-colors">+91 9698237458</a>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Open 7 days — Mon–Sat 9AM–8:30PM, Sun 10AM–6PM</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <a href="https://maps.app.goo.gl/Wb3Ye7yzPMDXFmeG7" target="_blank" rel="noopener noreferrer">
                    Get Directions
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
                  asChild
                >
                  <a href="tel:+919698237458">Call Us Now</a>
                </Button>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl overflow-hidden h-72 border border-white/20">
              <iframe
                title="Store Map"
                src="https://maps.google.com/maps?q=11.345545,77.7201503&hl=en&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-blue-100 text-blue-700 hover:bg-blue-100">Happy Customers</Badge>
            <h2 className="text-3xl font-bold">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">"{t.text}"</p>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Book Appointment */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <CalendarDays className="w-12 h-12 mx-auto mb-4 text-blue-200" />
          <h2 className="text-3xl font-bold mb-4">Ready to Visit Us?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book a free appointment and our expert team will guide you to the perfect phone
            for your needs and budget. No pressure, just honest advice.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/book-appointment">
                Book an Appointment
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <a href="tel:+919698237458">Call Us Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}