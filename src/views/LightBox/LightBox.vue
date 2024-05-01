<script>
export default {

  data() {
    return {
      yourImageArray: [],
      show: false,
      imageSrc: '',
      currentIndex: 0,
    };
  },
  methods: {
    openLightbox(src,index,) {
      this.imageSrc = src;
      this.currentIndex = index;
      this.show = true;
    },
    closeLightbox() {
      this.show = false;
    },
    nextImage() {
    if (this.currentIndex < this.yourImageArray.length - 1) {
      this.currentIndex++;
      this.imageSrc = this.yourImageArray[this.currentIndex];
    }
  },
  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.imageSrc = this.yourImageArray[this.currentIndex];
    }
  },
  },
};
</script>
<template>
  <div v-if="show" class="lightbox">
    <div class="lightbox-content">

      <!-- <button @click="prevImage" class="prev-button">Previous</button> -->
      <button @click="closeLightbox" class="close-button">CLOSE✖</button>
      <!-- <button @click="nextImage" class="next-button">Next</button> -->
      <img :src="imageSrc" alt="图片">
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