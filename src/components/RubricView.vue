<script setup>
import { sumAllChildrensCount } from "@/composables/recursivecount.js"
const props = defineProps({
    data: Object,
    default: {}
})

</script>
<template>
    <div class="min-w-[5rem] w-fit min-h-[4rem] flex  flex-col justify-center items-center bg-white rounded-md p-4 ">
        <a :href="`https://www.klerk.ru/${props.data.url}`" target="_blank" class="text-base "><span
                class="text-blue-600 decoration-1 hover:underline ">{{ props.data.title }}</span> ({{ props.data.count}}
                <span v-if='props.data.children?.length'>,<span class="font-bold">
                {{sumAllChildrensCount(props.data.children) + props.data.count}}</span></span>)
        </a>

    </div>
</template>