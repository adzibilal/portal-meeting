<template>
  <Header titleHead="Detail Rapat" />
  <div class="bg-gradient-list bg-login">
    <div class="container">
      <router-link to="/list-rapat">
        <div class="btn btn-sm btn-otl">Kembali</div>
      </router-link>
      <div class="det-card">
        <div class="flex-detail">
          <div class="item-det">
            <p class="tit-det">ID Rapat :</p>
            <p class="txt-det">1234567</p>
          </div>
           <div class="item-det">
            <p class="tit-det">Subjek Rapat :</p>
            <p class="txt-det">Test Meeting</p>
          </div>
           <div class="item-det">
            <p class="tit-det">Tipe Rapat :</p>
            <p class="txt-det">Rapat Reguler</p>
          </div>
          <div class="item-det">
            <p class="tit-det">Penyelenggara :</p>
            <p class="txt-det">Rapi Ahmat</p>
          </div>
           <div class="item-det">
            <p class="tit-det">Waktu Mulai :</p>
            <p class="txt-det">2021-08-25 12:58 WIB</p>
          </div>
           <div class="item-det">
            <p class="tit-det">Durasi :</p>
            <p class="txt-det">1 Jam</p>
          </div>
        </div>
        <center>
          <div class="btn btn-green btn-gb-det">Gabung</div>
        </center>

      </div>
    </div>
  </div>
  <div class="footer">
    <div class="container">
      &copy; {{new Date().getFullYear()}} Test.
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'ListRapatView',
  components: {
    Header
  }
}
</script>
