<template>
  <div class="dropdown">
    <button class="dropdown-button" @click="toggleDropdown">
      {{ selectedLabel }}
    </button>
    <div class="dropdown-content" v-if="isOpen">
      <router-link
        v-for="item in items" 
        :key="item.value" 
        @click="selectItem(item)" 
        :to="item.value"
      >
        {{ item.label }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const isOpen = ref(false);
const selectedLabel = ref('监控大屏');
const items = ref([
  { value: "/monitor", label: '监控大屏' },
  { value: "/energy",  label: '能源管理' },
  { value: "/smart",   label: '智能决策' },
  { value: "/secure",  label: '安全预警' }
]);
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectItem = (item) => {
  selectedLabel.value = item.label;
  isOpen.value = false;
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-button {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.dropdown-button:hover {
  background-color: #2980b9;
}

.dropdown-content {
  position: absolute;
  background-color: white;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  min-width: 160px;
  z-index: 1;
  margin-top: 10px;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  border-bottom: 1px solid #ddd;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown-content a:last-child {
  border-bottom: none;
}
</style>