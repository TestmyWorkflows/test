import React from "react";
import { BookOpen, Headphones, Tv, Users, Brain, Languages } from "lucide-react";
import ArabicCube from "@/components/ArabicCube";
import TiltedCard from "@/components/TiltedCard";
import { Separator } from "@/components/ui/separator";

// Add CrescentStar SVG for card accent
const CrescentStar = ({ className = "" }) => (
  <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" style={{opacity:0.4}} xmlns="http://www.w3.org/2000/svg">
    <g>
      <circle cx="16" cy="16" r="12" fill="#059669" />
      <circle cx="21" cy="13" r="10" fill="white" />
    </g>
    <polygon points="22,7 23,11 27,11 24,13 25,17 22,15 19,17 20,13 17,11 21,11" fill="#059669" />
  </svg>
);

// Decorative Islamic divider SVG
const IslamicDivider = () => (
  <div className="flex justify-center mb-8">
    <svg width="220" height="24" viewBox="0 0 220 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 12 Q55 0 110 12 Q165 24 220 12" stroke="#059669" strokeWidth="2" fill="none" />
      <circle cx="110" cy="12" r="4" fill="#fbbf24" />
    </svg>
  </div>
);

// Faint Arabic calligraphy watermark
const CalligraphyWatermark = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
    <svg width="400" height="120" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
      <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" fontSize="48" fontFamily="'Amiri', serif" fill="#059669">العلم نور</text>
    </svg>
  </div>
);

const CourseFeatures = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "80 Comprehensive Courses",
      description: "Complete structured learning path from basics to advanced Arabic",
      iconColor: '#fbbf24'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "9,000 Smart Flashcards",
      description: "Interactive vocabulary building with spaced repetition system",
      iconColor: '#047857'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "100+ Arabic Podcasts",
      description: "Specially designed with Arabic & English transcripts for optimal learning",
      iconColor: '#1e293b'
    },
    {
      icon: <Tv className="w-8 h-8" />,
      title: "420 Quranic TV Shows",
      description: "Learn Arabic while enjoying Islamic content and entertainment",
      iconColor: '#fbbf24'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "700 Hours of Cartoons",
      description: "Fun and engaging animated content designed for Arabic learning",
      iconColor: '#047857'
    },
    {
      icon: <Languages className="w-8 h-8" />,
      title: "40 Movies + 11 Dictionaries",
      description: "Arabic films with English subtitles plus comprehensive reference materials",
      iconColor: '#1e293b'
    }
  ];

  return (
    <section id="course-details" className="pt-16 pb-20 bg-gradient-to-b from-[#f3fff9] to-[#dff5e7] relative overflow-hidden">
      {/* Faint geometric pattern background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none select-none" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M 0 20 Q 20 0 40 20 Q 20 40 0 20 Z\' stroke=\'%23059669\' stroke-width=\'1\' fill=\'none\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat'}} />
      <CalligraphyWatermark />
      {/* Absolutely position the cube above the heading */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-2 z-[999]">
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-emerald-200 blur-2xl opacity-30 w-full h-full"></div>
          <div className="relative z-10">
            <div className="mx-auto drop-shadow-xl" style={{ width: '110px', height: '110px', maxWidth: '24vw', maxHeight: '24vw' }}>
              <ArabicCube />
            </div>
          </div>
        </div>
      </div>
      {/* Main content, pushed down to make space for the cube */}
      <div className="relative z-10 container mx-auto px-4 pt-48">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Amiri, serif', color: '#047857' }}>
            Everything You Need to Master Arabic
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-6" style={{ color: '#1e293b' }}>
            Our comprehensive system includes every resource you need to go from beginner to fluent Arabic speaker
          </p>
          <div className="flex justify-center mb-8">
            <svg width="220" height="24" viewBox="0 0 220 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 12 Q55 0 110 12 Q165 24 220 12" stroke="#047857" strokeWidth="2" fill="none" />
              <circle cx="110" cy="12" r="4" fill="#fbbf24" />
            </svg>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="flex justify-center">
              <TiltedCard
                captionText={feature.title}
                containerHeight="280px"
                containerWidth="100%"
                cardHeight="240px"
                cardWidth="100%"
                rotateAmplitude={8}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                backgroundColor="#ffffff"
                borderRadius="16px"
                overlayContent={
                  <div className="w-full h-full flex flex-col justify-center items-center text-center p-8">
                    <div className="mb-4 flex justify-center">
                      {React.cloneElement(feature.icon, { style: { color: feature.iconColor } })}
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Amiri, serif', color: '#1e293b' }}>
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed" style={{ color: '#047857' }}>
                      {feature.description}
                    </p>
                  </div>
                }
              />
            </div>
          ))}
        </div>
        <div className="bg-emerald-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Amiri, serif' }}>Plus Much More!</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  13 Active Arabic Learning Communities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  AI-Powered Tips and Learning Prompts
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  11 Professional Arabic Dictionaries
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  24/7 Community Support
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-2xl font-bold text-emerald-600 mb-2">Entry Level Course</h4>
                <p className="text-4xl font-bold text-gray-800">$1/day</p>
                <p className="text-lg text-gray-600 mt-2">For 30 days - Total: $30</p>
                <p className="text-sm text-gray-500 mt-1">Start your Arabic journey today!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFeatures;