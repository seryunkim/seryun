<template>
  <div class="content-wrapper" style="min-height:900px;">

    <!--</section>-->
    <section class="content">
      <!--목록필터-->
      <list-filter v-on:datachanged="listFilterDataChanged"/>

      <!--등록 테이블-->
      <work-register />
      <!--결과 테이블-->
      <!--<result-table />-->

    </section>
  </div>
</template>

<script>
  import ListFilter from '@/components/pages/home/ListFilter'
  import ResultTable from '@/components/pages/home/ResultTable'
  import WorkRegister from '@/components/pages/home/WorkRegister'

  export default {
    name: "home",
    components:{
      ListFilter,
      ResultTable,
      WorkRegister
    },
    methods:{
      listFilterDataChanged(props){
        alert(props.data);
      }
    },
    data (){
      return{
      }
    }

  }
</script>

<style scoped>
</style>
