<script lang="ts">
  export let translationsURL: object | false;
</script>

{#if Object.keys(translationsURL).length}
  <div class="relative z-10 dark:text-white mr-4 flex">
    <ul class="flex space-x-2 list-none items-center">
      {#each Object.keys(translationsURL) as key}
        <li class="uppercase font-semibold -m-1 text-sm flex items-center">
          <a href="{translationsURL[key]}" class="dark:text-white" id="language_image">
          </a>
        </li>
      {/each}
    </ul>
  </div>
{/if}
