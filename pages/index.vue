<template>
  <div class="w-full h-screen flex flex-col bg-[#ffff77]">
    <div class="flex justify-end px-2 py-2 absolute top-0 left-0 w-full">
      <button
        class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        中/Eng
      </button>
    </div>
    <div class="flex-grow flex flex-col justify-center items-center">
      <h1 class="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-8">
        In Taiwan, are motorbikes on the highway yet?
      </h1>
      <p class="text-8xl md:text-9xl font-bold text-red-600">NO</p>
    </div>
  </div>
</template>

<script setup>
const { locale, locales, t } = useI18n()

definePageMeta({
  title: 'pages.title.index'
})
</script>
