
'use client';

import {useEffect, useState} from 'react';
import {Button} from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Textarea} from '@/components/ui/textarea';
import {BusinessLocation, getBusinessLocation} from '@/services/maps';
import {GoogleMap, LoadScript} from '@vis.gl/react-google-maps';
import {contactFormSuggestion} from '@/ai/flows/contact-form-suggestion';

const mapStyles = {
  width: '100%',
  height: '400px',
};

export default function Home() {
  const [businessLocation, setBusinessLocation] = useState<BusinessLocation | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    const fetchLocation = async () => {
      const location = await getBusinessLocation();
      setBusinessLocation(location);
    };

    fetchLocation();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const suggestion = await contactFormSuggestion({userInput: userInput});
    setSuggestions(suggestion.suggestions);
  };

  return (
    <main className="container mx-auto py-12">
      {/* Company Information Section */}
      <section id="company-info" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>About Mak-Med</CardTitle>
            <CardDescription>
              Your trusted partner in medical solutions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Mak-Med is a leading provider of high-quality medical equipment
              and services. We are committed to delivering innovative solutions
              to meet the evolving needs of healthcare professionals and
              patients.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>
              Send us a message, and we&apos;ll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" placeholder="Your Name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Your Email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your Message"
                  rows={4}
                  onChange={handleInputChange}
                />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
            {suggestions.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Suggestions:</h3>
                <ul>
                  {suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      {/* Visual Gallery Section */}
      <section id="gallery" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Gallery</CardTitle>
            <CardDescription>
              A showcase of our products and services.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            {/* Placeholder Images - Replace with actual images/videos */}
            <img
              src="https://picsum.photos/400/300"
              alt="Medical Equipment 1"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://picsum.photos/400/301"
              alt="Medical Equipment 2"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://picsum.photos/400/302"
              alt="Medical Equipment 3"
              className="rounded-lg shadow-md"
            />
          </CardContent>
        </Card>
      </section>

      {/* Interactive Map Section */}
      <section id="map">
        <Card>
          <CardHeader>
            <CardTitle>Our Location</CardTitle>
            <CardDescription>
              Visit us at our convenient location.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {businessLocation ? (
              <LoadScript googleMapsApiKey={''}>
                <GoogleMap
                  mapContainerStyle={mapStyles}
                  center={businessLocation.coordinate}
                  zoom={12}
                />
              </LoadScript>
            ) : (
              <div>Loading map...</div>
            )}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
