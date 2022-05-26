import CountrySelector from "./CountrySelector";
import HighLight from "./HighLight";
import Summary from "./Summary";
import { useEffect, useState } from "react";
import { getCountries, getReportByCountry } from "./apis";
import { sortBy } from "lodash";
import { Typography } from "@mui/material";
import "@fontsource/roboto";
import moment from "moment";
import "moment/locale/vi";
import { Container } from "@mui/system";

moment.locale("vi");

function App() {
  const [countries, setCountries] = useState([]);
  const [selectorCountryId, setSelectorCountryId] = useState("");
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCountries().then((res) => {
      const countries = sortBy(res.data, "Country");
      setCountries(countries);

      console.log(countries);
    });
    setSelectorCountryId("vn");
  }, []);

  const handleChange = (e) => {
    setSelectorCountryId(e.target.value);
  };
  useEffect(() => {
    if (selectorCountryId)
      getReportByCountry(selectorCountryId).then((res) => setReport(res.data));
  }, [selectorCountryId]);

  return (
    <Container style={{ marginTop: 20 }}>
      <Typography variant="h3" component="h3">
        Số liệu COVID-19
      </Typography>
      <Typography>{moment().format("LLL")}</Typography>
      <CountrySelector
        value={selectorCountryId}
        countries={countries}
        handleChange={(e) => handleChange(e)}
      />
      <HighLight report={report} />
      <Summary report={report} selectorCountryId={selectorCountryId} />
    </Container>
  );
}

export default App;
