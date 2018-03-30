<template>
  <div class="row no-margin">
    <div class="no-padding" :class="isFull? 'col-md-12':'col-md-6'" >
      <textarea class="textarea form-control" rows="7" :placeholder="placeholderText" v-model="innerValue" :maxlength="limit"></textarea>
      <div class="pull-right">
        <small class="byte text-muted">{{ this.innerValue.length }} / <strong>{{ limit }}</strong></small>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "base-textarea",
        props:{
          // 값
          value:{
            type:String
          },
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
          // 글자수 제한
          limit:{
            type:Number
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
  .textarea{
    resize:none;
  }
</style>
