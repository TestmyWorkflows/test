
import { Shield, Clock, DollarSign } from "lucide-react";

const Guarantee = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-500 rounded-full mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Iron-Clad Guarantee
            </h2>
            <p className="text-xl text-gray-600">
              We're so confident in our system that we put our money where our mouth is
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-4 border-amber-200">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Clock className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">30 Days</h3>
                <p className="text-gray-600">Complete commitment period</p>
              </div>
              <div>
                <DollarSign className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">$300 Back</h3>
                <p className="text-gray-600">Full refund guarantee</p>
              </div>
              <div>
                <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">No Risk</h3>
                <p className="text-gray-600">Complete peace of mind</p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-amber-50 rounded-xl">
              <h4 className="text-2xl font-bold text-center text-gray-800 mb-4">
                If You Don't Learn Arabic in 30 Days...
              </h4>
              <p className="text-xl text-center text-gray-700 mb-4">
                <strong>We'll Pay YOU $300!</strong>
              </p>
              <p className="text-center text-gray-600">
                *Terms and conditions apply. See full details in course materials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
