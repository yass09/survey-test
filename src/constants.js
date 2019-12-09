const BASE_URL = "/api/";
const LIST_PATH = "list.json";

export const LIST_URL = `${BASE_URL}${LIST_PATH}`;

export const getDetailsUrl = code => `${BASE_URL}${code}.json`;
