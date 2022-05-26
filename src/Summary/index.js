import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import HighMap from "../Charts/HighMap";
import LineChart from "../Charts/LineChart";
import { getMapById } from "../apis";

function Summary({ report, selectorCountryId }) {
  const [mapData, setMapData] = useState({});

  useEffect(() => {
    if (selectorCountryId) {
      getMapById(selectorCountryId).then((res) => setMapData(res));
    }
  }, [selectorCountryId]);

  return (
    <Grid container spacing={3}>
      <Grid item sm={8} xs={12}>
        <LineChart data={report}></LineChart>
      </Grid>
      <Grid item sm={4} xs={12}>
        <HighMap mapData={mapData.data}></HighMap>
      </Grid>
    </Grid>
  );
}

export default Summary;
