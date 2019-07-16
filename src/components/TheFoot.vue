<template>
  <section>
    <div class="body-content">
      <hr>
      <div class="padlr140">
        <div class="float-33">
          <h2>Ebook</h2>
          <p>@by ThanhAn</p>
        </div>
        <div class="float-33">
          <h2>Về chúng tôi</h2>
          <p>
            <router-link to="/">
              Điều khoản
            </router-link>
          </p>
          <p>
            <router-link to="/">
              Hỗ trợ
            </router-link>
          </p>
          <p>
            <router-link to="/">
              Thông tin thêm
            </router-link>
          </p>
        </div>
        <div class="float-33">
          <h2>Liên hệ</h2>
          <p>Email: admin@xxebook.com</p>
          <p>Phone: 099xxxx</p>
        </div>
      </div>
    </div>
    <div class="footer padlr140 float-end">
      <span>
        © 2019. Tổng hợp và sửa lỗi chính tả các tác phẩm có trên mạng internet.
      </span>
    </div>
  </section>
</template>
<style lang="stylus" scoped>
.float-end
  clear both
.float-33
  float left
  width 33%
.body-content
  min-height 180px
.body-content h2
  color blue
.body-content a
  color #34495e
.body-content a:hover
  color #2c3e50
</style>
