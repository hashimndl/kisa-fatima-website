type IconName =
  | "arrow"
  | "globe"
  | "chart"
  | "megaphone"
  | "pen"
  | "handshake"
  | "trophy"
  | "users"
  | "mail";

const iconPaths: Record<IconName, string> = {
  arrow: "M5 12h14M13 5l7 7-7 7",
  globe:
    "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM2 12h20M12 2c2.5 2.7 4 6.2 4 10s-1.5 7.3-4 10M12 2c-2.5 2.7-4 6.2-4 10s1.5 7.3 4 10",
  chart: "M4 19V5M4 19h16M8 16v-5M12 16V8M16 16v-9",
  megaphone:
    "M3 11v2a2 2 0 0 0 2 2h2l3 5h3l-3-5 8 3V6l-8 3H5a2 2 0 0 0-2 2ZM18 9l3-2M18 15l3 2",
  pen: "M4 20l4-1 10.5-10.5a2.1 2.1 0 0 0-3-3L5 16l-1 4ZM14 6l4 4",
  handshake:
    "M8 12l2 2a2 2 0 0 0 3 0l1-1 4 4a2 2 0 0 0 3-3l-4-4M3 12l5-5 4 4M21 12l-5-5-3 3M7 17l-2 2M11 19l-2 2M15 19l-2 2",
  trophy:
    "M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4ZM5 6H3v2a4 4 0 0 0 4 4M19 6h2v2a4 4 0 0 1-4 4",
  users:
    "M16 21v-2a4 4 0 0 0-8 0v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M2 21v-2a4 4 0 0 1 3-3.87M8 3.13a4 4 0 0 0 0 7.75",
  mail: "M4 6h16v12H4V6ZM4 7l8 6 8-6"
};

export default function Icon({
  name,
  size = 24,
  className = "",
  strokeWidth = 1.7
}: {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d={iconPaths[name]} />
    </svg>
  );
}
