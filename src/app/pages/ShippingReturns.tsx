import { Truck, RotateCcw, Shield, Clock, MapPin, CreditCard, Package, CheckCircle } from 'lucide-react';

export function ShippingReturns() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-black text-foreground mb-4">
              Shipping & Returns
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fast, reliable shipping and hassle-free returns for your peace of mind
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Free Shipping</h3>
            <p className="text-muted-foreground text-sm">On orders over $75</p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
            <p className="text-muted-foreground text-sm">2-5 business days</p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <RotateCcw className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="font-bold text-lg mb-2">Easy Returns</h3>
            <p className="text-muted-foreground text-sm">30-day return policy</p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="font-bold text-lg mb-2">Secure Packaging</h3>
            <p className="text-muted-foreground text-sm">Protected delivery</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Shipping Information */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Truck className="w-5 h-5 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-black text-foreground">Shipping Information</h2>
            </div>

            <div className="space-y-8">
              {/* Shipping Options */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  Shipping Options
                </h3>
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">Standard Shipping</h4>
                      <span className="text-green-600 font-medium">FREE on $75+</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">5-7 business days</p>
                    <p className="text-sm">$5.99 for orders under $75</p>
                  </div>
                  
                  <div className="border border-border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">Express Shipping</h4>
                      <span className="text-primary font-medium">$12.99</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">2-3 business days</p>
                    <p className="text-sm">Available for all orders</p>
                  </div>
                  
                  <div className="border border-border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">Next Day Delivery</h4>
                      <span className="text-orange-600 font-medium">$24.99</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">1 business day</p>
                    <p className="text-sm">Order by 2 PM for next day delivery</p>
                  </div>
                </div>
              </div>

              {/* Processing Time */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  Processing Time
                </h3>
                <div className="bg-muted rounded-lg p-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Orders placed before 2 PM EST ship same day
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Weekend orders ship next business day
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Custom items may take 3-5 additional days
                    </li>
                  </ul>
                </div>
              </div>

              {/* International Shipping */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-purple-500" />
                  International Shipping
                </h3>
                <div className="space-y-3 text-sm">
                  <p>We ship to over 100 countries worldwide.</p>
                  <ul className="space-y-1 text-muted-foreground ml-4">
                    <li>• Delivery time: 7-14 business days</li>
                    <li>• Shipping cost calculated at checkout</li>
                    <li>• Customs duties may apply</li>
                    <li>• Free shipping on orders over $150</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Returns Information */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <RotateCcw className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-black text-foreground">Returns & Exchanges</h2>
            </div>

            <div className="space-y-8">
              {/* Return Policy */}
              <div>
                <h3 className="text-xl font-bold mb-4">30-Day Return Policy</h3>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-4">
                  <p className="text-sm text-green-800 dark:text-green-200">
                    <strong>Free returns</strong> on all orders within 30 days of delivery.
                  </p>
                </div>
                <div className="space-y-3 text-sm">
                  <p>Items must be:</p>
                  <ul className="space-y-1 text-muted-foreground ml-4">
                    <li>• Unworn and in original condition</li>
                    <li>• In original packaging with tags attached</li>
                    <li>• Accompanied by original receipt or order confirmation</li>
                  </ul>
                </div>
              </div>

              {/* How to Return */}
              <div>
                <h3 className="text-xl font-bold mb-4">How to Return</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Start Your Return</h4>
                      <p className="text-sm text-muted-foreground">Log into your account and select the items you want to return</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Print Return Label</h4>
                      <p className="text-sm text-muted-foreground">We'll email you a prepaid return shipping label</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Ship It Back</h4>
                      <p className="text-sm text-muted-foreground">Package your items and drop off at any authorized location</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Get Your Refund</h4>
                      <p className="text-sm text-muted-foreground">Refund processed within 3-5 business days after we receive your return</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exchanges */}
              <div>
                <h3 className="text-xl font-bold mb-4">Exchanges</h3>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-sm mb-3">Need a different size or color? We make exchanges easy:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Free exchanges within 30 days</li>
                    <li>• Same item in different size/color only</li>
                    <li>• Subject to availability</li>
                    <li>• Price differences will be charged/refunded</li>
                  </ul>
                </div>
              </div>

              {/* Refund Methods */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-blue-500" />
                  Refund Methods
                </h3>
                <div className="space-y-3 text-sm">
                  <p>Refunds are processed to your original payment method:</p>
                  <ul className="space-y-1 text-muted-foreground ml-4">
                    <li>• Credit/Debit Cards: 3-5 business days</li>
                    <li>• PayPal: 1-2 business days</li>
                    <li>• Store Credit: Instant (with 10% bonus)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-muted rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
          <p className="text-muted-foreground mb-6">
            Our customer service team is here to help with any shipping or return questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Contact Support
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors">
              Track Your Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}