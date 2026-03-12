"use client";

import FloatingLines from "./FloatingLines";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <FloatingLines
        enabledWaves={["top", "middle", "bottom"]}
        lineCount={5}
        lineDistance={5}
        bendRadius={5}
        bendStrength={-0.5}
        interactive={true}
        parallax={true}
      />
    </div>
  );
}
