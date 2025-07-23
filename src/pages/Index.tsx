import heroBanner from "../assets/hero-products-banner.png";
import americanFlag from "../assets/american-flag.png";
const Index = () => {
  return <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md py-2">
        <div className="flex justify-center">
          <img src="/lovable-uploads/c63f3671-fa40-485a-afab-71a2c8e221c4.png" alt="Freebies.com Logo" className="h-12 w-auto" />
        </div>
      </header>

      {/* Hero Unit */}
      <div className="relative w-full h-80 md:h-96 mb-12 overflow-hidden">
        <img src="/lovable-uploads/c27d8859-168c-4fa1-ae60-c62723812ff9.png" alt="Free Samples Product Showcase - Popular American Brands" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Circular Badge */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full bg-blue-800 flex items-start justify-center pt-6 md:pt-8 shadow-elevated overflow-hidden z-20">
          <div className="absolute inset-0 bg-center bg-cover opacity-30" style={{backgroundImage: `url(${americanFlag})`}}></div>
          <div className="text-center px-4 relative z-10">
            <div className="text-white font-bold text-xl md:text-2xl leading-tight">
              100% FREE<br />
              AMERICAN<br />
              SAMPLES
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto text-center px-[12px]">
        <h1 className="text-4xl font-bold mb-8 text-blue-500 md:text-6xl">
          Latest Free Samples & Giveaways in USA
        </h1>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Discover the best free samples USA has to offer! Get beauty products, food samples, 
            household goods, and exclusive giveaways sent right to your email. Updated daily with 
            fresh opportunities from trusted American brands.
          </p>
          
          <p>
            Join over 50,000 Americans who save money by trying products for free before buying. 
            From coast to coast - California, Texas, New York, Florida, and all states eligible!
          </p>
        </div>
      </main>

      {/* Email Capture Footer */}
      <footer className="gradient-footer mt-16 py-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        </div>
        
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join 50,000+ Americans Getting Free Samples! 🎁
          </h2>
          <p className="text-xl mb-2 text-white/90 max-w-2xl mx-auto">
            Get the latest free samples and giveaways delivered to your inbox daily.
          </p>
          <p className="text-lg mb-8 text-white/80 font-medium">
            Beauty products • Food samples • Household goods • Exclusive giveaways
          </p>
          
          {/* Enhanced Form */}
          <div className="max-w-lg mx-auto mb-8">
            <div className="flex flex-col gap-4 shadow-form rounded-2xl bg-white/10 backdrop-blur-sm p-2">
              <div className="flex-1 relative">
                <input type="email" placeholder="Enter your email address" className="w-full px-6 py-4 rounded-xl text-foreground bg-white border-0 focus:outline-none focus:ring-2 focus:ring-white/50 placeholder:text-muted-foreground text-lg font-medium" />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                  📧
                </span>
              </div>
              <button className="px-8 py-4 text-secondary-foreground rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-elevated whitespace-nowrap bg-green-600 hover:bg-green-500">
                Get Free Samples →
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex justify-center items-center gap-8 mb-6 opacity-60">
            <div className="text-xs text-white/80 font-medium bg-white/10 px-3 py-1 rounded-full">
              🇺🇸 American Brands
            </div>
            <div className="text-xs text-white/80 font-medium bg-white/10 px-3 py-1 rounded-full">
              🔒 100% Secure
            </div>
            <div className="text-xs text-white/80 font-medium bg-white/10 px-3 py-1 rounded-full">
              📧 No Spam
            </div>
          </div>

          {/* Social Proof */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              
              <span className="text-white font-semibold">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-white/90 text-sm italic">
              "I've saved over $500 trying products for free before buying!"
            </p>
            <p className="text-white/70 text-xs mt-1">- Sarah M., New York</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;