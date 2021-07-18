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
    comment: {}
  });

  const getCard = () => {
    axios
    .get(`${process.env.VUE_APP_API_URL}/api/boxs`)
    .then((res) => {
      console.log(res)
      const cardData = res.data
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
    .put(`${process.env.VUE_APP_API_URL}/api/boxs/vote`, {
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
    .put(`${process.env.VUE_APP_API_URL}/api/boxs/like`, {
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
    .get(`${process.env.VUE_APP_API_URL}/api/comments`, {
      params: {
        id: card.id
      }
    })
    .then((res) => {
      comments.comment = res.data
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