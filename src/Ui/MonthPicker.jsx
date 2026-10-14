import { DateButton } from "./DateButton";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";


const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function MonthPicker({ setDateValue }) {
  const today = new Date();
  const day = today.getDay();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

const [selectedMonth, setSelectedMonth] = useState({
  month: currentMonth,
  year: currentYear,
});

const [duration, setDuration] = useState();

const totalMonths = 24;

function handleWeekndBtn() {
  const firstDay = new Date(selectedMonth.year, selectedMonth.month, 1);

  const dayOfWeek = firstDay.getDay();

  const daysUntilSaturday = (6 - dayOfWeek + 7) % 7;

  const from = new Date(firstDay);
  from.setDate(from.getDate() + daysUntilSaturday);

  const to = new Date(from);
  to.setDate(to.getDate() + 1);

  setDuration({
    from,
    to,
  });

  setDateValue({
    from,
    to,
  });

  console.log({
    from,
    to,
  });
}
function handleWeek() {
  const from = new Date(selectedMonth.year, selectedMonth.month, 1);

  const to = new Date(from);

  to.setDate(to.getDate() + 6);

  setDuration({
    from,
    to,
  });

  setDateValue({
    from,
    to,
  });

  console.log({
    from,
    to,
  });
}
function handleMonth() {
  const from = new Date(
    selectedMonth.year,
    selectedMonth.month,
    1
  );

  const to = new Date(
    selectedMonth.year,
    selectedMonth.month + 1,
    0
  );

  setDuration({
    from,
    to,
  });

  setDateValue({
    from,
    to,
  });

  console.log({
    from,
    to,
  });
}
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-5">
      <h2 className="text-grey font-roboto">
        How long would you like to stay?
      </h2>

      <div className="flex justify-center items-center font-roboto text-grey gap-2.5">
        <DateButton date="Weekend" onClick={handleWeekndBtn} />
        <DateButton date="Week" onClick={handleWeek} />
        <DateButton date="Month" onClick={handleMonth}/>
      </div>

      <h3 className="font-roboto text-grey">Do Anything</h3>

      <div className="w-full">
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={4}
          spaceBetween={8}
          initialSlide={0}
          className="
            mySwiper
            [&_.swiper-button-next]:!w-6
            [&_.swiper-button-next]:!h-6
            [&_.swiper-button-prev]:!w-6
            [&_.swiper-button-prev]:!h-6
          "
        >
          {Array.from({ length: totalMonths }).map((_, index) => {
            // 0 = October 2026
            // 1 = November 2026
            // 2 = December 2026
            // 3 = January 2027
            const monthIndex = (currentMonth + index) % 12;

            const year = currentYear + Math.floor((currentMonth + index) / 12);

            const month = months[monthIndex];

            return (
              <SwiperSlide key={`${month}-${year}`}>
                <MonthCalenderCard
                  currentMonthName={month}
                  getFullYear={year}
                  isSelected={
                    selectedMonth.month === monthIndex &&
                    selectedMonth.year === year
                  }
                  isPast={false}
                  onClick={() => {
                    setSelectedMonth({
                      month: monthIndex,
                      year: year,
                    });
                  }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

function MonthCalenderCard({
  currentMonthName,
  getFullYear,
  onClick,

  isPast,
  isSelected,
}) {
  return (
    <div
      onClick={isPast ? undefined : onClick}
      className={`
        border py-10 px-5 rounded-lg
        flex flex-col items-center justify-center

        ${
          isSelected
            ? "text-primary border-primary"
            : "border-grey-lighter text-grey"
        }

        ${
          isPast
            ? "border-light-grey text-light-grey cursor-not-allowed"
            : "cursor-pointer"
        }
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5" />
      </svg>

      <p>{currentMonthName}</p>

      <p className="text-grey-lighter">{getFullYear}</p>
    </div>
  );
}
