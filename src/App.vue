<script setup>
import ApiService from './apiservice.js'
import RubricTree from './components/RubricTree.vue';
import { reactive, onMounted, watch } from 'vue'
const state = reactive({
  rubrics: null,
  showEmpty: false,
  checkedCount: 0

})
function mutateCheckedCount(event) {
  if (event.operand == 'sum')
    state.checkedCount += event.checkedCount
  if (event.operand == 'sub')
    state.checkedCount -= event.checkedCount
}

onMounted(async () => {
  state.rubrics = await ApiService.getRubrics()
  console.log(state.rubrics)
})
watch(() => state.showEmpty, async (val) => {
  if (val) {
    state.rubrics = await ApiService.getAllRubrics()
  } else {
    state.rubrics = await ApiService.getRubrics()
  }
  state.checkedCount = 0

})

</script>

<template>
  <div class="w-screen min-h-screen flex flex-col   ">
    <main class="rounded-md w-full h-full relative  bg-gray-200  p-[1rem]" v-if="state.rubrics">
      <RubricTree :rubrics="state.rubrics" @check-count="mutateCheckedCount" />
      <div
        class="bg-white rounded-md w-fit h-fit fixed right-1 top-1 drop-shadow-lg flex-col transition  hover:drop-shadow-xl p-2">
        <div class="flex gap-2 items-center flex-nowrap justify-between ">
          <label for="show_empty" class="text-base font-[500]">Отображать пустые рубрики</label>
          <input v-model="state.showEmpty" type="checkbox" id="show_empty" class="w-[1rem] h-[1rem]" />
        </div>

        <div class="flex gap-2 items-center flex-nowrap justify-between">
          <p class="font-[500] text-base">Сумма отмеченных count:</p><span
            class="font-[700] text-lg">{{ state.checkedCount }}</span>
        </div>
      </div>

    </main>
  </div>
</template>

<style scoped>

</style>
