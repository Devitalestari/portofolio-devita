<template>
  <section class="section contact-section">
    <div class="container">
      <div class="section-heading animate">
        <span class="section-kicker">Contact</span>
        <h1>Mari Terhubung</h1>
        <p>
          Silakan hubungi saya melalui email, WhatsApp, Instagram, atau Github untuk berdiskusi
          tentang project dan kolaborasi.
        </p>
      </div>

      <div class="contact-page-grid">
        <div class="contact-layout">
          <article class="contact-card animate">
            <span>Email</span>
            <h3>devitalestari1807@gmail.com</h3>
            <a href="mailto:devitalestari1807@gmail.com">Kirim Email</a>
          </article>
          <article class="contact-card animate">
            <span>WhatsApp</span>
            <h3>085337030641</h3>
            <a href="https://wa.me/6285337030641" target="_blank" rel="noreferrer">Buka WhatsApp</a>
          </article>
          <article class="contact-card animate">
            <span>Instagram</span>
            <h3>dvt.lstr</h3>
            <a href="https://www.instagram.com/dvt.lstr" target="_blank" rel="noreferrer">Lihat Profil</a>
          </article>
          <article class="contact-card animate">
            <span>Github</span>
            <h3>Devitalestari</h3>
            <a href="https://github.com/Devitalestari" target="_blank" rel="noreferrer">Lihat Github</a>
          </article>
        </div>
<!-- Call to Action Section -->
        <div class="cta-section"> 
          <div class="cta-content animate">
            <span>Terbuka untuk kolaborasi dan freelance</span>
            <h2>Siap bekerja sama dengan saya?</h2>
            <p>
              Saya siap membantu membuat website yang responsif, rapi, dan sesuai kebutuhan project.
            </p>
            <a :href="waLink" target="_blank" class="btn cta-button">
  Hubungi Saya
</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

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
const phone = "6285337030641" 
const message = "Hai, saya sudah melihat portofolio anda, dan saya sangat tertarik untuk melakukan kolaborasi, mari kita berbincang lebih lanjut" 
const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
</script>