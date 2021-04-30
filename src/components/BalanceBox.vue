<template>
  <div class="balanceBox">
    <div class="balanceBox__box--left">
      {{ card.left }}
    </div>
    <div class="balanceBox__center">
      <div 
        class="balanceBox__like"
        @click="postLike()"
      >
        <font-awesome-icon
          v-if=!card.liked
          class="balanceBox__like--false"
          :icon="['far', 'thumbs-up']" 
        />
        <font-awesome-icon
          v-else
          class="balanceBox__like--true"
          :icon="['fas', 'check']" 
        />
      </div>
      <span @click="getCard()">VS</span>
    </div>
    <div class="balanceBox__box--right">
      {{ card.right }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getNewCard } from '@/hooks/getNewCard';

export default defineComponent({
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
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  %__like {
    border-color: rgb(0, 0, 255);
    border: 1px;
    border-radius: 50%;
    border-style: solid;
    padding: 10px;
    display: inline-block;
  
    &:hover{
      transform: scale(1.02);
    }
  }

  &__like{
        
    .balanceBox__like--false {
      @extend %__like;
      color: rgb(0, 0, 255);
      background-color: rgb(255, 255, 255);
    }

    .balanceBox__like--true {
      @extend %__like;
      color: rgb(255, 255, 255);
      background-color: rgb(0, 0, 255);
    }
  }
}

</style>