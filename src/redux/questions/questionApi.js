import axios from "axios";

axios.defaults.baseURL = "https://opentdb.com/api.php";

export async function getQuestionsList(category, difficulty) {
  const { data } = await axios.get(``, {
    params: {
      amount: 10,
      type: "multiple",
      ...(category && { category }),
      ...(difficulty && { difficulty }),
    },
  });
  console.log(data);

  return data;
}
