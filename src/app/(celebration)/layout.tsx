import UnlockGuard from "@/components/UnlockGuard";
import CelebrationShell from "@/components/CelebrationShell";

export default function CelebrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UnlockGuard>
      <CelebrationShell>{children}</CelebrationShell>
    </UnlockGuard>
  );
}
