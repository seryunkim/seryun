<template>
  <div class="row no-margin">
    <div class="col-md-2 no-padding">
      <base-select
        v-bind="selectProps"
        :value.sync="innerSelectValue"
      />
    </div>
    <div class="col-md-6 offset-md-3">
      <base-input
        v-bind="inputProps"
        :value.sync="innerInputValue"
      />
    </div>
  </div>
</template>

<script>
  import BaseSelect from '@/components/base/BaseSelect'
  import BaseInput from '@/components/base/BaseInput'
    export default {
        name: "search-group",
        components:{
          BaseSelect,
          BaseInput
        },
        props:{
          inputProps:{
            type: Object,
            default(){ return {} }
          },
          selectProps:{
            type: Object,
            default(){ return {} }
          },
          selectValue:{
            type: Number
          },
          inputValue:{
            type: String
          }
        },
        data(){
          return {
            innerSelectValue: this.selectValue,
            innerInputValue: this.inputValue,
          }
        },
        watch:{
          innerSelectValue(newVal, oldVal){
            this.$emit('update:selectValue', newVal);
            this.$emit('valuechanged', {selectValue:newVal, inputValue:this.innerInputValue});
          },
          innerInputValue(newVal, oldVal){
            this.$emit('update:inputValue', newVal);
            this.$emit('valuechanged', {selectValue:this.innerSelectValue, inputValue:newVal});
          }
        }
    }
</script>

<style scoped>

</style>
