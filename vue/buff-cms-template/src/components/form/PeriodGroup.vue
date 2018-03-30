<template>
    <div class="row">
      <div class="col-md-12">
        <div class="all-check" v-if="checkAllTitle != null">
          <label class="checkbox-inline">
            <input type="checkbox" v-model="allChecked"/>
            <i class="fa fa-fw"></i>
            <strong>전체 기간</strong>
          </label>
        </div>
        <div class="period" :class="allChecked ? 'disabled': ''">
          <div class="period-date">
            <div class="input-group date datepicker" data-info="dateStart">
              <input type="text" class="form-control input-sm no-padding text-center"  :disabled="allChecked">
              <div class="input-group-addon input-sm" :class="allChecked ? 'disabled':''">
                <i class="fa fa-calendar"></i>
              </div>
            </div>
            <div class="input-group date datepicker" data-info="dateEnd">
              <input type="text" class="form-control input-sm no-padding text-center" :disabled="allChecked">
              <div class="input-group-addon input-sm" :class="allChecked ? 'disabled':''">
                <i class="fa fa-calendar"></i>
              </div>
            </div>
          </div>
          <div class="btn-wrap clearfix">
            <button type="button" class="btn btn-xs col-md-2" :class="currentPeriodValue != item.value ?  'btn-default' : 'btn-info'" v-for="(item,index) in periodItems" :key="index" :value="item.value"
                    @click="periodClicked(item.value)">
              {{ item.title }}
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import moment from 'moment'

    export default {
        name: "period-group",
        props:{
          startDate:{ // start-date
            type: Date
          },
          endDate:{ // end-date
            type: Date
          },
          // 전체기간 시작일
          allStartDate:{
            type: Date,
            default(){
              return moment().subtract(3, 'year').toDate(); // 테스트로 3년전 날짜 넣음
            }
          },
          checkAllTitle: {
            type: String
          },
          initAllCheck:{
            type: Boolean
          }
        },
        data(){
          return {
            innerStartDate: this.startDate,
            innerEndDate: this.endDate,
            allChecked:false,
            periodItems: [
              {title: '오늘', value: 0},
              {title: '어제', value: 1},
              {title: '지난주', value: 2},
              {title: '지난달', value: 3},
              {title: '1주일', value: 4},
              {title: '1개월', value: 5},
              {title: '3개월', value: 6}
            ],
            currentPeriodValue:null
          }
        },
        watch:{
          innerStartDate(newVal, oldVal){
            // datepicker 업데이트
            $(this.$el).find('.datepicker[data-info = dateStart]').datepicker('update', newVal);
            
            // 이벤트 트리거
            this.$emit('update:startDate', newVal);
            this.$emit('valuechanged', {startDate:newVal, endDate:this.innerEndDate});
          },
          innerEndDate(newVal, oldVal){
            // datepicker 업데이트
            $(this.$el).find('.datepicker[data-info = dateEnd]').datepicker('update', newVal);

            // 이벤트 트리거
            this.$emit('update:endDate', newVal);
            this.$emit('valuechanged', {startDate:this.innerStartDate, endDate:newVal});
          },
          allChecked(newVal, oldVal){
            if (newVal) {
              // 전체기간으로 선택
              this.innerStartDate = this.allStartDate;
              this.innerEndDate = moment().endOf('day').toDate();

              // 현재 period 업데이트
              this.currentPeriodValue = null;
            }
          }
        },
        mounted(){
          // init datepicker
          $(this.$el).find('.datepicker').datepicker({
            format: "yyyy-mm-dd",
            autoclose: true
          });
          // 날짜 오늘로 기본셋팅
          //$(this.$el).find('.datepicker').datepicker('update', new Date());
          // 전체기간 선택
          this.allChecked = this.initAllCheck;
        },
        methods: {
          periodClicked(val){
            let startDate, endDate = null;
            switch (val){
              case 0: //오늘
                startDate = moment().startOf('day').toDate();
                endDate = moment().endOf('day').toDate();
                break;
              case 1: //어제
                startDate = moment().subtract(1, 'day').startOf('day').toDate();
                endDate = moment().subtract(1, 'day').endOf('day').toDate();
                break;
              case 2: //지난주
                startDate = moment().subtract(1, 'weeks').startOf('isoWeek').toDate();
                endDate = moment().subtract(1, 'weeks').endOf('isoWeek').toDate();
                break;
              case 3: //지난달
                startDate = moment().subtract(1, 'month').startOf('month').toDate();
                endDate = moment().subtract(1, 'month').endOf('month').toDate();
                break;
              case 4: //1주일
                startDate = moment().subtract(1, 'weeks').add(1, 'day').startOf('day').toDate();
                endDate = moment().endOf('day').toDate();
                break;
              case 5: //1개월
                startDate = moment().subtract(1, 'month').add(1, 'day').startOf('day').toDate();
                endDate = moment().endOf('day').toDate();
                break;
              case 6: //3개월
                startDate = moment().subtract(3, 'month').add(1, 'day').startOf('day').toDate();
                endDate = moment().endOf('day').toDate();
                break;
            }

            // 현재 선택된 period 업데이트
            this.currentPeriodValue = val;

            // 전체체크 해제
            this.allChecked = false;

            // update value (watch)
            this.innerStartDate = startDate;
            this.innerEndDate = endDate;
          }
        }
    }
</script>

<style scoped>
  .all-check{
    display:inline-block;
    padding-right:5px;
    margin-right:5px;
    vertical-align:middle;
  }
  .period,.period-date{
    display:inline-block;
    vertical-align:middle;
  }
  .disabled .input-group-addon{
    background: #eee;
  }
  .input-group{
    float:left;
    width:120px;
  }
  .input-group ~ .input-group{
    position:relative;
    margin-left:30px;
  }
  .input-group ~ .input-group:before{
    content:'~';
    position:absolute;
    left:-19px;
    top:0;
    line-height:34px;
  }
  .btn-wrap{
    display:inline-block;
    margin:0 5px;
    vertical-align:middle;
  }
  .btn-wrap .btn{
    padding-left:0;
    padding-right:0;
    width:50px;
    float:left;
  }
  .btn-wrap .btn ~ .btn{
    margin-left:7px;
  }
</style>
