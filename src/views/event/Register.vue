<template>
     <p>Registratiion form here</p>
     <button @click="register">Register me!</button>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import type { Event } from '@/types/Event';
import EventService from '@/services/EventService'
import { useRouter } from 'vue-router';

const router=useRouter()
const props=defineProps<{
  event:Event
}>()

const register=()=>{
  
  router.push({
    name:'EventDetails',
    params:{id:props.event.id}
  })
}
</script>

<style scoped>

</style>