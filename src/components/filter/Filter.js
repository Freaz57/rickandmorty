import React, { useState } from "react";
import Select from "react-select";
import "./filter.scss";

const Filter = ({ onFilterChange }) => {
  const initialFilterState = {
    status: "",
    species: "",
    gender: "",
  };

  const [filterVal, setFilterVal] = useState(initialFilterState);

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? "2px solid #0056b3" : "1px solid #ccc",
      boxShadow: state.isFocused ? "none" : "none",
      width: 200,
      "&:hover": {
        borderColor: "#0056b3",
      },
    }),
  };

  const options = {
    status: [
      { value: "", label: "Статус" },
      { value: "Alive", label: "Жив" },
      { value: "Dead", label: "Мертв" },
      { value: "unknown", label: "Неизвестно" },
    ],
    species: [
      { value: "", label: "Вид" },
      { value: "Human", label: "Человек" },
      { value: "Alien", label: "Инопланетянин" },
    ],
    gender: [
      { value: "", label: "Пол" },
      { value: "Male", label: "Мужской" },
      { value: "Female", label: "Женский" },
      { value: "Genderless", label: "Без пола" },
      { value: "unknown", label: "Неизвестно" },
    ],
  };

  const handleChange = (selectedOption, name) => {
    setFilterVal((prevState) => ({
      ...prevState,
      [name]: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange(filterVal);
  };

  const hadnleReset = (e) => {
    setFilterVal(initialFilterState);
    onFilterChange(initialFilterState);
  };

  return (
    <header className="header">
      <form className="form" onSubmit={handleSubmit}>
        <Select
          options={options.status}
          value={options.status.find(
            (option) => option.value === filterVal.status
          )}
          onChange={(selectedOption) => handleChange(selectedOption, "status")}
          styles={customStyles}
          placeholder="Статус"
        />
        <Select
          options={options.species}
          value={options.species.find(
            (option) => option.value === filterVal.species
          )}
          onChange={(selectedOption) => handleChange(selectedOption, "species")}
          styles={customStyles}
          placeholder="Вид"
        />
        <Select
          options={options.gender}
          value={options.gender.find(
            (option) => option.value === filterVal.gender
          )}
          onChange={(selectedOption) => handleChange(selectedOption, "gender")}
          styles={customStyles}
          placeholder="Пол"
        />

        <button className="apply" type="submit">
          Применить фильтр
        </button>
        <button className="reset" type="reset" onClick={hadnleReset}>
          Сбросить
        </button>
      </form>
    </header>
  );
};

export default Filter;
