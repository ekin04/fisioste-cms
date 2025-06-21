"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { once } from "events";

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return null;
};
