<template>
  <div v-if="isOpen" class="cookie">
    <h2>Cookies</h2>
    <p>
      I do not use cookies for analytics, but it's also fine if you
      disagree :)
    </p>
    <div class="buttons">
      <button class="button" @click="accept()">Accept</button>
      <button class="button" @click="deny()">Deny</button>
    </div>
  </div>
</template>

<script>
import { bootstrap } from 'vue-gtag'

export default {
  name: 'TheLayoutCookie',
  data() {
    return {
      isOpen: true,
    }
  },
  created() {
    if (process.browser) {
      if (this.getGDPR() === 'true') {
        bootstrap().then((gtag) => {
          this.isOpen = false
        })
      } else if (this.getGDPR() === null) {
        this.isOpen = true
      }
    }
  },
  methods: {
    accept() {
      if (process.browser) {
        bootstrap().then((gtag) => {
          this.isOpen = false
          this.setGDPR(true)
        })
      }
    },
    deny() {
      if (process.browser) {
        this.isOpen = false
        this.setGDPR(false)
      }
    },
    getGDPR() {
      if (process.browser) {
        return localStorage.getItem('GDPR:accepted')
      }
    },
    setGDPR(value) {
      if (process.browser) {
        localStorage.setItem('GDPR:accepted', value.toString())
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.cookie
  z-index: 2000
  position: fixed
  right: 2rem
  bottom: 2rem
  max-width: 50%
  padding: 2rem
  background: $color-primary
  color: $color-light
  border-radius: $border-radius
  transition: $animation
  @media (prefers-color-scheme: dark)
    background: $color-light
    color: $color-primary
  @media screen and (max-width: $breakpoint-desktop)
    max-width: none
    left: 2rem
.buttons
  margin: .5rem 0 0 0
  .button
    color: $color-light
    border: none
    background: none
    font-size: 1.2rem
    border-bottom: 2px solid rgba($color-light, 1)
    transition: $animation
    text-decoration: none
    line-height: 1
    margin: 0 1rem 0 0
    @media (prefers-color-scheme: dark)
      color: $color-primary
      border-color: rgba($color-primary, 1)
    &:hover
      cursor: pointer
      text-decoration: none
      border-color: rgba($color-light, .3)
      @media (prefers-color-scheme: dark)
        border-color: rgba($color-primary, .3)
</style>
