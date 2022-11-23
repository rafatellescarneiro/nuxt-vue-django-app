export default {
  mode: 'universal',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: process.env.npm_package_description || ''
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  loading: { color: '#fff'},
  css: [],
  plugins: [],
  buildModules: ['@nuxtjs/eslint-module'],

  modules: ['nuxt-buefy', '@nuxtjs/axios', '@nuxtjs/auth', '@nuxtjs/toast'],

  auth:{
    strategies:{
      local:{
        endpoints:{
          login:{
            url:'/api/token',
            method:'post',
            propertyName:'access',
            altProperty:'refresh'
          },
          logout:{},
          user: false
        }
      }
    },
    redirect:{
      login: '/login',
    },
  },
  router:{
    middleware: ['auth']
  },
  axios:{
    baseURL: 'http://localhost:8000'
  },
  toast:{
    position: 'top-center',
    iconPack: 'fontawesome',
    duration: 3000,
    register: [
      {
        name: 'defaultSuccess',
        message: (payload)=>
          !payload.msg ? 'Operação bem sucedida' : payload.msg,
        options: {
          type: 'sucess',
          icon: 'check'
        }
      },
      {
        name: 'defaultError',
        message: (payload)=>
          !payload.msg ? 'Oops.. Erro inesperado' : payload.msg,
        options: {
          type: 'error',
          icon: 'times'
        }
      }
    ]
  },

  build: {
    extend(config, ctx){}
  },
}
