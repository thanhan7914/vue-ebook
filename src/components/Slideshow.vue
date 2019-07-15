<template>
  <section style="text-align: center;">
    <div
      class="sld-content sld-section"
    >
      <img
        v-for="item in items"
        :key="item.id"
        class="img-slide"
        :src="item.src"
        style="width:100%"
      >
    </div>
  </section>
</template>

<script>
export default {
  name: 'Slideshow',
  props: {
    items: {
      type: Array,
      default: null,
      required: true
    }
  },
  data () {
    return {
      idx: 0,
      speed: 5000
    }
  },
  mounted () {
    this.idx = Math.floor(Math.random() * this.items.length)
    this.carousel()
  },
  methods: {
    carousel () {
      var i
      var x = document.getElementsByClassName('img-slide')
      for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none'
      }
      this.idx++
      if (this.idx > x.length) { this.idx = 1 }
      x[this.idx - 1].style.display = 'block'
      setTimeout(this.carousel, this.speed)
    }
  }
}
</script>

<style lang="stylus" scoped>
/*.sld-section {
    margin-top: 16px!important;
    margin-bottom: 16px!important;
}
*/
.sld-content {
    margin-left: auto;
    margin-right: auto;
}

.img-slide {
  display:none;
  width: 100%;
  max-height: 380px;
  object-fit: cover;
}
</style>
