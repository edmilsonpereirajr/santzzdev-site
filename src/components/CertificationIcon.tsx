type CertificationIconProps = {
  type: "web" | "programming" | "data" | "security" | "computer-science";
};

export default function CertificationIcon({ type }: CertificationIconProps) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {type === "web" && (
        <>
          <path d="m8 8-4 4 4 4" />
          <path d="m16 8 4 4-4 4" />
          <path d="m14 5-4 14" />
        </>
      )}

      {type === "programming" && (
        <>
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </>
      )}

      {type === "data" && (
        <>
          <path d="M4 19V5" />
          <path d="M4 19h16" />
          <path d="m7 15 4-4 3 2 5-6" />
        </>
      )}

      {type === "security" && (
        <>
          <path d="M12 3 20 6v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
          <path d="m9 12 2 2 4-4" />
        </>
      )}

      {type === "computer-science" && (
        <>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
        </>
      )}
    </svg>
  );
}
