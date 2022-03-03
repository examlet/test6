<script lang="ts" setup>
import axios from "axios";
import bridge from "@vkontakte/vk-bridge";
import QButton from "./components/QButton.vue";

const userVkId = ref(-1);

bridge.send("VKWebAppInit", {});
bridge.subscribe((e) => console.log(e));

bridge.send("VKWebAppGetUserInfo").then((data) => {
  userVkId.value = data.id;
});

const openGroup = () => window.open("https://vk.com/partainfo");
const openDialog = () => window.open("https://vk.me/partainfo");

const sendToSenler = () => {
  axios.post("https://senler.ru/api/subscribers/add", {
    vk_group_id: 170533771,
    access_token: "c0c3c9714a05f7f66527146f826dd2ce1c49b33bb9269923",
    v: 2,
    subscription_id: 1584736,
    vk_user_id: userVkId.value,
  });
};

const allowMessages = () => {
  bridge
    .send("VKWebAppAllowMessagesFromGroup", {
      group_id: 170533771,
      key: "dBuBKe1kFcdemzB",
    })
    .then(() => {
      sendToSenler();
      openDialog();
    })
    .catch(() => {
      allowMessages();
    });
};

onMounted(() => {
  bridge
    .send("VKWebAppAllowMessagesFromGroup", {
      group_id: 170533771,
      key: "dBuBKe1kFcdemzB",
    })
    .then(() => {
      sendToSenler();
      openDialog();
    });
});

const submenu_hidden = ref(true);
const changeSubmenu = () => (submenu_hidden.value = !submenu_hidden.value);
</script>

<template>
  <div class="landing">
    <div class="landing__header">
      <div class="landing__header_line">
        <div class="landing__header_container landing__wrapper">
          <div class="header__logo">
            <div class="ml-10px text-2xl font-bold">
              <span>PĀRTA - Информатика</span>
            </div>
          </div>
          <div class="landing__header_menu">
            <QButton @click="openGroup" class="landing__header_button" quaternary
              >Открыть сообщество</QButton
            >
            <QButton @click="openDialog" class="landing__header_button" quaternary
              >Задать вопрос преподавателю</QButton
            >
          </div>

          <div class="landing__header_burger" @click="changeSubmenu">
            <div class="landing__header_burgerBox space-y-1 h-full">
              <div class="landing__header_burgerBoxInner -top-6px" />
              <div class="landing__header_burgerBoxInner" />
              <div class="landing__header_burgerBoxInner -bottom-6px" />
            </div>
          </div>
        </div>
      </div>
      <div
        class="landing__header_submenu"
        :class="[submenu_hidden ? '-translate-y-120%' : '-translate-y-0']"
      >
        <div class="landing__header_submenuСontainer landing__wrapper">
          <div class="landing__header_submenuLine mt-0">
            <div @click="openGroup" class="landing__header_submenuLink">
              Открыть сообщество
            </div>
          </div>
          <div class="landing__header_submenuLine">
            <div @click="openDialog" class="landing__header_submenuLink">
              Задать вопрос преподавателю
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="landing__body mx-auto px-20px text-center my-auto items-center">
      <div class="mt-10px text-2xl">Шаблоны программ</div>
      <div class="mx-auto mt-5px text-2xl">для заданий первой части (ЕГЭ)</div>
      <QButton @click="allowMessages" strong class="mt-20px text-2xl h-70px"
        >Получить материалы</QButton
      >
      <div mx-auto class="mt-20px px-20px">
        <b>Отправим в личных сообщениях, нужно РАЗРЕШИТЬ нам это :)</b>
      </div>
      <div class="mt-30px text-sm">
        Для решения заданий первой части можно легко использовать шаблоны программ, данный
        документ позволяет легко получить 7 первичных баллов на экзамене.
      </div>
      <div class="mt-5px text-sm"><b>Все шаблоны представлены на языке Python!</b></div>
    </div>
  </div>
</template>
