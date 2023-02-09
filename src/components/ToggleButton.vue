<script setup lang="ts">
  import { toRefs } from 'vue';

  const props = defineProps<{
    disabled: boolean;
  }>();

  const { disabled } = toRefs(props);
</script>

<template>
  <label class="switch">
    <input :disabled="disabled" type="checkbox" @click="$emit('toggle')" />
    <span class="slider round"></span>
  </label>
</template>

<style scoped>
  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 17px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 13px;
    width: 13px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #005e5d;
  }

  input:focus + .slider {
    box-shadow: 0 0 0.5px #005e5d;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(13px);
    -ms-transform: translateX(13px);
    transform: translateX(13px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>
