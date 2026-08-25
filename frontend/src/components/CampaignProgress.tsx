export default function CampaignProgress() {
  const currentTarget = 500;
  const achieved = 342;
  const percentage = Math.round((achieved / currentTarget) * 100);

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 max-w-4xl mx-auto my-16 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[var(--color-leaf)]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="text-center mb-10 relative z-10">
        <h2 className="text-3xl font-bold text-[var(--color-forest)] mb-4">
          Monsoon Relief Progress
        </h2>
        <p className="text-gray-600 text-lg">
          Help us reach our goal of insulating {currentTarget} roofs before the heavy rains begin.
        </p>
      </div>

      <div className="relative z-10">
        <div className="flex justify-between items-end mb-3">
          <div>
            <span className="text-4xl font-extrabold text-[var(--color-forest)]">{achieved}</span>
            <span className="text-gray-500 font-medium ml-2">Roofs Insulated</span>
          </div>
          <div className="text-right">
            <span className="text-xl font-bold text-gray-400">Goal: {currentTarget}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-6 bg-gray-100 rounded-full overflow-hidden shadow-inner p-1">
          <div 
            className="h-full bg-gradient-to-r from-[var(--color-leaf)] to-[var(--color-forest)] rounded-full relative"
            style={{ width: `${percentage}%` }}
          >
            {/* Sparkle effect on progress */}
            <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white/30 rounded-full"></div>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <span className="inline-block bg-[var(--color-earth)]/20 text-[var(--color-earth)] font-bold px-4 py-1 rounded-full text-sm">
            {percentage}% Funded — Thank you!
          </span>
        </div>
      </div>
    </div>
  );
}
