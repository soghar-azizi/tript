

import { user } from "../components/data/UserInfo";
import Logo from "../assets/imges/Logo.png";
import SearchBar from "./SearchBar";

const { avatar, country } = user;

export default function Header({ type = "home" }) {
  console.log(type);
  return (
    <div className="w-[90%] mx-auto flex items-center justify-between my-3">

      {/* Logo */}
      <div className="w-[30%]">
        <img src={Logo} alt="Logo" className="w-25" />
      </div>

      {/* SearchBar */}
      {type === "search" && (
        <div className="flex-1 flex justify-center">
          <SearchBar />
        </div>
      )}

      {/* Right side */}
      <div className="w-[30%] flex justify-end items-center gap-4">

        {/* Currency */}
        <div className="flex items-center gap-2">
          <img src={country} alt="country" />
          <p className="font-medium text-[16px] text-blue-600">
            USD
          </p>
        </div>

        {/* Login or Profile */}
        {type === "login" ? (
          <div className="bg-primary text-white rounded px-4 py-2">
            Login
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.2551 20.8615C32.871 15.908 28.8776 12 24.004 12C19.1304 12 15.137 15.908 14.7529 20.8615C13.1924 21.1602 12 22.579 12 24.2799V25.5411C12 27.4661 13.5045 29.026 15.3611 29.026H16.7696C17.2097 29.026 17.5699 28.6526 17.5699 28.1962V21.6248C17.5699 21.1685 17.2097 20.7951 16.7696 20.7951H16.3535C16.7616 16.7875 20.0347 13.6595 23.996 13.6595C27.9573 13.6595 31.2384 16.7875 31.6385 20.7951H31.2224C30.7823 20.7951 30.4221 21.1685 30.4221 21.6248V28.1962C30.4221 28.6526 30.7823 29.026 31.2224 29.026H31.3585V29.2334C31.3585 30.6522 30.2461 31.8139 28.8696 31.8139H27.021C26.997 30.9675 26.3248 30.2872 25.5005 30.2872H22.1234C21.2831 30.2872 20.6029 30.9924 20.6029 31.8636V33.4235C20.6029 34.2947 21.2831 35 22.1234 35H25.5005C26.3248 35 26.997 34.3196 27.021 33.4733H28.8696C31.1264 33.4733 32.959 31.5732 32.959 29.2334V28.9928C34.6636 28.8185 36 27.3499 36 25.5411V24.2799C36 22.5707 34.8076 21.1602 33.2471 20.8615H33.2551Z"
                fill="#0057FF"
              />
            </svg>

            <img src={avatar} alt="profile" />
          </div>
        )}
      </div>
    </div>
  );
}
;



