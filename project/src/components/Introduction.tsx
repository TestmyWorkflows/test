import { Button } from "@/components/ui/button";

const DecorativeTop = () => (
  <div className="absolute left-0 right-0 top-0 flex justify-center pointer-events-none select-none z-0">
    <svg width="100%" height="40" viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10">
      <path d="M0 20 Q 360 0 720 20 Q 1080 40 1440 20" stroke="#059669" strokeWidth="2" fill="none" opacity="0.15" />
    </svg>
  </div>
);

const DecorativeBottom = () => (
  <div className="absolute left-0 right-0 bottom-0 flex justify-center pointer-events-none select-none z-0">
    <svg width="100%" height="40" viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10">
      <path d="M0 20 Q 360 40 720 20 Q 1080 0 1440 20" stroke="#059669" strokeWidth="2" fill="none" opacity="0.15" />
    </svg>
  </div>
);

const FaintCalligraphy = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
    <svg width="500" height="200" viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-5">
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="80" fontFamily="'Amiri', serif" fill="#059669">العلم نور</text>
    </svg>
  </div>
);

const FaintQuranCalligraphy = () => (
  <div className="absolute left-1/2 top-16 -translate-x-1/2 z-0 pointer-events-none select-none">
    <svg width="320" height="120" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-30">
      <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" fontSize="64" fontFamily="'Amiri', serif" fill="#047857">القرآن</text>
    </svg>
  </div>
);

const FaintBackgroundWords = () => (
  <>
    <div className="absolute left-1/4 top-32 z-0 pointer-events-none select-none">
      <svg width="180" height="60" viewBox="0 0 180 60" fill="none" className="opacity-20">
        <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" fontSize="40" fontFamily="'Amiri', serif" fill="#047857">العلم</text>
      </svg>
    </div>
    <div className="absolute right-10 top-44 z-0 pointer-events-none select-none">
      <svg width="160" height="60" viewBox="0 0 160 60" fill="none" className="opacity-20">
        <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" fontSize="36" fontFamily="'Amiri', serif" fill="#047857">النور</text>
      </svg>
    </div>
    <div className="absolute left-10 bottom-32 z-0 pointer-events-none select-none">
      <svg width="200" height="60" viewBox="0 0 200 60" fill="none" className="opacity-20">
        <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" fontSize="38" fontFamily="'Amiri', serif" fill="#047857">التفسير</text>
      </svg>
    </div>
    <div className="absolute right-1/4 bottom-24 z-0 pointer-events-none select-none">
      <svg width="220" height="60" viewBox="0 0 220 60" fill="none" className="opacity-20">
        <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" fontSize="40" fontFamily="'Amiri', serif" fill="#047857">اللغة العربية</text>
      </svg>
    </div>
    <div className="absolute left-1/2 top-1/2 z-0 pointer-events-none select-none" style={{ transform: 'translate(-50%, -50%)' }}>
      <svg width="180" height="60" viewBox="0 0 180 60" fill="none" className="opacity-20">
        <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" fontSize="36" fontFamily="'Amiri', serif" fill="#047857">الإيمان</text>
      </svg>
    </div>
  </>
);

const CrescentStar = ({ className = "" }) => (
  <svg className={className} width="64" height="64" viewBox="0 0 64 64" fill="none" style={{opacity:0.3}} xmlns="http://www.w3.org/2000/svg">
    {/* Thinner crescent: larger inner circle */}
    <g>
      <circle cx="32" cy="32" r="24" fill="#059669" />
      <circle cx="42" cy="28" r="21" fill="white" />
    </g>
    {/* Five-pointed star, higher position */}
    <polygon points="44,18 47,25 54,25 48.5,29.5 51,36 44,32 37,36 39.5,29.5 34,25 41,25" fill="#059669" />
  </svg>
);

const Lantern = ({ className = "" }) => (
  <svg className={className} width="40" height="80" viewBox="0 0 40 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="10" width="8" height="30" rx="4" fill="#fbbf24" opacity="0.15" />
    <ellipse cx="20" cy="45" rx="12" ry="8" fill="#059669" opacity="0.10" />
    <rect x="18" y="5" width="4" height="10" rx="2" fill="#059669" opacity="0.15" />
    <circle cx="20" cy="5" r="2" fill="#fbbf24" opacity="0.25" />
  </svg>
);

const Dome = ({ className = "" }) => (
  <svg className={className} width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="30" cy="35" rx="28" ry="12" fill="#059669" opacity="0.10" />
    <path d="M30 5 Q40 20 58 35 Q30 15 2 35 Q20 20 30 5 Z" fill="#fbbf24" opacity="0.10" />
  </svg>
);

const Mosque = ({ className = "" }) => (
  <svg className={className} width="80" height="50" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="30" width="60" height="15" rx="4" fill="#059669" opacity="0.10" />
    <ellipse cx="40" cy="30" rx="18" ry="10" fill="#fbbf24" opacity="0.10" />
    <rect x="36" y="10" width="8" height="20" rx="4" fill="#059669" opacity="0.10" />
    <circle cx="40" cy="10" r="5" fill="#fbbf24" opacity="0.15" />
  </svg>
);

