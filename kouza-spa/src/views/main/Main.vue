<template>
  <a-layout>
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <a-menu theme="dark" mode="inline">
        <a-menu-item @click="onMenuClick(item)" :key="index" v-for="(item, index) in menuLists">
          <span class="nav-text">{{ item.title }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />

      <a-layout-content :style="{ background: '#fff', margin: '24px 16px 0' }">
        <div :style="{ padding: '16px', height: '100%' }">
          <RouterView />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
//  使用组合式 API

import { MENU_LIST } from '@/config/menuList.config'
import { reactive } from 'vue'
import { RouterView, useRouter } from 'vue-router'

const menuLists = reactive(MENU_LIST)

const router = useRouter()

const onCollapse = (collapsed: boolean, type: string) => {
  console.log(collapsed, type)
}

const onBreakpoint = (broken: boolean) => {
  console.log(broken)
}

const onMenuClick = (item: { path: any }) => {
  router.push({
    path: item.path
  })
}
</script>

<style>
.ant-layout {
  width: 100%;
  height: 100%;
}

.ant-layout-header {
  height: 44px !important;
  padding: 0;
  background: '#fff';
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout-sub-header-background {
  background: #141414;
}
</style>
