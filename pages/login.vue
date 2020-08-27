<template>
<center>
 <div class="q-pa-md" style="max-width: 400px">
   
  
     <h4> Đăng nhập </h4>
  <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
     
      <q-input
        filled
        color='primary'
        type="number, text"
        v-model="email"
        label="Tên đăng nhập*"
        hint="Mời nhập địa chỉ email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Email không đúng']"
      />

 
      <q-input
        filled
        color='primary'
        :type="isPwd ? 'password' : 'text'"
        v-model="password" 
        label="Mật khẩu*"
        lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Mời bạn nhập lại mật khẩu',
            val => val > 0 && val < 100 || 'Mật khẩu không đúng'
        ]">
          <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
       
      
      </template>

      </q-input>
       
      <div>
        <q-btn label="Đăng nhập" to="/" type="submit" color="primary"/>
        <q-btn label="Quên mật khẩu" type="submit" color="secondary"/>
      </div>
    </q-form>
 
 
 
  
   </div>
    </center>
</template>

<script>
export default {
  data () {
    return {
      email: null,
      password: '',
      isPwd: true,

      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.email = null
      this.password = ''
      this.accept = false
    }
  }
}
</script>
