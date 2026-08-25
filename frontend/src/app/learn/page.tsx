import SortGame from "@/components/SortGame";
import { BookOpen } from "lucide-react";

export const metadata = {
  title: "Learn | Paramendo Nepal",
  description: "Educational tools and mini-games to learn about waste sorting and plastic recycling.",
};

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center justify-center bg-blue-100 text-blue-700 font-bold px-4 py-2 rounded-full mb-6">
          <BookOpen className="w-5 h-5 mr-2" />
          School Outreach Program
        </div>
        <h1 className="text-4xl font-extrabold text-[var(--color-forest)] mb-4">Interactive Learning</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Play the "Sort at the Source" mini-game to understand waste segregation, or use it in classrooms to educate the next generation of eco-champions.
        </p>
      </div>
      
      <SortGame />
    </div>
  );
}
