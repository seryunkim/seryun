<template>
  <!--목록필터-->
  <div class="row">
    <div class="col-md-12">
      <h4>목록필터</h4>
      <div class="box box-info">
        <!--title-->
        <!--<div class="box-header">-->
          <!--<i class="fa fa-filter"></i>-->
          <!--<h3 class="box-title">목록필터</h3>-->
        <!--</div>-->
        <!--//title-->
        <!--contents-->
        <div class="box-body table-responsive">
          <table class="table table-bordered">
            <colgroup>
              <col width="120px"/>
              <col width="35%"/>
              <col width="120px"/>
              <col />
            </colgroup>
            <tbody>
              <!--등록일-->
              <tr>
                <th>등록일</th>
                <td  colspan="3">
                  <period-group
                    v-bind="periodProps"
                    :start-date.sync="formData.periodStartDate"
                    :end-date.sync="formData.periodEndDate"
                    @valuechanged="periodValueChanged"
                  />
                </td>
              </tr>
              <!--//등록일-->
              <!--연재요일-->
              <tr>
                <th>연재 요일</th>
                <td  colspan="3">
                  <checkbox-group
                    v-bind="serialDayProps"
                    @valuechanged="serialDayValueChanged"
                  />
                </td>
              </tr>
              <!--//연재요일-->
              <!--연재 상태-->
              <tr>
                <th>연재 상태</th>
                <td  colspan="3">
                  <checkbox-group
                    v-bind="serialTypeProps"
                    @valuechanged="serialTypeValueChanged"
                  />
                </td>
              </tr>
              <!--//연재 상태-->
              <!--판매 형태-->
              <tr>
                <th>판매 상태</th>
                <td  colspan="3">
                  <checkbox-group
                    v-bind="saleTypeProps"
                    @valuechanged="saleTypeValueChanged"
                  />
                </td>
              </tr>
              <!--//판매 형태-->
              <!--장르-->
              <tr>
                <th>장르</th>
                <td>
                  <base-select
                    v-bind="genreTypeProps"
                    :value.sync="formData.genreType"
                  />
                </td>
                <th>판매 상태</th>
                <td>
                  <base-select
                    v-bind="saleStateProps"
                    :value.sync="formData.saleState"
                  />
                </td>
              </tr>
              <!--//장르-->
              <!--검색어 입력-->
              <tr>
                <th>검색어 입력</th>
                <td colspan="3">
                  <search-group
                    v-bind="searchItemProps"
                    :selectValue.sync="formData.searchType"
                    :inputValue.sync="formData.searchText"
                    @valuechanged="searchValueChanged"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="box-footer btn-block text-center no-border">
          <button @click="searchButtonClick" type="button" class="btn btn-info btn-sm">목록 조회</button>
        </div>
        <!--//contents-->
      </div>
    </div>
  </div>
  <!--//목록필터-->
</template>

<script>
  import BaseSelect from '@/components/base/BaseSelect'
  import PeriodGroup from '@/components/form/PeriodGroup'
  import CheckboxGroup from '@/components/form/CheckboxGroup'
  import SearchGroup from '@/components/form/SearchGroup'
  export default {
      name: "list-filter",
      components: {
        BaseSelect,
        PeriodGroup,
        CheckboxGroup,
        SearchGroup
      },
      data(){
        return {
          formData:{  // send data
            periodStartDate:null,
            periodEndDate:null,
            serialDayValue:null,
            serialTypeValue:null,
            saleTypeValue:null,
            genreType:0,
            saleState:0,
            searchType:0,
            searchText:null
          },
          periodProps:{
            checkAllTitle:"전체 기간",
            initAllCheck:true
          },
          serialDayProps:{ // 연재 요일
            checkAllTitle:"전체 요일",
            items:[
              { title:'월', value:0},
              { title:'화', value:1},
              { title:'수', value:2},
              { title:'목', value:3},
              { title:'금', value:4},
              { title:'토', value:5},
              { title:'일', value:6},
              { title:'10일 연재', value:99}],
            initValues:[0, 1, 2, 3, 4, 5, 6, 99]
          },
          serialTypeProps:{ // 연재 상태
            checkAllTitle:"전체 유형",
            items:[
              { title:'연재중', value:0},
              { title:'연재 예정', value:1},
              { title:'완결', value:2},
              { title:'휴재', value:3}],
            initValues:[0, 1, 2, 3]
          },
          saleTypeProps:{ // 판매 상태
            checkAllTitle:"전체 유형",
            items:[
              { title:'유료', value:0},
              { title:'연재 미리보기', value:1},
              { title:'기다리며 무료', value:2},
              { title:'무료', value:3}],
            initValues:[0, 1, 2, 3]
          },
          genreTypeProps:{ //장르 항목
            isFull:false,
            items:[
              { title:'전체', value:0},
              { title:'판타지', value:1},
              { title:'개그', value:2},
              { title:'일상', value:3}]
          },
          saleStateProps:{ //판매상태 항목
            isFull:false,
            items:[
              { title:'전체', value:0},
              { title:'판매전', value:1},
              { title:'판매중', value:2},
              { title:'판매중지', value:3}]
          },
          searchItemProps:{ //검색가능 항목
            inputProps:{
              isFull:true,
              placeholderText:'검색어를 2자 이상 입력해주세요.',
              limit:0
            },
            selectProps:{ //장르 항목
              isFull:true,
              items:[
              { title:'전체', value:0},
              { title:'작품명', value:1},
              { title:'작가명', value:2},
              { title:'작품번호', value:3}]
            }
          }
        }
      },
      methods: {
        searchButtonClick(e){
          //console.log('search >> ', this.formData);
          this.$emit('datachanged', {name:'listfilter event emit', data:this.formData});
          // this.$emit('datachanged', {name:'listfilter event emit', date:this.$refs});
        },
        //이벤트핸들러가 필요 할 경우에만 사용
        periodValueChanged(data){
          //console.log('periodValueChanged', data);
        },
        serialDayValueChanged(data){
          this.formData.serialDayValue = data.value;
        },
        serialTypeValueChanged(data){
          this.formData.serialTypeValue = data.value;
        },
        saleTypeValueChanged(data){
          this.formData.saleTypeValue = data.value;
        },
        genreTypeValueChanged(data){
          console.log('genreTypeValueChanged', data);
        },
        saleStateValueChanged(data){
          console.log('saleStateValueChanged', data);
        },
        searchValueChanged(data){
          console.log('searchValueChanged', data);
        }
      },
      mounted(){
        // 폼데이터 초기화
        //this.formData.periodValue = 전체기간;
        this.formData.serialDayValue = this.serialDayProps.initValues;
        this.formData.serialTypeValue = this.serialTypeProps.initValues;
        this.formData.saleTypeValue = this.saleTypeProps.initValues;
      }
  }
</script>

<style scoped>
   #app table th{
     width:120px;
     vertical-align:middle;
   }
   #app table td{
     vertical-align:middle;
   }
   table td > div:not(.row){
     vertical-align:middle;
   }
</style>
