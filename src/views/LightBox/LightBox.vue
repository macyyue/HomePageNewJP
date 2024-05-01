<script>
export default {
  data() {
    return {
      show: false,
      imageSrc: '',
      currentIndex: 0,
      imageList: [],
    };
  },
  methods: {
    openLightbox(src, index) {
      this.imageSrc = src;
      this.currentIndex = index;
      this.show = true;
    },
    closeLightbox() {
      this.show = false;
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.imageList.length) % this.imageList.length;
      this.imageSrc = this.imageList[this.currentIndex];
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.imageList.length;
      this.imageSrc = this.imageList[this.currentIndex];
    },
  },
};
</script>
<template>
  <div v-if="show" class="lightbox">
    <div class="lightbox-content">
      <button @click="closeLightbox" class="close-button">CLOSE✖</button>
      <button @click="prevImage" class="prev-button">Prev</button>
      <img :src="imageSrc" alt="图片">
      <button @click="nextImage" class="next-button">Next</button>
    </div>
  </div>
</template>
<style scoped>
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.lightbox-content {
  background: #fff;
  padding: 20px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.close-button {
  position: fixed;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 23px;
  color: blue;
  margin: -27px -17px;
}

.prev-button,
.next-button {
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: blue;
}

.prev-button {
  left: 20px;
}

.next-button {
  right: 20px;
}
</style>