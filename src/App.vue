<script setup lang="ts">
import { ref } from 'vue';
import ChatSidebar from './components/ChatSidebar.vue';
import ChatMessages from './components/ChatMessages.vue';
import type { Channel } from './types/chat';

const currentChannel = ref<Channel>({
  id: '1',
  name: 'general',
  messages: [],
});
</script>

<template>
  <div class="flex">
    <ChatSidebar @channel-selected="currentChannel = $event" />
    <main class="flex-1">
      <ChatMessages :channel="currentChannel" />
    </main>
  </div>
</template>