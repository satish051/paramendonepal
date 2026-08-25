import { Calendar, Compass, Tent } from "lucide-react";

export const metadata = { title: "Eco-Tourism CRC Portal | Paramendo Nepal" };

export default function EcoTourismPage() {
  return (
    <div className="min-h-screen bg-[var(--color-surface)] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Compass className="w-12 h-12 text-[var(--color-secondary)] mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold text-[var(--color-primary)] mb-4">Eco-Tourism & Field Trips</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Book a university field trip or volunteer day at our Dhading Community Recycling Center. See the circular economy in action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center mb-6">
              <Tent className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Volunteer Retreat</h3>
            <p className="text-gray-600 mb-6">Spend 3 days in rural Dhading. Help sort plastics, learn extrusion techniques, and immerse yourself in local culture.</p>
            <button className="w-full bg-[var(--color-accent)] text-white py-3 rounded-xl font-bold flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" /> View Availability
            </button>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-xl flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">University / School Tour</h3>
            <p className="text-gray-600 mb-6">A guided 4-hour educational tour for student groups. Covers waste management theory and hands-on recycling.</p>
            <button className="w-full bg-white text-[var(--color-primary)] border-2 border-[var(--color-primary)] py-3 rounded-xl font-bold flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" /> Request Group Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
