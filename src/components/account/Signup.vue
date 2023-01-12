<template>
  <div class="r-title"> {{ $t('account.signup')}} </div>
    <div class="r-form">
      <a-form horizontal='horizontal' :wrapper-col="{ span: 24 }"
        :model="formState"
        name="normal_login"
        class="r-login-form"
        @finish="onFinish"
        @finishFailed="onFinishFailed">

        <a-form-item
          name="nickname"
          :rules="[{ required: true, message: 'Please input your nickname' }]"
        >
          <a-input v-model:value="formState.nickname" :placeholder="$t('account.nickname')">
            <template #prefix>
              <icon-font type="icon-user" class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          name="email"
          :rules="[{ type: 'email' }]"
        >
          <a-input v-model:value="formState.email" :placeholder="$t('account.email')">
            <template #prefix>
              <icon-font type="icon-email" class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.password" :placeholder="$t('account.password')">
            <template #prefix>
              <icon-font type="icon-lock" class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item
          name="password"
          :rules="[{ required: true, message: 'Please confirm your password again!' }]"
        >
          <a-input-password v-model:value="formState.re_password" :placeholder="$t('account.password')">
            <template #prefix>
              <icon-font type="icon-lock" class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item>
          <a-button :disabled="disabled" type="primary" html-type="submit" class="r-login-form-button">
            {{ $t('account.signup') }}
          </a-button>
        </a-form-item>

        <a-form-item>
          <a class="r-a" href="/account/login">{{$t('account.login')}}</a>
          <a class="r-a" href="/account/reset">{{$t('account.forget')}}</a>
        </a-form-item>
      </a-form>
    </div>
</template>

<script>

export default {
  name: 'SignupComp',
  components: {
    
  },

  data() {
    return {
      formState: {
        nickname: '',
        email: '',
        password: '',
        re_password: '',
      }
    }
  },

  methods: {
    onFinish(values) {
      if(this.formState.password !== this.formState.re_password){
        confirm('The passwords you entered do not match!')
      }
      else{
        console.log('Success:', values);
      }
    },

    onFinishFailed(errorInfo) {
      console.log('Failed:', errorInfo);
    }
  },

  computed: {
    disabled() {
      return !(this.formState.nickname && this.formState.email 
      && this.formState.password && this.formState.re_password);
    }
  }
}


</script>

<style scoped lang="scss">

.r-title{
  width: 100%;
  font-size: 40px;
  font-weight: 700;
  max-width: 320px;
  margin: 3rem auto 2rem auto;
  line-height: 1.1;
}

.r-form{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 360px;
  margin: 0 auto;
}

.r-a{
  text-decoration: none;
  padding-left: 10px;
  padding-right: 10px;
  color: rgba(55, 53, 47, 0.65);
}

.r-a:hover{
  text-decoration: underline;
  color: rgba(0, 0, 0, 1);
}

.r-login-form-button {
  width: 260px;
}

</style>