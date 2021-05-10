import { useEffect, useState } from "react";
import { fetchCountries } from "../Service/Api";
import { Typography, NativeSelect } from "@material-ui/core";

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setCountries(await fetchCountries());
    };
    fetchApi();
  }, []);
  return (
    <>
      <Typography
        color="textSecondary"
        variant="h5"
        style={{ marginBottom: 20 }}
      >
        Reported Cases or Deaths by country or territatory
      </Typography>
      <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
        <option value=""> United States</option>
        {countries.map((countries, i) => {
          return (
            <option value={countries} key={i}>
              {countries}
            </option>
          );
        })}
      </NativeSelect>
    </>
  );
};

export default Countries;
