<template>
  {{ card.title }}
  <div class="balanceBox">
    <div class="balanceBox__left">
      <div class="balanceBox__left--icon">
        <font-awesome-icon
          class="interFace__next--click"
          :icon="['fas', 'dog']" 
        />
      </div>
      <div class="balanceBox__left--text">
        <span>{{ card.left }}</span>
      </div>
    </div>
    <div class="balanceBox__right">
      <div class="balanceBox__right--icon">
        <font-awesome-icon
          class="interFace__next--click"
          :icon="['fas', 'cat']" 
        />
      </div>
      <div class="balanceBox__right--text">
        <span>{{ card.right }}</span>
      </div>
    </div>
  </div>
  <div class="interFace">
    <div
      class="interFace__like"
      @click="postLike()"
    >
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
    </div>
    <div
      class="interFace__next"
      @click="getCard()"
    >
      <span>Next</span>
      <font-awesome-icon
        class="interFace__next--click"
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
    display: flex;
    flex-direction: column;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    width: 100%;
    height: 200px;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0px 3px 4px rgba(0,0,0,0.3);
    cursor: pointer;
    
    &:hover{
      transform: scale(1.02);
      transition: transform .2s;
    } 

    &:active{
      transform: scale(1);
    }
  }

  %--icon{
    color: rgb(255, 255, 255);
    border-radius: 5px 5px 0 0;
    padding: 5px;
  }

  %--text{
    border-radius: 0 0 5px 5px;
    padding: 15px;
    margin: auto;
  }

  &__left{
    @extend %__box;

    &--icon{
      @extend %--icon;
      background-color: rgb(255, 0, 0);
    }

    &--text{
      @extend %--text;
    }
  }

  &__right{
    @extend %__box;
    
    &--icon{
      @extend %--icon;
      background-color:rgb(0, 0, 255);
    }

    &--text{
      @extend %--text;
    }
  }

}

.interFace{
  display: flex;
  justify-content: flex-end;
  align-items: center;

  %__like {
    border-color: rgb(0, 0, 255);
    border: 1px;
    border-radius: 50%;
    border-style: solid;
    padding: 10px;
    display: inline-block;
    box-shadow: 0 3px 4px rgba(0,0,0,0.3);
    cursor: pointer;
  
    &:hover{
      transform: scale(1.12);
      transition: transform .2s;
    }

    &:active{
      transform: scale(1);
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
    border-radius: 3px;
    border-style: solid;
    padding: 3px 10px;
    margin: 10px;
    cursor: pointer;
    box-shadow: 0px 3px 4px rgba(0,0,0,0.3);

    &:hover{
      transform: scale(1.08);
      transition: transform .2s;
    }

    &:active{
      transform: scale(1);
    } 

    span{
      font-weight: bold;
      margin: 5px;
    }
  }
}

</style>