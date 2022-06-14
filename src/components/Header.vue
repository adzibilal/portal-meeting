<template>
  <div class="header">
    <div class="container ctn-head">
        <h1 class="tit-head">{{ titleHead }}</h1>
        <router-link to="/">
            <div class="btn btn-danger btn-logout">Keluar</div>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        titleHead: String
    }
}
</script>

<style>

</style>