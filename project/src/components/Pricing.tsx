import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star, Shield, CreditCard, Smartphone, Lock } from "lucide-react";
import { motion } from "framer-motion";
import GradientText from "./GradientText";

const Pricing = () => {
  const handleCheckout = () => {
    // This will be replaced with actual Stripe checkout functionality
    console.log("Redirecting to Stripe checkout...");
    alert("Stripe checkout integration will be implemented here!");
  };

  const features = [
    "80 Structured Courses",
    "9,000 Smart Flashcards", 
    "100+ Arabic Podcasts",
    "420 Quranic TV Shows",
    "700 Hours of Cartoons",
    "40 Movies + Subtitles",
    "13 Learning Communities",
    "AI Tips & 11 Dictionaries"
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Amiri, serif' }}>
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={5}
              showBorder={false}
              className="custom-class"
            >
              Start Your Arabic Journey Today
            </GradientText>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of Muslims who have transformed their lives through Arabic
          </p>
          
          {/* Decorative Islamic Divider */}
          <div className="flex justify-center mt-6 mb-4">
            <svg width="160" height="16" viewBox="0 0 160 16" fill="none">
              <path d="M0 8 Q40 0 80 8 Q120 16 160 8" stroke="#047857" strokeWidth="2" fill="none"/>
              <circle cx="80" cy="8" r="2" fill="#fbbf24"/>
            </svg>
          </div>
        </motion.div>
        
        <div className="max-w-2xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Card className="relative overflow-hidden bg-white border-2 border-emerald-100 shadow-xl rounded-2xl">
              {/* Popular Badge */}
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-center py-3 rounded-t-2xl">
                <div className="flex items-center justify-center space-x-2">
                  <Star className="w-4 h-4 fill-current text-yellow-300" />
                  <span className="font-bold text-sm tracking-wide">MOST POPULAR CHOICE</span>
                  <Star className="w-4 h-4 fill-current text-yellow-300" />
                </div>
              </div>

              <CardContent className="p-6 md:p-8 pt-24">
                {/* Header Section */}
                <motion.div 
                  className="text-center mb-6"
                  variants={itemVariants}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-4" style={{ fontFamily: 'Amiri, serif' }}>
                    Complete Arabic Mastery Program
                  </h3>
                  
                  {/* Pricing */}
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-4xl md:text-5xl font-bold text-emerald-600">$30</span>
                  </div>

                  <p className="text-gray-600 max-w-xl mx-auto">
                    Everything you need to master Arabic and connect deeply with the Quran
                  </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div 
                  className="grid md:grid-cols-2 gap-3 mb-6"
                  variants={containerVariants}
                >
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-emerald-50/50 transition-colors duration-300"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, x: 3 }}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-5 h-5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-white font-bold" />
                        </div>
                      </div>
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Guarantee Badge */}
                <motion.div 
                  className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 mb-6 text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-center justify-center space-x-2 mb-1">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-lg font-bold text-green-700">30-Day Money-Back Guarantee</span>
                  </div>
                  <p className="text-green-600 font-semibold text-sm">
                    + $300 Bonus if You Don't Learn Arabic!
                  </p>
                </motion.div>

                {/* CTA Button */}
                <motion.div 
                  className="text-center mb-6"
                  variants={itemVariants}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      onClick={handleCheckout}
                      className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:via-teal-700 hover:to-emerald-800 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-emerald-500/25 border-0"
                    >
                      🚀 START LEARNING ARABIC NOW
                    </Button>
                  </motion.div>
                  
                  <p className="text-xs text-gray-500 mt-2">
                    Instant access • No hidden fees • Cancel anytime
                  </p>
                </motion.div>

                {/* Security & Payment Options */}
                <motion.div 
                  className="border-t border-gray-200 pt-4"
                  variants={itemVariants}
                >
                  {/* Security Icons */}
                  <div className="flex flex-wrap items-center justify-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Lock className="w-4 h-4 text-green-600" />
                      <span className="text-xs font-medium">SSL Secure</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <CreditCard className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-medium">All Cards</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Smartphone className="w-4 h-4 text-purple-600" />
                      <span className="text-xs font-medium">Afterpay</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#0070ba">
                        <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm1.262-8.13h2.19c3.284 0 5.96-1.342 6.775-5.4.02-.1.04-.202.058-.307.26-1.56.017-2.638-.72-3.595C15.765.486 14.102 0 12.19 0H5.998c-.524 0-.972.382-1.054.9L1.837 20.437c-.082.518.23.9.633.9h4.606L8.338 13.207z"/>
                      </svg>
                      <span className="text-xs font-medium">PayPal</span>
                    </div>
                  </div>

                  {/* Payment Info */}
                  <div className="text-center">
                    <p className="text-gray-600 text-sm max-w-xl mx-auto">
                      <strong>Secure Payment:</strong> We accept all major credit cards, PayPal, and Afterpay. 
                      Choose the option that works best for you at checkout.
                    </p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;