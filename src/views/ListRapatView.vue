<template>
  <Header titleHead="Data Semua Rapat" />
  <div class="bg-gradient-list bg-login">
    <div class="container">
      <div class="flex-search">
        <p class="search-label">Pencarian :</p>
        <input class="input-search" type="text">
      </div>
      <div class="list-con">
        <div class="item-list">
          <div class="head-card">
            <p class="id-card">ID Rapat : 1234567</p>
            <div class="status-berlangsung">Berlangsung</div>
          </div>
          <div class="body-card">
            <table>
              <tr class="itm-body">
                <td class="tit-body">Subjek Rapat</td>
                <td>: Test Meeting</td>
              </tr>
              <tr class="itm-body">
                <td class="tit-body">Tipe</td>
                <td>: Rapat reguler</td>
              </tr>
              <tr class="itm-body">
                <td class="tit-body">Penyelenggara</td>
                <td>: Rapi Ahmat (rapiahmat@jumpa.id)</td>
              </tr>
              <tr class="itm-body">
                <td class="tit-body">Berlangsung</td>
                <td>: 02:28</td>
              </tr>
            </table>
          </div>
          <div class="foot-card">
            <router-link to="/detail-rapat">
              <div class="btn btn-otl-green">Detail</div>
            </router-link>
            <div class="btn btn-green">Gabung</div>
          </div>
        </div>
         <div class="item-list">
          <div class="head-card">
            <p class="id-card">ID Rapat : 765352341</p>
            <div class="status-terjadwal">Terjadwal</div>
          </div>
          <div class="body-card">
            <table>
              <tr class="itm-body">
                <td class="tit-body">Subjek Rapat</td>
                <td>: Test Meeting</td>
              </tr>
              <tr class="itm-body">
                <td class="tit-body">Tipe</td>
                <td>: Rapat reguler</td>
              </tr>
              <tr class="itm-body">
                <td class="tit-body">Penyelenggara</td>
                <td>: Sugiono (sugiono@jumpa.id)</td>
              </tr>
              <tr class="itm-body">
                <td class="tit-body">Berlangsung</td>
                <td>: 14:30</td>
              </tr>
            </table>
          </div>
          <div class="foot-card">
            <router-link to="/detail-rapat">
              <div class="btn btn-otl-green">Detail</div>
            </router-link>
            <div class="btn btn-green">Gabung</div>
          </div>
        </div>
        <div class="item-list">
          <div class="head-card">
            <p class="id-card">ID Rapat : 1234567</p>
            <div class="status-berlangsung">Berlangsung</div>
          </div>
          <div class="body-card">
            <table>
              <tr class="itm-body">
                <td class="tit-body">Subjek Rapat</td>
                <td>: Test Meeting</td>
              </tr>
              <tr class="itm-body">
                <td class="tit-body">Tipe</td>
                <td>: Rapat reguler</td>
              </tr>
              <tr class="itm-body">
                <td class="tit-body">Penyelenggara</td>
                <td>: Rapi Ahmat (rapiahmat@jumpa.id)</td>
              </tr>
              <tr class="itm-body">
                <td class="tit-body">Berlangsung</td>
                <td>: 02:28</td>
              </tr>
            </table>
          </div>
          <div class="foot-card">
            <router-link to="/detail-rapat">
              <div class="btn btn-otl-green">Detail</div>
            </router-link>
            <div class="btn btn-green">Gabung</div>
          </div>
        </div>
         <div class="item-list">
          <div class="head-card">
            <p class="id-card">ID Rapat : 765352341</p>
            <div class="status-terjadwal">Terjadwal</div>
          </div>
          <div class="body-card">
            <table>
              <tr class="itm-body">
                <td class="tit-body">Subjek Rapat</td>
                <td>: Test Meeting</td>
              </tr>
              <tr class="itm-body">
                <td class="tit-body">Tipe</td>
                <td>: Rapat reguler</td>
              </tr>
              <tr class="itm-body">
                <td class="tit-body">Penyelenggara</td>
                <td>: Sugiono (sugiono@jumpa.id)</td>
              </tr>
              <tr class="itm-body">
                <td class="tit-body">Berlangsung</td>
                <td>: 14:30</td>
              </tr>
            </table>
          </div>
          <div class="foot-card">
            <router-link to="/detail-rapat">
              <div class="btn btn-otl-green">Detail</div>
            </router-link>
            <div class="btn btn-green">Gabung</div>
          </div>
        </div>
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
