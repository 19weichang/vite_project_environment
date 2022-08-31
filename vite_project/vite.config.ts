import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({mode}) =>{
  const flavor = mode;
  console.log('flavor',mode);
  const outDir = `./dist/${flavor}`;
  return {
    plugins: [vue(),
    ],
    build:{
      chunkSizeWarningLimit:1500,//vite打包大小
      outDir,
      rollupOptions: { 
        output: { //取消打包hash檔名
          entryFileNames: `assets/[name].js`,
          chunkFileNames: `assets/[name].js`,
          assetFileNames: `assets/[name].[ext]`
        }
        // output: { //分開打包not ok
        //   entryFileNames: '[name]-[hash].[ext]',
        //   chunkFileNames: '[name]-[hash].[ext]',
        //   assetFileNames: '[ext]/[name]-[hash][ext]'
        // }
      }  
    },
    server: {
      host:'0.0.0.0', //啟動NetWork 本地ip
      port:8080
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import 'src/styles/login.scss';`
        }
      }
    },
  }
});