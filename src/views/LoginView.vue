<template>
  <div class="bg-gradient-lgn bg-login">
    <div class="container">

      <div class="flex-login">
        <div class="ilustrasi-login">
          <img class="il-circle" src="login-ilustrasi.png" alt="">
          <img class="il-mafia" src="login-ilustrasi-orang.png" alt="">
        </div>
        <div class="form-login">
          <h2 class="title-login">Portal Meeting</h2>
          <p class="desc-login">Silahkan isi formulir dibawah ini! <br> Pastikan NIP dan nomor PIN yang anda masukkan
            benar</p>

          <div class="label-form">NIP</div>
          <input type="text" placeholder="Masukan NIP Anda" class="input-login">


          <div class="label-form">Nomor PIN</div>
          <input type="password" placeholder="Masukan Nomor PIN Anda" class="input-login">
          <router-link to="/forgot">
            <p class="lp-pin"> Lupa PIN ?</p>
          </router-link>

          <router-link to="/list-rapat" class="full-width">
            <div class="btn btn-login">Masuk</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LoginView',
}
</script>
