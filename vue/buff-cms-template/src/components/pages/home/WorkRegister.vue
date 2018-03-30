<template>
  <div class="row">
    <div class="col-md-12">
      <h4>
        웹툰/만화 등록
      </h4>
      <!--box-->
      <div class="box">
        <!--contents-->
        <div class="box-body">
          <table class="table table-bordered">
            <tbody>
            <tr>
              <th>연동 아이디</th>
              <td>
                <a href="#" class="btn btn-default btn-sm">계정 선택하기</a>
              </td>
            </tr>
            <tr>
              <th>작품 종류</th>
              <td>
                <base-radio-group
                  v-bind="workTypeProps"
                  :value.sync="formData.workType"
                />
              </td>
            </tr>
            <tr>
              <th>장르</th>
              <td>
                <base-select
                  v-bind="genreTypeProps"
                  :value.sync="formData.genreType"
                />
              </td>
            </tr>
            <tr>
              <th>작품명</th>
              <td>
                <base-input
                  v-bind="workTitleProps"
                  :value.sync="formData.workTitle"
                />
              </td>
            </tr>
            <tr>
              <th>글작가 (선택)</th>
              <td>
                <a href="#" class="btn btn-default btn-sm">작가명 선택하기</a>
              </td>
            </tr>
            <tr>
              <th>그림작가</th>
              <td>
                <a href="#" class="btn btn-default btn-sm">작가명 선택하기</a>
              </td>
            </tr>
            <tr>
              <th>연재 요일</th>
              <td>
                <checkbox-group
                  v-bind="serialDayProps"
                  @valuechanged="serialDayValueChanged"
                />
              </td>
            </tr>
            <tr>
              <th>연령 제한</th>
              <td>
                <base-radio-group
                  v-bind="ageLimitProps"
                  :value.sync="formData.ageLimit"
                />
              </td>
            </tr>
            <tr>
              <th>작품 뷰 방식</th>
              <td>
                <base-radio-group
                  v-bind="viewTypeProps"
                  :value.sync="formData.viewType"
                />
              </td>
            </tr>
            <tr>
              <th>작품 대표 이미지</th>
              <td>
                <div class="text-guide">
                  <p>작품의 대표 썸네일로 사용할 이미지 2장을 등록해주세요.</p>
                  <ul class="list-unstyled text-aqua">
                    <li>* 파일 크기 : 1장당 1MB 이하</li>
                    <li>* 파일 형식 : JPG, JPEG, PNG (CMYK 제외)</li>
                  </ul>
                </div>
                <!--이미지 등록-->
                <register-image
                  v-bind="imageProps"
                />
              </td>
            </tr>
            <tr>
              <th>작품 소개</th>
              <td>
                <!--이미지 등록-->
                <base-textarea
                  v-bind="workDescriptionProps"
                  :value.sync="formData.workDescription"
                />
              </td>
            </tr>
            <tr>
              <th>판매 형태</th>
              <td>
                <!--radio group-->
                <base-radio-group
                  v-bind="saleTypeProps"
                  :value.sync="formData.saleType"
                />
                <p class="text-guide text-aqua" v-if="formData.saleType == 0">1 * 아래에서 판매 옵션을 설정하세요.</p>
                <p class="text-guide text-aqua" v-else-if="formData.saleType == 1">2 * 아래에서 판매 옵션을 설정하세요.</p>
                <p class="text-guide text-aqua" v-else-if="formData.saleType == 2">3 * 아래에서 판매 옵션을 설정하세요.</p>
                <p class="text-guide text-aqua" v-else-if="formData.saleType == 3">4 * 아래에서 판매 옵션을 설정하세요.</p>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <!--//contents-->
      </div>
      <!--//box-->
      <!--box-->
      <div class="box">
        <!--title-->
        <div class="box-header">
          <h5 class="box-title">판매 옵션</h5>
        </div>
        <!--//title-->
        <div class="box-body no-padding">
          <table class="table table-bordered">
            <tbody>
              <tr>
                <th>무료 제공 화차 수</th>
                <td>
                  <div class="option-text">
                    <label class="checkbox-inline">
                      <input type="checkbox" />
                      <i class="fa fa-fw"></i>
                      <strong>무료 제공 :</strong>
                    </label>
                    <div class="option-input">
                      <base-input
                        v-bind="optionFreePops"
                        :value.sync="formData.optionFree"
                      />
                    </div>
                    <span>화</span>
                    <small class="text-aqua">최소 5화 이상 설정 가능합니다.</small>
                  </div>
                </td>
              </tr>
              <tr>
                <th>구매 가격 설정</th>
                <td>
                  <div class="option-text">
                    <label class="checkbox-inline">
                      <input type="checkbox" checked />
                      <i class="fa fa-fw"></i>
                      <strong>구매가격 :</strong>
                    </label>
                    <span>화당</span>
                    <div class="option-input">
                      <base-input
                        v-bind="optionSalePricePops"
                        :value.sync="formData.optionSalePrice"
                      />
                    </div>
                    <span>코인</span>
                    <small class="text-aqua">최소 20코인~최대 100코인까지 1코인 단위로 설정 가능합니다.</small>
                  </div>
                </td>
              </tr>
              <tr>
                <th>대여 가격 설정</th>
                <td>
                  <div class="option-text">
                    <label class="checkbox-inline">
                      <input type="checkbox" checked />
                      <i class="fa fa-fw"></i>
                      <strong>대여 가격/기간 :</strong>
                    </label>
                    <span>화당</span>
                    <div class="option-input">
                      <base-input
                        v-bind="optionRentPricePops.coin"
                        :value.sync="formData.optionRentPrice.coin"
                      />
                    </div>
                    <span>코인 ~ </span>
                    <div class="option-input">
                      <base-input
                        v-bind="optionRentPricePops.day"
                        :value.sync="formData.optionRentPrice.day"
                      />
                    </div>
                    <span>일 대여</span>
                    <div class="text-aqua"><small>대여 가격은 최소 10코인~최대 50코인까지 1코인 단위로 설정 가능하며,<br/>대여기간은 최소 3일~최대 7일로 설정 가능합니다.</small></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!--//box-->
    </div>
  </div>
