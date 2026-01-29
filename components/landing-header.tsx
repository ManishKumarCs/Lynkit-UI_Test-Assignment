'use client'

import { useState } from 'react'
import { Menu, X, ArrowRight, Zap, Package, Truck, Shield, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface LandingHeaderProps {
  onGetStarted: () => void
}

export default function LandingHeader({ onGetStarted }: LandingHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const products = [
    {
      name: 'Lynktrac',
      description: 'Real-time shipment tracking and visibility',
      icon: Truck,
    },
    {
      name: 'LynkFlow',
      description: 'Automated order and shipment management',
      icon: Zap,
    },
    {
      name: 'LynkHub',
      description: 'Centralized supply chain ecosystem',
      icon: Package,
    },
    {
      name: 'LynkShield',
      description: 'Insurance and risk management',
      icon: Shield,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-3xl font-bold text-primary">Lynkit</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition">
              Products
            </a>
            <a href="#" className="text-foreground hover:text-primary transition">
              Solutions
            </a>
            <a href="#" className="text-foreground hover:text-primary transition">
              Pricing
            </a>
            <a href="#" className="text-foreground hover:text-primary transition">
              Company
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex gap-3">
            <Button variant="outline">Sign In</Button>
            <Button onClick={onGetStarted}>Get Started</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border px-4 py-4 space-y-3">
            <a href="#" className="block py-2 text-foreground hover:text-primary">
              Products
            </a>
            <a href="#" className="block py-2 text-foreground hover:text-primary">
              Solutions
            </a>
            <a href="#" className="block py-2 text-foreground hover:text-primary">
              Pricing
            </a>
            <a href="#" className="block py-2 text-foreground hover:text-primary">
              Company
            </a>
            <div className="pt-3 space-y-2 border-t border-border">
              <Button variant="outline" className="w-full bg-transparent">
                Sign In
              </Button>
              <Button onClick={onGetStarted} className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center space-y-8">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
              Orchestrating Efficiency in Your Supply Chain
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            Your Connected Supply
            <br />
            <span className="text-primary">Chain Ecosystem</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Lynkit connects all aspects of your supply chain—from planning to execution to
            delivery—creating a truly linked ecosystem that drives efficiency and visibility.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button onClick={onGetStarted} size="lg" className="gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A suite of integrated solutions designed to work seamlessly together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <div
                key={product.name}
                className="p-6 border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all hover:bg-accent/5 cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground">{product.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition" />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-accent/5 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose Lynkit
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Real-Time Visibility</h3>
              <p className="text-muted-foreground">
                Track every shipment and movement across your entire supply chain network in real time.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Automated Workflows</h3>
              <p className="text-muted-foreground">
                Reduce manual processes and automate critical workflows to save time and reduce errors.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Enterprise Security</h3>
              <p className="text-muted-foreground">
                Bank-level security and compliance certifications protect your sensitive data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Transform Your Supply Chain?
        </h2>
        <p className="text-lg text-muted-foreground">
          Join leading logistics companies that trust Lynkit to orchestrate their supply chain
          efficiency.
        </p>
        <Button onClick={onGetStarted} size="lg">
          Start Your Free Trial
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Lynktrac</a></li>
                <li><a href="#" className="hover:text-foreground">LynkFlow</a></li>
                <li><a href="#" className="hover:text-foreground">LynkHub</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">About</a></li>
                <li><a href="#" className="hover:text-foreground">Blog</a></li>
                <li><a href="#" className="hover:text-foreground">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground">Terms</a></li>
                <li><a href="#" className="hover:text-foreground">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Support</a></li>
                <li><a href="#" className="hover:text-foreground">Sales</a></li>
                <li><a href="#" className="hover:text-foreground">hello@lynkit.in</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Lynkit. Orchestrating Efficiency in Your Supply Chain.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
