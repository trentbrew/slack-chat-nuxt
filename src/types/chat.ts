export interface Message {
  id: string;
  content: string;
  userId: string;
  timestamp: Date;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  status: 'online' | 'offline' | 'away';
}

export interface Channel {
  id: string;
  name: string;
  messages: Message[];
}