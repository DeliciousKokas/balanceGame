// https://tech.dely.jp/entry/migrate_a_small_project_to_vue3
import { reactive } from "vue";
import axios from 'axios';

export const getNewCard = () => {
  const card = reactive({
    left: "String",
    right: "String"
  });

  const getCard = () => {
    axios
    .get(`http://localhost:3000/api/boxs`)
    .then((response) => {
      const cardData = response.data[0]
      card.left = cardData.LeftCard
      card.right = cardData.RightCard
      console.log(card)
      console.log(response)
    })
    .catch((error: any) => {
      console.log(error)
    })
  }

  return {
    card,
    getCard
  };
};