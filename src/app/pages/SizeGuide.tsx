import { Ruler, Shirt, Footprints } from 'lucide-react';

export function SizeGuide() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Ruler className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-black text-foreground mb-4">
              Size Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find your perfect fit with our comprehensive sizing charts
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8">Coming Soon</h2>
          <p className="text-muted-foreground mb-8">
            Our comprehensive size guide is being updated with the latest measurements and fit information.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <Shirt className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Clothing Sizes</h3>
              <p className="text-muted-foreground">
                Complete sizing charts for men's and women's apparel including chest, waist, and hip measurements.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <Footprints className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Shoe Sizes</h3>
              <p className="text-muted-foreground">
                International shoe size conversions and foot measurement guides for the perfect fit.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Contact Size Expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}