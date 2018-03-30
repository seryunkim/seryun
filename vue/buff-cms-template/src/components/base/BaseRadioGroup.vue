<template>
  <div class="radio-group">
    <label class="radio-inline"  v-for="(item, index) in items" :key="index">
      <input type="radio" v-model="innerValue" :name="'radiogroup-' + _uid" :value="item.value">
      <i class="fa fa-fw"></i>
      {{ item.title }}
    </label>
    <!--<div>{{checkedValues}}</div>-->
  </div>
</template>

<script>
    export default {
        name: "base-radio-group",
        props:{
          // 값
          value:[String, Number],
          // 데이터
          items:{
            type: Array,
            default(){ return [] }
          }
        },
        data(){
          return {
            // 값 (내부변수)
            innerValue: this.value
          }
        },
        watch:{
          innerValue(newVal, oldVal){
            this.$emit('update:value', newVal);
            this.$emit('valuechanged', newVal);
          }
        }
    }
</script>

<style scoped>
  label{
    margin-bottom:0;
  }
</style>
