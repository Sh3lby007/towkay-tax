<template>
    <transition name="fade">
        <table v-if="isShown" class="table-auto border-collapse w-full text-sm">
            <thead>
                <tr>
                    <th class="border p-2">Income</th>
                    <th class="border p-2">Tax Rate</th>
                </tr>
            </thead>
            <tbody>
                <tax-row
                    v-for="bracket in brackets"
                    :key="bracket.name"
                    :bracket="bracket"
                    :is-active="isActiveBracket(bracket)"
                />
            </tbody>
        </table>
    </transition>
    <template>
        <table class="table-auto border-collapse w-full text-sm">
            <thead>
                <tr>
                    <th class="border p-2">Chargeable Income</th>
                    <th class="border p-2">Tax Rate(%)</th>
                    <th class="border p-2">Tax Payable(S$)</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="bracket in brackets" :key="bracket.name">
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
    <!-- <table class="table-auto border-collapse w-full text-sm">
        <thead>
            <tr>
                <th class="border p-2 font-medium">Chargeable Income</th>
                <th class="border p-2 font-medium">Income Tax Rate (%)</th>
                <th class="border p-2 font-medium">Gross Tax Payable ($)</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td class="border p-2">
                    <div>First $20,000</div>
                    <div>Next $10,000</div>
                </td>
                
                <td class="border p-2">
                    <div>0</div>
                    <div>2</div>
                </td>
            </tr>
        </tbody>
    </table> -->
    <!-- <table>
        <tbody>
            <tr>
                <th style="text-align: center">Chargeable Income</th>
                <th style="text-align: center">Income Tax Rate (%)</th>
                <th style="text-align: center">Gross Tax Payable ($)</th>
            </tr>
            <tr>
                <td style="text-align: center">First $20,000<br />Next $10,000</td>
                <td style="text-align: center">0<br />2</td>
                <td style="text-align: center">0<br />200</td>
            </tr>
            <tr>
                <td style="text-align: center">First $30,000<br />Next $10,000</td>
                <td style="text-align: center">-<br />3.50</td>
                <td style="text-align: center">200<br />350</td>
            </tr>
            <tr>
                <td style="text-align: center">First $40,000<br />Next $40,000</td>
                <td style="text-align: center">-<br />7</td>
                <td style="text-align: center">550<br />2,800</td>
            </tr>
            <tr>
                <td style="text-align: center">First $80,000<br />Next $40,000</td>
                <td style="text-align: center">-<br />11.5</td>
                <td style="text-align: center">3,350<br />4,600</td>
            </tr>
            <tr>
                <td style="text-align: center">First $120,000<br />Next $40,000</td>
                <td style="text-align: center">-<br />15</td>
                <td style="text-align: center">7,950<br />6,000</td>
            </tr>
            <tr>
                <td style="text-align: center">First $160,000<br />Next $40,000</td>
                <td style="text-align: center">-<br />18</td>
                <td>
                    <p style="text-align: center">13,950<br />7,200</p>
                </td>
            </tr>
            <tr>
                <td style="text-align: center">First $200,000<br />Next $40,000</td>
                <td style="text-align: center">-<br />19</td>
                <td style="text-align: center">21,150<br />7,600</td>
            </tr>
            <tr>
                <td style="text-align: center">First $240,000<br />Next $40,000</td>
                <td style="text-align: center">-<br />19.5</td>
                <td style="text-align: center">28,750<br />7,800</td>
            </tr>
            <tr>
                <td style="text-align: center">First $280,000<br />Next $40,000</td>
                <td style="text-align: center">-<br />20</td>
                <td style="text-align: center">36,550<br />8,000</td>
            </tr>
            <tr>
                <td style="text-align: center">First $320,000<br />Next $180,000</td>
                <td style="text-align: center">-<br />22</td>
                <td style="text-align: center">44,550<br />39,600</td>
            </tr>
            <tr>
                <td style="text-align: center">First $500,000<br />Next $500,000<br /></td>
                <td style="text-align: center">-<br />23<br /></td>
                <td style="text-align: center">84,150<br />115,000</td>
            </tr>
            <tr>
                <td style="text-align: center">First $1,000,000<br />In excess of $1,000,000</td>
                <td style="text-align: center">-<br />24</td>
                <td style="text-align: center">199,150<br /></td>
            </tr>
        </tbody>
    </table> -->
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
// state
// const isShown = ref(false)
const activeIncome = ref(0) // reactive income

interface Bracket {
    name: string
    income2: string
    income1: string
    rate1: string
    rate2: string
    tax1: string
    tax2: string
}

const brackets: Bracket[] = [
    {
        name: 'a',
        income1: 'First $20,000',
        income2: 'Next $10,000',
        rate1: '0%',
        rate2: '2%',
        tax1: '0',
        tax2: '200'
    },
    {
        name: 'a',
        income1: 'First $30,000',
        income2: 'Next $10,000',
        rate1: '-',
        rate2: '3.5%',
        tax1: '200',
        tax2: '350'
    },
    {
        name: 'a',
        income1: 'First $40,000',
        income2: 'Next $40,000',
        rate1: '-',
        rate2: '7%',
        tax1: '550',
        tax2: '2800'
    },
    {
        name: 'a',
        income1: 'First $80,000',
        income2: 'Next $40,000',
        rate1: '-',
        rate2: '11.5%',
        tax1: '3350',
        tax2: '4600'
    },
    {
        name: 'a',
        income1: 'First $120,000',
        income2: 'Next $40,000',
        rate1: '-',
        rate2: '15%',
        tax1: '7,950',
        tax2: '6,000'
    },
    {
        name: 'a',
        income1: 'First $160,000',
        income2: 'Next $40,000',
        rate1: '-',
        rate2: '18%',
        tax1: '13,950',
        tax2: '7,200'
    },
    {
        name: 'a',
        income1: 'First $200,000',
        income2: 'Next $40,000',
        rate1: '-',
        rate2: '19%',
        tax1: '21,150',
        tax2: '7,600'
    },
    {
        name: 'a',
        income1: 'First $240,000',
        income2: 'Next $40,000',
        rate1: '-',
        rate2: '19.5%',
        tax1: '28,750',
        tax2: '7,800'
    },
    {
        name: 'a',
        income1: 'First $280,000',
        income2: 'Next $40,000',
        rate1: '-',
        rate2: '20%',
        tax1: '36,550',
        tax2: '8,000'
    },
    {
        name: 'a',
        income1: 'First $320,000',
        income2: 'Next $180,000',
        rate1: '-',
        rate2: '22%',
        tax1: '44,550',
        tax2: '39,600'
    },
    {
        name: 'a',
        income1: 'First $500,000',
        income2: 'Next $500,000',
        rate1: '-',
        rate2: '23%',
        tax1: '84,150',
        tax2: '115,000'
    },
    {
        name: 'a',
        income1: 'First $1,000,000',
        income2: 'In excess of $1,000,000',
        rate1: '-',
        rate2: '24%',
        tax1: '199,150',
        tax2: ''
    }
]

// props
const props = defineProps<{
    income: number
    tax: number
}>()

// computed
const activeBracket = computed(() => {
    return brackets.find(b => {
        return activeIncome.value <= parseInt(b.income2)
    })
})

function isActiveBracket(bracket: Bracket) {
    return activeBracket.value?.name === bracket.name
}
</script>

<style scoped></style>
