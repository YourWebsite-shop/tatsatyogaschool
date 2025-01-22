import React, { ReactNode } from "react";
import { MdArrowOutward } from "react-icons/md";

const Button = ({ children }: { children: string | ReactNode }) => {
    return (
        <div className="group flex gap-1 items-center w-fit relative hover:cursor-pointer">
            <div className="bg-[#E67825] p-3 rounded-full absolute -z-10">
                <MdArrowOutward className="text-white" />
            </div>
            <button className="bg-[#E67825] rounded-full px-4 py-2 transform transition-transform duration-300 group-hover:translate-x-11 text-white">
                {children}
            </button>
            <div className="bg-[#E67825] p-3 rounded-full">
                <MdArrowOutward className="text-white" />
            </div>
        </div>
    );
};

export default Button;