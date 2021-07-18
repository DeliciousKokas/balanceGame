<template>
  <div class="balanceBox">
    <div class="balanceBox__title">
      <span>{{ card.title }}</span>
    </div>
    <div class="balanceBox__boxes">
      <div
        class="balanceBox__left"
        @click="putVote(`left`)"
      >
        <div class="balanceBox__left--icon">
          <font-awesome-icon
            class="balanceBox__left--click"
            :icon="['fas', 'dog']" 
          />
        </div>
        <div class="balanceBox__left--text">
          <span>{{ card.left }}</span>
        </div>
        <div
          class="balanceBox__left--voted"
          v-if="card.voted == `left`"
        >
          <font-awesome-icon
            class="balanceBox__left--checked"
            :icon="['fas', 'check-circle']" 
          />
        </div>
      </div>
      <div
        class="balanceBox__right"
        @click="putVote(`right`)"
      >
        <div class="balanceBox__right--icon">
          <font-awesome-icon
            class="balanceBox__right--click"
            :icon="['fas', 'cat']" 
          />
        </div>
        <div class="balanceBox__right--text">
          <span>{{ card.right }}</span>
        </div>
        <div
          class="balanceBox__right--voted"
          v-if="card.voted == `right`"
        >
          <font-awesome-icon
            class="balanceBox__right--checked"
            :icon="['fas', 'check-circle']" 
          />
        </div>
      </div>
    </div>
  </div>
  <div class="interFace">
    <div
      class="interFace__like"
      @click="putLike()"
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
  <button @click="getComments()">get comment</button>
  <div v-for="(comment) in comments.comment" v-bind:key="comment.id">
    {{ comment.comment }}
    {{ comment.voted }}
    {{ comment.liked }}
    {{ comment.created_at }}
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
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

  &__title{
    color: #FFF;
    font-size: 28px;
    font-weight: bold;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, #FFF 25%, #E0E0E0 50%, #FFF 75%);
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  }

  &__boxes{
    display: flex;
    justify-content: center;
    width: 100%;
  }

  %__box {
    display: flex;
    flex-direction: column;
    position:  relative;
    font-size: 16px;
    font-weight: bold;
    width: 100%;
    height: 200px;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0px 3px 4px #757575;
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

  %--voted{
    position: absolute;
    top: 40%;
    left: 0;
    right: 0;
    margin: auto;
  }

  %--checked{
    width: 64px;
    height: 64px;
    opacity: .3;
  }

  &__left{
    @extend %__box;

    &--icon{
      @extend %--icon;
      background-color: #E53935;
    }

    &--text{
      @extend %--text;
    }

    &--voted{
      @extend %--voted;
    }

    &--checked{
      @extend %--checked;
      color: #E53935;
    }
  }

  &__right{
    @extend %__box;
    
    &--icon{
      @extend %--icon;
      background-color:#1E88E5;
    }

    &--text{
      @extend %--text;
    }

    &--voted{
      @extend %--voted;
    }

    &--checked{
      @extend %--checked;
      color: #1E88E5;
    }
  }

}

.interFace{
  display: flex;
  justify-content: flex-end;
  align-items: center;

  %__like {
    border-color: #1E88E5;
    border: 1px;
    border-radius: 50%;
    border-style: solid;
    padding: 10px;
    display: inline-block;
    box-shadow: 0 3px 4px #757575;
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
      color: #1E88E5;
      background-color: rgb(255, 255, 255);
    }

    &--true {
      @extend %__like;
      color: rgb(255, 255, 255);
      background-color: #1E88E5;
    }
  }

  &__next{
    display: flex;
    align-items: center;
    border: 1px;
    border-color: #757575;
    border-radius: 3px;
    border-style: solid;
    padding: 3px 10px;
    margin: 10px;
    cursor: pointer;
    box-shadow: 0px 3px 4px #757575;

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