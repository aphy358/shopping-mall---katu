<template>
  <div>
    <!-- 城市模板，下面定义的 key1 表示的是如 'ABCD'、'EFGHI'、'JKLM' 这样的块... -->
    <ul class="kwc-block-title-list">
      <li v-for="(value1, key1, index1) in cityList" :key="index1" class="kwc-block-title-item" :checked="key1 == $data._blockKey" @click="$data._blockKey = key1" >
        {{key1}}
      </li>
    </ul>

    <ul class="kwc-city-block-list">
      <!-- 城市模板，下面定义的 block 表示的是如 'ABCD'、'EFGHI'、'JKLM' 这样的字符串所对应的块... -->
      <li v-for="(block, key2, index2) in cityList" :key="index2" class="kwc-city-block-item" :checked="key2 == $data._blockKey" >

        <!-- 下面定义的 item 表示的是如 'A'、'B'、'C' 这样的字符串所对应的块...，而 item.w 则表示的是字母 'A'、'B'、'C' 本身 -->
        <div v-for="(item, index3) in block" :key="index3">
          <label class="kwc-city-block-label">{{item.w}}</label>
          <ul class="kwc-city-list">
          
            <!-- 遍历字母块 'A'、'B'、'C' 下所有的项 -->
            <li v-for="(item2, index4) in item.item" :key="index4" class="kwc-city-item" @click="checkOneCity(item2.t, item2.i, item2.n)" >
              {{item2.n}}
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityListTmpl',

  data(){
    return {
      _blockKey: ''
    }
  },

  props: ['cityList', 'blockKey'],

  computed: {
  },

  methods: {
    checkOneCity(t, i, n){
      this.$emit('pickvalue', {t, i, n})
    },    
  },

  created(){
    this.$data._blockKey = this.blockKey
  }
}
</script>

<style scoped lang="scss">
.kwc-block-title-list{
  border-bottom: solid 1px #339afc;
  margin-bottom: 10px;
  overflow: hidden;

  @at-root .kwc-block-title-item{
      float: left;
      color: #999;
      font-size: 14px;
      height: 25px;
      line-height: 25px;
      padding: 0 10px;
      margin-right: 5px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      cursor: context-menu;

      &:hover{
          color: #339afc;
      }

      &[checked]{
          color: white;
          background: #339afc;
      }
  }
}

.kwc-city-block-list{

  @at-root .kwc-city-block-item{
      display: none;

      &[checked]{
          display: block;
      }

      @at-root .kwc-city-block-label{
          position: relative;
          top: 2px;
          float: left;
          color: #999;
      }

      @at-root .kwc-city-list{
          margin-left: 20px;
          overflow: hidden;

          @at-root .kwc-city-item{

              &:hover{
                  color: #339afc;
              }
          }
      }
  }
}
</style>