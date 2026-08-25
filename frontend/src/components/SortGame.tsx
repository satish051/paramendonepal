"use client";

import { useState, useEffect } from "react";
import { Download } from "lucide-react";

export default function SortGame() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  // Simplified logic for mockup
  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && isPlaying) {
      setIsPlaying(false);
      setIsGameOver(true);
    }
  }, [isPlaying, timeLeft]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(60);
    setIsPlaying(true);
    setIsGameOver(false);
  };

  const handleSort = (isCorrect: boolean) => {
    if (isCorrect) setScore(score + 10);
    else setScore(Math.max(0, score - 5));
  };

  return (
    <div className="bg-sky-50 rounded-3xl p-8 max-w-4xl mx-auto shadow-sm border border-sky-100 text-center relative overflow-hidden">
      {!isPlaying && !isGameOver && (
        <div className="absolute inset-0 bg-white/90 z-20 flex flex-col items-center justify-center p-8 backdrop-blur-sm">
          <h2 className="text-4xl font-extrabold text-[var(--color-forest)] mb-4">Sort at the Source</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-md">Drag the falling plastic items into the correct recycling bins before time runs out!</p>
          <button onClick={startGame} className="bg-[var(--color-forest)] text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-[var(--color-leaf)] hover:scale-105 transition-all shadow-lg">
            Start Game
          </button>
        </div>
      )}

      {isGameOver && (
        <div className="absolute inset-0 bg-white/95 z-20 flex flex-col items-center justify-center p-8">
          <h2 className="text-4xl font-extrabold text-[var(--color-forest)] mb-2">Game Over!</h2>
          <p className="text-2xl font-bold text-[var(--color-leaf)] mb-8">Final Score: {score}</p>
          
          <div className="bg-orange-50 border-2 border-orange-200 p-6 rounded-2xl max-w-sm mb-8">
            <h3 className="font-bold text-orange-800 mb-2">🏆 Paramendo Eco-Champion</h3>
            <p className="text-sm text-orange-700 mb-4">You successfully sorted the waste! Download your certificate below.</p>
            <button className="w-full bg-orange-500 text-white px-4 py-3 rounded-xl font-bold flex items-center justify-center hover:bg-orange-600">
              <Download className="w-5 h-5 mr-2" /> Download Certificate
            </button>
          </div>
          
          <button onClick={startGame} className="text-gray-500 underline font-medium hover:text-gray-800">Play Again</button>
        </div>
      )}

      <div className="flex justify-between items-center mb-8 px-4">
        <div className="text-2xl font-bold text-[var(--color-forest)]">Score: {score}</div>
        <div className="text-2xl font-bold text-red-500">{timeLeft}s</div>
      </div>

      <div className="h-64 relative bg-blue-50/50 border-2 border-dashed border-blue-200 rounded-2xl mb-8 flex items-center justify-center">
        {/* Game Area Mockup */}
        {isPlaying && (
          <div className="flex space-x-8">
            <button onClick={() => handleSort(true)} className="w-16 h-16 bg-blue-500 rounded-full shadow-lg text-white font-bold flex items-center justify-center animate-bounce hover:bg-blue-600">PET</button>
            <button onClick={() => handleSort(false)} className="w-16 h-16 bg-green-500 rounded-full shadow-lg text-white font-bold flex items-center justify-center animate-pulse hover:bg-green-600">LDPE</button>
            <button onClick={() => handleSort(true)} className="w-16 h-16 bg-red-500 rounded-full shadow-lg text-white font-bold flex items-center justify-center hover:bg-red-600">PP</button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-200 h-32 rounded-t-lg border-b-4 border-gray-400 flex items-center justify-center font-bold text-gray-500">Organic</div>
        <div className="bg-blue-200 h-32 rounded-t-lg border-b-4 border-blue-400 flex items-center justify-center font-bold text-blue-700">Recyclable Plastic</div>
        <div className="bg-red-200 h-32 rounded-t-lg border-b-4 border-red-400 flex items-center justify-center font-bold text-red-700">Landfill</div>
      </div>
    </div>
  );
}
