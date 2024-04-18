<template>
    <div class="user-details-container">
        <div class="detail-item">
            <label class="label-text">Nombre:</label>
            <p class="detail-text">{{ user.name }}</p>
        </div>
        <div class="detail-item">
            <label class="label-text">Email:</label>
            <p class="detail-text">{{ user.email }}</p>
        </div>
        <div class="detail-item">
            <label class="label-text">Password:</label>
            <p class="detail-text">{{ user.password }}</p>
        </div>
        <div class="detail-item">
            <label class="label-text">Grupo:</label>
            <p class="detail-text">{{ user.group }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import UserService from '@/service/UserService'
import { onMounted  } from 'vue';
const service = new UserService()
const user = service.getUser()

onMounted(async () => {
    const router = useRoute()
    const userId = router.params.email as string
    const name = router.params.name as string
    const group = router.params.group as string
    await service.fetchUser(userId, name, group)
})
</script>

<style scoped>
.user-details-container {
    max-width: 400px;
    margin: 20px auto;    
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
}

.detail-item {
    margin-bottom: 20px;
}

.label-text {
    font-weight: bold;
    color: #007bff; 
}

.detail-text {
    margin-top: 5px;
    font-size: 16px;
    color: #333; 
}
</style>
