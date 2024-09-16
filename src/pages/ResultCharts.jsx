import React, { useContext } from "react";

import { Context } from "../Context/MyContext";
import Barcharts from "../components/Barcharts";

const ResultCharts = () => {
  const { MBresult } = useContext(Context);

  const muscleBreakdownData = MBresult.breakdowns;

  console.log(MBresult.breakdowns);

  return (
    <>
      <section className="w-screen h-[60vh]  flex flex-col justify-center items-center ">
        <h1>Muscle Breakdowns</h1>
        <Barcharts MBData={muscleBreakdownData} />
      </section>
    </>
  );
  // }
};

export default ResultCharts;
