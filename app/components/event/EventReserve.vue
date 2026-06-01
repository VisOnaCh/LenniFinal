<template>
  <form class="reserve event__reserve" @submit.prevent="submitOrder">
    <div class="reserve__block1">
      <div class="reserve__checks">
        <b>Забронировать столик</b>
        <br>
        <br>
        
        <label 
          v-for="table in tables" 
          :key="table.number"
          class="form__check"
          :class="table.isVip ? 'check__table-red' : 'check__table'"
        >
          <input 
            class="check__input" 
            type="checkbox" 
            :value="table.number"
            v-model="selectedTables"
          >
          <span :class="table.isVip ? 'check__mark-red' : 'check__mark-table'"></span>
          <span class="check__label check__label--fz18">{{ table.number }} стол</span>
        </label>
        
        <!-- СЧЕТЧИК С КНОПКОЙ -->
        <div class="reserve__counter">
          <div class="counter-item">
            <span class="counter-item__label">Столы 1400 ₽:</span>
            <span class="counter-item__value">{{ vipCount }} шт.</span>
            <span class="counter-item__total">{{ vipTotal }} ₽</span>
          </div>
          <div class="counter-item">
            <span class="counter-item__label">Столы 1250 ₽:</span>
            <span class="counter-item__value">{{ regularCount }} шт.</span>
            <span class="counter-item__total">{{ regularTotal }} ₽</span>
          </div>
          <div class="counter-item counter-item--total">
            <span class="counter-item__label">Сумма:</span>
            <span class="counter-item__total">{{ totalPrice }} ₽</span>
          </div>
          
          <button 
            type="submit" 
            class="reserve__buy-btn"
            :disabled="selectedTablesList.length === 0"
          >
            Купить билеты
          </button>
        </div>
      </div>
      
      <div class="reserve__right-block">
        <div class="reserve__scheme">
          <img class="reserve__scheme-png" src="assets/images/tables.png">
        </div>
        
        <!-- ЛЕГЕНДА СПРАВА СНИЗУ -->
        <div class="reserve__legend">
          <div class="legend__title">Стоимость пригласительного билета</div>
          <div class="legend__item">
            <span class="legend__mark legend__mark--red"></span>
            <span class="legend__text">1400 ₽ | 1 персона</span>
          </div>
          <div class="legend__item">
            <span class="legend__mark legend__mark--black"></span>
            <span class="legend__text">1250 ₽ | 1 персона</span>
          </div>
          
          <div class="legend__title legend__title--small">Примечание</div>
          <div class="legend__item">
            <span class="legend__mark legend__mark--available"></span>
            <span class="legend__text">доступные места</span>
          </div>
          <div class="legend__item">
            <span class="legend__mark legend__mark--reserved"></span>
            <span class="legend__text">забронировано</span>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue';

// Данные о столиках с ценами
const tables = ref([
  { number: 1, price: 1400, isVip: true, reserved: false },
  { number: 2, price: 1250, isVip: false, reserved: false },
  { number: 3, price: 1250, isVip: false, reserved: true },  // забронирован
  { number: 4, price: 1400, isVip: true, reserved: false },
  { number: 5, price: 1250, isVip: false, reserved: false },
  { number: 6, price: 1250, isVip: false, reserved: false },
  { number: 7, price: 1400, isVip: true, reserved: false },
  { number: 8, price: 1400, isVip: true, reserved: true },   // забронирован
  { number: 9, price: 1400, isVip: true, reserved: false },
  { number: 10, price: 1250, isVip: false, reserved: false },
  { number: 11, price: 1250, isVip: false, reserved: false },
]);

// Выбранные столики (массив номеров)
const selectedTables = ref([]);

// Список выбранных столиков с полной информацией
const selectedTablesList = computed(() => {
  return selectedTables.value.map(number => {
    return tables.value.find(t => t.number === number);
  }).filter(Boolean);
});

// Количество и сумма VIP столов (1400 ₽)
const vipCount = computed(() => {
  return selectedTablesList.value.filter(table => table.price === 1400).length;
});

const vipTotal = computed(() => {
  return vipCount.value * 1400;
});

// Количество и сумма обычных столов (1250 ₽)
const regularCount = computed(() => {
  return selectedTablesList.value.filter(table => table.price === 1250).length;
});

const regularTotal = computed(() => {
  return regularCount.value * 1250;
});

