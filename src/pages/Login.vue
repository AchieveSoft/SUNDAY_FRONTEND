<script setup lang="ts">
import { Card, IftaLabel, InputText, Button } from 'primevue'
import { useRouter } from 'vue-router'

const router = useRouter()

function gotoSummaryPage() {
  router.push('/summary')
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
            <InputText id="email" type="text" variant="filled" class="input" />
            <label for="email">Email</label>
          </IftaLabel><br />
          <IftaLabel class="input">
            <InputText id="password" type="password" variant="filled" class="input" />
            <label for="password">Password</label>
          </IftaLabel><br />
          <Button severity="danger" class="btn-login" @click="gotoSummaryPage">Login</Button>
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
