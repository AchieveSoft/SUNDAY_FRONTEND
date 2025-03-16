<script setup lang="ts">
import { ref } from 'vue'
import { Card, IftaLabel, InputText, Button } from 'primevue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth-store'
import Swal from 'sweetalert2'
import { useLoaderStore } from '../stores/loader-store'

const router = useRouter()
const authStore = useAuthStore()
const loaderStore = useLoaderStore()
let email: string = ''
let password: string = ''
const { loginResult } = authStore

function gotoSummaryPage() {
  router.push('/summary')
}

async function login() {
  loaderStore.show()
  await authStore.login(email, password)
  loaderStore.hide()

  if (loginResult?.success)
    gotoSummaryPage()
  else
    Swal.fire({
      icon: 'warning',
      title: 'Login Failed',
      text: loginResult?.message,
      heightAuto: false
    })
}

function onEmailEnter(e: KeyboardEvent) {
  if (e.key === 'Enter') {
    if (email.length > 0) document.querySelector<HTMLInputElement>('#password')?.focus()
  }
}

function onPasswordEnter(e: KeyboardEvent) {
  if (e.key === 'Enter') {
    if (password.length > 0) login()
  }
}
</script>

<template>
  <div class="w-100 h-100 d-flex justify-content-center align-items-center">
    <Card style="width: 350px">
      <template #header>
        <img alt="" src="../assets/images/temp_logo.png" width="350" height="350" />
      </template>
      <template #title>
        <div class="w-100 text-center">
          SUNDAY CI/CD
        </div>
      </template>
      <template #content>
        <div class="d-flex flex-column justify-content-center align-items-center">
          <IftaLabel class="input">
            <InputText id="email" type="text" variant="filled" class="input" v-model="email" :onkeyup="onEmailEnter" />
            <label for="email">Email</label>
          </IftaLabel><br />
          <IftaLabel class="input">
            <InputText id="password" type="password" variant="filled" class="input" v-model="password"
              @keydown="onPasswordEnter" />
            <label for="password">Password</label>
          </IftaLabel><br />
          <Button severity="danger" class="btn-login" @click="login">Login</Button>
        </div>
      </template>
    </Card>
  </div>
</template>

<style>
.input {
  width: 100%;
}

.btn-login {
  width: 100%;
}
</style>
