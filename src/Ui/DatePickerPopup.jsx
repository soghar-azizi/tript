
import { useState } from "react";
import { DayPicker, getDefaultClassNames } from "@daypicker/react";
import "@daypicker/react/style.css";

import { DateButton } from "./DateButton";
import MonthPicker from "./MonthPicker";
import CloseBtn from "./CloseBtn";

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export default function DatePickerPopup({
  setCheckIn,
  dateValue,
  setDateValue,
}) {
  const [activeTab, setActiveTab] = useState("Date");
  const [activeDay, setActiveDay] = useState("+ Exact Date");
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const defaultClassNames = getDefaultClassNames();
  const dateBTN = ["+ Exact Date", "+ 2 Days", "+ 3 Days", "+ 7 Days"];
  function handleDateButton(btn) {
    setActiveDay(btn);

    let days = 0;

    if (btn === "+ 2 Days") {
      days = 2;
    } else if (btn === "+ 3 Days") {
      days = 3;
    } else if (btn === "+ 7 Days") {
      days = 7;
    }

    const checkInDate = addDays(today, days);

    setDateValue({
      from: checkInDate,
      to: undefined,
    });
  }

  return (
    <div
      className="
        absolute top-full left-1/2 -translate-x-1/2 mt-2
        z-[100] w-[95%] md:w-[650px]
        bg-white rounded-2xl
        shadow-[0_5px_25px_rgba(0,0,0,0.18)]
        border border-light-grey p-5
      "
    >
      {/* Header */}
      <div className="relative flex justify-center items-center">
        <div className="flex items-center border border-light-grey rounded-full">
          <button
            onClick={() => setActiveTab("Date")}
            className={`
              px-5 py-2 rounded-full text-sm transition
              ${
                activeTab === "Date"
                  ? "bg-primary text-white"
                  : "bg-transparent text-black"
              }
            `}
          >
            Date
          </button>

          <button
            onClick={() => setActiveTab("Flexible")}
            className={`
              px-5 py-2 rounded-full text-sm transition
              ${
                activeTab === "Flexible"
                  ? "bg-primary text-white"
                  : "bg-transparent text-black"
              }
            `}
          >
            Flexible
          </button>
        </div>

        {/* Close button */}
        <CloseBtn onClick={() => setCheckIn(false)} className={"absolute right-1 mb-3 cursor-pointer top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"}/>

      </div>

      {/* Calendar */}
      {activeTab === "Date" && (
        <div className="mt-5">
          <DayPicker
            mode="range"
            defaultMonth={today}
            numberOfMonths={2}
            selected={dateValue}
            disabled={{
              before: today,
            }}
            onSelect={(selectedDate) => {
              setDateValue(selectedDate);
              setActiveDay("");
            }}
            classNames={{
              root: `${defaultClassNames.root} w-full`,
              months: "flex flex-col md:flex-row gap-8 justify-center",

              month: "space-y-4",

              month_caption: "flex items-center justify-between px-2",

              caption_label: "font-medium text-sm",

              button_previous:
                "w-8 h-8 flex items-center justify-center rounded-full hover:bg-light-grey",

              button_next:
                "w-8 h-8 flex items-center justify-center rounded-full hover:bg-light-grey",

              month_grid: "w-full border-collapse",

              weekdays: "flex",

              weekday:
                "w-9 h-9 flex items-center justify-center text-xs text-gray-400",

              week: "flex w-full",

              day: "w-9 h-9 flex items-center justify-center text-sm",

              day_button:
                "w-9 h-9 rounded-full flex items-center justify-center hover:bg-light-grey",

              today: "border border-primary rounded-full",

              selected: "bg-primary text-white rounded-full",

              range_start: "bg-primary text-white rounded-full",

              range_end: "bg-primary text-white rounded-full",

              range_middle: "bg-primary/10 text-black",

              outside: "text-gray-300",
              range_middle: "bg-primary/10 text-black",
              range_start: "bg-primary text-white rounded-full",

              range_end: "bg-primary text-white rounded-full",
            }}
          />
        </div>
      )}
      {/* Date buttons */}
      {activeTab === "Date" && (
        <div className="flex items-center gap-2 mt-3 overflow-x-auto">
          {dateBTN.map((btn) => (
            <DateButton
              key={btn}
              date={btn}
              onClick={() => handleDateButton(btn)}
              active={activeDay === btn}
            />
          ))}
        </div>
      )}

      {activeTab === "Flexible" && <MonthPicker dateValue={dateValue} setDateValue={setDateValue} />}
    </div>
  );
}
