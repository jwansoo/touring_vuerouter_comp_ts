<template>
  <div v-if="event">
    <h1>{{event.title}}</h1>
    <div id="nav">
      <router-link :to="{name:'EventDetails'}">Details</router-link> |
      <router-link :to="{name:'EventRegister'}">Register</router-link> |
      <router-link :to="{name:'EventEdit'}">Edit</router-link> 
    </div>
    <RouterView :event="event"></RouterView>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import type { Event } from '@/types/Event';
import EventService from '@/services/EventService';
import { useRouter } from 'vue-router';
const router=useRouter()
const props=defineProps<{
  id:number
}>()
const event= ref({} as Event)
EventService.getEvent(props.id)
.then((response)=>event.value=response.data)
.catch((error)=>{
  if(error.response && error.response.status==404){
    router.push({name:'404Resource', params:{resource:'event'}})
  } else{
  router.push({name:'NetworkError'})
  }
  })
</script>

<style scoped>

</style>