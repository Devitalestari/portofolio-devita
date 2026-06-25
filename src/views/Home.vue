<template>
  <section class="home-hero">
    <!-- Container dari Bootstrap (biar rapi & ada margin kiri kanan) -->
    <div class="container">
      <!-- Row Bootstrap untuk grid -->
      <div class="row align-items-center g-5">
        <!-- Kolom kiri (isi text) -->
        <div class="col-lg-6">
          <div class="hero-copy animate slide-left">
            <!-- Label kecil -->
            <span class="section-kicker">Web Developer</span>
            <!-- Garis aksen -->
            <div class="hero-accent"></div>
            <!-- Judul utama -->
            <h1>
              Ni Made Devita
              <span>Lestari</span> <!-- ini diberi style gradient -->
            </h1>
            <!-- Tagline -->
            <p class="hero-tagline">
              Mengubah Ide Menjadi Kode, Membangun Web Menjadi Nyata.
            </p>
            <!-- Deskripsi -->
            <p class="hero-intro">
              Halo! Saya seorang Web Developer muda yang berfokus pada pembuatan website yang
              fungsional, responsif, dan berorientasi pada pengalaman pengguna.
            </p>
            <div class="hero-actions">
              <RouterLink class="btn btn-primary-custom" to="/projects">
                Lihat Project
              </RouterLink>
              <RouterLink class="btn btn-outline-custom" to="/contact">
                Hubungi Saya
              </RouterLink>
            </div>
          </div>
        </div>
        <!-- Kolom kanan (gambar) -->
        <div class="col-lg-6">
          <div class="hero-visual animate slide-right">
            <!-- Background blob -->
            <div class="hero-shape"></div>
            <!-- Bungkus gambar -->
            <div class="hero-image-wrap">
              <!-- Binding gambar dari script -->
              <img :src="profileImage" alt="Devita" class="hero-image" />
            </div>
            <!-- Card kecil melayang -->
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
// Variabel untuk observer
let observer
// Saat komponen muncul di layar
onMounted(() => {
  // Membuat observer untuk mendeteksi elemen masuk viewport
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Kalau elemen terlihat di layar
        if (entry.isIntersecting) {
          // Tambahkan class 'show' (biasanya untuk animasi)
          entry.target.classList.add('show')
        }
      })
    },
    {
      threshold: 0.16 // 16% elemen terlihat baru aktif
    }
  )
  // Ambil semua elemen dengan class 'animate'
  document.querySelectorAll('.animate').forEach((element) => {
    observer.observe(element) // mulai observasi
  })
})
// Saat komponen dihapus
onUnmounted(() => {
  if (observer) observer.disconnect() // matikan observer biar hemat memori
})
</script>