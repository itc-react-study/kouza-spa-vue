<template>
  <div class="login">
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Login</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
//  使用组合式 API
import { getApi } from '@/common/service/api.service'
import { ApiIds } from '@/constants/api-id.constant'
import type { SH1APIDUMLGNRequestBody } from '@/interfaces/api/shiapidumlgn'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

interface FormState {
  username: string
  password: string
}

const router = useRouter()

const formState = reactive<FormState>({
  username: '',
  password: ''
})

const onFinish = async (values: FormState) => {
  console.log('Success:', values)

  const param: SH1APIDUMLGNRequestBody = {
    userName: values.username,
    userPwd: values.password
  }

  const response = await getApi(ApiIds.SH1APIDUMLGN, param)

  router.push({
    path: '/Main'
  })
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
</script>

<style>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
