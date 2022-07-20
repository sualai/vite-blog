import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    VueJsx(),
    AutoImport({
      include:[
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/,
        /\.md$/
      ],
      dts: true,
      imports: ['vue','vue-router','pinia'],
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      dts: true,
      dirs:['src/components'],
      extensions:['vue','jsx','tsx','ts','js'],
      resolvers:[
        ElementPlusResolver()
      ]
    })
  ],
  resolve: {
    alias: {
    //src⽬录的配置
    '@': path.resolve(__dirname, 'src'),
    },
    // 忽略后缀名的配置选项, 添加 .vue 选项时要记得 原本默认忽略的选项也要⼿动写⼊
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.less'],
   },
  server: {
    open: true,
    port: 7001,
    host: 'localhost',
    headers: {
      'Access-Control-Allow-Origin': '*'
      ,
    },
    // 配置代理
    proxy: {
      '/api': {
        target:
          'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/api/, '/api')
      },
    }
  },
})
