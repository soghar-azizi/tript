import { useState } from "react";
import { testimonials } from "../data/UserInfo";

export function HotelIdeas() {
  const [activeIndex, setActiveIndex] = useState(1);

  const positions = [
    { top: "10%", left: "10%" },
    { top: "15%", left: "50%" }, // TOP
    { top: "10%", left: "90%" },
    { top: "45%", left: "-15%" },
    { top: "60%", left: "120%" },
    { top: "105%", left: "12%" },
    { top: "105%", left: "75%" },
  ];

  function handleClick(index) {
    setActiveIndex(index);
  }

  const activePerson = testimonials[activeIndex];

  return (
    <div className="bg-medium-grey rounded-lg flex flex-col items-center w-[90%] mx-auto py-10">
      <h4 className="my-3 md:text-[16px] font-Popins text-[#6B7280]">
        Let's see what people think of Tripto
      </h4>

      <div className="relative w-[600px] h-[300px]">
        {testimonials.map((person, index) => {
          const positionIndex =
            (index - activeIndex + 1 + testimonials.length) %
            testimonials.length;

          const position = positions[positionIndex];

          const isActive = index === activeIndex;

          return (
            <button
              key={person.id}
              type="button"
              onClick={() => handleClick(index)}
              className={`absolute transition-all duration-500 ${
                isActive ? "w-20 h-20 z-20" : "w-14 h-14 z-10"
              }`}
              style={{
                top: position.top,
                left: position.left,
                transform: "translate(-50%, -50%)",
              }}
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full rounded-full object-cover"
              />
            </button>
          );
        })}

        <Thoughts person={activePerson} />
      </div>
    </div>
  );
}
function Thoughts({ person }) {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%]">
      <div className="flex flex-col justify-center items-center my-2.5">
        <div className="flex items-center justify-center gap-3">
          {/* Left quotation */}
          <svg
            width="51"
            height="44"
            viewBox="0 0 51 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path
              opacity="0.2"
              d="M51 44H31.5C29.7857 36.5593 28.9286 29.9772 28.9286 24.2537C28.9286 8.08455 36.2143 0 50.7857 0V9.44391C43.9286 9.44391 40.5 13.1642 40.5 20.6049V25.5415H51V44ZM22.0714 44H2.57143C0.857143 36.5593 0 29.9772 0 24.2537C0 8.08455 7.28572 0 21.8571 0V9.44391C15 9.44391 11.5714 13.1642 11.5714 20.6049V25.5415H22.0714V44Z"
              fill="#0057FF"
            />
          </svg>

          {/* Text */}
          <p className="text-center">{person.comment}</p>

          {/* Right quotation */}
          <svg
            width="51"
            height="44"
            viewBox="0 0 51 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path
              opacity="0.2"
              d="M0 44H19.5C21.2143 36.5593 22.0714 29.9772 22.0714 24.2537C22.0714 8.08455 14.7857 0 0.214291 0V9.44391C7.07143 9.44391 10.5 13.1642 10.5 20.6049V25.5415H0V44ZM28.9286 44H48.4286C50.1429 36.5593 51 29.9772 51 24.2537C51 8.08455 43.7143 0 29.1429 0V9.44391C36 9.44391 39.4286 13.1642 39.4286 20.6049V25.5415H28.9286V44Z"
              fill="#0057FF"
            />
          </svg>
        </div>

        {/* Person information */}
        <div className="text-center mt-8">
          <p className="font-semibold">{person.name}</p>

          <div className="flex items-center justify-center gap-2">
            <img src={person.flag} alt={person.country} className="w-5" />

            <span>{person.country}</span>
          </div>
        </div>
      </div>
    </div>
  );
}