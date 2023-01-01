<template>
   <div class="events">
    <h1>Events for Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
    <RouterLink 
    id="page-prev"
    :to="{name:'EventList',query:{page:page-1}}"
    rel='prev'
    v-if="page !=1">&#60; Previous</RouterLink>
  </div>
    <RouterLink 
      id="page-next"
      :to="{name:'EventList',query:{page:page+1}}"
      rel='next'
      v-if="hasNextPage()"
      >Next &#62;</RouterLink>
  </div>
</template>

<script setup lang="ts">
import EventCard from '@/components/EventCard.vue';
import EventService from '@/services/EventService';
import {useRoute} from 'vue-router'
import type { Event } from '@/types/Event';
import {ref, watchEffect,computed} from 'vue'
const props=defineProps<{
  page:number
}>()
const events=ref([] as Event[])
const totalEvents=ref(0 as any) 

watchEffect(()=>{
    EventService.getEvents(2,props.page)
    .then((response)=>{
      events.value=response.data
       totalEvents.value=response.headers['x-total-count']
    })
    .catch((error)=>console.log(error))
 })
 const hasNextPage=()=>computed(():boolean=>{
  let totalPages=Math.ceil(totalEvents.value/2)
  return props.page < totalPages
})
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>