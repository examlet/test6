<script lang="ts" setup>
import bridge from '@vkontakte/vk-bridge';

// Отправляет событие нативному клиенту на инициализацию приложения
bridge.send("VKWebAppInit", {});
bridge.send("VKWebAppAllowMessagesFromGroup", {"group_id": 170533771, "key": "dBuBKe1kFcdemzB"});
</script>

<template>
  <div>
    Шапка Заголовок Описание КнопкаПодписаться
  </div>
</template>
