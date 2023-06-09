import { ResponsiveLine } from "@nivo/line";

type propsType = {
  price: {
    id: string;
    data: {
      x: string;
      y: number;
    }[];
  }[];
  useMesh?: boolean;
};

const Chart = ({ price, useMesh = true }: propsType) => {
  return (
    <ResponsiveLine
      data={price}
      margin={{ top: 50, right: 150, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      // yScale={{
      //   type: "linear",
      //   min: "auto",
      //   max: "auto",
      //   stacked: true,
      //   reverse: false,
      // }}
      yFormat=" >-.3"
      // axisTop={null}
      // axisRight={null}
      // axisBottom={{
      //   orient: "bottom",
      //   tickSize: 5,
      //   tickPadding: 5,
      //   tickRotation: 0,
      //   legend: "transportation",
      //   legendOffset: 36,
      //   legendPosition: "middle",
      // }}
      // axisLeft={{
      //   orient: "left",
      //   tickSize: 5,
      //   tickPadding: 5,
      //   tickRotation: 0,
      //   legend: "count",
      //   legendOffset: -40,
      //   legendPosition: "middle",
      // }}
      pointSize={10}
      pointColor={{ from: "color", modifiers: [] }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      enableCrosshair={false}
      useMesh={useMesh}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default Chart;
