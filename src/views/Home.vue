<template>
  <section class="home-hero">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-6">
          <div class="hero-copy animate slide-left">
            <span class="section-kicker">Web Developer</span>
            <div class="hero-accent"></div>
            <h1>
              Ni Made Devita
              <span>Lestari</span>
            </h1>
            <p class="hero-tagline">Mengubah Ide Menjadi Kode, Membangun Web Menjadi Nyata.</p>
            <p class="hero-intro">
              Halo! Saya seorang Web Developer muda yang berfokus pada pembuatan website yang
              fungsional, responsif, dan berorientasi pada pengalaman pengguna.
            </p>
            <div class="hero-actions">
              <RouterLink class="btn btn-primary-custom" to="/projects">Lihat Project</RouterLink>
              <RouterLink class="btn btn-outline-custom" to="/contact">Hubungi Saya</RouterLink>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="hero-visual animate slide-right">
            <div class="hero-shape"></div>
            <div class="hero-image-wrap">
              <img :src="profileImage" alt="Devita" class="hero-image" />
            </div>
            <div class="hero-floating-card">
              <strong>Portfolio</strong>
              <span>Personal branding</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import profileImage from '@/assets/image/Devita.jpeg'

const highlights = [
  { number: '01', title: 'Responsif', text: 'Tampilan nyaman digunakan di mobile, tablet, dan desktop.' },
  { number: '02', title: 'User-Friendly', text: 'Setiap halaman dirancang agar mudah dipahami dan dinavigasi.' },
  { number: '03', title: 'Clean Code', text: 'Struktur file rapi dan mudah dikembangkan untuk kebutuhan berikutnya.' },
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