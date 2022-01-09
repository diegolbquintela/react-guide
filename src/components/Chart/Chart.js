import ChartBars from "./ChartBars";
import "./Chart.css";

const Chart = (props) => {
  //objects to numbers
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // rest operator will pull out the array values as a list of args
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBars
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
