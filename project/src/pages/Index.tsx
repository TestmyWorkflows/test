import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import CourseFeatures from "@/components/CourseFeatures";
import Goals from "@/components/Goals";
import Guarantee from "@/components/Guarantee";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import ArabicCube from "@/components/ArabicCube";
import { Separator } from "@/components/ui/separator";

// SVG pattern for Islamic geometric background
const IslamicPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 400 400" preserveAspectRatio="none">
    <defs>
      <pattern id="islamic" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 0 20 Q 20 0 40 20 Q 20 40 0 20 Z" stroke="#059669" strokeWidth="1" fill="none" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#islamic)" />
  </svg>
);

const Section = ({ children, bgClass = "", pattern = false, ...props }) => (
  <section className={`relative py-16 ${bgClass}`} {...props}>
    {pattern && <IslamicPattern />}
    <div className="relative z-10">{children}</div>
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Hero />
      <Section bgClass="bg-white" pattern>
        <Introduction />
      </Section>
      <div className="my-8 flex justify-center">
        <Separator className="w-32 h-2 bg-gradient-to-r from-emerald-400 via-amber-300 to-emerald-400 rounded-full border-0" />
      </div>
      
      <CourseFeatures />
      
      <div className="my-8 flex justify-center">
        <Separator className="w-32 h-2 bg-gradient-to-r from-emerald-400 via-amber-300 to-emerald-400 rounded-full border-0" />
      </div>
      <Section bgClass="bg-gradient-to-r from-emerald-900 to-teal-800 text-white">
        <Goals />
      </Section>
      <div className="my-8 flex justify-center">
        <Separator className="w-32 h-2 bg-gradient-to-r from-emerald-400 via-amber-300 to-emerald-400 rounded-full border-0" />
      </div>
      <Section bgClass="bg-gradient-to-b from-amber-50 to-orange-50">
        <Guarantee />
      </Section>
      <div className="my-8 flex justify-center">
        <Separator className="w-32 h-2 bg-gradient-to-r from-emerald-400 via-amber-300 to-emerald-400 rounded-full border-0" />
      </div>
      <Section bgClass="bg-white" pattern id="pricing-section">
        <Pricing />
      </Section>
      <Footer />
    </div>
  );
};

export default Index;