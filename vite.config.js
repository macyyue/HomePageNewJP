import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// element plus 按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            // 1. 配置elementPlus采用sass样式配色系统
            resolvers: [ElementPlusResolver({ importStyle: "sass" })],
        }),
    ],
    // server: {
    //     host: '0.0.0.0',
    //     port: 1224,
    // },
    resolve: {
        // 实际的路径转化 @ -> src
        alias: {
            '@': fileURLToPath(new URL('./src',
                import.meta.url))
        }
    },
    server: {
        proxy: {
            '/api': { //获取路径中包含了/api的请求
                target: 'http://localhost:8080', //后台所在路径的源
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
})
