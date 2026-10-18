import { useState } from "react";
import DealBadge from "./DealBadge";

export default function DealCard({
  bgImage,
  rating,
  review,
  viewers,
  name,
  location,
  pricePerNight,
  oldPrice,
  totalPrice,
}) {
  const [click, setClick] = useState(false);
  return (
    <div className="rounded-xl my-7 overflow-hidden hover:shadow-[0px_0px_10px_5px_#bee3f8] ">
      {/* ================= Image ================= */}
      <div
        className="h-35 sm:h-45 md:h-55 lg:h-50 bg-cover bg-center rounded-t-1xl p-6"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Heart button */}
        <span
          className="bg-white rounded-full p-2 w-fit flex justify-self-end items-center justify-center"
          onClick={() => setClick(true)}
        >
          {click ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="19"
              viewBox="0 0 512 512"
            >
              <path
                d="M241 87.1l15 20.7 15-20.7C296 52.5 336.2 32 378.9 32 452.4 32 512 91.6 512 165.1l0 2.6c0 112.2-139.9 242.5-212.9 298.2-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C139.9 410.2 0 279.9 0 167.7l0-2.6C0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1z"
                fill="red"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.74899 18.4991C9.64299 18.4991 9.53696 18.4771 9.43796 18.4321C9.11096 18.2831 1.415 14.7141 0.180999 8.35808C-0.296001 5.89908 0.183005 3.50007 1.46201 1.94207C2.497 0.680069 3.98496 0.00905195 5.76596 5.1954e-05C5.77496 5.1954e-05 5.78396 5.1954e-05 5.79196 5.1954e-05C7.82396 5.1954e-05 9.06301 1.15708 9.74802 2.14208C10.436 1.15308 11.6849 -0.00894805 13.7299 5.1954e-05C15.5119 0.00905195 17.001 0.680069 18.037 1.94207C19.314 3.49907 19.7919 5.89806 19.3139 8.35906C18.0819 14.7151 10.385 18.2851 10.058 18.4331C9.96095 18.4771 9.85499 18.4991 9.74899 18.4991ZM5.79098 1.49908C5.78498 1.49908 5.78002 1.49908 5.77402 1.49908C4.43602 1.50508 3.37604 1.97406 2.62204 2.89306C1.62304 4.11006 1.26202 6.04607 1.65402 8.07207C2.60902 12.9961 8.34199 16.1961 9.74899 16.9141C11.156 16.1961 16.889 12.9961 17.843 8.07207C18.237 6.04507 17.876 4.10906 16.879 2.89306C16.125 1.97506 15.065 1.50705 13.724 1.50005C13.718 1.50005 13.712 1.50005 13.707 1.50005C11.335 1.50005 10.4941 3.87708 10.4601 3.97808C10.3561 4.28108 10.07 4.48705 9.74997 4.48705C9.74797 4.48705 9.74694 4.48705 9.74594 4.48705C9.42494 4.48605 9.13896 4.28106 9.03696 3.97607C9.00396 3.87607 8.16198 1.49908 5.79098 1.49908Z"
                fill="black"
              />
            </svg>
          )}
        </span>
      </div>

      {/* ================= Content ================= */}
      <div className="border-x border-b bg-white border-gray-300 overflow-hidden flex flex-col gap-1.5 p-5">
        {/* Rating */}
        <div>
          <p>
            <span className="text-medium-blue bg-light-blue text-[14px] px-2 py-1 rounded-md font-medium">
              {rating}
            </span>

            <span className="text-dark-blue font-medium text-[12px]">
              {review}
            </span>

            <span className="font-normal text-grey-lighter md:text-[10px]">
              {" "}
              reviews
            </span>
          </p>

          {/* Name */}
          <p>
            <b className="text-black font-semibold">{name}</b>
          </p>

          {/* Location */}
          <p className="text-grey font-medium text-[14px]">{location}</p>
        </div>

        {/* Badge */}
        <DealBadge />

        {/* Price */}
        <div>
          <p className="font-roboto font-normal text-[14px] text-grey-lighter flex justify-self-end gap-2">
            <span>per night</span>

            <span className="text-grey line-through">{oldPrice}</span>

            <span className="text-black">{totalPrice}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
