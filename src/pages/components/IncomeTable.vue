<template>
    <div class="max-m-wd mx-auto p-4 mt-6 rounded-lg shadow-md border-lime-950">
        <h1
            class="overflow-hidden whitespace-nowrap font-mono text-xl font-bold animate-typing mb-5"
        >
            Welcome towkay, time to do your taxes
        </h1>

        <div class="flex">
            <label class="block text-gray-700 font-medium mb-2 w-1/2">
                Your Gross Income (Before CPF Deductions)</label
            >
            <label class="block text-gray-700 font-medium mb-2 ml-2"> Select an option </label>
        </div>

        <div class="mb-6 flex">
            <input
                type="text"
                ref="inputRef"
                v-model="income"
                class="border p-2.5 w-1/2 rounded-lg mr-2"
                @focus="clearInput"
                @input="validateInput"
                @keyup.enter="calculateTax"
            />
            <select
                @change="clearInput"
                v-model="incomePeriod"
                class="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-1/2 p-2.5 ml-2"
            >
                <option value="annual">Annual</option>
                <option value="monthly">Monthly</option>
            </select>
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
                <h1 class="text-lg font-medium mb-2 mr-3">CPF Deduction (20%) :</h1>
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

// Creates a reactive reference to the input element, with a type of HTMLInputElement
const inputRef = ref<HTMLInputElement | null>(null)

// Create a taxBracket array for purpose of calculating tax according to SG tax laws.
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

// Controls whether the tax table component appears when the calculate Tax button is clicked.
const isCalculated = ref(false)

const income = ref('')
const incomePeriod = ref('annual')

// When this page is loaded, we will focus on the input element.
onMounted(() => {
    if (inputRef.value) inputRef.value.focus()
})

// On focus on the input element, remove any numbers in input
function clearInput() {
    income.value = ''
}
// Computed property to convert the income value to a number without formatting
const formattedIncome = computed(() => {
    // Convert income string to a number
    return parseFloat(income.value)
})

// Calculates how much is CPF contributed.
const cpfDeduction = computed(() => {
    return incomePeriod.value === 'annual'
        ? formattedIncome.value * 0.2 // If annual option chosen, multiply by 0.2
        : formattedIncome.value * 2.4 // If monthly option chosen, 12 * 0.2 = 2.4
})

// Calculates how much income is after CPF which is to be taxed.
const taxableIncome = computed(() => {
    return incomePeriod.value === 'annual'
        ? formattedIncome.value * 0.8
        : formattedIncome.value * 9.6
})

const taxAmount = computed(() => {
    let taxPayable = 0
    let prevBracketUpper = 0

    for (const bracket of taxBrackets) {
        const taxableInBracket = Math.min(
            taxableIncome.value - prevBracketUpper,
            bracket.upTo - prevBracketUpper
        )
        taxPayable += taxableInBracket * bracket.rate
        prevBracketUpper = bracket.upTo

        if (taxableIncome.value <= bracket.upTo) {
            break
        }
    }
    return taxPayable
})

const emit = defineEmits<{
    (e: 'tax-calculated', taxableIncome: number): void
}>()

/**
 * Ensures calculated taxableIncome, CPF deduction and tax amount does not show
 * itself changing value when there is a new input because all those values are
 * reactive and hence looks ugly if its changed when there is a new input.
 */
watch(income, () => {
    isCalculated.value = false
})

function calculateTax() {
    isCalculated.value = true
    emit('tax-calculated', taxableIncome.value)
}

let lastValidValue = ''
/**
 * Input validation handler to allow only numbers
 * and one decimal point
 *  */
function validateInput() {
    const keysAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']

    let newValue = ''
    for (const char of income.value) {
        if (keysAllowed.includes(char)) {
            newValue += char
        }
    }

    // Ignore the latest dot input if there is already a dot present
    const dotIndex = newValue.indexOf('.')
    if (dotIndex !== -1 && newValue.indexOf('.', dotIndex + 1) !== -1) {
        newValue = lastValidValue // Restore to the last valid value without the additional dot
    } else {
        lastValidValue = newValue // Update the last valid value
    }
    // Update the input value with the validated and manipulated value
    income.value = newValue
}
</script>

<style scoped></style>
