import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin, Package } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const CollectionMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  // Collection bin locations across KOC facilities
  const collectionBins = [
    {
      id: 'koc-ahmadi-mega',
      name: 'KOC Ahmadi MegaComplex (New)',
      address: '433H+G97, 11th Rd, Al Ahmadi 61008, Kuwait',
      coordinates: [48.0282, 29.0779] as [number, number],
      description: 'Main collection point at KOC headquarters',
      capacity: 'Large bins for helmets and coveralls'
    },
    {
      id: 'west-kuwait-mega',
      name: 'West Kuwait MegaComplex',
      address: 'West Kuwait, Kuwait',
      coordinates: [47.9200, 29.3375] as [number, number],
      description: 'Primary collection facility for West Kuwait operations',
      capacity: 'Large bins for helmets and coveralls'
    },
    {
      id: 'north-kuwait-mega',
      name: 'North Kuwait MegaComplex',
      address: 'North Kuwait, Kuwait',
      coordinates: [47.7000, 29.7500] as [number, number],
      description: 'Main collection hub for North Kuwait facilities',
      capacity: 'Large bins for helmets and coveralls'
    },
    {
      id: 'magwa-main-office',
      name: 'KOC Magwa Main Office Building',
      address: 'Magwa, Kuwait',
      coordinates: [48.1150, 28.9500] as [number, number],
      description: 'Central office collection point in Magwa district',
      capacity: 'Medium bins for helmets and coveralls'
    },
    {
      id: 'koc-hse-ahmadi',
      name: 'KOC HSE Building - Ahmadi',
      address: 'HSE Building, Al Ahmadi, Kuwait',
      coordinates: [48.0350, 29.0850] as [number, number],
      description: 'Health, Safety & Environment building collection point',
      capacity: 'Medium bins for helmets and coveralls'
    }
  ];

  const initializeMap = (token: string) => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [47.9824, 29.2919], // Kuwait center adjusted for better view
      zoom: 8.5,
      pitch: 45,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add collection bin markers
    map.current.on('load', () => {
      collectionBins.forEach((bin) => {
        // Create custom marker element
        const markerEl = document.createElement('div');
        markerEl.className = 'collection-bin-marker';
        markerEl.innerHTML = `
          <div class="w-10 h-10 bg-gradient-sustainability rounded-full flex items-center justify-center shadow-elevated border-2 border-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
        `;

        // Create popup
        const popup = new mapboxgl.Popup({
          offset: 25,
          closeButton: true,
          closeOnClick: false
        }).setHTML(`
          <div class="p-4 min-w-[280px]">
            <div class="flex items-start gap-3 mb-3">
              <div class="w-8 h-8 bg-gradient-sustainability rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                  <path d="M20 7h-3V6a3 3 0 0 0-3-3H10a3 3 0 0 0-3 3v1H4a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9h1a1 1 0 1 0 0-2ZM9 6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9V6Zm7 15a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9h8v12Z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-sm text-gray-900 mb-1">${bin.name}</h3>
                <p class="text-xs text-gray-600 mb-2">${bin.address}</p>
                <p class="text-xs text-gray-700 mb-2">${bin.description}</p>
                <div class="bg-accent/10 rounded-lg p-2">
                  <p class="text-xs font-medium text-accent-foreground">${bin.capacity}</p>
                </div>
              </div>
            </div>
            <div class="border-t pt-3">
              <div class="flex items-center gap-2 text-xs text-sustainability">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span class="font-medium">Collection Point Active</span>
              </div>
            </div>
          </div>
        `);

        // Add marker to map
        new mapboxgl.Marker(markerEl)
          .setLngLat(bin.coordinates as [number, number])
          .setPopup(popup)
          .addTo(map.current!);
      });

      // Fit map to show all markers
      if (collectionBins.length > 0) {
        const coordinates = collectionBins.map(bin => bin.coordinates as [number, number]);
        const bounds = coordinates.reduce((bounds, coord) => {
          return bounds.extend(coord as [number, number]);
        }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]));
        map.current!.fitBounds(bounds, {
          padding: 80,
          maxZoom: 10
        });
      }
    });
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setShowTokenInput(false);
      initializeMap(mapboxToken);
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

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

          {/* Map Container */}
          <div className="bg-background rounded-2xl shadow-corporate overflow-hidden">
            {showTokenInput ? (
              <div className="p-8 text-center">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 bg-gradient-corporate rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    Enable Interactive Map
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Enter your Mapbox public token to view collection points across Kuwait.
                    Get your free token at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
                  </p>
                  <div className="space-y-4">
                    <Input
                      type="text"
                      placeholder="pk.eyJ1IjoieW91cmFjY291bnQi..."
                      value={mapboxToken}
                      onChange={(e) => setMapboxToken(e.target.value)}
                      className="text-sm"
                    />
                    <Button 
                      onClick={handleTokenSubmit}
                      disabled={!mapboxToken.trim()}
                      className="w-full"
                    >
                      Load Map
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative h-[500px]">
                <div ref={mapContainer} className="absolute inset-0" />
                
                {/* Map overlay with stats */}
                <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-elevated">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-sustainability rounded-full flex items-center justify-center">
                      <Package className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-foreground">Collection Status</h4>
                      <p className="text-xs text-muted-foreground">Active Bins</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Total Bins:</span>
                      <span className="text-xs font-bold text-primary">{collectionBins.length}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Active:</span>
                      <span className="text-xs font-bold text-sustainability">{collectionBins.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-background rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-gradient-corporate rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold mb-2 text-foreground">Locate Nearest Bin</h3>
              <p className="text-sm text-muted-foreground">Use the map to find the closest collection point to your work area</p>
            </div>
            
            <div className="text-center p-6 bg-background rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-gradient-sustainability rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold mb-2 text-foreground">Drop Off PPE</h3>
              <p className="text-sm text-muted-foreground">Bring your used helmets and coveralls to any marked location</p>
            </div>
            
            <div className="text-center p-6 bg-background rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-sustainability rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v10l8-4-8-4z"/>
                  <path d="M12 12v10"/>
                  <path d="M4 7l8 4"/>
                </svg>
              </div>
              <h3 className="font-bold mb-2 text-foreground">Scan QR Code</h3>
              <p className="text-sm text-muted-foreground">Scan the QR code on each bin to confirm your donation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionMap;