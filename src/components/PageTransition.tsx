export default function PageTransition({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`animate-fadeUp px-4 py-8 ${className}`}>{children}</div>
  );
}
