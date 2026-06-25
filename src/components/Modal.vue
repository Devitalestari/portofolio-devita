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
          <!-- FEATURES -->
          <div class="modal-section" v-if="project.features">
            <h4 class="modal-subtitle">Fitur Utama</h4>
            <div class="feature-list">
              <div class="feature-item" v-for="(feature, index) in project.features" :key="index">
                <span class="feature-dot"></span>
                <span>{{ feature }}</span>
              </div>
            </div>
          </div>

          <!-- TEAM -->
          <div class="modal-section" v-if="project.team">
            <h4 class="modal-subtitle">Tim Pengembang</h4>
            <div class="team-box">
              <div class="team-item">
                <span class="label">Tipe</span>
                <span class="value">{{ project.team.type }}</span>
              </div>
              <div class="team-item">
                <span class="label">Detail</span>
                <span class="value">{{ project.team.detail }}</span>
              </div>
              <div class="team-item">
                <span class="label">Role</span>
                <span class="value highlight">{{ project.team.role }}</span>
              </div>
            </div>
          </div>
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