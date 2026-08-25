import { MapPin, Users, Navigation } from "lucide-react";

export const metadata = {
  title: "Join the Loop | Paramendo Nepal",
};

export default function JoinLoopPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-[var(--color-forest)] text-white py-16 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Community Collection Map</h1>
        <p className="text-[var(--color-offwhite)]/80 max-w-2xl mx-auto">
          Find your nearest collection point in Dhading or register your school/business to host a plastic drive.
        </p>
      </div>

      <div className="flex-grow flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-1/3 bg-white border-r border-gray-200 p-6 overflow-y-auto">
          <h2 className="font-bold text-xl text-gray-900 mb-6">Active Points</h2>
          
          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl cursor-pointer hover:border-[var(--color-leaf)]">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[var(--color-leaf)] mr-3 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Ree Central CRC</h3>
                  <p className="text-sm text-gray-500">Main Processing Facility</p>
                  <span className="inline-block mt-2 text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded">Accepting All Plastics</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl cursor-pointer hover:border-[var(--color-leaf)]">
              <div className="flex items-start">
                <Users className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900">Shree Secondary School</h3>
                  <p className="text-sm text-gray-500">Partner School Drop-off</p>
                  <span className="inline-block mt-2 text-xs font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded">PET & PP Only</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-offwhite)] p-6 rounded-2xl border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-2">Want to collect?</h3>
            <p className="text-sm text-gray-600 mb-4">Register your community group to become an official partner.</p>
            <button className="w-full bg-[var(--color-forest)] text-white py-3 rounded-lg font-bold text-sm hover:bg-opacity-90">
              Host a Plastic Drive
            </button>
          </div>
        </div>

        {/* Map Mockup */}
        <div className="w-full md:w-2/3 bg-gray-200 relative flex items-center justify-center min-h-[500px]">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\"20\\" height=\\"20\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cpath d=\\"M0 0h20v20H0z\\" fill=\\"none\\"/%3E%3Cpath d=\\"M0 19.5L19.5 0H20v.5L.5 20H0v-.5z\\" fill=\\"%23000\\"/%3E%3C/svg%3E")' }}></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <Navigation className="w-12 h-12 text-gray-400 mb-4" />
            <span className="text-gray-500 font-bold text-xl uppercase tracking-widest">[ Interactive Map Placeholder ]</span>
            <p className="text-gray-500 mt-2">Mapbox or Google Maps Integration</p>
          </div>
          
          {/* Mock Map Pins */}
          <div className="absolute top-1/3 left-1/3 w-6 h-6 bg-[var(--color-forest)] rounded-full border-4 border-white shadow-lg animate-bounce"></div>
          <div className="absolute top-1/2 left-2/3 w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
        </div>
      </div>
    </div>
  );
}
