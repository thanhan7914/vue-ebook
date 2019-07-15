<template>
  <section>
    <div class="header">
      <div class="header-left">
        <img
          style="max-height: 100%;"
          src="static/img/logo-ebook.jpg"
          alt="logo"
        >
      </div>
      <div class="header-right">
        <router-link to="/login">
          Đăng nhập
        </router-link>
        |
        <router-link to="/signup">
          Đăng kí
        </router-link>
      </div>
      <span class="clear" />
    </div>
    <div
      id="myTopnav"
      class="topnav padlr140"
    >
      <a
        href="#home"
        class="active"
      >TRANG CHỦ</a>
      <div class="dropdown">
        <button class="dropbtn">
          THỂ LOẠI
          <i class="fa fa-caret-down" />
        </button>
        <div class="dropdown-content">
          <router-link
            v-for="cat in categories"
            :key="cat.id"
            :to="cat.to"
          >
            {{ cat.name }}
          </router-link>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">
          TÁC GIẢ
          <i class="fa fa-caret-down" />
        </button>
        <div class="dropdown-content">
          <router-link
            v-for="person in authors"
            :key="person.id"
            :to="person.to"
          >
            {{ person.name }}
          </router-link>
        </div>
      </div>
      <a href="#about">VỀ CHÚNG TÔI</a>
      <a
        href="javascript:void(0);"
        style="font-size:15px;"
        class="icon"
        @click="chlSize()"
      >&#9776;</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheHead',
  computed: {
    categories () {
      return [
        {
          id: 1,
          to: 'trinh-tham',
          name: 'Trinh Tham'
        }
      ]
    },
    authors () {
      return [
        {
          id: 1,
          to: 'kim-dung',
          name: 'Kim Dung'
        }
      ]
    }
  },
  methods: {
    chlSize () {
      var x = document.getElementById('myTopnav')
      if (x.className.indexOf('topnav') !== -1) {
        x.className += ' responsive padlr140'
      } else {
        x.className = 'topnav padlr140'
      }
    }
  }
}
</script>
