<template>
  <div class="container">
    <div class="header">О товаре</div>
  <div><label>{{ data.name ?? 'Нет данных' }}</label></div>
  <div><label>Категория: </label> {{ data.category_name ?? 'Нет данных' }}</div>
  <div><label>Бренд: </label> {{ data.brand_name ?? 'Нет данных' }}</div>
  <div><label>Цена: </label> {{ data.price ?? 'Нет данных' }}₸</div>
  <div><label> {{ status }}</label></div>
  <div><label>Описание: </label> {{ data.description ?? 'Нет данных' }}</div>
  </div>
</template>
<script>

import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
      data: {
        name: '',
        category_name: '',
        brand_name: '',
        price: null,
        rrp_price: null,
        status: null,
        description: '',
      }
    }
  },
  mounted() {
    this.getProduct();
  },
  computed: {
    status() {
      if (this.data.status === 1) {
        return 'В наличии'
      } else if (this.data.status === 2) {
        return 'Под заказ'
      } else {
        return 'Нет данных'
      }
    }
  },
  methods: {
    async getProduct() {
      try {
        let response = await this.$root.request({
          url: '/product/' + this.$route.params.id,
          method: 'GET',
        });
        if (response) {
          this.data = response.product || [];
        } else {
          console.error(response.message || 'Ошибка при выполнении запроса');
        }
      } catch (error) {
        console.error(error);
      }
    },
  }
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 600px;
  margin-top: 2rem;
  padding: 0rem 1.5rem;

  .header {
    font-size: 1.8rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 2rem;
    color: crimson;
  }
}
</style>