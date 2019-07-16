<template>
  <section>
    <the-head />
    <slideshow :items="images" />
    <div class="padlr140">
      <!-- book read more -->
      <div
        v-for="book in interestedBooks"
        :key="book.id"
        class="v-card"
      >
        <div class="newsarticle">
          <div class="views-field views-field-field-image">
            <div class="field-content">
              <router-link :to="book.to">
                <img
                  :src="book.cover"
                  width="600"
                  height="600"
                  alt=""
                  class="full-width"
                >
              </router-link>
            </div>
          </div>
          <div class="views-field views-field-title">
            <h3 class="field-content">
              <router-link :to="book.to">
                {{ book.title }}
              </router-link>
            </h3>
          </div>
          <div class="views-field views-field-body">
            <p class="field-content">
              {{ book.short_describe }}
            </p>
          </div>
          <div>
            <div class="views-field-taxonomy-vocabulary-2">
              <router-link :to="book.category.to">
                {{ book.category.name }}
              </router-link>
            </div>
          </div>
          <div class="views-field views-field-name">
            <span class="views-label views-label-name">Tác giả </span>
            <span class="field-content">
              <router-link :to="book.author.to">
                {{ book.author.name }}
              </router-link>
            </span>
          </div>
        </div>
      </div>
      <div class="clear" />
    </div>
    <div class="padlr140 body-content">
      <div class="article-field-left">
        <div class="sachmoi">
          <h2>Sách Truyện mới cập nhật <span class="glyphicon glyphicon-menu-right" /></h2>
          <div class="view view-sachmoi view-id-sachmoi view-display-id-block_1 view-dom-id-46da9d3047d5c6607b06a42a261e9350">
            <div class="view-content">
              <div
                v-for="book in newBooks"
                :key="book.id"
                class="views-row"
              >
                <div class="views-field views-field-nothing" style="clear: right">
                  <span class="field-content">
                    <div class="smimg"><router-link :to="book.to"><img
                      :src="book.cover"
                      width="37"
                      height="55"
                      alt=""
                    ></router-link> </div>
                    <span class="smtitle"><router-link :to="book.to">{{ book.name }}</router-link></span><br>
                    [{{ book.status }}] - <router-link :to="book.author.to"><span class="smauthor">{{ book.author.name }}</span></router-link>
                  </span>
                  <span class="field-content" style="float: right;">
                    tải lên {{ book.update_at }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="article-field-right">
        <div
          id="sidebar-second"
          class="block block-views"
        >
          <h2>Tags</h2>
          <div class="content" style="word-break: break-all;">
            <span class="tag">Game of throne</span>
            <span class="tag">trinh tham</span>
            <span class="tag">vien tuong</span>
            <span class="tag">George R. R. Martin</span>
        </div>
        </div>
      </div>
      <div class="clear" />
    </div>
    <div class="qoutes">
      <q>Maybe life is random, but I doubt it.</q>
      <span class="qoutes-author">Steven Tyler</span>
    </div>
    <the-foot />
  </section>
</template>

<script>
import TheHead from '../components/TheHead'
import TheFoot from '../components/TheFoot'
import Slideshow from '../components/Slideshow'

export default {
  name: 'Home',
  components: {
    TheHead,
    TheFoot,
    Slideshow
  },
  data () {
    return {
      images: [
        {
          src: 'static/img/cover1.jpg',
          id: 1
        },
        {
          src: 'static/img/cover2.jpg',
          id: 2
        },
        {
          src: 'static/img/cover3.jpg',
          id: 3
        },
        {
          src: 'static/img/cover4.jpg',
          id: 4
        }
      ],
      interestedBooks: [
        {
          id: 0,
          to: '/name-xx',
          cover: 'https://isach.info/images/story/cover/nha_gia_kim__paulo_coelho.jpg',
          title: 'Nhà Giả Kim',
          short_describe: 'Chúng ta nên về thôi,” Gared giục khi thấy cánh rừng xung quanh tối dần. “Bọn dân du mục chết cả rồi.”...',
          category: {
            to: '',
            name: 'Tiểu thuyết'
          },
          author: {
            to: '/George-R-R-Martin',
            name: 'Paulo Coelho'
          }
        },
        {
          id: 2,
          to: '/name',
          cover: 'https://gacsach.com/sites/gacsach.com/files/styles/vuong600/public/7.jpg?itok=Qpu38-NB',
          title: 'ac thu tieu tu',
          short_describe: 'Trong cuộc họp báo ra mắt sản phẩm mới, Chu Mộ Tu cho vợ mình nghĩ khẩu hiệu cổ...',
          category: {
            to: '',
            name: 'Tiểu thuyết'
          },
          author: {
            to: '/kim-dung',
            name: 'kim dung'
          }
        },
        {
          id: 3,
          to: '/name',
          cover: 'https://gacsach.com/sites/gacsach.com/files/styles/vuong600/public/5.jpg?itok=v_y8EpA8',
          title: 'ac thu tieu tu',
          short_describe: 'Trong cuộc họp báo ra mắt sản phẩm mới, Chu Mộ Tu cho vợ mình nghĩ khẩu hiệu cổ...',
          category: {
            to: '',
            name: 'Trinh tham'
          },
          author: {
            to: '/kim-dung',
            name: 'kim dung'
          }
        },
        {
          id: 4,
          to: '/name',
          cover: 'https://isach.info/images/story/cover/tro_choi_vuong_quyen_2a_hau_due_cua_su_tu_vang__george_r_r_martin.jpg',
          title: '2A - Hậu Duệ Của Sư...',
          short_describe: 'Trong cuộc họp báo ra mắt sản phẩm mới, Chu Mộ Tu cho vợ mình nghĩ khẩu hiệu cổ...',
          category: {
            to: '',
            name: 'Tiểu thuyết'
          },
          author: {
            to: '/kim-dung',
            name: 'kim dung'
          }
        },
        {
          id: 4,
          to: '/name',
          cover: 'https://isach.info/images/story/cover/tro_choi_vuong_quyen_2a_hau_due_cua_su_tu_vang__george_r_r_martin.jpg',
          title: '2A - Hậu Duệ Của Sư...',
          short_describe: 'Trong cuộc họp báo ra mắt sản phẩm mới, Chu Mộ Tu cho vợ mình nghĩ khẩu hiệu cổ...',
          category: {
            to: '',
            name: 'Tiểu thuyết'
          },
          author: {
            to: '/kim-dung',
            name: 'kim dung'
          }
        },
        {
          id: 0,
          to: '/name-xx',
          cover: 'https://isach.info/images/story/cover/tro_choi_vuong_quyen_1a_soi_tuyet_thanh_winterfell__george_r_r_martin.jpg',
          title: '1A - Sói Tuyết Thành...',
          short_describe: 'Chúng ta nên về thôi,” Gared giục khi thấy cánh rừng xung quanh tối dần. “Bọn dân du mục chết cả rồi.”...',
          category: {
            to: '',
            name: 'Tiểu thuyết'
          },
          author: {
            to: '/George-R-R-Martin',
            name: 'George R. R. Martin'
          }
        },
        {
          id: 2,
          to: '/name',
          cover: 'https://gacsach.com/sites/gacsach.com/files/styles/vuong600/public/7.jpg?itok=Qpu38-NB',
          title: 'ac thu tieu tu',
          short_describe: 'Trong cuộc họp báo ra mắt sản phẩm mới, Chu Mộ Tu cho vợ mình nghĩ khẩu hiệu cổ...',
          category: {
            to: '',
            name: 'Tiểu thuyết'
          },
          author: {
            to: '/kim-dung',
            name: 'kim dung'
          }
        },
        {
          id: 3,
          to: '/name',
          cover: 'https://gacsach.com/sites/gacsach.com/files/styles/vuong600/public/5.jpg?itok=v_y8EpA8',
          title: 'ac thu tieu tu',
          short_describe: 'Trong cuộc họp báo ra mắt sản phẩm mới, Chu Mộ Tu cho vợ mình nghĩ khẩu hiệu cổ...',
          category: {
            to: '',
            name: 'Trinh tham'
          },
          author: {
            to: '/kim-dung',
            name: 'kim dung'
          }
        }
      ],
      newBooks: [
        {
          id: 7,
          cover: 'https://isach.info/images/story/cover/tro_choi_vuong_quyen_2a_hau_due_cua_su_tu_vang__george_r_r_martin.jpg',
          name: 'Trò Chơi Vương Quyền 2A - Hậu Duệ Của Sư Tử Vàng',
          to: '/book/acthutieutu',
          author: {
            name: 'George R. R. Martin',
            to: '/author/kim-dung'
          },
          status: 'Full',
          update_at: '11/12/2011'
        },
        {
          id: 8,
          cover: 'https://isach.info/images/story/cover/tro_choi_vuong_quyen_1a_soi_tuyet_thanh_winterfell__george_r_r_martin.jpg',
          name: 'Trò Chơi Vương Quyền - Tập 1A: Sói Tuyết Thành Winterfell',
          to: '/book/acthutieutu',
          author: {
            name: 'George R. R. Martin',
            to: '/author/kim-dung'
          },
          status: 'Full',
          update_at: '12/12/2018'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.newsarticle {
    padding-left: 0.825rem;
    padding-right: 0.825rem;
    padding-bottom: 0.625rem;
}
.v-card {
  width: 25%;
  margin-left: 0;
  position: relative;
  margin-top: 25px;
  float: left
}
.field-content {

}
.field-content img.full-width {
  width: 100%;
  height : 350px;
  object-fit: cover;
}
.field-content img.full-width:hover {
  box-shadow: 1px 1px 1px #c0c0c0;
}
.v-card .views-field-taxonomy-vocabulary-2, .v-card .views-field-field-mucsach {
  line-height: 22px;
  letter-spacing: 1px;
  position: absolute;
  color: #fff;
  background: #2d67b1;
  padding: 8px 15px;
  z-index: 1;
  cursor: pointer;
  font-weight: 700;
  text-transform: uppercase;
  top: 0;
}
.v-card .views-field-taxonomy-vocabulary-2 a, .v-card .views-field-field-mucsach a{
  text-decoration: none;
  color: #fff;
}
.article-field-left {
  float: left;
  width: 65%;
}
.article-field-right {
  float: right;
  width: 30%;
}
.sachmoi {
    clear: both;
    font-family: 'Roboto Condensed';
    overflow: hidden;
}
.sachmoi h2, #sidebar-second h2 {
    font-family: 'Roboto Condensed';
    font-size: 20px;
    height: 40px;
    line-height: 40px;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-bottom: 1px solid #1abc9c
    text-transform: uppercase;
    color:#2980b9;
}
.sachmoi .smtitle a {
    font-size: 16px;
    line-height: 14px;
    font-weight: bold;
    letter-spacing: -1px;
    color: #4E4E4E;
    font-family: 'Roboto Condensed';
}
.view-sachmoi .views-row {
    display: block!important;
    border-bottom: 1px dashed #CCC;
    padding: 2px 3px;
    min-height: 68px;
    clear: both;
}
.view-sachmoi .views-field {
    line-height: 27px;
}
.smimg {
  margin-right 6px
}
.smimg, .tvanh {
    float: left;
    padding-right: 5px;
}
.block .content {
    padding: 10px 5px;
}
#sidebar-second h2 {
    padding-left: 10px;
    border-left: red 3px solid;
    text-transform: uppercase;
    border-bottom: 1px solid #CCC;
}
.block > h2 {
    overflow: hidden;
    text-align: left;
}
.view-same-author {
    margin: 10px 0;
    line-height: 26px;
}
.view-same-author a {
  text-decoration: none;
}
.view-same-author .views-row {
    font-family: 'Roboto Condensed',sans-serif;
    font-size: 15px;
    border-bottom: 1px dashed #CCC;
    padding: 2px 3px;
}
.view-same-author .views-row {
    font-family: 'Roboto Condensed',sans-serif;
    font-size: 15px;
    border-bottom: 1px dashed #CCC;
    padding: 2px 3px;
}
.body-content {
  padding: 12px 24px 12px 24px;
}
.qoutes {
  vertical-align: baseline;
  text-align: center;
  margin-top: 48px;
  margin-bottom: 68px;
}
.qoutes q {
  font-family: monospace;
  font-size: 24px;
  color: #809F14;
}
.qoutes-author {
  position: relative;
  top: 28px;
  right: 120px;
  font-family: monospace;
  font-size: 24px;
  color: #d35400;
}
@media screen and (max-width: 1100px) {
  .v-card {
    width: 50%;
  }
}
@media screen and (max-width: 600px) {
  .v-card {
    width: 100%;
  }
  .article-field-left, .article-field-right {
    width: 100%;
  }
}
</style>
