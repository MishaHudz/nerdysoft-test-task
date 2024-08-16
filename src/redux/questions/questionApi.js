import axios from "axios";

export async function getQuestionsList(category, difficulty) {
  const { data } = await axios.get(`/api.php`, {
    params: {
      amount: 10,
      type: "multiple",
      ...(category && { category }),
      ...(difficulty && { difficulty }),
    },
  });

  return data;
}
