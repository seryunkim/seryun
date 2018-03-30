<template>
  <div class="checkbox-group">
    <div class="all-check" v-if="checkAllTitle != null">
      <label class="checkbox-inline">
        <input type="checkbox" v-model="allChecked" @click="allCheckClicked" />
        <i class="fa fa-fw"></i>
        <strong>{{ checkAllTitle }}</strong>
      </label>
    </div>
    <label class="checkbox-inline" v-for="(item, index) in items" :key="index">
      <input type="checkbox" class='check-item' v-model="checkedValues" :value="item.value">
      <!--:disabled="this.disabledCheck == item.key"-->
      <i class="fa fa-fw"></i>
      {{ item.title }}
    </label>
  </div>
</template>

<script>
    export default {
        name: "checkbox-group",
        props:{
          checkAllTitle: {
            type: String
          },
          items:{
            type: Array,
            default(){ return [] }
          },
          initValues:{
            type: Array,
            default(){ return [] }
          },
          disabledVaules:{
            type: Array,
            default(){ return [] }
          }
        },
        data(){
          return {
            allChecked:false, //전체체크
            checkedValues:this.initValues, // check된 값
            disabledCheck:this.disabledVaules[0]
          }
        },
        methods: {
          updateAllChecked() {
            // 전체선택 버튼 value 지정
            this.allChecked = (this.checkedValues.length == this.items.length);
          },
          allCheckClicked(e) {
            //console.log(this.allChecked);
            this.checkedValues= [];
            // 전체 체크박스를 false
            if (!this.allChecked) {
              // 모든 value 추가
              let values = [];
              this.items.forEach( function(item, index){
                values.push(item.value);
              });
              this.checkedValues.push(...values);
            }
          }
        },
        watch: {
          checkedValues(val, oldVal){
            // update all checked
            this.updateAllChecked();
            //emit
            this.$emit('valuechanged', {value:val});
          }
        },
        mounted(){
          this.updateAllChecked();
        }
    }
</script>

<style scoped>
  .checkbox-group{
    display:inline-block;
  }
  .all-check{
    display:inline-block;
    padding-right:5px;
    margin-right:5px;
  }
  label{
    margin-bottom:0;
  }
</style>
