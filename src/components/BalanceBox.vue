<template>
  {{ card.title }}
  <div class="balanceBox">
    <div class="balanceBox__box--left">
      {{ card.left }}
    </div>
    <div class="balanceBox__center">
      <span>VS</span>
    </div>
    <div class="balanceBox__box--right">
      {{ card.right }}
    </div>
  </div>
  <div class="interFace">
    <div
      class="interFace__like"
      @click="postLike()"
    >
      <transition name="postLike" mode="out-in">
        <font-awesome-icon
          v-if=!card.liked
          class="interFace__like--false"
          :icon="['far', 'thumbs-up']" 
        />
        <font-awesome-icon
          v-else
          class="interFace__like--true"
          :icon="['fas', 'check']" 
        />
      </transition>
    </div>
    <div
      class="interFace__next"
      @click="getCard()"
    >
      <span>Next</span> 
      <font-awesome-icon
        :icon="['fas', 'forward']" 
      />
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
    color: white;
    padding: 10px;
    margin: 5px;
    cursor: pointer;
    
    &:hover{
      transform: scale(1.02);
      transition: transform .2s;
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

}

.interFace{
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .postLike-enter-active, .postLike-leave-active {
    transition: opacity .4s
  }

  .postLike-enter, .postLike-leave-to {
    opacity: 0.05
  }

  %__like {
    border-color: rgb(0, 0, 255);
    border: 1px;
    border-radius: 50%;
    border-style: solid;
    padding: 10px;
    display: inline-block;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
  
    &:hover{
      transform: scale(1.1);
      // transition: transform .2s;
    }
  }

  &__like{
    width: 40px;
    height: 40px;
        
    &--false {
      @extend %__like;
      color: rgb(0, 0, 255);
      background-color: rgb(255, 255, 255);
    }

    &--true {
      @extend %__like;
      color: rgb(255, 255, 255);
      background-color: rgb(0, 0, 255);
    }
  }

  &__next{
    display: flex;
    align-items: center;

    border: 1px;
    border-radius: 5%;
    border-style: solid;
    padding: 3px 10px;
    margin: 5px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);

    &:hover{
      transform: scale(1.05);
      transition: transform .2s;
    }
    
    span{
      font-weight: bold;
      margin: 5px;
    }
  }
}

</style>