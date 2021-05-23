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
    voted: "",
  });

  const comments = reactive({
    comment: {
      voted: "",
      comment: "test",
      liked: "",
      createdAt: "",
    }
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
      card.voted = ""
      console.log(card)
    })
    .catch((error: any) => {
      console.log(error)
    })
  }

  const putVote = (selectedCard: string) => {
    card.voted = selectedCard

    axios
    .put(`http://localhost:3000/api/boxs/vote`, {
      id: card.id,
      voted: selectedCard
    })
    .then((res) => {
      console.log(res)
    })
    .catch((error: any) => {
      console.log(error)
    })
  }

  const putLike = () => {
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

  const getComments = () => {
    axios
    .get(`http://localhost:3000/api/comments`, {
      params: {
        id: card.id
      }
    })
    .then((res) => {
      const commnetsData = res.data[0]
      console.log(res)
    })
    .catch((error: any) => {
      console.log(error)
    })
  }

  getCard();

  return {
    card,
    comments,
    getCard,
    putVote,
    putLike,
    getComments
  };
};