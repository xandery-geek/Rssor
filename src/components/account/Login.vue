<template>
  <div class="r-title"> {{ $t('account.login')}} </div>
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

        <a-form-item>
          <a-button :disabled="disabled" type="primary" html-type="submit" class="r-login-form-button">
            {{ $t('account.continue') }}
          </a-button>
        </a-form-item>

        <a-form-item>
          <a-checkbox v-model:checked="formState.remember">{{ $t('account.remember') }}</a-checkbox>
          <a class="r-a" href="/account/reset">{{$t('account.forget')}}</a>
          <a class="r-a" href="/account/signup">{{$t('account.signup')}}</a>
        </a-form-item>
      </a-form>
    </div>
</template>

<script>

export default {
  name: 'LoginComp',
  components: {
    
  },

  data() {
    return {
      formState: {
        email: '',
        password: '',
        remember: true,
      }
    }
  },

  methods: {
    onFinish(values) {
      console.log('Success:', values);
    },

    onFinishFailed(errorInfo) {
      console.log('Failed:', errorInfo);
    }
  },

  computed: {
    disabled() {
      return !(this.formState.email && this.formState.password);
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