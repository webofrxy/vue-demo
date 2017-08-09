<template>
    <div class="contain">
        <breadcrumb class="breadcrumb"></breadcrumb>
        <datePicker class="datePicker"></datePicker>
        <list class="list"></list>
        <pagination class="pagination"></pagination>
    </div>
    
</template>
<script>
import breadcrumb from '@/components/common/breadcrumb'
import datePicker from '@/components/common/datePicker'
import list from '@/components/common/list'
import pagination from '@/components/common/pagination'
export default {
  data(){
      return{

      }
  },
  components:{
    breadcrumb,
    datePicker,
    list,
    pagination
  }
}
</script>
<style>

</style>

