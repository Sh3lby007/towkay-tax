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
                @input="isNumber"
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

const income = ref(0)
const incomePeriod = ref('annual')

// When this page is loaded, we will focus on the input element.
onMounted(() => {
    if (inputRef.value) inputRef.value.focus()
})

// On focus on the input element, remove any numbers in input
function clearInput() {
    // TODO: SOLVE ERROR Type 'string' is not assignable to type 'number'
    income.value = ''
}

const cpfDeduction = computed(() => {
    return income.value * 0.2
})

const taxableIncome = computed(() => {
    return incomePeriod.value === 'annual' ? income.value * 0.8 : income.value * 9.6
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

watch(income, () => {
    isCalculated.value = false
})

function calculateTax() {
    isCalculated.value = true
    emit('tax-calculated', taxableIncome.value)
}

/**
 * Input validation handler to allow only numbers
 * and one decimal point
 *
 * @param evt - Input event object
 */
function isNumber(evt: Event) {
    /**
     * Previous evt param type was KeyboardEvent which
     * resulted in mobile devices still possible to input
     * text and other symbols because this type does not
     * exist on mobile browsers. The function is also
     * executed @keypress which was only availble in desktop
     * browsers and only executed once in mobile browsers
     * Lesson learnt for input elements are to
     * 1. Use @input events for cross-platform support
     * 2. Accept generic Event type instead of KeyboardEvent
     * 3.
     */
    /**
     * Get the input element from the event target
     * Have to assert event target as HTMLInputElement
     * to access value
     */
    const input = evt.target as HTMLInputElement

    // Allowed keys array
    const keysAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']

    /**
     * Get current input value
     * Extract last key pressed by taking last character
     * Handles issue like autocorrect before validate on
     * mobile browsers
     */
    const value = input.value
    const keyPressed = value[value.length - 1]

    /**
     * Only allow one decimal point
     * Check if key pressed is . AND value already includes it
     */
    if (keyPressed === '.' && value.includes('.')) {
        evt.preventDefault()
        return
    }

    /**
     * Prevent any other keys that are not allowed
     */
    if (!keysAllowed.includes(keyPressed)) {
        evt.preventDefault()
    }
}
</script>

<style scoped></style>
