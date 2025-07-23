

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Logo */}
      <header className="flex justify-center py-8">
        <img 
          src="/lovable-uploads/c63f3671-fa40-485a-afab-71a2c8e221c4.png" 
          alt="Freebies.com Logo" 
          className="h-16 w-auto"
        />
      </header>

      {/* Hero Banner */}
      <div className="w-full mb-12">
        <img 
          src="/lovable-uploads/ef69f5b6-ea6d-4771-9c94-39aec2496591.png" 
          alt="Free Samples Canada Hero Banner" 
          className="w-full h-32 object-cover"
        />
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          Latest Free Samples & Giveaways in Canada
        </h1>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Discover the best free samples Canada has to offer! Get beauty products, food samples, 
            household goods, and exclusive giveaways sent right to your email. Updated daily with 
            fresh opportunities from trusted Canadian brands.
          </p>
          
          <p>
            Join over 50,000 Canadians who save money by trying products for free before buying. 
            From coast to coast - Ontario, Quebec, British Columbia, Alberta, and all provinces eligible!
          </p>
        </div>
      </main>

      {/* Email Capture Footer */}
      <footer className="bg-primary text-primary-foreground mt-16 py-12">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join 50,000+ Canadians Getting Free Samples!
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Get the latest free samples and giveaways delivered to your inbox daily.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors whitespace-nowrap">
              Get Free Samples
            </button>
          </div>
          
          <p className="text-sm mt-4 opacity-75">
            No spam, unsubscribe anytime. Canadian brands only.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
