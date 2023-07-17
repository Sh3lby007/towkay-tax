<template>
    <table class="table-auto border-collapse w-full text-sm text-center">
        <thead class="text-xl">
            <tr class="">
                <th class="border p-2">Chargeable Income</th>
                <th class="border p-2">Tax Rate(%)</th>
                <th class="border p-2">Tax Payable(S$)</th>
            </tr>
        </thead>

        <tbody class="text-lg">
            <tr
                :class="{ highlight: isActiveBracket(bracket) }"
                class="transition duration-300 ease-in border-black"
                v-for="(bracket, index) in brackets"
                :key="index"
            >
                <td class="border p-2">
                    <div>{{ bracket.income1 }}</div>
                    <div>{{ bracket.income2 }}</div>
                </td>

                <td class="border p-2">
                    <div>{{ bracket.rate1 }}</div>
                    <div>{{ bracket.rate2 }}</div>
                </td>

                <td class="border p-2">
                    <div>{{ bracket.tax1 }}</div>
                    <div>{{ bracket.tax2 }}</div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Bracket {
    income2: string
    income1: string
    rate1: string
    rate2: string
    tax1: string
    tax2: string
}
const brackets: Bracket[] = [
    {
        income1: 'First $20,000',
        income2: 'Next $10,000',
        rate1: '0%',
        rate2: '2%',
        tax1: '0',
        tax2: '200'
    },
    {
        income1: 'First $30,000',
        income2: 'Next $10,000',
        rate1: '-',
        rate2: '3.5%',
        tax1: '200',
        tax2: '350'
    },
    {
        income1: 'First $40,000',
        income2: 'Next $40,000',
        rate1: '-',
        rate2: '7%',
        tax1: '550',
        tax2: '2800'
    },
    {
        income1: 'First $80,000',
        income2: 'Next $40,000',
        rate1: '-',
        rate2: '11.5%',
        tax1: '3350',
        tax2: '4600'
    },
    {
        income1: 'First $120,000',
        income2: 'Next $40,000',
        rate1: '-',
        rate2: '15%',
        tax1: '7,950',
        tax2: '6,000'
    },
    {
        income1: 'First $160,000',
        income2: 'Next $40,000',
        rate1: '-',
        rate2: '18%',
        tax1: '13,950',
        tax2: '7,200'
    },
    {
        income1: 'First $200,000',
        income2: 'Next $40,000',
        rate1: '-',
        rate2: '19%',
        tax1: '21,150',
        tax2: '7,600'
    },
    {
        income1: 'First $240,000',
        income2: 'Next $40,000',
        rate1: '-',
        rate2: '19.5%',
        tax1: '28,750',
        tax2: '7,800'
    },
    {
        income1: 'First $280,000',
        income2: 'Next $40,000',
        rate1: '-',
        rate2: '20%',
        tax1: '36,550',
        tax2: '8,000'
    },
    {
        income1: 'First $320,000',
        income2: 'Next $180,000',
        rate1: '-',
        rate2: '22%',
        tax1: '44,550',
        tax2: '39,600'
    },
    {
        income1: 'First $500,000',
        income2: 'Next $500,000',
        rate1: '-',
        rate2: '23%',
        tax1: '84,150',
        tax2: '115,000'
    },
    {
        income1: 'First $1,000,000',
        income2: 'In excess of $1,000,000',
        rate1: '-',
        rate2: '24%',
        tax1: '199,150',
        tax2: '-'
    }
]

// props
const props = defineProps<{
    taxableIncome: number
}>()

// computed
const activeBracket = computed(() => {
    return brackets.find(b => {
        const income1Num = parseIncome(b.income1)
        // console.log('Bracket income1:', income1Num)
        return props.taxableIncome <= income1Num
    })
})

function isActiveBracket(bracket: Bracket) {
    console.log(activeBracket.value)
    // console.log(bracket)

    return activeBracket.value?.income1 === bracket.income1
}

function parseIncome(str: string) {
    // Remove all non-digit characters
    let cleaned = str.replace(/\D/g, '')

    // Convert to number
    let income = Number(cleaned)

    return income
}
</script>

<style scoped>
.highlight {
    background: lightblue;
}

/* tbody {
    background: linear-gradient(to bottom, purple, blue);
} */
/* tr:hover {
    background: linear-gradient(to right, #ff0000, #ff8900, #ffd300, #a0ff41, #00ffcc);
    animation: animatedStripes 2s linear infinite;
    box-shadow: 0 0 20px #8a2be2;
} */
</style>
