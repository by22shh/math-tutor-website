interface WaveDividerProps {
  variant?: "top" | "bottom" | "both";
  color?: "white" | "slate" | "orange";
  flip?: boolean;
}

export default function WaveDivider({
  variant = "bottom",
  color = "white",
  flip = false
}: WaveDividerProps) {
  const colors = {
    white: "#ffffff",
    slate: "#f8fafc",
    orange: "#fff7ed"
  };

  const fillColor = colors[color];

  const waveTop = (
    <svg
      className={`absolute top-0 left-0 w-full ${flip ? 'transform rotate-180' : ''}`}
      style={{ height: '80px' }}
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        fill={fillColor}
      />
    </svg>
  );

  const waveBottom = (
    <svg
      className={`absolute bottom-0 left-0 w-full ${flip ? 'transform rotate-180' : ''}`}
      style={{ height: '80px' }}
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        fill={fillColor}
      />
    </svg>
  );

  return (
    <div className="relative">
      {(variant === "top" || variant === "both") && waveTop}
      {(variant === "bottom" || variant === "both") && waveBottom}
    </div>
  );
}
