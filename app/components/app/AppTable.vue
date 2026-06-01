<template>
  <table class="app-table">
    <thead class="app-table__head">
      <tr class="app-table__head-tr">
        <th class="app-table__th"></th>
        <th v-for="(th, thIndex) in headers" :key="thIndex" class="app-table__th">
          {{ th }}
        </th>
      </tr>
    </thead>
    
    <tbody class="app-table__body">
      <tr 
        v-for="(row, rowIndex) in rows"
        :key="rowIndex"
        class="app-table__tr"
      >
        <th class="app-table__body-th">
          {{ row.header }}
        </th>
        
        <td 
          v-for="(value, colIndex) in row.values"
          :key="colIndex" 
          class="app-table__td"
        >
          <!-- Исправлено: теперь проверяем value вместо td -->
          <span v-if="value === true" class="app-table__ok"></span>
          <span v-else-if="value === false" class="app-table__empty">—</span>
          <template v-else>
            {{ value }}
          </template>
        </td>
      </tr>
    </tbody>

    <tfoot class="app-table__footer">
      <tr class="app-table__footer-tr">
        <th class="app-table__footer-th"></th>
        <th
          v-for="(th, thIndex) in headers"
          :key="thIndex"
          class="app-table__footer-th"
        >
        </th>
      </tr>
    </tfoot>
  </table>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
});

const headers = computed(() => Array.isArray(props.data.headers) ? props.data.headers : []);
const rows = computed(() => Array.isArray(props.data.data) ? props.data.data : []);
</script>

<style lang="less">
.app-table {
  width: 100%;
  border-collapse: collapse;
  color: @black;
  text-align: center;
  
  @media @bw768 {
    display: block;
    margin: 0 -20px;
    width: calc(100% + 40px);
  }

  &__head-tr {
    @media @bw768 {
      display: flex;
      width: 100%;
    }
  }

  &__tr {
    &:nth-child(2n-1) {
      background-color: fade(#1F1E1E, 3%);
      @media @bw768 {
        background-color: transparent;
      }
    }
    @media @bw768 {
      display: flex;
      flex-wrap: wrap;
    }
  }

  &__th {
    height: 85px;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    
    @media @bw768 {
      font-size: 14px;
      line-height: 19px;
      width: 33.3333%;
    }
  }

  &__footer-th {
    height: 60px;
    font-size: 0;
    
    @media @bw768 {
      font-size: 16px;
      font-weight: 300;
      width: 33.3333%;
    }
  }

  &__th,
  &__footer-th {
    box-sizing: border-box;
    padding: 10px;
    border-right: 1px solid #BFBFBF;
    text-transform: uppercase;
    
    @media @bw768 {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    
    &:first-child {
      padding-left: 0;
      @media @bw768 {
        display: none;
      }
    }
    
    &:last-child {
      border-right: none;
      padding-right: 0;
    }
  }

  &__body-th {
    box-sizing: border-box;
    height: 50px;
    padding: 10px 10px 10px 0;
    border-top: 1px solid #BFBFBF;
    border-bottom: 1px solid #BFBFBF;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    text-align: left;
    
    @media @bw768 {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: 600;
    }
  }

  &__td {
    box-sizing: border-box;
    height: 50px;
    padding: 10px;
    border: 1px solid #BFBFBF;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    
    @media @bw768 {
      width: 33.3333%;
    }
    
    &:last-child {
      border-right: none;
      padding-right: 0;
    }
    
    &:nth-child(2n-1) {
      @media @bw768 {
        background-color: fade(@black, 3%);
      }
    }
  }

  &__head,
  &__body,
  &__footer {
    @media @bw768 {
      display: block;
    }
  }

  &__footer-tr {
    @media @bw768 {
      display: flex;
    }
  }

  // Стиль для галочки
  &__ok {
    display: block;
    position: relative;
    width: 26px;
    height: 26px;
    margin: auto;
    border-radius: 50%;
    background-color: #1F1E1E;
    
    &::after {
      content: "";
      box-sizing: border-box;
      display: block;
      position: absolute;
      top: 4px;
      left: 9px;
      width: 8px;
      height: 14px;
      border-right: 2px solid #ffffff;
      border-bottom: 2px solid #ffffff;
      transform: rotate(45deg);
    }
  }

  &__empty {
    display: block;
    color: fade(@black, 30%);
  }
}
</style>