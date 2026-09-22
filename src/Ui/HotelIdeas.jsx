import { useEffect, useState } from "react";
import { HotelIdeasMobile } from "./GuestThoughtsMobile";
import { Thoughts } from "./Thoughts";
import { testimonials } from "../components/data/UserInfo";

export function HotelIdeas() {
  const [activeIndex, setActiveIndex] = useState(1);

  const radiusX = 60;
  const radiusY = 50;

  function getPosition(index) {
    const angle = (index * 360) / testimonials.length - 90;

    const radians = (angle * Math.PI) / 180;

    return {
      top: `${50 + radiusY * Math.sin(radians)}%`,
      left: `${50 + radiusX * Math.cos(radians)}%`,
    };
  }

  function handleClick(index) {
    setActiveIndex(index);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((currentIndex) => {
        return (currentIndex + 1) % testimonials.length;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const activePerson = testimonials[activeIndex];
return (
  <>
    {/* Desktop */}
    <div className="hidden md:block">
      <div className="bg-medium-grey rounded-lg flex flex-col items-center w-[90%] h-137 my-5 mx-auto py-5">
        <h4 className="mb-20 md:text-[16px] font-Popins text-[#6B7280]">
          Let's see what people think of Tripto
        </h4>

        <div className="relative w-140 h-87">
          {testimonials.map((person, index) => {
            const positionIndex =
              (index - activeIndex + testimonials.length) % testimonials.length;

            const position = getPosition(positionIndex);

            const isActive = index === activeIndex;

            return (
              <button
                key={person.id}
                type="button"
                onClick={() => handleClick(index)}
                className={`
                  absolute
                  transition-all
                  duration-1000
                  ease-in-out
                  ${isActive ? "w-20 h-20 z-20" : "w-14 h-14 z-10"}
                `}
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
    </div>

    {/* Mobile */}
    <div className="block md:hidden">
      <HotelIdeasMobile />
    </div>
  </>
);
  // return (
  //   {"w-[540px]"? <div className="bg-medium-grey rounded-lg flex flex-col items-center w-[90%] h-[550px] my-5 mx-auto py-5">
  //     {/* Title */}
  //     <h4 className="mb-20 md:text-[16px] font-Popins text-[#6B7280]">
  //       Let's see what people think of Tripto
  //     </h4>

  //     {/* People Circle */}
  //     <div className="relative w-150 h-87">
  //       {testimonials.map((person, index) => {
  //         const positionIndex =
  //           (index - activeIndex + testimonials.length) % testimonials.length;

  //         const position = getPosition(positionIndex);

  //         const isActive = index === activeIndex;

  //         return (
  //           <button
  //             key={person.id}
  //             type="button"
  //             onClick={() => handleClick(index)}
  //             className={`
  //               absolute
  //               transition-all
  //               duration-1000
  //               ease-in-out
  //               ${isActive ? "w-20 h-20 z-20" : "w-14 h-14 z-10"}
  //             `}
  //             style={{
  //               top: position.top,
  //               left: position.left,
  //               transform: "translate(-50%, -50%)",
  //             }}
  //           >
  //             <img
  //               src={person.image}
  //               alt={person.name}
  //               className="w-full h-full rounded-full object-cover"
  //             />
  //           </button>
  //         );
  //       })}

  //       {/* Active person's comment */}
  //       <Thoughts person={activePerson} />
  //     </div>
  //   </div>:<GuestThoughtsMobile />}
   
  // );
}
