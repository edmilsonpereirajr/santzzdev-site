type ArrowIconProps = {
  direction?: "up-right" | "down";
  className?: string;
};

export default function ArrowIcon({
  direction = "up-right",
  className,
}: ArrowIconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {direction === "down" ? (
        <path d="M12 5v14m-7-7 7 7 7-7" />
      ) : (
        <path d="M7 17 17 7M7 7h10v10" />
      )}
    </svg>
  );
}