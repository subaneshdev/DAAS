"use client";
import { useEffect } from "react";

/** Loads the isolated, reference-matched film after the server-rendered introduction. */
export function FilmExperience() {
  useEffect(() => {
    const probe = document.createElement("canvas");
    if (!probe.getContext("webgl")) return;
    const script = document.createElement("script");
    script.type = "module";
    script.src = "/reference/experience.js?v=daas-palette-2";
    document.body.appendChild(script);
    return () => { script.remove(); };
  }, []);
  return null;
}
