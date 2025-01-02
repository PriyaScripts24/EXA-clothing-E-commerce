<script>
import { Notification, Notivue } from "notivue";
</script>

<template>
  <div>
    <Notivue v-slot="item">
      <Notification :item="item" />
    </Notivue>
    <div>
      <NuxtPage />
    </div>
  </div>
</template>
