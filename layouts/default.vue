<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="~assets/buefy.png" alt="Buefy" height="28" />
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <NuxtLink :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
              {{ item.title }}
            </NuxtLink>
          </li>
          <span v-if="loggedIn">
            <li v-for="(item, key) of authenticatedItems" :key="key">
              <nuxt-link :to="item.to" exact-active-class="is-active">
                <b-icon :icon="item.icon" />
                {{ item.title }}
              </nuxt-link>
            </li>
          </span>
        </ul>
      </aside>

      <div class="container column is-10">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DefaultLayout',
  data() {
    return {
      globalItems:[
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        }
      ],
      authenticatedItems: [
        {
          title: 'Sair',
          icon: 'logou',
          to: { name: 'logou' },
        },
        {
          title: 'Questions',
          icon: 'cogs',
          to: {name: 'admin-question'}
        },
      ],
    }
  },
  computed:{
    ...mapState('auth', ['loggedIn'])
  }
}
</script>
