import React from "react";
import {
  Bar,
  BarChart,
  Rectangle,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Barcharts = ({ MBData }) => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={MBData}
          style={{ padding: "20px " }}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 25,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            style={{ fontSize: "small" }}
            tickFormatter={(name) =>
              name.length > 7 ? `${name.substring(0, 7)}...` : name
            }
            interval={0}
            angle={-15}
            textAnchor="end"
            dataKey="name"
          />
          <YAxis style={{ fontSize: "small" }} domain={[0, 1500]} />
          <Tooltip />
          <Legend />
          {/* <Bar
            dataKey="value"
            fill="#82ca9d"
            barSize={50}
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          /> */}
          <Bar
            dataKey="value"
            fill="#82ca9d"
            barSize={30}
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default Barcharts;
