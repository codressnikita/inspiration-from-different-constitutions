"use client";
import { ChevronsLeft } from "lucide-react";

export default function ActionBar({
  showCountries,
  showTopics,
  showAlternateConstitutions,
  toHome,
}) {
  // Conditionally set the left button when needed
  const leftButton =
    showCountries || showTopics || showAlternateConstitutions
      ? {
          text: "Back",
          icon: ChevronsLeft,
          onClick: toHome,
        }
      : null;

  // Return null if no button should be rendered
  if (!leftButton) {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        className="bg-white text-gray-700 px-5 py-3 rounded-full flex items-center shadow-2xl hover:shadow-3xl transition-shadow duration-300 transform hover:scale-105 text-lg font-semibold"
        onClick={leftButton.onClick}
      >
        <leftButton.icon className="h-6 w-6 mr-2" />
        {leftButton.text}
      </button>
    </div>
  );
}
