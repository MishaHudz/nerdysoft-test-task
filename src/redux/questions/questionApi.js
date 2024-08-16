import axios from "axios";

axios.defaults.baseURL = "https://opentdb.com/api.php";

export async function getQuestionsList(category, difficulty) {
  const { data } = await axios.get(``, {
    params: {
      amount: 10,
      type: "multiple",
      token: "fbca3612f191a018f2d3ce6cf571ddc857b008aa814243891f07082be591136d",
      ...(category && { category }),
      ...(difficulty && { difficulty }),
    },
  });
  console.log(data);

  return data;
}

// export async function getQuestionsList() {
//   const { data } = await axios.get(``, {
//     params: {
//       command: "request",
//     },
//   });
//   console.log(data);

//   return data;
// }
