import type { NextPage } from "next";
import canva from '../assets/canva.png'
import Image from "next/image";
export type CompanyLogoType = {
  className?: string;
};

const CompanyLogo: NextPage<CompanyLogoType> = ({ className = "" }) => {
  return (
    <div className={`h-12 w-12 relative ${className}`}>
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%]" />
      <Image
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
        loading="lazy"
        alt=""
        src={canva}
      />
    </div>
  );
};

export default CompanyLogo;