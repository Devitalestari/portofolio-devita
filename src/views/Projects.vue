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
import myDuitImage from '@/assets/image/myduit.png'
import webBiodataImage from '@/assets/image/web_biodata.png'
import skensisImage from '@/assets/image/skensis.png'
import kalkulatorImage from '@/assets/image/kalkulator.png'

const selectedProject = ref(null)

const projects = [
  {
    title: 'Si-MBG',
    image: siMbgImage,
    short: 'Sistem informasi berbasis web untuk pengelolaan data dan administrasi.',
    tech: ['Web App', 'CRUD', 'Responsive'],
    description:
      'Sistem informasi berbasis web yang dirancang untuk membantu pengelolaan data dan proses administrasi secara lebih efisien. Aplikasi ini memungkinkan pengguna untuk mengelola data dengan mudah melalui tampilan yang terstruktur dan responsif. Dengan fitur CRUD (Create, Read, Update, Delete), sistem ini mempermudah pencatatan, pencarian, serta pengolahan data secara real-time.',
  },
  {
    title: 'Escape From Haunted School',
    image: gameImage,
    short: 'Game 2D interaktif bertema horor dengan eksplorasi dan strategi.',
    tech: ['Game 2D', 'Logic', 'Interactive'],
    description:
      'Game 2D interaktif bertema horor yang menantang pemain untuk melarikan diri dari sekolah berhantu. Pemain harus memecahkan teka-teki, menghindari rintangan, dan menemukan jalan keluar. Game ini menggabungkan elemen eksplorasi dan strategi, dengan suasana mencekam yang dibangun melalui visual dan mekanik permainan.',
  },
  {
    title: 'MyDuit',
    image: myDuitImage,
    short: 'Aplikasi manajemen keuangan untuk mencatat pemasukan dan pengeluaran.',
    tech: ['Finance', 'UI', 'Data'],
    description:
      'Aplikasi manajemen keuangan sederhana yang membantu pengguna mencatat pemasukan dan pengeluaran sehari-hari. Dengan tampilan yang clean dan mudah digunakan, pengguna dapat memantau kondisi keuangan mereka secara lebih teratur. Aplikasi ini juga membantu meningkatkan kesadaran dalam mengelola uang secara bijak.',
  },
  {
    title: 'Personal Website',
    image: webBiodataImage,
    short: 'Website pribadi untuk menampilkan biodata, skill, dan project.',
    tech: ['Portfolio', 'Responsive', 'Branding'],
    description:
      'Website pribadi yang menampilkan informasi biodata, keterampilan, serta proyek yang pernah dikerjakan. Dibangun dengan desain modern dan responsif, website ini berfungsi sebagai identitas digital yang merepresentasikan diri secara profesional di dunia online.',
  },
  {
    title: 'Skensa Analisis Potensi Siswa',
    image: skensisImage,
    short: 'Aplikasi berbasis web untuk menganalisis potensi siswa.',
    tech: ['Education', 'Data Analysis', 'Web'],
    description:
      'Aplikasi berbasis web yang dirancang untuk menganalisis potensi siswa melalui berbagai parameter dan indikator. Aplikasi ini membantu pendidik dalam mengidentifikasi kekuatan dan kelemahan siswa, serta merancang strategi pembelajaran yang lebih efektif.',
  },
  {
    title: 'Kalkulator HP',
    image: kalkulatorImage,
    short: 'Kalkulator sederhana dengan tampilan responsif seperti perangkat mobile.',
    tech: ['Calculator', 'Logic', 'Mobile UI'],
    description:
      'Aplikasi kalkulator sederhana yang meniru fungsi kalkulator pada perangkat mobile. Mendukung operasi matematika dasar dengan tampilan yang user-friendly dan responsif. Cocok digunakan sebagai latihan logika pemrograman dan manipulasi input pengguna.',
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
