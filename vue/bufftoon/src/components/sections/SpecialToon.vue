<template>
  <div :class="[defaultClass, isTodayToon ? todayToonClass : '']">
      <a class="list_title">{{ title }}</a>
      <div class="list">
          <ul>
              <li v-for="(item, index) in items" :key="index" :style="{width:cellWidth() + 'px'}">
                  <a>
                      <div class="img_wrap"><img :src="item.image" :alt="item.image" /></div>                        
                      <span class="name">{{ item.title }}</span>
                  </a>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'SpecialToon',
  props: {
    isTodayToon: {
      type: Boolean,
      default: false
    },
    cellCount: {
      type: Number,
      default: 3
    },
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data () {
    return {
      defaultClass: 'slider_wrap',
      todayToonClass: 'today_toon',
      windowWidth: window.innerWidth
    }
  },
  
  mounted: function () {
    window.addEventListener('resize', this.handleWindowResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleWindowResize)
  },

  methods: {
    handleWindowResize (event) {
      this.windowWidth = event.currentTarget.innerWidth;
    },
    cellWidth () {
      //console.log(cellCount);
      return Math.ceil((this.windowWidth - 30) / this.cellCount) - 5;  // 30은 컨테이너 패딩, 5는 아이템 우측 마진
    }
  }
}
</script>

<style scoped>
.today_toon {
  background-color:#f8f8f8;
}
.today_toon li .name{
  position:absolute;
  top:30px;
  left:0;right:0;
  margin:0;
  text-align:center;
}
</style>