<template>
  <section class="section about-section">
    <div class="container">
      <div class="about-shell">
        <!-- ===== BAGIAN KIRI (GAMBAR) ===== -->
        <div class="about-visual animate">
          <!-- Card pembungkus gambar -->
          <div class="about-image-card">
            <!-- Binding gambar dari script -->
            <img :src="profileImage" alt="Ni Made Devita Lestari" />
          </div>
          <!-- Badge kecil di gambar -->
          <div class="about-badge">
            <strong>Devita</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <!-- ===== BAGIAN KANAN (TEXT) ===== -->
        <div class="about-content animate">
          <span class="section-kicker">About Me</span>
          <h1>
            Mengenal <span>Devita Lestari</span>
          </h1>
          <p>
            Saya Ni Made Devita Lestari, seorang Web Developer muda yang memiliki ketertarikan
            dalam membangun website yang fungsional, responsif, dan mudah digunakan.
          </p>
          <p>
            Dalam proses pengembangan, saya berfokus pada tampilan yang clean, struktur yang
            terorganisir, serta pengalaman pengguna yang nyaman. Saya senang mengubah ide menjadi
            produk digital yang nyata dan terus mengembangkan kemampuan melalui berbagai project.
          </p>
          <div class="about-list">
            <div>
              <strong>Nama</strong>
              <span>Ni Made Devita Lestari</span>
            </div>
            <div>
              <strong>Nickname</strong>
              <span>Devita</span>
            </div>
            <div>
              <strong>Domisili</strong>
              <span>Bangli, Bali</span>
            </div>
            <div>
              <strong>Role</strong>
              <span>Web Developer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Import lifecycle Vue
import { onMounted, onUnmounted } from 'vue'
import profileImage from '@/assets/image/Devita.jpeg'
let observer
// Saat komponen muncul di layar
onMounted(() => {
  // Membuat observer untuk deteksi scroll
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Kalau elemen terlihat di layar
        if (entry.isIntersecting) {
          // Tambahkan class 'show' (untuk animasi)
          entry.target.classList.add('show')
        }
      })
    },
    {
      threshold: 0.16 // aktif saat 16% terlihat
    }
  )
  // Ambil semua elemen dengan class animate
  document.querySelectorAll('.animate').forEach((element) => {
    observer.observe(element) // mulai observasi
  })
})
// Saat komponen dihapus
onUnmounted(() => {
  if (observer) observer.disconnect() // matikan observer
})
</script>