const QuoteCard = () => (
  <div className="relative bg-emerald-50 border-l-4 border-emerald-400 rounded-xl shadow-md p-6 mt-10 mb-4 max-w-2xl mx-auto z-10">
    <p className="text-lg italic text-emerald-900 mb-2 text-center">
      "Seeking knowledge is an obligation upon every Muslim."
    </p>
    <p className="text-right text-emerald-700 font-semibold">— Prophet Muhammad ﷺ</p>
  </div>
);

const HexagonProfile = () => (
  <div className="relative flex justify-center items-center mx-auto w-48 h-48">
    <svg viewBox="0 0 100 100" className="absolute w-full h-full z-10">
      <defs>
        <linearGradient id="hexGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#047857" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <polygon points="50,5 95,27 95,73 50,95 5,73 5,27" fill="url(#hexGlow)" filter="url(#glow)" />
      <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="white" stroke="#047857" strokeWidth="2" />
    </svg>
    <img
      src="/lovable-uploads/ChatGPT Image Jun 28, 2025, 08_09_29 PM.png"
      alt="Profile"
      className="absolute w-[76%] h-[76%] object-cover z-20"
      style={{ clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)' }}
    />
  </div>
);

const DuaCard = () => (
  <div className="bg-gradient-to-r from-emerald-50 to-amber-50 border border-emerald-200 rounded-xl shadow p-4 my-6 max-w-xl mx-auto text-center">
    <div className="text-2xl md:text-3xl font-arabic mb-2" style={{ fontFamily: 'Amiri, serif', color: '#047857' }}>
      اللهم انفعني بما علمتني وعلمّني ما ينفعني وزدني علمًا
    </div>
    <div className="text-sm text-gray-600 italic">O Allah, benefit me with what You have taught me, teach me what will benefit me, and increase me in knowledge.</div>
  </div>
);

const Introduction = () => {
  return (
    <section className="py-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <DecorativeTop />
      <DecorativeBottom />
      <FaintCalligraphy />
      <FaintQuranCalligraphy />
      <FaintBackgroundWords />
      {/* Decorative Islamic icons spread around the background */}
      <div className="pointer-events-none select-none absolute inset-0 z-0">
        <CrescentStar className="absolute left-10 top-8 w-16 h-16 -rotate-6" />
        <CrescentStar className="absolute right-16 top-12 w-12 h-12 rotate-3" />
        <CrescentStar className="absolute left-20 bottom-10 w-14 h-14 rotate-8" />
        <CrescentStar className="absolute right-10 bottom-16 w-20 h-20 -rotate-4" />
        <Lantern className="absolute right-1/6 bottom-1/5 w-12 h-24 -rotate-4" />
        {/* Add more floating elements as needed */}
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Profile and Bio */}
            <div className="text-center lg:text-left">
              <div className="mb-4 flex justify-center lg:justify-start">
                <div className="relative lg:ml-36">
                  <HexagonProfile />
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: 'Amiri, serif', color: '#047857' }}>
                  Assalamu Alaikum, I'm Ustadh Mohmd – Your Arabic Teacher
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Welcome! I'm Mohmd, and I'm deeply passionate about helping you uncover the beauty of Arabic.  
                  My journey started as a personal quest to understand the Quran more deeply — and now, it's my mission to make this sacred language easy and enjoyable for everyone.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With a Bachelor's in Islamic Studies and a love for teaching, I've spent years helping students connect with the Quran, their prayers, and the Arab world.  
                  Whether you're a complete beginner or seeking deeper knowledge, you're in the right place.  
                  Let's begin this journey together — inshaAllah.
                </p>
              </div>
            </div>
            {/* Right Column - YouTube Video */}
            <div className="flex flex-col items-center mt-10">
              <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-emerald-200 p-4 mb-2">
                  <div className="text-lg font-semibold text-emerald-700 mb-2 text-center">🎥 Meet Your Teacher: A Message from Brother Mohmd</div>
                  <div className="relative rounded-xl overflow-hidden bg-gray-900">
                    <div className="aspect-video">
                      <iframe
                        src="https://www.youtube.com/embed/pRjx44zfvfQ?si=G-yYsXJm_vQuQNoI&autoplay=0&mute=0&controls=1&showinfo=1&rel=0&modestbranding=1"
                        title="Arabic Teacher Introduction Video"
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-2">
                  <p className="text-sm text-gray-600 mb-2">Watch my personal introduction</p>
                  <a
                    href="https://youtu.be/pRjx44zfvfQ?si=G-yYsXJm_vQuQNoI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    Watch on YouTube
                  </a>
                </div>
                <DuaCard />
              </div>
            </div>
          </div>
          {/* Quote/Hadith Card */}
          <QuoteCard />
          <div className="flex justify-center mt-2">
            <a
              href="#pricing-section"
              onClick={e => {
                e.preventDefault();
                const el = document.getElementById('pricing-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Button
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-4 rounded-lg shadow-xl font-bold transition-all duration-300"
              >
                Begin Your Journey
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;