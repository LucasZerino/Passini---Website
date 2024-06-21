"use client";

import { useState } from "react";

const FilterBox = () => {
  const [formData, setFormData] = useState({
    property: "",
    market: "",
    price: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  const formOptions = {
    property: {
      title: "Estou buscando por..",
      options: [
        { value: "Gruas Passini", display: "Gruas Passini" }
      ],
    },
    market: {
      title: "Preciso da Grua para",
      options: [
        { value: "Alugar", display: "Alugar" },
        { value: "Comprar", display: "Comprar" },
      ],
    },
    price: {
      title: "Tipo de Grua",
      options: [
        { value: "Grua Fixa", display: "Grua Fixa" },
        { value: "Grua Ascensional", display: "Grua Ascensional" },
      ],
    },
  };

  return (
    <form onSubmit={handleSubmit} className="search-area">
      <div className="row gx-0 align-items-center">
        {Object.entries(formOptions).map(([key, { title, options }]) => (
          <div className="col-lg-3" key={key}>
            <div className="input-block">
              <div className="title">{title}</div>
              <select
                className="nice-select"
                name={key}
                value={formData[key]}
                onChange={handleInputChange}
              >
                {options.map(({ value, display }) => (
                  <option key={value} value={value} data-display={display}>
                    {display}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
        <div className="col-lg-3">
          <div className="input-block">
            <button type="submit" className="w-100 fw-500 tran3s">
              Enviar Contato
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FilterBox;
