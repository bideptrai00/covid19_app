import { useEffect, useRef, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { cloneDeep } from "lodash";
import highchartsMap from "highcharts/modules/map";

highchartsMap(Highcharts);

const initOptions = {
  chart: {
    height: "500",
  },
  title: {
    text: null,
  },
  mapNavigation: {
    enabled: true,
  },
  colorAxis: {
    min: 0,
    stops: [
      [0.4, "#ffff00"],
      [0.65, "#bfff00"],
      [1, "	#40ff00"],
    ],
  },
  legend: {
    layout: "",
    algin: "right",
    verticalAlign: "bottom",
  },
  series: [
    {
      mapData: {},
      name: "Số  ca nhiễm",
      joinBy: ["hc-key", "key"],
    },
  ],
};

function HighMap({ mapData }) {
  const chartsRef = useRef(null);
  const [options, setOptions] = useState({});
  const [configLoaded, setConfigLoaded] = useState(false);
  useEffect(() => {
    if (mapData && Object.keys(mapData).length) {
      const fakeData = mapData.features.map((feature, index) => ({
        key: feature.properties["hc-key"],
        value: index,
      }));
      console.log("Map data :", mapData);
      console.log("fakeData:", fakeData);
      setOptions({
        ...initOptions,
        title: {
          text: mapData.title,
        },
        series: [
          {
            ...initOptions.series[0],
            mapData: mapData,
            data: fakeData,
          },
        ],
      });
      if (!configLoaded) setConfigLoaded(true);
    }
  }, [mapData, configLoaded]);

  useEffect(() => {
    if (chartsRef && chartsRef.current) {
      console.log("chart.series", chartsRef.current.chart.series[0]);
      chartsRef.current.chart.series[0].update({
        mapData: mapData,
      });
    }
  }, [mapData]);
  if (!configLoaded) return null;
  return (
    <HighchartsReact
      options={cloneDeep(options)}
      constructorType={"mapChart"}
      highcharts={Highcharts}
      ref={chartsRef}
    />
  );
}

export default HighMap;
