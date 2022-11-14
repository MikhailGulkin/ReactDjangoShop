import React, { useState } from "react";
import axios from "axios";

import { StaffType } from "@/@types/pages/Staff";

import { Staff } from "@/components/pages/Home/Staff";
import { StaffSkeleton } from "@/components/pages/Home/Staff/Skeleton";

export const MainTeam: React.FC = () => {
  const [staff, setStaff] = useState<StaffType[]>([]);
  const getStaff = async () => {
    const { data } = await axios.get("http://localhost:8000/staff/all-staff");
    setStaff(data.results);
  };
  React.useEffect(() => {
    getStaff();
  }, []);
  const skeleton = [
    [...new Array(4)].map((_, index) => <StaffSkeleton key={index} />),
  ];

  const staffComp = [staff.map((obj) => <Staff key={obj.pk} {...obj} />)];
  return (
    <section className="text-gray-600 body-font flex-grow">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {staff.length ? staffComp : skeleton}
        </div>
      </div>
    </section>
  );
};
