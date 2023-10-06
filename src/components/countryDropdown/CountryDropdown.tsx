import { useState } from "react";
import { countries } from "../../utils/data.tsx";
import { BackButton } from "../../utils/helper";

const CountryDropdown = () => {
  const [country, setCountry] = useState("IN");

  const selectedCountry = countries.filter((item) => item.code === country);
  const countryCities = selectedCountry[0].cities;

  return (
    <section className="section">
      <div className="container mx-auto flex flex-col">
        <BackButton />
        <div className="flex flex-col items-center justify-around ">
          <h2 className="mb-12 font-serif text-3xl">Country Dropdown</h2>

          <div className="flex items-center gap-2">
            <select
              className="selectClass"
              id="country"
              onChange={(e) => setCountry(e.target.value)}
            >
              {countries?.map((item) => (
                <option key={item.id} value={item.code}>
                  {item.name}
                </option>
              ))}
            </select>

            <select className="selectClass" id="city">
              {countryCities?.map((item, idx) => (
                <option key={idx} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDropdown;
