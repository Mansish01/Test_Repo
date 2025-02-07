import React, { useState, useEffect, useRef } from "react";
import { Heart } from "lucide-react";

const ValentineProposal = () => {
  const [accepted, setAccepted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [noButtonStyle, setNoButtonStyle] = useState({
    position: { x: 0, y: 0 },
    isMoving: false,
  });

  const containerRef = useRef(null);
  const noButtonRef = useRef(null);

  const handleYes = () => {
    setAccepted(true);
    setShowConfetti(true);
  };

  const moveNoButton = () => {
    if (!containerRef.current || !noButtonRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const button = noButtonRef.current.getBoundingClientRect();

    const maxX = container.width - button.width - 40;
    const maxY = container.height - button.height - 40;

    const newX = Math.min(Math.max(20, Math.random() * maxX), maxX);
    const newY = Math.min(Math.max(20, Math.random() * maxY), maxY);

    setNoButtonStyle({
      position: { x: newX, y: newY },
      isMoving: true,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 flex items-center justify-center">
      <div
        ref={containerRef}
        className="relative flex flex-col justify-center items-center w-full max-w-2xl min-h-[600px] text-center p-8 bg-white/30 rounded-2xl backdrop-blur-sm mx-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-8 animate-bounce">
          Will you be my Valentine? 💝
        </h1>

        <div className="mb-8 h-60 w-60 flex items-center justify-center">
          <img
            src="images/1738599496855.jpg"
            alt="Cute Valentine"
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>

        {!accepted && (
          <div className="relative h-32 flex flex-col justify-between items-center">
            <button
              onClick={handleYes}
              className="bg-pink-500 mt-5 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-xl font-semibold transform transition hover:scale-110"
            >
              Yes! 💖
            </button>

            <div
              className="absolute left-0 top-6 p-8 transition-all duration-500 ease-in-out"
              style={{
                transform: `translate(${noButtonStyle.position.x}px, ${noButtonStyle.position.y}px)`,
              }}
              onMouseEnter={moveNoButton}
              >
              <button
                ref={noButtonRef}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-full text-xl font-semibold transition-transform duration-200 ease-in-out hover:scale-105"
              >
                No
              </button>
            </div>
          </div>
        )}

        {accepted && (
          <div className="text-3xl text-pink-600 font-bold mt-8 animate-fade-in">
             I love you my dear! 💕
            <p className="text-[25px] text-pink-600 font-bold mt-8 animate-fade-in">
              Of course, the amount of love I have for you cannot be written down into words my love,
              but writing it to let you know, how grateful I am for everything that you have provided
              me with.
              I could never have expected that you would come to my life and fill up my lfie with 
              shining stars. At first when you texted me my only thought was "Junior baini hola, kunai help
              chaiyeko hoki vanera haha"and I was guiding you, telling you that educational stuff haha.

              But as we continued to talk, I came to know how amazing you are, and how perfect of a person you 
              actually are. Honestly, I wasnt in the state of falling in love and having a partner, but your 
              kindness, love and care melted my heart right away. Next time, I realized I had completely fallen 
              in love with you to the limits beyound this world.

              Within a short span of time, I felt from my inner self, that you are the one anf you are my soulmate.
              Usually, it should take longer time to reach the state, where we are now, but to reach to such extent 
              of loving and I kept thinking over thd, that "we are meant to be together" thats why we are so 
              comfortable in short amount of time.

              I alwaya believed every action, every thing has a meaning in life so, was your unexpected arrival in 
              my life. The saying "everything happens for a reason doesn't hold true in every condition because, sometimes
              some things can happen even for a much greater cause.", So i believe this happend for a much greater cause, 
              to marry you, to spend rest of the life with you happily, to cherish every moment in life with you my sweetheart.

              You, mero kanxo,  are special in every way. You make me feel like, "yes, boys are also meant to be loved unconditionally, 
              they are also meant to be treated with kindness and love." Everyone tells boys should be tough, strong hearted 
              but only a man in love knows how soft of a corner he has for the love of his life and so do I have for you my dear.

              I might be tough for the world, but for you, mero kanxo, I am always a soft hearted person. I promise you to love
              you unconditionally at everty suitation. I will be there for you no matter the  circumstances and will 
              always support you and care for you my babe and this spark and energy is not only for the beginning 
              of the relationship but for the eternity, even at the times I get old. As long as you are with me, I will
              keep  this same spark in love. I will never let you feel, like our relationship has grown unexciting.
              Today, tomorrow and forever, I am gonna love you even more and more mero kanxo.

              I could write a novel about you and our love, but not a writing in this world could reflect the vastness
              of our love. I could have told you this thing in person and I will as well but while tellinf in words this way,
              I can dive to much deeper depth of expression.

              The extremeness of my love for you is obviously seen in action, so in this written or spoken way is just
              the same love being expressed in another way.

              And lastly, I thank you mero kanxo, for coming into my life and making my life so beautiful and like a 
              heaven. You are the perfect wife for me, perfect mother to my childrens and a "perfect buhari" for my home.

              Upto this point you might have gotten a bit emotional mero kanxo so, let me tell you one interesting thing.
              Actually first I wrote this all in paper and you know how bad is my handwriting. So, when I had to type this
              all into the website "k lekheko maile vanera nai kei words bhuji rako theyena hahaha".

              Lastly, I love you my dear wifeee, to infinity and back and I will always mero kanxo. 
              "I am here for you always mero kanxo."
            </p>
          </div>
        )}

        {/* Enhanced Raining Hearts Animation */}
        {accepted && (
          <div className="fixed inset-0 pointer-events-none">
            {Array.from({ length: 40 }).map((_, index) => (
              <Heart
                key={index}
                className="absolute text-pink-500 animate-heart-rain"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-${Math.random() * 20}%`,
                  transform: `scale(${0.5 + Math.random()})`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                  opacity: 0.7 + Math.random() * 0.3,
                }}
                size={24}
              />
            ))}
          </div>
        )}

        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none">
            {Array.from({ length: 50 }).map((_, index) => (
              <div
                key={index}
                className="absolute w-2 h-2 rounded-full animate-fall"
                style={{
                  left: `${Math.random() * 100}%`,
                  backgroundColor: `hsl(${Math.random() * 360}, 100%, 70%)`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes heart-rain {
            0% {
              transform: translate(0, -10%) rotate(0deg);
              opacity: 1;
            }
            50% {
              transform: translate(${Math.random() * 100 - 50}px, 50vh) rotate(${Math.random() * 360}deg);
              opacity: 0.8;
            }
            100% {
              transform: translate(${Math.random() * 200 - 100}px, 100vh) rotate(${Math.random() * 720}deg);
              opacity: 0;
            }
          }

          .animate-heart-rain {
            animation: heart-rain 3s linear infinite;
          }

          @keyframes fall {
            0% {
              transform: translateY(-10vh) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotate(360deg);
              opacity: 0;
            }
          }

          .animate-fall {
            animation: fall 3s linear infinite;
          }

          .animate-fade-in {
            animation: fadeIn 0.5s ease-in forwards;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ValentineProposal;