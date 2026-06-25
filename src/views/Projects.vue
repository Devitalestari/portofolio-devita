<template>
  <section class="section projects-section">
    <div class="container">
      <div class="section-heading animate projects-heading">
        <span class="section-kicker">Projects</span>
        <h1>Project Pilihan</h1>
        <p>
          Beberapa project yang pernah saya kerjakan sebagai latihan dan pengembangan kemampuan
          dalam membangun aplikasi web.
        </p>
      </div>

      <div class="projects-grid">
        <article
          v-for="project in projects"
          :key="project.title"
          class="project-card animate"
          tabindex="0"
          @click="openProject(project)"
          @keydown.enter="openProject(project)"
        >
          <div class="project-image-area">
            <img :src="project.image" :alt="project.title" />
            <div class="project-overlay">
              <button class="btn btn-light project-overlay-btn" type="button" @click="openProject(project)">
                Detail
              </button>
            </div>
          </div>
          <div class="project-card-body">
            <div class="project-tags">
              <span v-for="tech in project.tech" :key="tech">{{ tech }}</span>
            </div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.short }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <Modal :show="Boolean(selectedProject)" :project="selectedProject" @close="selectedProject = null" />
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import Modal from '../components/Modal.vue'
import siMbgImage from '@/assets/image/si-mbg.png'
import gameImage from '@/assets/image/game.png'
import webBiodataImage from '@/assets/image/web_biodata.png'
import skensisImage from '@/assets/image/skensis.png'

const selectedProject = ref(null)

const projects = [
  {
    title: 'Si-MBG',
    image: siMbgImage,
    short: 'Sistem informasi berbasis web untuk pengelolaan data dan administrasi.',
    tech: ["Laravel", "PHP", "MySQL"],
    description:
      'Sistem informasi berbasis web yang dirancang untuk membantu pengelolaan data dan proses administrasi secara lebih efisien. Aplikasi ini memungkinkan pengguna untuk mengelola data dengan mudah melalui tampilan yang terstruktur dan responsif. Dengan fitur CRUD (Create, Read, Update, Delete), sistem ini mempermudah pencatatan, pencarian, serta pengolahan data secara real-time.',
    features: [
      "Dashboard",
      "Manajemen User",
      "Data Kelas",
      "Distribusi Harian",
      "Menu MBG",
      "Validasi & Penerimaan",
      "Laporan"
    ],
    team: {
      type: "Kelompok",
      detail: "4 orang (2 Backend, 2 Frontend)",
      role: "Backend Developer"
    },
  },
  {
    title: 'Escape From Haunted School',
    image: gameImage,
    short: 'Game 2D interaktif bertema horor dengan eksplorasi dan strategi.',
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      'Game 2D interaktif bertema horor yang menantang pemain untuk melarikan diri dari sekolah berhantu. Pemain harus memecahkan teka-teki, menghindari rintangan, dan menemukan jalan keluar. Game ini menggabungkan elemen eksplorasi dan strategi, dengan suasana mencekam yang dibangun melalui visual dan mekanik permainan.',
      features: [
      "Gameplay eksplorasi",
      "Teka-teki interaktif",
      "Sistem rintangan",
      "Level permainan",
      "Efek visual horor"
    ],
     team: {
      type: "Kelompok",
      detail: "Tim pengembangan game",
      role: "Backend Developer"
    },
  },
  {
    title: 'Personal Website',
    image: webBiodataImage,
    short: 'Website pribadi untuk menampilkan biodata, skill, dan project.',
    tech: ["HTML", "CSS"],
    description:
      'Website pribadi yang menampilkan informasi biodata, keterampilan, serta proyek yang pernah dikerjakan. Dibangun dengan desain modern dan responsif, website ini berfungsi sebagai identitas digital yang merepresentasikan diri secara profesional di dunia online.',
    features: [
      "Halaman Biodata",
      "Halaman Kontak",
      "Login",
      "Dashboard sederhana"
    ],
    team: {
      type: "Individu",
      detail: "Dikerjakan sendiri",
      role: "Frontend Developer"
    },
  },
  {
    title: 'Skensa Analisis Potensi Siswa',
    image: skensisImage,
    short: 'Aplikasi berbasis web untuk menganalisis potensi siswa.',
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      'Aplikasi berbasis web yang dirancang untuk menganalisis potensi siswa melalui berbagai parameter dan indikator. Aplikasi ini membantu pendidik dalam mengidentifikasi kekuatan dan kelemahan siswa, serta merancang strategi pembelajaran yang lebih efektif.',
    features: [
      "Beranda",
      "Dashboard",
      "Manajemen Jurusan"
    ],
    
    team: {
      type: "Kelompok",
      detail: "Tim pengembangan",
      role: "Frontend Developer"
    },
  },
]

const openProject = (project) => {
  selectedProject.value = project
}

let observer

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('show')
      })
    },
    { threshold: 0.14 }
  )

  document.querySelectorAll('.animate').forEach((element) => observer.observe(element))
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>



