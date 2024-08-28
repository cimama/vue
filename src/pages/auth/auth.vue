<template>
  <view class="">
    123486
  </view>
</template>

<script setup lang="ts">
// example.ts
import { request } from '../../api/server/index';
import api from '../../api/server/api'

interface User {
  id: number;
  name: string;
}

const fetchUserData = async () => {
  try {
    const response = await request<User>({
      url: api.register,
      method: 'POST',
    });
    console.log('User data:', response.data);
  } catch (error) {
    console.error('Failed to fetch user data:', error);
  }
};

fetchUserData();

</script>

<style lang="scss" scoped>

</style>