</template>

<script>
    import BaseSelect from '@/components/base/BaseSelect'
    import BaseInput from '@/components/base/BaseInput'
    import BaseTextarea from '@/components/base/BaseTextarea'
    import BaseCheck from '@/components/base/BaseCheck'
    import BaseRadioGroup from '@/components/base/BaseRadioGroup'
    import CheckboxGroup from '@/components/form/CheckboxGroup'
    import RegisterImage from '@/components/RegisterImage'

    export default {
        name: "work-register",
        components:{
          BaseSelect,
          BaseInput,
          BaseTextarea,
          BaseCheck,
          BaseRadioGroup,
          CheckboxGroup,
          RegisterImage
        },
        data(){
          return{
            formData:{  //send data
              workType:0,
              genreType:0,
              workTitle:null,
              serialDayValue:null,
              ageLimit:0,
              viewType:0,
              workDescription:'',
              saleType:0,
              optionFree:null,
              optionSalePrice:20,
              optionRentPrice:{coin:10,day:3},
            },
            workTypeProps:{ //작품종류
              items:[
                { title:'웹툰', value:0},
                { title:'출판만화', value:1}]
            },
            genreTypeProps:{ //장르항목
              items:[
                { title:'전체', value:0},
                { title:'판타지', value:1},
                { title:'개그', value:2},
                { title:'일상', value:3},
                { title:'액션', value:4},
                { title:'로맨스', value:5},
                { title:'학원', value:6},
                { title:'SF', value:7},
                { title:'스릴러/호러', value:8},
                { title:'드라마', value:9},
                { title:'무협/시대극', value:10},
                { title:'게임', value:11}]
            },
            workTitleProps:{ //작품명
              isFull:false,
              placeholderText:'예) 버프툰 (최대 256자)',
              limit:256
            },
            serialDayProps:{ //연재 요일
              items:[
                { title:'월', value:0},
                { title:'화', value:1},
                { title:'수', value:2},
                { title:'목', value:3},
                { title:'금', value:4},
                { title:'토', value:5},
                { title:'일', value:6},
                { title:'10일 연재', value:99}],
              initValues:[],
              disabledVaules:[99]
            },
            ageLimitProps:{ //연령 제한
              items:[
                { title:'전체 이용가', value:0},
                { title:'15세 이용가', value:1},
                { title:'19세 이용가', value:2}]
            },
            viewTypeProps:{ //작품 뷰 방식
              items:[
                { title:'상/하 스크롤 방식', value:0},
                { title:'좌/우 스크롤 방식', value:1},
                { title:'우/좌 스크롤 방식', value:2}]
            },
            imageProps:{ //작품 대표 이미지
              items:[
                {title:"홈 화면용", width:"720", height:"720",image:'https://dummyimage.com/720/000/fff',filename:'index.jpg'},
                {title:"리스트용", width:"1200", height:"628"}]
            },
            workDescriptionProps:{ //작품 소개
              isFull:true,
              placeholderText:'작품 등록 시 노출 될 작품 소개 내용을 입력해주세요.',
              limit:1500
            },
            saleTypeProps:{ //판매 형태
              items:[
                { title:'유료', value:0},
                { title:'연재 미리보기', value:1},
                { title:'기다리면 무료', value:2},
                { title:'무료', value:3}]
            },
            optionFreePops:{ //판매옵션 - 무료제공 화차수
              isFull:true,
              align:'center'
            },
            optionSalePricePops:{ //판매옵션 - 구매가격
              isFull:true,
            align:'center'
            },
            optionRentPricePops:{ //판매옵션 - 대여가격
              coin:{
                isFull:true,
                align:'center'
              },
              day:{
                isFull:true,
                align:'center'
              }
            }
          }
        },
        methods:{
          //연재요일
          serialDayValueChanged(data){
            console.log('data', data);
            this.serialDayValue = data.value;
          }
        }
    }
</script>

<style scoped>
  #app .table tr > th{width:130px;}
  .text-guide{
    padding-top:8px;
    font-size:0.9em;
  }
  .text-guide .list-unstyled{
    padding:8px 0;
  }
  .option-input{
    display:inline-block;
    width:8%;
    vertical-align:middle;
  }
  .option-text > span ~ span{
    margin-left:5px;
  }
  .option-text [class^=checkbox]{
    margin-top:-2px;
  }
</style>
