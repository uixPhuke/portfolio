"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Counter({ from = 0, to, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, to, {
      duration: 2,
      ease: "easeOut",
    });

    return controls.stop;
  }, [isInView, count, to]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}