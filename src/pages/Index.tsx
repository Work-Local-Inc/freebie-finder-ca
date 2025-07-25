import { useState } from "react";
import heroBanner from "../assets/hero-products-banner.png";
import americanFlag from "../assets/american-flag.png";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Check if we're in a Lovable preview environment
      const isPreview = window.location.hostname.includes('lovableproject.com') || 
                       window.location.hostname === 'localhost';
      
      if (isPreview) {
        // Simulate form submission in preview mode
        await new Promise(resolve => setTimeout(resolve, 1000));
        toast({
          title: "Success! 🎉", 
          description: "Demo mode: You've been subscribed to our free samples newsletter!",
        });
        setEmail("");
      } else {
        // Real Netlify form submission for deployed sites
        const formData = new FormData(e.target as HTMLFormElement);
        
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData as any).toString(),
        });

        if (response.ok) {
          toast({
            title: "Success! 🎉",
            description: "You've been subscribed to our free samples newsletter!",
          });
          setEmail("");
        } else {
          throw new Error("Form submission failed");
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md py-2">
        <div className="flex justify-center">
          <img src="/lovable-uploads/c63f3671-fa40-485a-afab-71a2c8e221c4.png" alt="Freebies.com Logo" className="h-12 w-auto" />
        </div>
      </header>

      {/* Hero Unit */}
      <div className="relative w-full h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] mb-12 overflow-hidden">
        <img src="/lovable-uploads/b07a5aae-5c5a-48a9-871c-5acfa19f3933.png" alt="Free Samples from Top American Brands - Ben & Jerry's, Starbucks, Tide, Doritos and More" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Circular Badge */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full bg-blue-800 border-4 border-white flex items-start justify-center pt-6 md:pt-8 shadow-2xl overflow-hidden z-20">
          <div className="absolute inset-0 bg-center bg-cover opacity-30" style={{backgroundImage: `url(${americanFlag})`}}></div>
          <div className="text-center px-4 relative z-10">
            <div className="text-white font-bold text-xl md:text-2xl leading-[0.8]">
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
          <form 
            name="email-signup" 
            method="POST" 
            data-netlify="true" 
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto mb-8"
          >
            {/* Hidden form name field for Netlify */}
            <input type="hidden" name="form-name" value="email-signup" />
            
            {/* Honeypot field for spam protection */}
            <div style={{ display: 'none' }}>
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </div>

            <div className="flex flex-col gap-4 shadow-form rounded-2xl bg-white/10 backdrop-blur-sm p-2">
              <div className="flex-1 relative">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  className="w-full px-6 py-4 rounded-xl text-foreground bg-white border-0 focus:outline-none focus:ring-2 focus:ring-white/50 placeholder:text-muted-foreground text-lg font-medium disabled:opacity-50" 
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                  📧
                </span>
              </div>
              <button 
                type="submit"
                disabled={isLoading}
                className="px-8 py-4 text-secondary-foreground rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-elevated whitespace-nowrap bg-green-600 hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? "Subscribing..." : "Get Free Samples →"}
              </button>
            </div>
          </form>
          
          {/* Email Disclaimer */}
          <p className="text-red-900 text-sm mb-6 max-w-md mx-auto">
            We respect your inbox. You can unsubscribe at any time.
          </p>

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
          
          {/* Trust Badges */}
          <div className="flex justify-center items-center gap-8 mt-6 opacity-60">
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
        </div>
      </footer>
    </div>;
};
export default Index;