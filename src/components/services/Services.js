// api.js
const BASE_URL = "https://rickandmortyapi.com/api";

export const fetchDataAll = async () => {
  try {
    const response = await fetch(`${BASE_URL}/character`);
    if (!response.ok) {
      throw new Error("Ошибка загрузки данных");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Произошла ошибка:", error);
    return [];
  }
};

// api.js

export const fetchDataCards = async (id = "") => {
  try {
    let url = `${BASE_URL}/character`;
    if (id) {
      url += `/${id}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Ошибка загрузки данных");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Произошла ошибка:", error);
    return [];
  }
};
