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
        <Income @tax-calculated="onCalculate" class="mb-8" />
        <h1
            v-if="isCalculated"
            class="overflow-hidden whitespace-nowrap font-mono text-xl font-bold animate-typing mb-5"
        >
            Your Tax Bracket
        </h1>
        <TaxTable v-if="isCalculated" :taxable-income="income" />
    </main>
</template>
