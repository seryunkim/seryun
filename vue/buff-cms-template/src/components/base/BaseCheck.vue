<template>
  <label class="checkbox-inline">
    <input type="checkbox" v-model="innerValue" />
    <i class="fa fa-fw"></i>
    <strong>{{ items.title }}</strong>
  </label>
</template>

<script>
    export default {
        name: "base-check",
        props:{
          // 값
          value:[String, Number],
          // 데이터
          items:{
            type:Array,
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

</style>
