<script>
import goods1 from "@/assets/image/goods1.jpg";
import goods2 from "@/assets/image/goods2.jpg";
import goods3 from "@/assets/image/goods3.jpg";
import goods4 from "@/assets/image/goods4.jpg";
import goods5 from "@/assets/image/goods5.jpg";
export default {
  data() {
    return {
      currentImageIndex: 0,
      selectedImageIndex: 0,
      timer: null,
      goodsData: [
        { source: "goods1" },
        { source: "goods2" },
        { source: "goods3" },
        { source: "goods4" },
        { source: "goods5" },
        { source: "goods1" },
        { source: "goods2" },
        { source: "goods3" },
        { source: "goods4" },
        { source: "goods5" },
        { source: "goods1" },
        { source: "goods2" },
        { source: "goods3" },
        { source: "goods4" },
        { source: "goods5" },
      ],
    };
  },
  
  methods: {
    getImageSource(value) {
      const imageVariables = [goods1, goods2, goods3, goods4, goods5];
      const index = value % imageVariables.length;
      return imageVariables[index];
    },
    async ImgSource(value) {
      if (value >= 0 && value < this.goodsData.length) {
        try {
         /* @vite-ignore */
          const imagePath = await import(`@/assets/image/${this.goodsData[value].source}.jpg`);
          return imagePath.default;
        } catch (error) {
          console.error("未找到图片：", error);
          return ""; 
        }
      } else {
        console.error("无效的图片索引：", value);
        return ""; 
      }
    },
    nextImage() {
      this.currentImageIndex += 1;
      if (this.currentImageIndex >= this.goodsData.length - 4) {
        this.currentImageIndex = 0;
      }
      this.selectedImageIndex = this.currentImageIndex;
    },
    prevImage() {
      this.currentImageIndex -= 1;
      if (this.currentImageIndex < 0) {
        this.currentImageIndex = this.goodsData.length - 5;
      }
      this.selectedImageIndex = this.currentImageIndex;
    },
    stopCarousel() {
      clearInterval(this.timer);
    },
    startCarousel() {
      this.timer = setInterval(this.nextImage, 2000);
    },

    getLink(index) {
      const links = [
        '/ModelingService',
        '/News20220823',
        '/ModelingService',
        '/ModelingService',
        '/ModelingService',
      ]
      if (index >= 0 && index <= links.length) {
        return links[index];
      } else {
        return "";
      }
    },
  },

  mounted() {
    this.timer = setInterval(this.nextImage, 2000);
  },
};
</script>


<template>
  <div class="goods">
    <div class="goods-wrapper" @mouseover="stopCarousel" @mouseout="startCarousel">
      <span>Pick Up</span>

      <div class="images-container" ref="imagesContainer">
        <div
          v-for="(item, index) in goodsData"
          :key="index"
          class="image-item"
          :style="{ transform: `translateX(-${currentImageIndex * 465}px)` }"
        >
         <a :href="getLink(index)">
          <div class="image-container">
          <img :src="getImageSource(index)" :alt="'goods' + (index + 1)" />
          <div class="image-overlay"></div>
        </div>
        </a>
        </div>
      </div>

      <div class="toggle">
        <button class="prev" @click="prevImage">&lt;</button>
        <button class="next" @click="nextImage">&gt;</button>
      </div>
    </div>
  </div>
</template>
<style>
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.goods {
    min-width: 1390px;
    position: relative;
    height: 380px;
    background-color: #454545;
    overflow: hidden;
}
.goods-wrapper {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: hidden;
    height: 400px;
    cursor: pointer;
}

.images-container {
    display: flex;
    width: 100%;
}
.image-item {
    position: relative;
    flex: 1;
    width: 100%;
    transition: opacity 0.3s;
}

.image-item:hover {
    z-index: 99;
    top: -8px;
    opacity: 0.5;
}

.image-container:hover::before,
.image-item:hover::after {
    opacity: 1;
}

.image-item img {
    display: block;
    width: 465px;
    height: 250px;
    margin-top: 70px;
    transition: transform 0.3s;
}

.image-item:last-child {
    margin-right: 0;
}

.goods-wrapper span {
    position: absolute;
    font-size: 27px;
    color: white;
    left: 50%;
    transform: translate(-50%);
    margin-top: 15px;
}

.prev {
    z-index: 999;
    position: absolute;
    top: 180px;
    left: 0px;
    width: 20px;
    height: 20px;
    border: none;
    background: #464445;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    font-size: larger;
}

.next {
    z-index: 999;
    position: absolute;
    top: 180px;
    right: 0px;
    width: 20px;
    height: 20px;
    border: none;
    background: #464445;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    font-size: larger;
}
</style>





