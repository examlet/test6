<script setup lang="ts">
const props = defineProps({
  disabled: { type: Boolean, required: false },
  secondary: { type: Boolean, required: false },
  tertiary: { type: Boolean, required: false },
  quaternary: { type: Boolean, required: false },
  bordered: { type: Boolean, required: false },
  dashed: { type: Boolean, required: false },
  strong: { type: Boolean, required: false },
});

const emit = defineEmits(["click"]);
</script>

<template>
  <button
    class="btn"
    :class="{
      'font-medium': strong,
      'btn-basic': !(
        props.secondary ||
        props.tertiary ||
        props.quaternary ||
        props.bordered ||
        props.dashed
      ),
      'btn-secondary':
        props.secondary &&
        !(props.tertiary || props.quaternary || props.bordered || props.dashed),
      'btn-tertiary':
        props.tertiary &&
        !(props.secondary || props.quaternary || props.bordered || props.dashed),
      'btn-quaternary':
        props.quaternary &&
        !(props.secondary || props.tertiary || props.bordered || props.dashed),
      'btn-border':
        props.bordered &&
        !(props.secondary || props.tertiary || props.quaternary || props.dashed),
      'btn-dashed':
        props.dashed &&
        !(props.secondary || props.tertiary || props.quaternary || props.bordered),
    }"
    :disabled="disabled"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>
