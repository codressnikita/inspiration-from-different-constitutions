"use client";
import { ArchiveIcon, ChevronsLeft, Users2Icon } from "lucide-react";

export default function ActionBar({
  showCountries,
  showTopics,
  toHome,
  handleTopicsClick,
  handleCountriesClick,
  className,
}) {
  let leftButton = null;
  let rightButton = null;

  if (showCountries) {
    leftButton = {
      text: "Back",
      icon: ChevronsLeft,
      onClick: toHome,
    };
    rightButton = {
      text: "Switch to Topics View",
      icon: ArchiveIcon,
      onClick: handleTopicsClick,
    };
  }

  if (showTopics) {
    leftButton = {
      text: "Back",
      icon: ChevronsLeft,
      onClick: toHome,
    };
    rightButton = {
      text: "Switch to Countries View",
      icon: Users2Icon,
      onClick: handleCountriesClick,
    };
  }

  if (!leftButton && !rightButton) {
    return null;
  }

  return (
    <div className={`bg-blue-600 p-2 flex justify-between ${className}`}>
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
