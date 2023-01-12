<template>
  <div class="r-title"> {{ $t('account.reset')}} </div>
    <div class="r-form">
      <a-form horizontal='horizontal' :wrapper-col="{ span: 24 }"
        :model="formState"
        name="normal_login"
        class="r-login-form"
        @finish="onFinish"
        @finishFailed="onFinishFailed">

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

        <a-row :gutter="24">
          <a-col span="16">
            <a-form-item
              name="code"
              :rules="[{ required: true }]"
            >
              <a-input v-model:value="formState.code" :placeholder="$t('account.code')">
                <template #prefix>
                  <icon-font type="icon-code" class="site-form-item-icon" />
                </template>
              </a-input>
            </a-form-item>
          </a-col>
          <a-col span="8">
            <a-button :disabled="code_disabled" type="primary" class="r-login-send-button"
             @click="onSend">

            {{ $t('account.send') }}
          </a-button>
          </a-col>
        </a-row>

        <a-form-item
          name="password"
          :rules="[{ required: true, message: 'Please input your new password!' }]"
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
          <a class="r-a" href="/account/signup">{{$t('account.signup')}}</a>
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
        email: '',
        code: '',
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
        confirm("Success: \n" +  JSON.stringify(values))
      }
    },

    onFinishFailed(errorInfo) {
      confirm("Failed: \n" +  JSON.stringify(errorInfo))
    },

    onSend() {
      confirm("send")
    }
  },

  computed: {
    disabled() {
      return !(this.formState.code && this.formState.email 
      && this.formState.password && this.formState.re_password);
    },

    code_disabled() {
      return !(this.formState.email)
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

.r-login-send-button{
  width: 100%;
}

.r-login-form-button {
  width: 260px;
}

</style>