"use client";
import { ChevronsLeft } from "lucide-react";

export default function ActionBar({ showConstituents, backFromConstituent }) {
  let leftButton = null;
  let rightButton = null;

  if (showConstituents) {
    leftButton = {
      text: "Back",
      icon: ChevronsLeft,
      onClick: backFromConstituent,
    };
  }

  if (!leftButton && !rightButton) {
    return null;
  }

  return (
    <div className="bg-blue-600 p-2 flex justify-between">
      {leftButton && (
        <button
          className="bg-blue-700 text-white px-4 py-1 rounded flex items-center"
          onClick={leftButton.onClick}
        >
          {leftButton.icon && <leftButton.icon className="h-5 w-5 mr-2" />}
          {leftButton.text}
        </button>
      )}
      <div className="flex-grow" />
      {rightButton && (
        <button
          className="bg-blue-700 text-white px-4 py-1 rounded flex items-center"
          onClick={rightButton.onClick}
        >
          {rightButton.icon && <rightButton.icon className="h-5 w-5 mr-2" />}
          {rightButton.text}
        </button>
      )}
    </div>
  );
}
