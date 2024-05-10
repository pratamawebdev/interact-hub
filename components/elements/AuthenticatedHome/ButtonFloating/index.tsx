import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const ButtonFloating: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  if (pathname === "/" || pathname.startsWith("/user-activities")) {
    return (
      <div className="flex items-center justify-center">
        <div
          onClick={onClick}
          className="fixed z-50 right-4 bottom-8 cursor-pointer p-2 bg-[#1D9BF0] flex items-center justify-center rounded-full "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={"../images/plus.svg"}
            width={35}
            height={35}
            alt="plus icon"
          />
        </div>
        <div
          className={`fixed z-40 ${
            isHovered
              ? "opacity-100 transition-all duration-500 -translate-x-3"
              : "opacity-0"
          } text-[14px] px-7 hidden font-semibold md:flex items-center transform text-[#1D9BF0] h-[49px] right-8 bottom-8`}
        >
          Create post?
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ButtonFloating;
