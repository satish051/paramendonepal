import { User, Wallet, History, ArrowRight } from "lucide-react";

export const metadata = {
  title: "CRC Portal | Paramendo Nepal",
  description: "Waste collector credit ledger and scrap exchange rates.",
};

const recentTransactions = [
  { id: 1, date: "2023-10-12", material: "PP (Clean)", weight: "45 kg", credits: "+450 NPR" },
  { id: 2, date: "2023-10-08", material: "LDPE", weight: "12 kg", credits: "+84 NPR" },
  { id: 3, date: "2023-09-28", material: "Mixed Plastics", weight: "89 kg", credits: "+445 NPR" },
];

export default function CRCPortalPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">CRC Collector Portal</h1>
            <p className="text-gray-500">Dhading Branch - Collector ID #8842</p>
          </div>
          <div className="bg-[var(--color-forest)] text-white p-3 rounded-full">
            <User className="w-6 h-6" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Credit Balance */}
          <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col justify-center">
            <div className="flex items-center text-[var(--color-leaf)] mb-4">
              <Wallet className="w-6 h-6 mr-2" />
              <span className="font-bold uppercase tracking-wider text-sm">Available Credits</span>
            </div>
            <p className="text-5xl font-extrabold text-gray-900 mb-2">3,450 <span className="text-2xl text-gray-400 font-medium">NPR</span></p>
            <p className="text-gray-500 text-sm mb-6">Earned from 240 kg of total collected plastic this month.</p>
            <div className="flex space-x-4">
              <button className="bg-[var(--color-forest)] text-white px-6 py-2 rounded-lg font-bold text-sm">Request Payout</button>
              <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-bold text-sm">Trade for Goods</button>
            </div>
          </div>

          {/* Current Rates */}
          <div className="bg-[var(--color-forest)] rounded-3xl p-8 text-white shadow-sm flex flex-col justify-center">
            <h3 className="font-bold mb-6 text-xl">Today's Exchange Rates</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/20 pb-2">
                <span className="font-medium text-white/90">PP (Clean, Sorted)</span>
                <span className="font-bold">10 NPR/kg</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/20 pb-2">
                <span className="font-medium text-white/90">LDPE (Bags)</span>
                <span className="font-bold">7 NPR/kg</span>
              </div>
              <div className="flex justify-between items-center pb-2">
                <span className="font-medium text-white/90">Mixed / Unsorted</span>
                <span className="font-bold">5 NPR/kg</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ledger */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              <History className="w-5 h-5 mr-2 text-[var(--color-leaf)]" />
              Recent Deposits
            </h3>
            <button className="text-sm font-bold text-[var(--color-leaf)] flex items-center">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 text-sm border-b border-gray-100">
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Material</th>
                  <th className="pb-3 font-medium">Weight</th>
                  <th className="pb-3 font-medium text-right">Credits Earned</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((tx) => (
                  <tr key={tx.id} className="border-b border-gray-50 last:border-0">
                    <td className="py-4 text-gray-600">{tx.date}</td>
                    <td className="py-4 font-medium text-gray-900">{tx.material}</td>
                    <td className="py-4 text-gray-600">{tx.weight}</td>
                    <td className="py-4 font-bold text-[var(--color-forest)] text-right">{tx.credits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
