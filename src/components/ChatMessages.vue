<script setup lang="ts">
import { ref } from 'vue';
import { format } from 'date-fns';
import type { Message, Channel } from '../types/chat';

const props = defineProps<{
  channel: Channel;
}>();

const newMessage = ref('');

const messages = ref<Message[]>([
  {
    id: '1',
    content: 'Hello everyone! 👋',
    userId: '1',
    timestamp: new Date('2024-02-20T10:00:00'),
  },
  {
    id: '2',
    content: 'Hi there! How is everyone doing?',
    userId: '2',
    timestamp: new Date('2024-02-20T10:01:00'),
  },
]);

const sendMessage = () => {
  if (!newMessage.value.trim()) return;
  
  messages.value.push({
    id: Date.now().toString(),
    content: newMessage.value,
    userId: '1', // Current user
    timestamp: new Date(),
  });
  
  newMessage.value = '';
};
</script>

<template>
  <div class="flex flex-col h-screen">
    <div class="p-4 border-b">
      <h2 class="text-xl font-bold"># {{ channel.name }}</h2>
    </div>

    <div class="flex-1 overflow-y-auto p-4 space-y-4">
      <div v-for="message in messages" :key="message.id" class="flex gap-4">
        <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
          {{ message.userId === '1' ? '👨‍💻' : '👩‍💼' }}
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="font-bold">
              {{ message.userId === '1' ? 'John Doe' : 'Jane Smith' }}
            </span>
            <span class="text-sm text-gray-500">
              {{ format(message.timestamp, 'h:mm a') }}
            </span>
          </div>
          <p class="mt-1">{{ message.content }}</p>
        </div>
      </div>
    </div>

    <div class="p-4 border-t">
      <div class="flex gap-2">
        <input
          v-model="newMessage"
          @keyup.enter="sendMessage"
          type="text"
          placeholder="Message #general"
          class="input input-bordered flex-1"
        />
        <button @click="sendMessage" class="btn btn-primary">Send</button>
      </div>
    </div>
  </div>
</template>