<script setup>
import RubricView from '@/components/RubricView.vue';
import { reactive} from 'vue'
const props = defineProps(({
    rubrics: { type: Array, default: [] }
}))
const emit = defineEmits(['check-count'])
const idToShow = reactive([])
function showClidren(id) {
    idToShow.includes(id) ? idToShow.splice(idToShow.indexOf(id), 1) : idToShow.push(id)
}

</script>
<template>
    <div class="w-fit  flex-wrap items-center justify-start gap-[1rem] bg-grey-200 drop-shadow-lg ">
        <div v-for="rubric in rubrics" :key="rubric?.id" class="flex justify-start items-start">
            <div class="relative m-4 bg-gray-100 p-1 rounded-md w-fit h-full flex gap-1 items-center mt-2 mb-2 ">
                <RubricView :data="rubric" />
                <div class="flex flex-col justify-between items-center h-full gap-2">
                    <button v-if="rubric?.children?.length" @click="showClidren(rubric?.id)"
                        class="rounded-md w-[1.5rem] h-[1.5rem] flex items-center justify-center hover:drop-shadow-md"
                        :class="{ 'bg-red-200': idToShow.includes(rubric?.id), 'bg-blue-200': !idToShow.includes(rubric?.id) }">
                        <p v-if="!idToShow.includes(rubric?.id)">+</p>
                        <p v-if="idToShow.includes(rubric?.id)">-</p>
                    </button>
                    <input type="checkbox" v-model="rubric.checked"
                        @change="emit('check-count', { checkedCount: rubric.count, operand: rubric.checked ? 'sum' : 'sub' })"
                        class="h-[1.5rem] w-[1.2rem]" />
                </div>
            </div>

            <div v-if="rubric?.children?.length > 0 && idToShow.includes(rubric?.id)"
                class=" bg-gray-250 border-solid rounded-md">
                <RubricTree :rubrics="rubric?.children"
                    @check-count="emit('check-count', { checkedCount: $event.checkedCount, operand: $event.operand })" />
            </div>

        </div>

    </div>
</template>
