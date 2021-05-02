// https://tech.dely.jp/entry/migrate_a_small_project_to_vue3
import { reactive } from "vue";
import axios from 'axios';

export const getNewCard = () => {
  const card = reactive({
    id: 0,
    title: "",
    left: "",
    right: "",
    leftVotedAmout: 0,
    rightVotedAmout: 0,
    liked: false,
  });

  const getCard = () => {
    axios
    .get(`http://localhost:3000/api/boxs`)
    .then((res) => {
      const cardData = res.data[0]
      card.id = cardData.id
      card.title = cardData.title ? cardData.title : "1つを選ぶとしたら?"
      card.left = cardData.left_card
      card.right = cardData.right_card
      card.leftVotedAmout = cardData.left_voted_amout
      card.rightVotedAmout = cardData.right_voted_amout
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

  getCard();

  return {
    card,
    getCard,
    postLike
  };
};