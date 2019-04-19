<template>
  <!--详情图片-->
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item"/>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        /* 点击图片使轮播图重生刷新 */
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow : inherit
  .container{
    position : fixed;
    display : flex;
    flex-direction : column;
    justify-content center;
    z-index :99;
    left : 0;
    right : 0;
    top : 0;
    bottom : 0;
    background : #000;
  }

  .wrapper{
    height : 0;
    width : 100%;
    padding-bottom : 100%;
  }

  .gallary-img{
    width : 100%;
  }

  .swiper-pagination{
    color : #fff
    bottom : -1rem;
  }
</style>
