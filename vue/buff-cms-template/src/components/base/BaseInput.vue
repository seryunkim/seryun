<template>
  <div class="no-margin">
    <div class="no-padding" :class="isFull? 'col-md-12':'col-md-6'">
      <input class="form-control input-sm" :class="'text-' + align" type="text" :placeholder="placeholderText" v-model="innerValue">
    </div>
  </div>
</template>

<script>
    export default {
        name: "base-input",
        props:{
          // 값
          value:[String, Number],
          // placeholder
          placeholderText:{
            type:String,
            default:''
          },
          // 스타일 - 가로 전체 여부
          isFull:{
            type:Boolean,
            default:false
          },
          // 텍스트 align
          align:{
            type:String,
            default:'left'
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
