/**
 * Component: ScrollAnimation - Reusable scroll-triggered animation wrapper
 */

import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

export default function ScrollAnimation({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
  className = ''
}: ScrollAnimationProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  const animationStyles: Record<string, any> = {
    'fade-up': {
      initial: { opacity: 0, transform: 'translateY(40px)' },
      animate: { opacity: 1, transform: 'translateY(0)' }
    },
    'fade-in': {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    },
    'slide-left': {
      initial: { opacity: 0, transform: 'translateX(60px)' },
      animate: { opacity: 1, transform: 'translateX(0)' }
    },
    'slide-right': {
      initial: { opacity: 0, transform: 'translateX(-60px)' },
      animate: { opacity: 1, transform: 'translateX(0)' }
    },
    'scale-up': {
      initial: { opacity: 0, transform: 'scale(0.9)' },
      animate: { opacity: 1, transform: 'scale(1)' }
    }
  };

  const currentAnimation = animationStyles[animation];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(!inView ? currentAnimation.initial : currentAnimation.animate),
        transition: `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`
      }}
    >
      {children}
    </div>
  );
}
