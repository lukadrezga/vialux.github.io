<template>
  <div class="card" style="width: 18rem">
    <img :src="info.url" class="card-img-top" alt="..." />
    <div class="card-body">
      <p class="card-text">
        {{ info.description }}
      </p>
      <p class="card-text">
        {{ info.place }}
      </p>
      <p class="card-text">
        {{ info.adress }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Kartaville",
  props: ["info"],
};
</script>
