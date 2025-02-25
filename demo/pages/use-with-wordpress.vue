<script setup lang="ts">
import GuideSidebar from "@/components/integration/guideSidebar.vue";
import { ArrowTopRightOnSquareIcon, ArrowRightIcon } from '@heroicons/vue/24/outline';
const LazyCodeBlock = defineAsyncComponent(() => import('@/components/codeBlock.vue'));
const { locale } = useI18n();

definePageMeta({
  title: 'navigation.use-with-wordpress',
  description: 'meta.use-with-wordpress.description',
});

const today = new Date();
const nextDay = new Date();
nextDay.setDate(today.getDate() + 3);
const defaultDate = nextDay.getFullYear() + '-' + ('0' + (nextDay.getMonth() + 1)).slice(-2) + '-' + ('0' + nextDay.getDate()).slice(-2);
let wpUrl = (function () {
  if (locale.value == 'de') {
    return 'https://de.wordpress.org/plugins/add-to-calendar-button';
  }
  return 'https://wordpress.org/plugins/add-to-calendar-button';
})();
watch(locale, value => {
  if (value == 'de') {
    wpUrl = 'https://de.wordpress.org/plugins/add-to-calendar-button';
  } else {
    wpUrl = 'https://wordpress.org/plugins/add-to-calendar-button';
  }
});
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_192px]">
    <div class="pr-0 lg:pr-8 xl:pr-12 2xl:pr-20">
      <h1 class="mb-16 underline decoration-primary-light decoration-4 dark:decoration-primary-dark">{{ $t('content.guide.wordpress.headline') }}</h1>
      <div class="px-0 md:px-3 lg:px-5">
        <h2 class="mb-6">{{ $t('content.guide.step1') }}: {{ $t('content.guide.wordpress.step_install') }}</h2>
        <p>
          {{ $t('content.guide.wordpress.install_1') }}
          <a :href="wpUrl" target="_blank" rel="noopener">
            {{ $t('content.guide.wordpress.install_2') }}
            <ArrowTopRightOnSquareIcon class="-mt-0.5 mr-0.5 inline-block h-4 w-4" aria-hidden="true" />
          </a>
        </p>
        <ul class="my-4 list-disc pl-6">
          <li class="text-left">{{ $t('content.guide.wordpress.install_way_1') }}<br />{{ $t('content.guide.wordpress.install_way_1_search') }}: <code>add2cal</code></li>
          <li class="mt-3 text-left">
            {{ $t('content.guide.wordpress.install_way_2_1') }}<a :href="wpUrl" target="_blank" rel="noopener">{{ $t('content.guide.wordpress.install_way_2_2') }} <ArrowTopRightOnSquareIcon class="-mt-0.5 mr-0.5 inline-block h-4 w-4" aria-hidden="true" /></a
            >{{ $t('content.guide.wordpress.install_way_2_3') }}<span class="font-semibold italic"> wp-content/plugins/ </span>{{ $t('content.guide.wordpress.install_way_2_4') }}
          </li>
        </ul>
        <h2 class="mb-6 mt-20">{{ $t('content.guide.step2') }}: {{ $t('content.guide.wordpress.step_activate') }}</h2>
        <p>{{ $t('content.guide.wordpress.activate') }}</p>
        <h2 class="mb-6 mt-20">{{ $t('content.guide.step3') }}: {{ $t('content.guide.step_use') }}</h2>
        <h3 class="mb-6">A: Block</h3>
        <p>{{ $t('content.guide.wordpress.block') }}</p>
        <ol class="my-6 list-decimal pl-8 text-left">
          <li>{{ $t('content.guide.wordpress.block_step1') }}</li>
          <li class="mt-3">{{ $t('content.guide.wordpress.block_step2') }}</li>
          <li class="mt-3">{{ $t('content.guide.wordpress.block_step3') }}</li>
        </ol>
        <p>{{ $t('content.guide.wordpress.block_pro') }}</p>
        <h3 class="mb-6 mt-12">B: Shortcode</h3>
        <p>{{ $t('content.guide.wordpress.shortcode1') }}</p>
        <LazyCodeBlock>
          <pre>[add-to-calendar-button name="{{ $t('demo_data.name_dummy') }}" options="'Apple','Google'" startDate="{{ defaultDate }}" description="{{ $t('content.guide.wordpress.shortcode_description') }}"]</pre>
        </LazyCodeBlock>
        <p>{{ $t('content.guide.wordpress.shortcode_pro') }}</p>
        <p class="text-sm italic">{{ $t('content.guide.wordpress.shortcode2') }}</p>
        <a rel="author" target="_blank" :href="'https://docs.add-to-calendar-pro.com' + (locale !== 'en' ? '/' + locale : '') + '/integration/wordpress.html'" class="button-primary mx-auto mt-6 w-fit self-center sm:mx-0">
          {{ $t('content.guide.wordpress.pro_docs') }}<ArrowRightIcon class="-mt-0.5 ml-2 inline-block h-4 w-4" aria-hidden="true" />
        </a>
        <p class="pt-10 font-semibold italic">{{ $t('content.guide.step_use_simple') }}</p>
      </div>
    </div>
    <div class="hidden border-l border-zinc-300 pl-8 text-xs dark:border-zinc-700 lg:block xl:pl-12">
      <GuideSidebar stack="wordpress" />
    </div>
  </div>
</template>
