"use client";

import FloatingLines from "./FloatingLines";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0" style={{ contain: "strict" }}>
      <FloatingLines
        enabledWaves={["top", "middle", "bottom"]}
        lineCount={5}
        lineDistance={5}
        bendRadius={5}
        bendStrength={-0.5}
        interactive={true}
        parallax={true}
        mixBlendMode="normal"
        linesGradient={["#3b0764", "#4c1d95", "#2e1065"]}
      />
    </div>
  );
}
