"use client";
import { useEffect, useState } from "react";
import { KeyboardKey, Tsoom } from "./components";
import { InfiniteMovingCards } from "@/components/ui/infinite";
import Image from "next/image";
import { LayoutGrid } from "@/components/ui/layout";

const data = ["h", "e", "l", "l", "o"];

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (data.includes(key)) {
        handleClick(key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const modalhandler = () => {
    setModalOpen(!modalOpen);
  };
  const handleClick = (letter: string) => {
    modalhandler();
    console.log("Clicked letter:", letter);
  };

  return (
    <div className="h-full flex items-center justify-center flex-col w-screen   p-10">
      <p className="text-7xl text-white font-semibold bg-gradient-to-r from-[#fa71f7] to-[#e90c7e] px-2">I LOVE YOU MY JAAHNAA {'<3'}</p>
      <LayoutGrid cards={cards} />
      <InfiniteMovingCards
        className="bg-black overflow-hidden "
        items={loveTheory}
        direction="right"
        speed="slow"
      />
      <Tsoom isOpen={modalOpen} onClose={modalhandler} />
    </div>
  );
}

const loveTheory = [
  {
    quote: "Every moment with you feels like the best of times.",
    name: "You",
    title: "Our Love Story",
  },
  {
    quote:
      "To love you, or not to love you? There's no question. My heart chose you long ago.",
    name: "You",
    title: "Endless Love",
  },
  {
    quote:
      "In your eyes, I see my world. Everything feels like a beautiful dream.",
    name: "You",
    title: "Dreams of Us",
  },
  {
    quote: "It’s universally known that my heart is hopelessly yours.",
    name: "You",
    title: "Forever and Always",
  },
  {
    quote:
      "Call me yours. Some days ago—or perhaps forever—I realized there's nowhere I'd rather be.",
    name: "You",
    title: "My Journey to You",
  },
];
{
  /* <div className="flex flex-wrap gap-8 max-w-[400px]">
        {data.map((e, i) => (
          <KeyboardKey onClick={() => handleClick(e)} key={i} letter={e}>
            {e}
          </KeyboardKey>
        ))}
      </div> */
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Together in Every Step
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Just like a cozy house in the woods, our love feels like a haven,
        sheltered from the chaos of the world, warm and serene.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Love Above All
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Our love feels like a home in the clouds, untouched, where every view is
        a reminder of how high we've soared together.
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        A Heart Blooming
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Like greenery surrounding us, our love grows beautifully, filling every
        corner with life, peace, and endless joy.
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Flowing Together
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        By the river of life, we find calm and contentment, flowing together
        through every season, forever serene and steady.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-4",
    thumbnail: " /moon.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: " /love.jpeg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: " /love1.jpeg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    thumbnail: " /love2.jpeg",
  },
];
