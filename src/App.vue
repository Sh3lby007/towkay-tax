<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <section
        class="rounded-md border border-neutral-500 bg-neutral-700 hover:bg-neutral-600 transition-colors text-neutral-100 flex flex-row items-start cursor-pointer"
    >
        <img src="http://placekitten.com/100/100" alt="cat" class="py-4 pl-4 aspect-square" />

        <p class="mx-4 my-3 leading-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </section>

    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
            <div class="md:shrink-0">
                <img
                    class="h-48 w-full object-cover md:h-full md:w-48"
                    src="../public/favicon.ico"
                    alt="Modern building architecture"
                />
            </div>
            <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Company retreats
                </div>
                <a
                    href="#"
                    class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                    >Incredible accommodation for your team</a
                >
                <p class="mt-2 text-slate-500">
                    Looking to take your team away on a retreat to enjoy awesome food and take in
                    some sunshine? We have a list of places to do just that.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>
