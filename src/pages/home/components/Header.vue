<template>
  <!--头-->
  <div class="header">
    <div class="header-list">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>请输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}<span class="iconfont arrow-icon">&#xe606;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl";
  .header{
    line-height : $headerHeight
    display: flex
    background: $bgColor
    color: #fff;
  }

  .header-list {
    float: left;
    width: .64rem;
  }

  .back-icon{
    font-size: .4rem;
    text-align: center;
  }

  .header-input {
    flex: 1;
    height: .64rem;
    line-height: .64rem;
    margin-top: .12rem;
    margin-left: .2rem;
    padding-left: .24rem;
    background: #fff;
    border-radius: .1rem;
    color: #ccc;
  }

  .header-right {
    min-width: 1.04rem;
    padding : 0 .1rem;
    float: right;
    text-align: center;
    color : #fff;
  }

  .arrow-icon {
    font-size: .24rem;
    margin-left: -.04rem;
  }
</style>
