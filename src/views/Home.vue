<template>
  <div class="balanceBox">
    <div class="balanceBox__box--left">
      {{ card.left }}
    </div>
    <div class="balanceBox__center"
      v-on:click="getCard()"
    >
      <span>VS</span>
    </div>
    <div class="balanceBox__box--right">
      {{ card.right }}
    </div>
  </div>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getNewCard } from '@/hooks/getNewCard';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  components: {
    HelloWorld,
  },
  
  setup() {
    return {
      ...getNewCard(),
    };
  }
});
</script>

<style lang="scss" scoped>
.balanceBox{
  display: flex;
  justify-content: center;
  width: 100%;

  %__box {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    width: 100%;
    height: 150px;
    transition: transform .2s;
    color: white;
    padding: 10px;
    margin: 5px;
    cursor: pointer;
    
    &:hover{
      transform: scale(1.02);
    }
  }

  &__box{
    &--left{
      @extend %__box;
      background-color: rgb(255, 0, 0);
    }

    &--right{
      @extend %__box;
      background-color: rgb(0, 0, 255);
    }
  }

  &__center{
  }
}

</style>