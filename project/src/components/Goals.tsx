
import { CheckCircle } from "lucide-react";

const Goals = () => {
  const goals = [
    {
      title: "Connect with the Quran",
      description: "Understand the holy Quran in its original Arabic language and deepen your spiritual connection"
    },
    {
      title: "Master Your Prayers & Duas",
      description: "Comprehend every word of your daily prayers and supplications with full understanding"
    },
    {
      title: "Understand Hadiths & Sunnah",
      description: "Access authentic Islamic teachings directly from Arabic sources without translation"
    },
    {
      title: "Converse Fluently",
      description: "Engage in meaningful conversations with Arabic speakers around the world"
    },
    {
      title: "Excel in Business",
      description: "Conduct business confidently in Dubai, Saudi Arabia, and other Gulf countries"
    },
    {
      title: "Enhance Your Travels",
      description: "Make your Umrah, Hajj, and travels to Arab countries smooth and meaningful"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-emerald-900 to-teal-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transform Your Life Through Arabic
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Our course is designed to help you achieve these life-changing goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-8 h-8 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-emerald-100">{goal.title}</h3>
                  <p className="text-gray-200 leading-relaxed">{goal.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;
