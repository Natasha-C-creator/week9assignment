"use client";

import { Accessibility } from "accessibility";
import { useEffect } from "react";

export default function AccessibilityBar() {
    useEffect(() => {

  window.addEventListener(
    "load",
    function () {
      new Accessibility();
    },
    false
  );
}, []);
}
