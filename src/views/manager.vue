<template>
  <div class="main">
    <div class="left">
      <div class="show">
        <div class="top">
          <div class="lunbo">
            <!-- <div> -->
            <draggable
              class="lbImg"
              :list="imgList.lunbo"
              group="todoapp"
              ghostClass="on-drag"
              animation="400"
            >
              <img
                v-for="img_item in imgList.lunbo"
                :key="img_item.id"
                :src="img_item.url"
              />
            </draggable>
            <!-- </div> -->
            <p>这是一条新闻</p>
          </div>

          <div class="lunbo_left">
            <div class="show_right">
              <draggable
                class="show_right"
                :list="imgList.img"
                group="todoapp"
                ghostClass="on-drag"
                animation="400"
                :sort="true"
              >
                <img v-if="imgList.img[0].url" :src="imgList.img[0].url" />
              </draggable>
              <span>22222</span>
            </div>
            <div class="show_right">
              <draggable
                class="show_right"
                :list="imgList.img"
                group="todoapp"
                ghostClass="on-drag"
                animation="400"
                :sort="true"
              >
                <img v-if="imgList.img[1].url" :src="imgList.img[1].url" />
              </draggable>
              <span>3333</span>
            </div>
          </div>
        </div>
        <div class="staticImage">
          <!-- <draggable  
                :list="imgList.img"
                group="todoapp"
                ghostClass="on-drag"
                animation="400"
                :sort="true"
              >
          <img :src="imgList.img[2].url"/>
           </draggable> -->
          <img />
        </div>

        <div class="bottom">1234</div>
        <div class="footer">123456</div>
      </div>
    </div>
    <div class="right">
      <div class="func">
        <button>新增图文</button>
      </div>

      <draggable
        class="container"
        :list="todos"
        group="todoapp"
        ghostClass="on-drag"
        animation="400"
        style="width: 100%; min-height: 330px"
      >
        <div class="card" v-for="todo in todos" :key="todo.id">
          <div class="card-title"><img :src="todo.url" /></div>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "test1",
          url: require("../assets/2.jpg"),
        },
        {
          id: 2,
          title: "test2",
          url: require("../assets/2.jpg"),
        },
        {
          id: 3,
          title: "test3",
          url: require("../assets/2.jpg"),
        },
        {
          id: 4,
          title: "test4",
          url: require("../assets/2.jpg"),
        },
        {
          id: 5,
          title: "test4",
          url: require("../assets/2.jpg"),
        },
        {
          id: 6,
          title: "test4",
          url: require("../assets/2.jpg"),
        },
        {
          id: 7,
          title: "test4",
          url: require("../assets/2.jpg"),
        },
        {
          id: 8,
          title: "test4",
          url: require("../assets/2.jpg"),
        },
      ],
      imgList: {
        lunbo: [],
        img: [
          {
            id: "12",
          },
          {
            id: "13",
          },
        ],
      },
    };
  },
  watch: {
    "imgList.lunbo.length": {
      deep: true,
      handler(newValue, oldValue) {
        if (newValue !== oldValue) {
          //  if(this.imgList.lunbo.length>=6 ){
          //  }
        }
      },
    },
  },
  components: {
    draggable,
  },
};
</script>

<style>
body {
  margin: 0;
  background-color: #fafafa;
  overflow: hidden;
}

* {
  box-sizing: border-box;
}

.main {
  display: flex;
  width: 100vw;
  height: 100vh;
}

.left {
  flex: 1;
  background-color: #dddddd;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.show {
  display: flex;
  background-color: white;
  height: 640px;
  width: 360px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  flex-direction: column;
}
.top {
  display: flex;
  width: 360px;
  height: 160px;
}
.lunbo {
  display: flex;
  flex: 2;
  width: 230px;
  height: 100%;
  padding: 0;
  flex-direction: column;
}
.lbImg {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 160px;
}
.lbImg img {
  width: 33.33%;
  height: 50%;
}
.lunbo p {
  height: 20px;
  margin: 0;
  padding: 0;
  background-color: #f1f7f3;
}
.lunbo_left {
  display: flex;
  flex: 1;
  height: 100%;
  padding: 0;
  margin: 0;
  flex-direction: column;
  margin-left: 5px;
  justify-content: space-between;
}

.show_right {
  display: flex;
  height: 49%;
  padding: 0;
  flex-direction: column;
  justify-content: end;
}
.show_right img {
  width: 100%;
  height: 64.7px;
}
.show_right span {
  display: inline-block;
  margin: 0;
  height: 13.6px;
  background-color: #f7f2f3;
  font-size: 5px;
}

.staticImage {
  height: 160px;
  background-color: #a09e9e;
}
.staticImage img {
  width: 100%;
  height: 100%;
}
.bottom {
  height: 301.6px;
  background-color: #969393;
}
.footer {
  height: 18.3px;
  background-color: #bbbbbb;
}
.right {
  width: 450px;
  overflow-y: auto;
}

.func {
  display: flex;
  width: 100%;
  padding: 8px;
  justify-content: center;
}

.container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin: 16px auto;
}

.card {
  height: 120px;
  width: 160px;
  display: flex;
  box-shadow: 5px 5px 8px;
  flex-direction: column;
  justify-content: end;
  border-radius: 4px;
  overflow: hidden;
}

.card-title img {
  width: 100%;
  height: 100%;
}

.on-drag {
  background-color: rgba(70, 10, 209, 0.479);
  color: #fff;
  z-index: 10;
}
</style>
