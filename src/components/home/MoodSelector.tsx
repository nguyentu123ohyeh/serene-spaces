import { useState } from "react";

type Mood = "serene" | "cozy" | "dark";

interface MoodOption {
  id: Mood;
  label: string;
  description: string;
  bgClass: string;
  accentColor: string;
}

const moods: MoodOption[] = [
  {
    id: "serene",
    label: "Serene",
    description: "Light, airy, and peaceful. For the minimalist dreamer.",
    bgClass: "bg-gradient-to-br from-sage-light/30 to-background",
    accentColor: "bg-sage",
  },
  {
    id: "cozy",
    label: "Cozy",
    description: "Warm, soft, and inviting. For the comfort seeker.",
    bgClass: "bg-gradient-to-br from-rose-light/40 to-background",
    accentColor: "bg-rose",
  },
  {
    id: "dark",
    label: "Dark",
    description: "Deep, restful, and calming. For the night owl.",
    bgClass: "bg-gradient-to-br from-foreground/10 to-background",
    accentColor: "bg-foreground",
  },
];

const MoodSelector = () => {
  const [selectedMood, setSelectedMood] = useState<Mood>("serene");

  const currentMood = moods.find((m) => m.id === selectedMood)!;

  return (
    <section
      className={`py-24 lg:py-32 px-6 lg:px-12 transition-colors duration-700 ${currentMood.bgClass}`}
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-caption mb-4">Interactive</p>
          <h2 className="text-heading-md mb-4">Choose Your Mood</h2>
          <p className="text-body text-muted-foreground max-w-md mx-auto">
            Discover the perfect atmosphere for your sanctuary
          </p>
        </div>

        {/* Mood Circles */}
        <div className="flex justify-center items-center gap-8 lg:gap-16 mb-16">
          {moods.map((mood) => (
            <button
              key={mood.id}
              onClick={() => setSelectedMood(mood.id)}
              className={`group relative w-24 h-24 md:w-32 md:h-32 rounded-full transition-all duration-500 ${
                selectedMood === mood.id
                  ? "scale-110 shadow-lg"
                  : "hover:scale-105"
              }`}
              aria-label={`Select ${mood.label} mood`}
            >
              {/* Circle Background */}
              <div
                className={`absolute inset-0 rounded-full ${mood.accentColor} transition-opacity duration-300 ${
                  selectedMood === mood.id ? "opacity-100" : "opacity-30"
                }`}
              />
              
              {/* Ring */}
              <div
                className={`absolute inset-0 rounded-full border-2 transition-all duration-500 ${
                  selectedMood === mood.id
                    ? "border-foreground scale-110"
                    : "border-transparent group-hover:border-foreground/30"
                }`}
              />

              {/* Label */}
              <span
                className={`relative z-10 font-medium text-sm md:text-base transition-colors duration-300 ${
                  selectedMood === mood.id
                    ? mood.id === "dark"
                      ? "text-background"
                      : "text-foreground"
                    : "text-foreground/70"
                }`}
              >
                {mood.label}
              </span>
            </button>
          ))}
        </div>

        {/* Description */}
        <div className="text-center max-w-lg mx-auto animate-fade-in" key={selectedMood}>
          <p className="text-body-lg font-serif italic">{currentMood.description}</p>
        </div>
      </div>
    </section>
  );
};

export default MoodSelector;
