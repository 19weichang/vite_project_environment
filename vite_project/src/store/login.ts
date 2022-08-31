
import { defineStore } from 'pinia'
import api from '../api/login'

export const loginStore = defineStore({
  id:'login',//必填 唯一
  state: () =>{
   return{
    loginData:'welcome'
   }
  },
  actions: {
    fetchLogin (values:any) {
      return new Promise ((resolve, reject) => {
        console.log(values);
        
        api.getlogin(values)
          .then((data)=>{
            console.log(data);
            resolve(data)
          })
          .catch(()=>{})
      })
    }
  }
})