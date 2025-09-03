import React, { useState } from 'react';
import { MapPin, Package, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CollectionMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(0);

  // Collection bin locations across KOC facilities
  const collectionBins = [
    {
      id: 'koc-ahmadi-mega',
      name: 'KOC Ahmadi MegaComplex (New)',
      address: '433H+G97, 11th Rd, Al Ahmadi 61008, Kuwait',
      coordinates: '29.0779,48.0282',
      description: 'Main collection point at KOC headquarters',
      capacity: 'Large bins for helmets and coveralls',
      mapsUrl: 'https://maps.app.goo.gl/oB77vksRTpmVr5oo7'
    },
    {
      id: 'west-kuwait-mega',
      name: 'West Kuwait MegaComplex',
      address: 'West Kuwait, Kuwait',
      coordinates: '29.3375,47.9200',
      description: 'Primary collection facility for West Kuwait operations',
      capacity: 'Large bins for helmets and coveralls',
      mapsUrl: 'https://share.google/moMZeOf0kf2a6xgyC'
    },
    {
      id: 'north-kuwait-mega',
      name: 'North Kuwait MegaComplex',
      address: 'North Kuwait, Kuwait',
      coordinates: '29.7500,47.7000',
      description: 'Main collection hub for North Kuwait facilities',
      capacity: 'Large bins for helmets and coveralls',
      mapsUrl: 'https://share.google/2TT7SzpMlBguERpCb'
    },
    {
      id: 'magwa-main-office',
      name: 'KOC Magwa Main Office Building',
      address: 'Magwa, Kuwait',
      coordinates: '28.9500,48.1150',
      description: 'Central office collection point in Magwa district',
      capacity: 'Medium bins for helmets and coveralls',
      mapsUrl: 'https://share.google/AXMHcDl9wJQTWDkAx'
    },
    {
      id: 'koc-hse-ahmadi',
      name: 'KOC HSE Building - Ahmadi',
      address: 'HSE Building, Al Ahmadi, Kuwait',
      coordinates: '29.0850,48.0350',
      description: 'Health, Safety & Environment building collection point',
      capacity: 'Medium bins for helmets and coveralls',
      mapsUrl: 'https://maps.app.goo.gl/NVSD8aM2vAiAHwUg9'
    }
  ];

  // Create Google Maps embed URL with all locations
  const createMapUrl = () => {
    const center = '29.2919,47.9824'; // Kuwait center
    const locations = collectionBins.map(bin => `${bin.coordinates}`).join('|');
    return `https://www.google.com/maps/embed/v1/view?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dw901SwHSR119E&center=${center}&zoom=8&maptype=roadmap`;
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Collection Points
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find convenient PPE collection bins across KOC facilities in Kuwait
            </p>
          </div>

          {/* Map and Location List */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Location List */}
            <div className="lg:col-span-1">
              <div className="bg-background rounded-2xl shadow-corporate p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-sustainability rounded-full flex items-center justify-center">
                    <Package className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Collection Sites</h3>
                    <p className="text-sm text-muted-foreground">{collectionBins.length} Active Locations</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {collectionBins.map((bin, index) => (
                    <div
                      key={bin.id}
                      className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                        selectedLocation === index
                          ? 'border-primary bg-primary/5'
                          : 'border-border bg-muted/30 hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedLocation(index)}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                          selectedLocation === index ? 'bg-primary' : 'bg-muted'
                        }`}>
                          <span className={`text-xs font-bold ${
                            selectedLocation === index ? 'text-primary-foreground' : 'text-muted-foreground'
                          }`}>
                            {index + 1}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm text-foreground mb-1 truncate">
                            {bin.name}
                          </h4>
                          <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                            {bin.description}
                          </p>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-sustainability rounded-full"></div>
                            <span className="text-xs text-sustainability font-medium">{bin.capacity}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map and Details */}
            <div className="lg:col-span-2">
              <div className="bg-background rounded-2xl shadow-corporate overflow-hidden">
                {/* Selected Location Details */}
                <div className="p-6 border-b">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {collectionBins[selectedLocation].name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {collectionBins[selectedLocation].address}
                      </p>
                      <p className="text-sm text-foreground mb-4">
                        {collectionBins[selectedLocation].description}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="bg-accent/10 rounded-lg px-3 py-2">
                          <p className="text-xs font-medium text-accent-foreground">
                            {collectionBins[selectedLocation].capacity}
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(collectionBins[selectedLocation].mapsUrl, '_blank')}
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Open in Maps
                        </Button>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-corporate rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="relative h-[400px]">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.123456789!2d${collectionBins[selectedLocation].coordinates.split(',')[1]}!3d${collectionBins[selectedLocation].coordinates.split(',')[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2skw!4v1234567890123!5m2!1sen!2skw`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map showing ${collectionBins[selectedLocation].name}`}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-background rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-gradient-corporate rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold mb-2 text-foreground">Select Your Location</h3>
              <p className="text-sm text-muted-foreground">Choose the most convenient collection point from the list</p>
            </div>
            
            <div className="text-center p-6 bg-background rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-sustainability rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold mb-2 text-foreground">Get Directions</h3>
              <p className="text-sm text-muted-foreground">Click "Open in Maps" for turn-by-turn directions</p>
            </div>
            
            <div className="text-center p-6 bg-background rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-gradient-sustainability rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold mb-2 text-foreground">Drop Off PPE</h3>
              <p className="text-sm text-muted-foreground">Bring your used helmets and coveralls to the selected location</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionMap;