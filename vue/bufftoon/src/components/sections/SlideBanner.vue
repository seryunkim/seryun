<template>
  <carousel 
    :autoplay="true" 
    :autoplayHoverPause="true"
    :perPage="1"
    paginationActiveColor="#ff3a3a"
    paginationColor="#d8d8d8"
    :paginationPadding="4"
    :paginationSize="7"
  >
    <slide v-for="(item, index) in items" :key="index">
      <a>
        <img :src="item.image" alt=""/>
      </a>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'SlideBanner',
  components: { Carousel, Slide },
  props: {
    items: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
img{
  width:100%;
}
</style>
<style>
.VueCarousel-pagination{
  position:absolute;
  left:0;right:0;
  bottom:0;
}
</style>