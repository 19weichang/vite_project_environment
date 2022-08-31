<template>
  <div id="login">login
    <button class="btn" @click="onFinish">GO!</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref} from 'vue';
  import { loginStore } from '../store/login'
  import { useRouter, useRoute } from "vue-router";
  
  interface FormState {
    username: string;
    password: string;
    remember: boolean;
  }
  export default defineComponent({
    setup() {
      const formState = reactive<FormState>({
        username: '',
        password: '',
        remember: true,
      });
      const login = loginStore() //pinia state
  
      const router = useRouter();
  
      const goMainRoute = () => {
        router.push({ name: "main" });
      }
   
      const onFinish = (values: any) => {
        console.log('Success:', values);  
        console.log(login.loginData);
        
        login.fetchLogin(values)
        .then((data)=>{
          console.log('getData',data)
          goMainRoute()
        })
        .catch(()=>{
           console.log('err')
        })
      };
  
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
      
      return {
        formState,
        onFinish,
        onFinishFailed,
        goMainRoute
      };
    },
  });
  </script>

<style lang="scss" scoped>
  @import '../styles/login.scss';

  #login {
    font-size: 24px;
    .btn {
      background-color: gray;
    }
  }
</style>