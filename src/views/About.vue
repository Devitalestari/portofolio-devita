<template>
  <section class="section about-section">
    <div class="container">
      <div class="about-shell">
        <div class="about-visual animate">
          <div class="about-image-card">
            <img :src="profileImage" alt="Ni Made Devita Lestari" />
          </div>
          <div class="about-badge">
            <strong>Devita</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <div class="about-content animate">
          <span class="section-kicker">About Me</span>
          <h1>Mengenal <span>Devita Lestari</span></h1>
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
import { onMounted, onUnmounted } from 'vue'
import profileImage from '@/assets/image/Devita.jpeg'

const values = [
  { number: '01', title: 'Design Rapi', text: 'Membuat tampilan yang bersih, modern, dan nyaman dilihat.' },
  { number: '02', title: 'Responsif', text: 'Menyesuaikan layout agar tetap bagus di mobile, tablet, dan desktop.' },
  { number: '03', title: 'Terstruktur', text: 'Menulis struktur halaman yang mudah dipahami dan dikembangkan.' },
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