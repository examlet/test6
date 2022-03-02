<script lang="ts" setup>
import bridge from "@vkontakte/vk-bridge";

const userVkId = ref(-1);

bridge.send("VKWebAppInit", {});
bridge.subscribe((e) => console.log(e));

bridge.send("VKWebAppGetUserInfo").then((data) => {
  userVkId.value = data.id;
});

const allowMessages = () => {
  bridge
    .send("VKWebAppAllowMessagesFromGroup", {
      group_id: 170533771,
      key: "dBuBKe1kFcdemzB",
    })
    .then(() => {
      window.location.href = "https://vk.com/im?sel=-170533771";
    })
    .catch(() => {
      allowMessages();
    });
};
</script>

<template>
  <div>
    <div>{{ userVkId }}</div>
    <button @click="allowMessages">Подписаться</button>
  </div>
</template>
