<script setup lang="ts">
import { ref } from 'vue';
import type { Channel, User } from '../types/chat';

const channels = ref<Channel[]>([
  { id: '1', name: 'general', messages: [] },
  { id: '2', name: 'random', messages: [] },
  { id: '3', name: 'development', messages: [] },
]);

const users = ref<User[]>([
  { id: '1', name: 'John Doe', avatar: '👨‍💻', status: 'online' },
  { id: '2', name: 'Jane Smith', avatar: '👩‍💼', status: 'away' },
  { id: '3', name: 'Bob Johnson', avatar: '👨‍🚀', status: 'offline' },
]);

defineEmits(['channel-selected']);
</script>

<template>
  <div class="bg-base-200 w-64 h-screen flex flex-col">
    <div class="p-4 border-b">
      <h1 class="text-xl font-bold">Workspace</h1>
    </div>
    
    <div class="p-4">
      <h2 class="text-sm font-semibold mb-2">Channels</h2>
      <ul>
        <li v-for="channel in channels" :key="channel.id">
          <button
            @click="$emit('channel-selected', channel)"
            class="w-full text-left p-2 hover:bg-base-300 rounded"
          >
            # {{ channel.name }}
          </button>
        </li>
      </ul>
    </div>

    <div class="p-4">
      <h2 class="text-sm font-semibold mb-2">Direct Messages</h2>
      <ul>
        <li v-for="user in users" :key="user.id" class="flex items-center gap-2 p-2 hover:bg-base-300 rounded">
          <span>{{ user.avatar }}</span>
          <span>{{ user.name }}</span>
          <span class="ml-auto">
            <div :class="{
              'w-2 h-2 rounded-full': true,
              'bg-success': user.status === 'online',
              'bg-warning': user.status === 'away',
              'bg-gray-400': user.status === 'offline'
            }"></div>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>