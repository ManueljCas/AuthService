<template>
    <section>
        <ul>
            <li v-for="(user, index) in users" :key="index">
            <RouterLink :to="{name: 'user', params: {email: user.email}}">{{ index +1 }} | {{ user.email }}</RouterLink>
            </li>
        </ul>
    </section>
</template>
<script lang="ts" setup>
    import UserService from '@/service/UserService'
    import type IUser from '@/interface/IUser'
    import {ref, onMounted} from 'vue'
    import type {Ref} from 'vue'

    const service = new UserService()
    const users:Ref<IUser[]> = service.getUsers()

    onMounted(async () => {
        await service.fetchUsers()
    })
</script>

<style scoped></style>