<script setup lang="ts">
import { ref } from 'vue'
import Income from './components/IncomeTable.vue'
import TaxTable from './components/TaxTable.vue'

// state
const income = ref(0)
const tax = ref(0)
const isCalculated = ref(false)

// methods
function onCalculate(income: number, tax: number) {
    income.value = income
    tax.value = tax
    isCalculated.value = true
}
</script>

<template>
    <main>
        <Income @tax-calculated="onCalculate" />
        <TaxTable v-if="isCalculated" :income="income" :tax="tax" />
    </main>
</template>
