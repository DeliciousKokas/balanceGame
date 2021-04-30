// https://tech.dely.jp/entry/migrate_a_small_project_to_vue3
import { reactive } from "vue";
import axios from 'axios';

export const getNewCard = () => {
  const card = reactive({
    id: 0,
    left: "String",
    right: "String",
    liked: false,
    disLiked: false,
  });

  const getCard = () => {
    axios
    .get(`http://localhost:3000/api/boxs`)
    .then((res) => {
      const cardData = res.data[0]
      card.id = cardData.ID
      card.left = cardData.LeftCard
      card.right = cardData.RightCard
      card.liked = false
      card.disLiked = false
      console.log(card)
    })
    .catch((error: any) => {
      console.log(error)
    })
  }

  const postLike = () => {
    card.liked = !card.liked
    
    axios
    .put(`http://localhost:3000/api/boxs/like`, {
      id: card.id,
      count: card.liked? 1 : -1
    })
    .then((res) => {
      console.log(res)
    })
    .catch((error: any) => {
      console.log(error)
    })
  }

  return {
    card,
    getCard,
    postLike
  };
};