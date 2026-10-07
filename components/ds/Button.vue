<template>
  <a
    v-if="href"
    :href="href"
    :target="target"
    :rel="target === '_blank' ? 'noopener' : undefined"
    :class="[base, variants[variant], variant === 'lima' ? sizes[size] : '', block ? 'w-full' : '']"
  >
    <slot />
  </a>
  <button
    v-else
    :type="type"
    :disabled="disabled"
    :class="[base, variants[variant], variant === 'lima' ? sizes[size] : '', block ? 'w-full' : '']"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
type Variant = 'lima' | 'ghost' | 'ghost-underline'
type Size = 'md' | 'lg' | 'xl'
withDefaults(defineProps<{
  variant?: Variant
  size?: Size
  type?: 'button' | 'submit'
  href?: string
  target?: string
  disabled?: boolean
  block?: boolean
}>(), { variant: 'lima', size: 'lg', type: 'button', href: undefined, target: undefined, disabled: false, block: false })

const base = 'inline-flex cursor-pointer appearance-none items-center justify-center gap-2 border-0 font-body no-underline transition-colors duration-[120ms] ease-tng focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lima'

const variants: Record<Variant, string> = {
  lima: 'rounded-pill bg-lima font-semibold text-tinta hover:bg-lima-hover hover:text-tinta active:translate-y-px disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-lima',
  ghost: 'min-h-11 bg-transparent px-0 py-2.5 text-[15px] text-night-ink-3 hover:text-night-ink',
  'ghost-underline': 'min-h-11 bg-transparent px-0 py-2.5 text-[15px] text-night-ink-3 underline underline-offset-[3px] hover:text-night-ink',
}

// Só se aplica à variante lima; as ghost têm tamanho fixo.
const sizes: Record<Size, string> = {
  md: 'min-h-12 px-[26px] py-3.5 text-base',
  lg: 'min-h-[52px] px-[30px] py-4 text-[17px]',
  xl: 'min-h-[54px] px-7 py-4 text-[17px]',
}
</script>
