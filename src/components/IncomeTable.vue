<template>
    <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full text-center">
                        <thead class="border-b">
                            <tr>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                    Class
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                    Heading
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                    Heading
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b">
                                <td
                                    class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap"
                                >
                                    Default
                                </td>
                                <td
                                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                >
                                    Cell
                                </td>
                                <td
                                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                >
                                    Cell
                                </td>
                            </tr>
                            <tr class="border-b bg-blue-100 border-blue-200">
                                <td
                                    class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap"
                                >
                                    Primary
                                </td>
                                <td
                                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                >
                                    Cell
                                </td>
                                <td
                                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                >
                                    Cell
                                </td>
                            </tr>
                            <tr class="border-b bg-purple-100 border-purple-200">
                                <td
                                    class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap"
                                >
                                    Secondary
                                </td>
                                <td
                                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                >
                                    Cell
                                </td>
                                <td
                                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                >
                                    Cell
                                </td>
                            </tr>
                            <tr class="border-b bg-green-100 border-green-200">
                                <td
                                    class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap"
                                >
                                    Success
                                </td>
                                <td
                                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                >
                                    Cell
                                </td>
                                <td
                                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                >
                                    Cell
                                </td>
                            </tr>
                            <tr class="border-b bg-red-100 border-red-200">
                                <td
                                    class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap"
                                >
                                    Danger
                                </td>
                                <td
                                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                >
                                    Cell
                                </td>
                                <td
                                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                >
                                    Cell
                                </td>
                            </tr>
                            <tr class="border-b bg-yellow-100 border-yellow-200">
                                <td
                                    class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap"
                                >
                                    Warning
                                </td>
                                <td
                                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                >
                                    Cell
                                </td>
                                <td
                                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                >
                                    Cell
                                </td>
                            </tr>
                            <tr class="border-b bg-indigo-100 border-indigo-200">
                                <td
                                    class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap"
                                >
                                    Info
                                </td>
                                <td
                                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                >
                                    Cell
                                </td>
                                <td
                                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                >
                                    Cell
                                </td>
                            </tr>
                            <tr class="border-b bg-gray-50 border-gray-200">
                                <td
                                    class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap"
                                >
                                    Light
                                </td>
                                <td
                                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                >
                                    Cell
                                </td>
                                <td
                                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                >
                                    Cell
                                </td>
                            </tr>
                            <tr class="border-b bg-gray-800 boder-gray-900">
                                <td
                                    class="text-sm text-white font-medium px-6 py-4 whitespace-nowrap"
                                >
                                    Dark
                                </td>
                                <td
                                    class="text-sm text-white font-light px-6 py-4 whitespace-nowrap"
                                >
                                    Cell
                                </td>
                                <td
                                    class="text-sm text-white font-light px-6 py-4 whitespace-nowrap"
                                >
                                    Cell
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full text-left text-sm font-light">
                        <thead class="border-b font-medium dark:border-neutral-500">
                            <tr>
                                <th scope="col" class="px-6 py-4">#</th>
                                <th scope="col" class="px-6 py-4">First</th>
                                <th scope="col" class="px-6 py-4">Last</th>
                                <th scope="col" class="px-6 py-4">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b dark:border-neutral-500">
                                <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                <td class="whitespace-nowrap px-6 py-4">Mark</td>
                                <td class="whitespace-nowrap px-6 py-4">Otto</td>
                                <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                            </tr>
                            <tr class="border-b dark:border-neutral-500">
                                <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                <td class="whitespace-nowrap px-6 py-4">Jacob</td>
                                <td class="whitespace-nowrap px-6 py-4">Thornton</td>
                                <td class="whitespace-nowrap px-6 py-4">@fat</td>
                            </tr>
                            <tr class="border-b dark:border-neutral-500">
                                <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                <td class="whitespace-nowrap px-6 py-4">Larry</td>
                                <td class="whitespace-nowrap px-6 py-4">Wild</td>
                                <td class="whitespace-nowrap px-6 py-4">@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <h1
        ref="typingText"
        class="overflow-hidden whitespace-nowrap font-mono text-xl font-bold animate-typing border-r-4"
    >
        Hello, world.
    </h1>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const typingText = ref<HTMLInputElement | null>(null)

// onMounted(() => {
//     typingText.value?.focus()
// })
onMounted(() => {
    typingText.value?.addEventListener('animationend', () => {
        typingText.value?.classList.remove('border-r-4', 'border-r-black')
    })
})
</script>

<style scoped></style>
