import heroBannerImage from "@/assets/hero-banner.png";

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
          src={heroBannerImage} 
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
    </div>
  );
};

export default Index;
