import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/ChatGPT Image Jun 28, 2025, 07_52_13 PM.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Arabic Calligraphy */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-amber-300 drop-shadow-2xl">
            وَقُل رَّبِّ زِدْنِي عِلْمًا
          </h1>
          <p className="text-lg md:text-xl text-gray-200 italic">
            "And say: My Lord, increase me in knowledge" - Quran 20:114
          </p>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          UNLOCK THE BEAUTY OF <span className="text-emerald-400">ARABIC</span>
          <br />
          TRANSFORM YOUR <span className="text-amber-400">SPIRITUAL JOURNEY</span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          The complete Arabic learning system designed specifically for Muslims in the West. 
          Connect with the Quran, understand your prayers, and unlock the beauty of the Arabic language.
        </p>
        
        <Button 
          onClick={() => scrollToSection('course-details')}
          className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-4 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          DISCOVER YOUR JOURNEY
        </Button>
      </div>
    </section>
  );
};

export default Hero;