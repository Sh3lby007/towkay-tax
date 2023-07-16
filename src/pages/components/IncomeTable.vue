<template>
    <div class="max-m-wd mx-auto p-4 mt-6 rounded-lg shadow-md border-lime-950">
        <h1 class="overflow-hidden whitespace-nowrap font-mono text-xl font-bold animate-typing">
            Welcome towkay, time to do your taxes
        </h1>

        <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2"> Annual Income </label>

            <input
                ref="inputRef"
                v-model="income"
                type="number"
                class="border p-2 w-full rounded"
                @focus="clearInput"
            />
        </div>

        <button class="bg-blue-500 text-white py-2 px-4 rounded" @click="calculateTax">
            Calculate Tax
        </button>

        <div v-if="isCalculated" class="mt-4">
            <div class="flex">
                <h1 class="text-lg font-medium mb-2 mr-3">Taxable Income:</h1>
                <h1 class="text-xl font-bold">${{ taxableIncome.toFixed(2) }}</h1>
            </div>
            <div class="flex">
                <h1 class="text-lg font-medium mb-2 mr-3">CPF Deduction (80%) :</h1>
                <h1 class="text-xl font-bold">${{ cpfDeduction.toFixed(2) }}</h1>
            </div>
            <div class="flex">
                <h1 class="text-lg font-medium mb-2 mr-3">Tax Amount:</h1>
                <h1 class="text-xl font-bold">${{ taxAmount.toFixed(2) }}</h1>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'

const taxBrackets = [
    { upTo: 20000, rate: 0 },
    { upTo: 30000, rate: 0.02 },
    { upTo: 40000, rate: 0.035 },
    { upTo: 80000, rate: 0.07 },
    { upTo: 120000, rate: 0.115 },
    { upTo: 160000, rate: 0.15 },
    { upTo: 200000, rate: 0.18 },
    { upTo: 240000, rate: 0.19 },
    { upTo: 280000, rate: 0.195 },
    { upTo: 320000, rate: 0.2 },
    { upTo: 500000, rate: 0.22 },
    { upTo: 1000000, rate: 0.23 },
    { upTo: Infinity, rate: 0.24 }
]
const isCalculated = ref(false)
const isTaxRateCalculated = ref(false)
const income = ref(0)
const tax = ref(0)
// Creates a reactive reference to the input element, with a type of HTMLInputElement
const inputRef = ref<HTMLInputElement | null>(null)

// When this page is loaded, we will focus on the input element.
onMounted(() => {
    if (inputRef.value) inputRef.value.focus()
})

// On focus on the input element, remove any numbers in input
function clearInput(event) {
    event.target.value = ''
}

const cpfDeduction = computed(() => {
    return income.value * 0.2
})

const taxableIncome = computed(() => {
    return income.value * 0.8
})

const taxAmount = computed(() => {
    let taxPayable = 0
    let prevBracketUpper = 0
    // Get taxable income, variable belongs to this computed property
    const taxableIncome = income.value * 0.8

    for (const bracket of taxBrackets) {
        const taxableInBracket = Math.min(
            taxableIncome - prevBracketUpper,
            bracket.upTo - prevBracketUpper
        )

        taxPayable += taxableInBracket * bracket.rate

        prevBracketUpper = bracket.upTo

        if (taxableIncome <= bracket.upTo) {
            break
        }
    }
    return taxPayable
})

const emit = defineEmits<{
    (e: 'tax-calculated', income: number): void
}>()

watch(income, () => {
    isCalculated.value = false
})

function calculateTax() {
    taxAmount.value
    isCalculated.value = true

    tax.value = (taxAmount.value / income.value) * 100

    isTaxRateCalculated.value = true
    emit('tax-calculated', income.value)
}
</script>

<style scoped></style>
