<script setup lang="ts">
import { ref } from 'vue'
import Income from './components/IncomeTable.vue'
import TaxTable from './components/TaxTable.vue'

// state
const income = ref(0)
const isCalculated = ref(false)

// methods
function onCalculate(newIncome: number) {
    isCalculated.value = true
    income.value = newIncome
}
</script>

<template>
    <main>
        <Income @tax-calculated="onCalculate" />
        <br />
        <br />
        <TaxTable v-if="isCalculated" :taxable-income="income" />
    </main>
</template>
