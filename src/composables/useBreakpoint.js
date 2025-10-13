import { onMounted, onUnmounted, ref } from "vue"

export const useBreakpoint = (breakpoint) => {
    const isWide = ref(window.innerWidth > breakpoint);

    const update = () => {
        isWide.value = window.innerWidth > breakpoint;
    }

    onMounted(() => {
        window.addEventListener('resize', update);
        update();
    });

    onUnmounted(() => {
        window.removeEventListener('resize', update);
    });
    return { isWide }
}