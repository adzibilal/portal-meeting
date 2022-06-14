<template>
  <div class="bg-gradient-lgn bg-login">
    <div class="container">

      <div class="flex-forgot">
        <h1 class="title-forgot">Lupa PIN ?</h1>
        <img class="img-forgot" src="forgot.png" alt="">
        <p class="desc-forgot">Masukan email yang terkait dengan akun Anda</p>
        <input type="text" placeholder="Masukan Your Email Address" class="input-forgot">
        <div class="btn btn-fgt btn-login">SEND LINK</div>
        <router-link to="/">
          <div class="btn btn-sm btn-otl">Kembali</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ForgotView',
}
</script>
