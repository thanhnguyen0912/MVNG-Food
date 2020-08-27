<template>
<div>
  <q-page padding>
    <!-- content -->
    <h3>Profile</h3>
  </q-page>
</div>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
<style scoped lang="scss">
.header {
  background-color: #f57425;
  font-family: "Lobster";
  padding: 10px 0px;
  margin-bottom: 50px;
  .header-wrap {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: inline-block;
      a {
        color: #fff;
        font-size: 32px;
        letter-spacing: 2px;
      }
    }
  }
}
.nav-wrap-guest {
  a {
    color: #fff;
    text-transform: uppercase;
    font-size: 12px;
    display: inline-block;
    padding: 3px 10px;
    font-family: "Montserrat";
    transition: 0.3s;
    &:hover {
      color: #666;
    }
  }
}
</style>
