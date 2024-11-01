import { ReactNode, useEffect, useState } from "react";

export const KeyboardKey = ({
  children,
  onClick,
  letter,
}: {
  children: ReactNode;
  onClick: () => void;
  letter: string;
}) => {
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === letter.toLowerCase()) {
        setPressed(true);
        onClick();
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === letter.toLowerCase()) {
        setPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [letter, onClick]);

  const handleMouseDown = () => {
    setPressed(true);
    onClick();
  };

  const handleMouseUp = () => setPressed(false);

  return (
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setPressed(false)} // Handles the case where the mouse leaves the button
      className={`flex-col before:shadow-[inset_] before:absolute before:bg-gradient-to-r before:border-b-[#0004] before:border-b before:content-[] before:from-[#232323] before:to-[#4a4a4a] inline-flex bg-gradient-to-t shadow-[inset_0_-8px_8px_rgba(0,0,0,0.15),inset_0_-8px_8px_rgba(0,0,0,0.25),0_0_0_2px_rgba(0,0,0,0.75),10px_20px_25px_rgba(0,0,0,0.4)] rounded-md focus:outline items-center focus:outline-white focus:outline-1 h-20 w-20 from-[#282828] to-[white] p-4 ${
        pressed ? "translate-x-1 translate-y-1" : ""
      }`}
    >
      {children}
    </button>
  );
};
