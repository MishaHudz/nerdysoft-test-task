import axios from "axios";

axios.defaults.baseURL = "https://opentdb.com";

export async function getCatList() {
  const { data } = await axios.get("/api_category.php");
  console.log(data);
  return data;
}
