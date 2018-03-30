<template>
  <div>
    <ul class="clearfix no-padding no-margin list-unstyled">
      <li v-for="(item, index) in items" :key="index">
        <p class="text-bold">{{ item.title }}</p>
        <!--image 없을경우-->
        <div class="attachment-block" v-if="!item.image">
          <a class="btn btn-default btn-sm btn-flat btn-attachment" :style="{width: Math.floor(item.width/4) + 'px' }">
            <span class="display-text text-muted"><small>해상도:</small> {{ item.width }} x {{ item.height }}</span>
            <i class="fa fa-image"></i>등록
          </a>
        </div>
        <!--image 있을경우-->
        <div class="attachment-block has-img" v-else>
          <div class="image-wrap"><img :src="item.image" /></div>
          <p class="image-name">{{ item.filename }}</p>
          <div class="btn-wrap">
            <button class="btn btn-default btn-xs"><i class="fa fa-edit"></i> 수정</button>
            <button class="btn btn-default btn-xs">삭제</button>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
    export default {
      name: "register-image",
      props:{
        items:{
          type: Array,
          default(){ return [] }
        }
      }
    }
</script>

<style scoped>
  li{
    list-style:none;
    float:left;
  }
  li ~ li{
    padding-left:10px;
  }
  .attachment-block{
    margin:5px 0 0 0;
    padding:0;
    width:180px;
    background:none;
    border:none;
  }
  .display-text{
    display:block;
    margin-top:30px;
    font-size:12px;
  }
  .image-wrap{
    position:relative;
  }
  .image-name{
    display:block;
    margin-top:8px;
    line-height:1.2em;
    text-overflow:ellipsis;
    overflow:hidden;
  }
  .attachment-block img {
    width:100%;
    height:100%;
  }
  .btn-attachment{
    display:block;
    width:100%;
    height:180px;
  }
  .btn-attachment i{
    display:block;
    margin-top:30px;
    padding-bottom:5px;
    font-size:2.1em;
  }
  .btn-wrap{
    margin-top:8px;
  }
</style>
