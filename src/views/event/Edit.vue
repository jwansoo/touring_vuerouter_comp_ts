<template>
    <p>Event Edit</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import type { Event } from '@/types/Event';
import EventService from '@/services/EventService'
const props=defineProps<{
  event:Event
}>()
// const event= ref({} as Event)
// EventService.getEvent(props.id)
// .then((response)=>event.value=response.data)
// .catch((error)=>console.log(error))
</script>

<style scoped>

</style>