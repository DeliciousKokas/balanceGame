// https://tech.dely.jp/entry/migrate_a_small_project_to_vue3
import { reactive } from "vue";
import axios from 'axios';

export const getNewCard = () => {
  const card = reactive({
    left: String,
    right: String
  });

  const getCard = () => {
    axios
    .get(`http://localhost:3000/api/boxs`)
    .then((response) => {
      console.log(JSON.stringify(response.data))
    })
    .catch((error: any) => {
      console.log(error)
    })
  }

  // const getJobs = () => {
  //   context.root.$axios
  //   .$get(`/api/boxs`, { timeout: 10000 })
  //   .then((result: any) => {
  //     if (result.code === 200) {
  //       loading.value = false
  //       Object.assign(jobs, result.jobs)
  //     } else if (result.code === 404) {
  //       sendApiError(result.code, result.message, 'info')
  //     } else {
  //       sendApiError(result.code, result.message)
  //     }
  //   })
  //   .catch((error: any) => sendServerError(error))
  // }

  return {
    card,
    getCard
  };
};