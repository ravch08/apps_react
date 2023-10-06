import { useState } from "react";
import { BackButton } from "../../utils/helper";

const Radio = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [output, setOutput] = useState("Your Selection!");

  const options = ["cricket", "football", "hockey"];
  const days = ["weekdays", "weekends"];

  const handleDayChange = (event) => setSelectedDay(event.target.value);
  const handleOptionChange = (event) => setSelectedOption(event.target.value);

  const handleShowSelection = (e) => {
    e.preventDefault();
    setOutput(`You will play ${selectedOption} on the ${selectedDay}.`);
  };

  return (
    <section className="section">
      <div className="container mx-auto flex flex-col">
        <BackButton />
        <div className="flex flex-col items-start justify-center">
          <h2 className="mb-8 font-serif text-3xl font-bold">
            Choose you favorite Sport:
          </h2>
          <form onSubmit={handleShowSelection}>
            <h3 className="mb-4 font-sans text-2xl">
              Which game should you play?
            </h3>

            {options.map((option) => (
              <div className="form-control" key={option}>
                <label htmlFor={option} className="flex items-center gap-2">
                  <input
                    id={option}
                    type="radio"
                    value={option}
                    required
                    onChange={handleOptionChange}
                    checked={selectedOption === option}
                  />
                  {option}
                </label>
              </div>
            ))}

            <h2 className="mb-4 mt-12 font-sans text-2xl">
              When should you play?
            </h2>
            {days.map((day) => (
              <div className="form-control" key={day}>
                <label htmlFor={day} className="flex items-center gap-2">
                  <input
                    id={day}
                    type="radio"
                    value={day}
                    required
                    onChange={handleDayChange}
                    checked={selectedDay === day}
                  />
                  {day}
                </label>
              </div>
            ))}
            <br />
            <input type="submit" className="btn-primary" value="Submit" />
            <p className="text-md mt-12 font-medium">{output}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Radio;
