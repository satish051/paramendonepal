"use client";

import { Play, Pause, Quote } from "lucide-react";
import { useState } from "react";

const voices = [
  {
    id: 1,
    name: "Sunita Tamang",
    role: "Lead Sorting Technician",
    imagePlaceholder: "[ Photo: Sunita sorting materials ]",
    before: "Subsistence farming with unreliable seasonal income.",
    after: "Full-time green job, supporting her two children's education in Dhading.",
    audioLength: "0:15",
    transcript: "Before the CRC, finding steady work here was very hard. Now, I have a reliable income, and I know I am helping keep our village clean. My children are proud of the work I do.",
  },
  {
    id: 2,
    name: "Rajesh Gurung",
    role: "Extrusion Machine Operator",
    imagePlaceholder: "[ Photo: Rajesh operating the molding machine ]",
    before: "Migrant worker forced to leave Nepal for employment.",
    after: "Skilled technician working in his home village, training new staff.",
    audioLength: "0:18",
    transcript: "I used to work overseas because there were no opportunities here. Working with these machines to turn waste into something strong and beautiful gives me hope for our community's future.",
  }
];

export default function CommunityVoices() {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [showTranscript, setShowTranscript] = useState<number | null>(null);

  const togglePlay = (id: number) => {
    // Mock play functionality
    if (playingId === id) {
      setPlayingId(null);
    } else {
      setPlayingId(id);
      // Auto-stop after 15 seconds (mocking audio end)
      setTimeout(() => setPlayingId(null), 15000);
    }
  };

  return (
    <div className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] sm:text-4xl mb-4">
            Voices from the CRC
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated artisans and technicians behind our products. Every tile purchased supports sustainable green jobs in Dhading.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {voices.map((voice) => (
            <div key={voice.id} className="bg-white rounded-3xl overflow-hidden shadow-md border border-[var(--color-secondary)]/20 hover:shadow-lg transition-shadow flex flex-col">
              
              {/* Photo Area */}
              <div className="aspect-[4/3] bg-gray-200 relative flex items-center justify-center">
                <span className="text-gray-500 font-medium">{voice.imagePlaceholder}</span>
                <div className="absolute top-4 left-4 bg-[var(--color-secondary)] text-[var(--color-primary)] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  Ree, Dhading
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex-grow flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[var(--color-primary)]">{voice.name}</h3>
                  <p className="text-[var(--color-secondary)] font-medium">{voice.role}</p>
                </div>

                {/* Before / After */}
                <div className="space-y-3 mb-8 bg-gray-50 p-4 rounded-xl border border-gray-100 flex-grow">
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Before</span>
                    <p className="text-gray-600 text-sm">{voice.before}</p>
                  </div>
                  <div className="border-t border-gray-200 my-2"></div>
                  <div>
                    <span className="text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider block mb-1">After</span>
                    <p className="text-[var(--color-primary)] font-medium text-sm">{voice.after}</p>
                  </div>
                </div>

                {/* Audio Player Mock */}
                <div className="bg-[var(--color-accent)] rounded-2xl p-4 text-white">
                  <div className="flex items-center space-x-4 mb-3">
                    <button 
                      onClick={() => togglePlay(voice.id)}
                      className="w-12 h-12 bg-white text-[var(--color-primary)] rounded-full flex items-center justify-center hover:bg-[var(--color-secondary)] transition-colors flex-shrink-0"
                    >
                      {playingId === voice.id ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
                    </button>
                    <div className="flex-grow">
                      <div className="flex justify-between text-xs mb-1 text-gray-300">
                        <span>Listen to Story (Nepali)</span>
                        <span>{playingId === voice.id ? "0:04" : "0:00"} / {voice.audioLength}</span>
                      </div>
                      {/* Progress Bar Mock */}
                      <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[var(--color-secondary)] rounded-full transition-all duration-1000"
                          style={{ width: playingId === voice.id ? "25%" : "0%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setShowTranscript(showTranscript === voice.id ? null : voice.id)}
                    className="text-xs text-gray-300 hover:text-white underline underline-offset-2"
                  >
                    {showTranscript === voice.id ? "Hide Transcript" : "Read English Transcript"}
                  </button>
                  
                  {/* Transcript Reveal */}
                  {showTranscript === voice.id && (
                    <div className="mt-4 p-4 bg-white/10 rounded-xl relative">
                      <Quote className="absolute top-3 left-3 w-4 h-4 text-white/20" />
                      <p className="text-sm italic pl-6 text-[var(--color-surface)] leading-relaxed">
                        "{voice.transcript}"
                      </p>
                    </div>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
