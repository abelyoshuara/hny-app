import { useRef } from "react";
import { Fireworks } from "@fireworks-js/react";
import type { FireworksHandlers } from "@fireworks-js/react";

export default function App() {
  const ref = useRef<FireworksHandlers>(null);

  return (
    <>
      <Fireworks
        ref={ref}
        options={{ opacity: 0.5 }}
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          position: "fixed",
          background: "#000",
        }}
      />

      <div className="relative w-full min-h-screen flex items-center justify-center">
        <h1 className="text-slate-100 text-4xl font-bold">Happy New Year</h1>
      </div>
    </>
  );
}
