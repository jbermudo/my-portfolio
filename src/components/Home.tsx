import React, { useState, useEffect } from "react";

const Home: React.FC = () => {
  const aText = React.useMemo(
    () => [
      "Hello, I'm Jesus Bermudo, a dedicated and versatile Full Stack Web Developer with a passion for building dynamic, user-friendly web applications from the ground up. With a keen eye for detail and a deep understanding of both front-end and back-end technologies.",
    ],
    []
  );

  const bText = React.useMemo(
    () => [
      "I specialize in transforming complex ideas into seamless, functional digital experiences. Whether it's developing responsive user interfaces, crafting efficient server-side logic, or optimizing performance, I strive to deliver innovative solutions that not only meet client needs but also push the boundaries of modern web development. Let's build something remarkable together.",
    ],
    []
  );

  const [iIndex, setIIndex] = useState(0);
  const [iTextPos, setITextPos] = useState(0);
  const [iArrLength, setIArrLength] = useState(aText[0].length);
  const [sContents, setSContents] = useState("");

  const [jTextPos, setJTextPos] = useState(0);
  const [jArrLength, setJArrLength] = useState(bText[0].length);
  const [sSecondContents, setSSecondContents] = useState("");

  const [firstTextFinished, setFirstTextFinished] = useState(false);
  const [secondTextFinished, setSecondTextFinished] = useState(false); // New state to track second text completion

  const iSpeed = 100; // Time delay for typing out

  // Effect for first text block
  useEffect(() => {
    const typewriter = () => {
      const destinationText = aText[iIndex].substring(0, iTextPos) + "_";
      setSContents(destinationText);

      if (iTextPos === iArrLength) {
        setFirstTextFinished(true); // Mark the first text as finished
        setTimeout(() => {
          setITextPos(0); // Reset text position
          setIIndex((prevIndex) => {
            const newIndex = prevIndex + 1;
            if (newIndex !== aText.length) {
              setIArrLength(aText[newIndex].length);
            }
            return newIndex;
          });
        }, 1000); // Pause for 1 second after finishing typing
      } else {
        setITextPos((prevPos) => prevPos + 1);
      }
    };

    if (iIndex < aText.length) {
      const timeout = setTimeout(typewriter, iSpeed);
      return () => clearTimeout(timeout); // Cleanup timeout
    }
  }, [iTextPos, iIndex, aText, iArrLength]);

  // Effect for second text block
  useEffect(() => {
    if (firstTextFinished && !secondTextFinished) {
      const typewriterSecond = () => {
        const destinationSecondText = bText[0].substring(0, jTextPos) + "_";
        setSSecondContents(destinationSecondText);

        if (jTextPos === jArrLength) {
          setSecondTextFinished(true); // Mark the second text as finished
          setTimeout(() => {
            setJTextPos(0); // Reset text position
          }, 1000); // Pause for 1 second after finishing typing
        } else {
          setJTextPos((prevPos) => prevPos + 1);
        }
      };

      const timeout = setTimeout(typewriterSecond, iSpeed);
      return () => clearTimeout(timeout); // Cleanup timeout
    }
  }, [firstTextFinished, jTextPos, bText, jArrLength, secondTextFinished]);

  return (
    <>
      <div className="flex items-center justify-between p-10">
        <div className="w-full">
          <div>img</div>
        </div>
        <div className="w-full uppercase inria-sans-regular text-[25px] tracking-wider h-screen flex justify-start p-10">
          <div className="p-3 flex flex-col space-y-2">
            <div className="typing-container bg-black p-5">
              <span className="typing-text bg-black text-white space-x-2">
                {sContents}
              </span>
            </div>
            <div
              className={`typing-container ${
                firstTextFinished ? "bg-gray-400" : "hidden"
              } text-white p-5`}
            >
              <span className="typing-text space-x-2">{sSecondContents}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
