import React from "react";

import { Facebook } from "@/components/ui/svg/Facebook";
import { Twitter } from "@/components/ui/svg/Twitter";
import { Qiscus } from "@/components/ui/svg/Qiscus";

import { StaffType } from "@/@types/pages/Staff";

export const Staff: React.FC<StaffType> = ({
  person_image,
  first_name,
  second_name,
  position,
}) => {
  return (
    <div className="p-4 lg:w-1/2">
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <img
          alt="team"
          className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
          src={person_image}
        />
        <div className="flex-grow sm:pl-8">
          <h2 className="title-font font-medium text-lg text-gray-900">
            {first_name} {second_name}
          </h2>
          <h3 className="text-gray-500 mb-3">{position}</h3>
          <p className="mb-4">
            DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
            vaporware.
          </p>
          <span className="inline-flex">
            <Facebook width={20} height={20} />
            <Twitter stringClass={"ml-2"} width={20} height={20} />
            <Qiscus stringClass={"ml-2"} width={20} height={20} />
          </span>
        </div>
      </div>
    </div>
  );
};