// Общее количество и сумма
const totalCount = computed(() => {
  return selectedTablesList.value.length;
});

const totalPrice = computed(() => {
  return vipTotal.value + regularTotal.value;
});

// Функция отправки заявки
const submitOrder = () => {
  if (selectedTablesList.value.length === 0) {
    alert('Пожалуйста, выберите столики для бронирования');
    return;
  }
  
  const orderData = {
    vip: {
      count: vipCount.value,
      price: 1400,
      total: vipTotal.value,
      tables: selectedTablesList.value.filter(t => t.price === 1400).map(t => t.number)
    },
    regular: {
      count: regularCount.value,
      price: 1250,
      total: regularTotal.value,
      tables: selectedTablesList.value.filter(t => t.price === 1250).map(t => t.number)
    },
    total: {
      count: totalCount.value,
      price: totalPrice.value
    },
    date: new Date().toLocaleString()
  };
  
  console.log('Отправка заказа:', orderData);
  alert(`Вы забронировали столики: ${selectedTables.value.join(', ')}\nСумма: ${totalPrice.value} ₽`);
};
</script>

<style lang="less">
// ВАШИ ИСХОДНЫЕ СТИЛИ
.reserve {
  margin-top: 80px;
  
  &__block1 {
    display: flex;
    flex-direction: row;
    gap: 60px;
  }
  
  &__right-block {
    display: flex;
    flex-direction: column;
  }
  
  &__scheme {
    margin-left: 0;
    
    &-png {
      max-width: 100%;
    }
  }
  
  // СЧЕТЧИК
  &__counter {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid @gray_dark;
    width: 405px;
  }
  
  // КНОПКА
  &__buy-btn {
    width: 100%;
    margin-top: 20px;
    padding: 14px 20px;
    background-color: @red;
    border: none;
    border-radius: 6px;
    color: @white;
    font-family: @font1;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
    
    &:hover {
      background-color: @red_dark;
    }
    
    &:disabled {
      background-color: @gray_dark;
      cursor: not-allowed;
    }
  }
  
  // ЛЕГЕНДА
  &__legend {
    margin-top: 20px;

    background-color: fade(@gray, 50%);
    border-radius: 8px;
    margin-left: 500px;
  }
}

.counter-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  
  &__label {
    font-weight: 500;
  }
  
  &__value {
    font-weight: 600;
    margin-left: auto;
    margin-right: 20px;
  }
  
  &__total {
    font-weight: 700;
    min-width: 80px;
    text-align: right;
  }
  
  &--total {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid @gray_dark;
    font-size: 18px;
    
    .counter-item__label,
    .counter-item__value,
    .counter-item__total {
      font-weight: 800;
    }
    
    .counter-item__total {
      color: @red;
    }
  }
}

// СТИЛИ ДЛЯ ЛЕГЕНДЫ
.legend__title {
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 14px;
  
  &--small {
    margin-top: 15px;
    font-weight: 500;
  }
}

.legend__item {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
}

.legend__mark {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 12px;
  
  &--red {
    background-color: @red;
    border-radius: 3px;
  }
  
  &--black {
    background-color: @black;
    border-radius: 3px;
  }
  
  &--available {
    width: 18px;
    height: 18px;
    border: 2px solid @black;
    border-radius: 50%;
    background-color: transparent;
  }
  
  &--reserved {
    width: 18px;
    height: 18px;
    border: 2px solid @gray_dark;
    border-radius: 50%;
    background-color: @gray_dark;
  }
}

.legend__text {
  font-size: 14px;
  color: @black;
}

// ВАШИ ИСХОДНЫЕ СТИЛИ ДЛЯ CHECKBOX
.form__check {
  display: flex;
  flex-direction: row;
  cursor: pointer;
}

.check__input {
  display: none;
}

.check__mark-table,
.check__mark-red {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  border: 1px solid @black;
  background-color: @white;
  position: relative;
}

.check__mark-red {
  border-color: @red;
}

.check__input:checked + .check__mark-table,
.check__input:checked + .check__mark-red {
  background-color: @black;
}

.check__input:checked + .check__mark-red {
  background-color: @red;
}

.check__input:checked + .check__mark-table::after,
.check__input:checked + .check__mark-red::after {
  content: "";
  position: absolute;
  left: 8px;
  top: 4px;
  width: 6px;
  height: 12px;
  border-right: 2px solid @white;
  border-bottom: 2px solid @white;
  transform: rotate(45deg);
}
</style>