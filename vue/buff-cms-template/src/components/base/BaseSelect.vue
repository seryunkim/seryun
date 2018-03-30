<template>
  <div class="row no-margin">
    <div class="no-padding" :class="isFull? 'col-md-12':'col-md-6'" >
      <select class="form-control input-sm" v-model="innerValue">
        <option v-for="(item, index) in items" :key="index" :value="item.value">{{ item.title }}</option>
      </select>
    </div>
    <!--<span>Selected: {{ selected }}</span>-->
  </div>
</template>

<script>
    export default {
        name: "base-select",
        props:{
          // 값
          value:[String, Number],
          // 데이터
          items:{
            type:Array,
            default(){ return [] }
          },
          // 스타일 - 가로 전체 여부
          isFull:{
            type:Boolean
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
            // (update:연동되는 데이터값)
            this.$emit('update:value', newVal); // this.value = newVal;
            this.$emit('valuechanged', newVal);
          }
        }
    }
</script>

<style scoped>
</style>
