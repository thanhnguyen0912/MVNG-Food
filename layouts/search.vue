<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated class="row">
      <q-toolbar class="col">
      <q-toolbar-title>
        
         Mỹ Vị Nhân Gian
        
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs>
        <q-route-tab
          icon=""
          color="#212529"
          to="/"
          replace
          label="trang chủ"
        />
        <q-route-tab
          icon="product"
          to="/tim-hieu"
          replace
          label="tìm hiểu"
        />
        <q-route-tab
          icon="serve"
          to="/food"
          replace
          label="thực đơn"
        /> 
        <q-route-tab
          icon=""
          to="/tin-tuc"
          replace
          label="tin tức"
        />
        <q-route-tab
          icon=""
          to="/login"
          replace
          label="liên hệ"
        />
      </q-tabs>
    </q-header>

    <!-- (Optional) The Footer -->
    

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    
    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',

  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>
