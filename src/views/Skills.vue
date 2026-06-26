<template>
  <section class="section skills-section">
    <div class="container">
      <div class="skills-header animate">
        <div>
          <span class="section-kicker">Skills</span>
          <h1>Kemampuan Teknis</h1>
        </div>
        <p>
          Setiap persentase menggambarkan kemampuan saya saat ini dan hal yang sudah bisa saya
          kerjakan menggunakan skill tersebut.
        </p>
      </div>

      <div class="skills-grid">
        <article v-for="skill in skills" :key="skill.name" class="skill-card animate">
          <div class="skill-top">
            <span class="skill-icon">{{ skill.icon }}</span>
            <div>
              <h3>{{ skill.name }}</h3>
              <p>{{ skill.level }}</p>
            </div>
          </div>
          <p class="skill-description">{{ skill.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const skills = [
  {
    name: 'HTML',
    level: 'Cukup baik',
    icon: 'H',
    description: 'Sudah mampu menyusun struktur halaman, section, form, card, tabel sederhana, dan konten web yang rapi.',
  },
  {
    name: 'CSS',
    level: 'Menengah',
    icon: 'C',
    description: 'Mampu membuat layout responsif, styling card, button, spacing, hover effect, dan tampilan modern yang konsisten.',
  },
  {
    name: 'JavaScript',
    level: 'Dasar berkembang',
    icon: 'JS',
    description: 'Bisa membuat interaksi dasar seperti modal, animasi scroll, event click, manipulasi data sederhana, dan validasi ringan.',
  },
  {
    name: 'Bootstrap',
    level: 'Dasar',
    icon: 'B',
    description: 'Dapat memakai grid, container, navbar, button, dan komponen dasar untuk mempercepat pembuatan UI responsif.',
  },
  {
    name: 'Python',
    level: 'Dasar',
    icon: 'PY',
    description: 'Memahami dasar variabel, percabangan, perulangan, function sederhana, dan latihan logika pemrograman.',
  },
]

let observer

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('show')
      })
    },
    { threshold: 0.16 }
  )

  document.querySelectorAll('.animate').forEach((element) => observer.observe(element))
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>
