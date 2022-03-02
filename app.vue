<script lang="ts" setup>
import bridge from "@vkontakte/vk-bridge";

bridge.send("VKWebAppInit", {});
bridge.subscribe((e) => console.log(e));

const allowMessages = () => {
  bridge.send("VKWebAppAllowMessagesFromGroup", {
    group_id: 170533771,
    key: "dBuBKe1kFcdemzB",
  });
};
</script>

<template>
  <div>
    <button @click="allowMessages">Подписаться</button>
  </div>
</template>
