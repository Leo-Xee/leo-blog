import { useCallback } from 'react';

const SCROLL_ANIMATION_DURATION_MS = 1000;
const EASE_OUT_QUART_POWER = 4;

function useHorizontalScrollToCenter() {
  const scrollToCenter = useCallback(
    (container: HTMLElement, targetElement: HTMLElement) => {
      const containerRect = container.getBoundingClientRect();
      const targetRect = targetElement.getBoundingClientRect();

      const targetScrollLeft =
        container.scrollLeft +
        targetRect.left -
        containerRect.left -
        (containerRect.width - targetRect.width) / 2;

      const startScrollLeft = container.scrollLeft;
      const distance = targetScrollLeft - startScrollLeft;
      const startTime = performance.now();

      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / SCROLL_ANIMATION_DURATION_MS, 1);

        const easeProgress = 1 - (1 - progress) ** EASE_OUT_QUART_POWER;

        // eslint-disable-next-line no-param-reassign
        container.scrollLeft = startScrollLeft + distance * easeProgress;

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    },
    []
  );

  return scrollToCenter;
}

export default useHorizontalScrollToCenter;
