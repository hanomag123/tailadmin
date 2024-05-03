<script setup lang="ts">
import { ref } from 'vue'
import BreadcrumbDefault from '@/Components/Breadcrumbs/BreadcrumbDefault.vue'
import TableOne from '@/Components/Tables/TableOne.vue'
import TableTwo from '@/Components/Tables/TableTwo.vue'
import TableThree from '@/Components/Tables/TableThree.vue'
import DefaultLayout from '@/Layouts/DefaultLayout.vue'

const pageTitle = ref('Tables')
defineProps(['products'])
</script>

<template>
  <DefaultLayout>
    <!-- Breadcrumb Start -->
    <BreadcrumbDefault :pageTitle="pageTitle" />
    <!-- Breadcrumb End -->
    <div v-for="product of products" :key="product.id">
      <div>helo</div>
    </div>
    <div class="flex flex-col gap-10">
      <TableOne :products="products"/>
      <TableTwo />
      <TableThree />
    </div>
  </DefaultLayout>
</template>
