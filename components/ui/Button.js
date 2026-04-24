import Link from "next/link";

const variantStyles = {
  primary:
    "inline-flex items-center gap-2 bg-linear-to-r from-orange-500 via-yellow-400 to-red-500 hover:from-yellow-400 hover:to-orange-500 text-white font-semibold rounded-full shadow-md transition-all tracking-wide focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2",
  secondary:
    "inline-flex items-center gap-2 bg-white text-red-500 font-bold rounded-full shadow-lg hover:bg-red-100 hover:scale-105 hover:shadow-xl transition-transform border-2 border-red-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2",
  nav:
    "bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 active:bg-yellow-600 transition-colors shadow-md hover:shadow-lg",
  danger:
    "inline-flex items-center gap-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-red-400",
  ghost:
    "inline-flex items-center justify-center border border-white/70 text-white font-semibold rounded-full hover:bg-white/10 transition-colors",
  white:
    "inline-flex items-center justify-center bg-white text-orange-600 font-semibold rounded-full shadow-sm hover:bg-orange-50 transition-colors",
  link:
    "inline-flex items-center gap-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors duration-200 shadow",
  outline:
    "inline-flex items-center gap-2 bg-red-400 hover:bg-linear-to-r hover:from-orange-400 hover:to-yellow-300 text-white hover:text-black font-semibold rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-orange-400",
  filter:
    "rounded-full font-semibold border-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2 text-base",
  lg: "px-8 py-4 text-lg",
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
  const base = variantStyles[variant] || variantStyles.primary;
  const sz =
    variant === "filter"
      ? "px-5 py-2 text-sm"
      : size
      ? sizeStyles[size] || sizeStyles.md
      : "";
  const filterActive =
    variant === "filter"
      ? active
        ? "bg-orange-500 text-white border-orange-500"
        : "bg-white text-orange-500 border-orange-200 hover:bg-orange-50"
      : "";
  const width = fullWidth ? "w-full" : "";
  const cls = [base, sz, filterActive, width, className]
    .filter(Boolean)
    .join(" ");

  if (href) return <Link href={href} className={cls} {...rest}>{children}</Link>;
  return <button className={cls} {...rest}>{children}</button>;
}
