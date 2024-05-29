import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useMemo } from "react";
import countryList from "react-select-country-list";

interface IProps {
  location?: string;
  onChange: (e: any) => void;
}

const LocationInput = ({ location, onChange }: IProps) => {
  const options = useMemo(() => countryList().getData(), []);

  return (
    <FormControl id="location">
      <FormLabel>Country</FormLabel>
      <Select
        value={location}
        onChange={onChange}
        placeholder="Select a country"
      >
        {location && <option value={location}>{location}</option>}

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default LocationInput;
