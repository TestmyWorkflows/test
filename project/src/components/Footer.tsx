
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-emerald-400">Arabic Mastery</h3>
            <p className="text-gray-300 leading-relaxed">
              Empowering Muslims in the West to connect with their faith through the beautiful Arabic language.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#course-details" className="hover:text-emerald-400 transition-colors">Course Details</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Help Center</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Arabic Mastery Course. All rights reserved.</p>
          <p className="mt-2">Learn Arabic • Connect with Quran • Transform Your Life</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
