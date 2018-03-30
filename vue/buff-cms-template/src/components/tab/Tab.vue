<template>
  <div class="nav-tabs-custom tab-info">
    <ul class="nav nav-tabs">
      <li class="active"><a href="#tab_1" data-toggle="tab">Tab 1</a></li>
      <li><a href="#tab_2" data-toggle="tab">Tab 2</a></li>
      <li><a href="#tab_3" data-toggle="tab">Tab 3</a></li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane active" id="tab_1">
        내용1
      </div>
      <div class="tab-pane" id="tab_2">
        내용2
      </div>
      <div class="tab-pane" id="tab_3">
        내용3
      </div>
    </div>
    <!-- /.tab-content -->
  </div>
</template>

<script>
    export default {
        name: "tab"
    }
</script>

<style scoped>

</style>
