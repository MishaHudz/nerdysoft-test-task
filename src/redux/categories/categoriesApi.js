import axios from "axios";

axios.defaults.baseURL = "https://opentdb.com";

export async function getCatList() {
  const { data } = await axios.get("/api_category.php");
  return data;
}
