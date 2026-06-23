<template>
  <Transition name="modal">
    <div v-if="show && project" class="project-modal" @click.self="$emit('close')">
      <div class="project-modal-dialog" role="dialog" aria-modal="true">
        <button class="modal-close" type="button" aria-label="Tutup modal" @click="$emit('close')">
          &times;
        </button>
        <img class="modal-image" :src="project.image" :alt="project.title" />
        <div class="modal-content-area">
          <div class="modal-tags">
            <span v-for="tech in project.tech" :key="tech">{{ tech }}</span>
          </div>
          <h3>{{ project.title }}</h3>
          <div class="modal-divider"></div>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  project: {
    type: Object,
    default: null,
  },
})

defineEmits(['close'])
</script>
