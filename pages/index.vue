<template>
	<div>
    <div class="w-full h-screen flex flex-col bg-[#ffff77]">
      <div class="flex justify-end px-2 py-2 absolute top-0 left-0 w-full">
        <button
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          @click="toggleLocale"
        >
          中/Eng
        </button>
      </div>
      <div class="flex-grow flex flex-col justify-center items-center">
        <h1 class="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-8">
        	{{ t('home.question') }}
        </h1>
        <p class="text-8xl md:text-9xl font-bold text-red-600">
          {{ t('answer.no') }}
        </p>
      </div>

      <div class="flex justify-center px-2 py-2 absolute bottom-0 left-0 w-full">
      	<p class="text-xl">
      		{{ t('since', { time: timelapsed }) }}
      	</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale, setLocale, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

// Not used for now
// definePageMeta({
//   title: 'pages.title.index'
// })

const toggleLocale = () => {
	if (locale.value === 'en') {
		setLocale('zh-TW')
	} else {
		setLocale('en')
	}
}

// 2013/5/3
const theDay = new Date(2013, 4, 3)
const timelapsed = ref(getTimelapsed())

function getTimelapsed() {
  const now = Date.now();
  const difference = now - theDay.getTime();

  // Calculate the time components
  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // Calculate the remaining time components
  const remainingHours = hours % 24;
  const remainingMinutes = minutes % 60;
  const remainingSeconds = seconds % 60;

  // Format the time elapsed string
  return t('timelapsed', { days, remainingHours, remainingMinutes, remainingSeconds })
}

useIntervalFn(() => {
  timelapsed.value = getTimelapsed()
}, 1000)
</script>
