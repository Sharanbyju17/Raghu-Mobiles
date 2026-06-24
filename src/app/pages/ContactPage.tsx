import { useState } from 'react';
import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { toast } from 'sonner';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Send,
} from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct WhatsApp message
    const text = `*New Contact Message*

*Name:* ${form.name}
*Phone:* ${form.phone}
*Email:* ${form.email || 'N/A'}
*Message:* ${form.message || 'N/A'}`;

    const messageText = encodeURIComponent(text);

    // Open WhatsApp
    window.open(`https://wa.me/919698237458?text=${messageText}`, '_blank');

    toast.success('Opening WhatsApp...');
    setForm({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">We're Here for You</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Visit us in store, give us a call, or send a message — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Get in Touch</h2>

              <Card>
                <CardContent className="p-6 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Raghu Mobile</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        2nd Floor, RR Complex,<br />
                        Erode Fort, Erode,<br />
                        Tamil Nadu 638001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <a href="tel:+919698237458" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
                        +91 9698237458
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a href="mailto:raghu25dharmalingam@gmail.com" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
                        raghu25dharmalingam@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Store Hours</h3>
                      <div className="text-sm text-gray-600 space-y-0.5">
                        <p>Monday – Saturday: <span className="font-medium">9:00 AM – 8:30 PM</span></p>
                        <p>Sunday: <span className="font-medium">10:00 AM – 6:00 PM</span></p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social */}
              <div>
                <h3 className="font-semibold mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, label: 'Facebook', color: 'hover:bg-blue-600' },
                    { icon: Instagram, label: 'Instagram', color: 'hover:bg-pink-600' },
                    { icon: Twitter, label: 'Twitter', color: 'hover:bg-sky-500' },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href="#"
                      aria-label={s.label}
                      className={`w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-all ${s.color}`}
                    >
                      <s.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Book appointment CTA */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-5 text-white">
                <h3 className="font-bold mb-2">Need to visit us?</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Book an appointment and skip the wait. Our team will be ready for you.
                </p>
                <Button variant="secondary" size="sm" asChild>
                  <Link to="/book-appointment">Book Appointment</Link>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Your Name *</Label>
                      <Input
                        id="contact-name"
                        placeholder="Full name"
                        value={form.name}
                        onChange={e => handleChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="contact-phone">Phone *</Label>
                        <Input
                          id="contact-phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={form.phone}
                          onChange={e => handleChange('phone', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-email">Email</Label>
                        <Input
                          id="contact-email"
                          type="email"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={e => handleChange('email', e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-message">Message *</Label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        placeholder="How can we help you?"
                        value={form.message}
                        onChange={e => handleChange('message', e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full" disabled={sending}>
                      <Send className="w-4 h-4 mr-2" />
                      {sending ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-80 bg-gray-200 relative">
        <iframe
          title="Raghu Mobile Store Location"
          src="https://maps.google.com/maps?q=11.345545,77.7201503&hl=en&z=17&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
