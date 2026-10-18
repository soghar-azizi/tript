import Booking from "../../assets/images/booking.png";
import Fees from "../../assets/images/fees.png";
import Flexibilty from "../../assets/images/flexibility.png";
import Vector from "../../assets/images/vector.png";

export function Facilities() {
  return (
    <section className="w-full py-15 mt-19 font-roboto ">
      {/* Title */}
      <h1 className="text-center font-semibold md:text-3xl text-black font-roboto">
        Why Travellers Trust Tripto
      </h1>

      {/* Facilities */}
      <div className="w-[90%]  mx-auto md:mt-5 flex flex-col md:flex-row items-center my-5 gap-12">
        {/* First */}
        <div className="relative flex-1 w-full">
          <div className="flex flex-col items-center text-center gap-3">
            <img src={Fees} alt="No hidden fees" className=" object-contain" />

            <h2 className="font-semibold text-[24px] text-dark-grey">No hidden fees</h2>

            <p className="text-grey">Transparent pricing with no hidden fees</p>
          </div>

          <img
            src={Vector}
            alt=""
            className="hidden md:block absolute bottom-20 -right-40 max-w-70"
          />
        </div>

        {/* Second */}
        <div className="relative flex-1 w-full">
          <div className="flex flex-col items-center text-center gap-3">
            <img
              src={Booking}
              alt="Instant booking"
              className=" object-contain"
            />

            <h2 className="font-semibold text-[24px] text-dark-grey">Instant booking</h2>

            <p className="text-grey">Get confirmation right after you reserve.</p>
          </div>

          <img
            src={Vector}
            alt=""
            className="hidden md:block absolute bottom-20 -right-40 max-w-70"
          />
        </div>

        {/* Third */}
        <div className="flex-1 w-full">
          <div className="flex flex-col items-center text-center gap-3">
            <img
              src={Flexibilty}
              alt="Flexibility"
              className="object-contain"
            />

            <h2 className="font-semibold text-[24px] text-dark-grey">Flexibility</h2>

            <p className="text-grey">
              Flexible options with free cancellation on many listings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
