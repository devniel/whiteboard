"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";

// Since client components get prerenderd on server as well hence
// importing the excalidraw stuff dynamically with ssr false
const ExcalidrawWithClientOnly = dynamic(
  async () => (await import("../components/ExcalidrawWrapper")).default,
  {
    ssr: false,
  }
);

export default function Page() {
  const [, setExcalidrawAPI] = useState<ExcalidrawImperativeAPI | null>(null);

  return (
    <div className="relative min-h-screen">
      <ExcalidrawWithClientOnly
        width="100%"
        height="100vh"
        excalidrawAPI={(api) => {
          console.log("api:", api);
          setExcalidrawAPI(api);
        }}
      />
    </div>
  );
}
