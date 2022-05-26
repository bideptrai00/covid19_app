import {
  FormControl,
  InputLabel,
  NativeSelect,
  FormHelperText,
} from "@mui/material";
import styles from "./CountySelectoer.module.css";
// import { styled } from "@mui/styles";

// const CustomInput = styled(InputLabel);

function CountrySelector({ value, handleChange, countries }) {
  return (
    <FormControl>
      <InputLabel htmlFor="country-selector" shrink className={styles.input}>
        Quốc Gia
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={handleChange}
        inputProps={{
          name: "country",
          id: "country-selector",
        }}
      >
        {countries.map((country) => {
          return (
            <option key={country.ISO2} value={country.ISO2.toLowerCase()}>
              {country.Country}
            </option>
          );
        })}
      </NativeSelect>
      <FormHelperText>Lựa chọn quốc gia </FormHelperText>
    </FormControl>
  );
}

export default CountrySelector;
