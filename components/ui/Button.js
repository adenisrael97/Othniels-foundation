import Link from "next/link";

/*
  3-variant button system — intentional, not decorative.

  primary  → dark fill   (main CTAs)
  brand    → amber fill  (donate / high-emphasis actions)
  outline  → bordered    (secondary actions)
  ghost    → text-only   (low-emphasis, on dark backgrounds)
  filter   → pill toggle (blog/gallery filters)
*/

const variants = {
  primary:
    "inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-700 active:bg-gray-800 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2",
  brand:
    "inline-flex items-center justify-center gap-2 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 active:bg-amber-900 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2",
  outline:
    "inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-800 font-medium rounded-lg hover:border-gray-900 hover:text-gray-900 transition-colors duration-200 bg-white focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2",
  ghost:
    "inline-flex items-center justify-center gap-2 border border-white/40 text-white font-medium rounded-lg hover:bg-white/10 hover:border-white/70 transition-colors duration-200",
  filter:
    "inline-flex items-center justify-center rounded-full font-medium border transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  active,
  fullWidth = false,
  className = "",
  children,
  ...rest
}) {
  const base = variants[variant] ?? variants.primary;
  const sz = variant === "filter" ? "px-5 py-2 text-sm" : (sizes[size] ?? sizes.md);
  const filterState =
    variant === "filter"
      ? active
        ? "bg-gray-900 text-white border-gray-900"
        : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900"
      : "";
  const width = fullWidth ? "w-full" : "";

  const cls = [base, sz, filterState, width, className].filter(Boolean).join(" ");

  if (href) return <Link href={href} className={cls} {...rest}>{children}</Link>;
  return <button className={cls} {...rest}>{children}</button>;
}
