<template>
  <button class="yi-button" :class="buttonStyle"><slot/></button>
</template>
<script lang="ts" setup>
import { defineProps, computed } from "vue";
import "./style/index.less";
defineOptions({ name: "yi-button" });
type ButtonProps = {
  type?: string;
};
const buttonProps = defineProps<ButtonProps>();
const buttonStyle = computed(() => {
  return { [`yi-button--${buttonProps.type}`]: buttonProps.type };
});

</script>
