import SiteNav from "./SiteNav";
import BasmaFooter from "./BasmaFooter";
import MiniMusicBar from "./MiniMusicBar";
import SurpriseScatter from "./SurpriseScatter";

export default function CelebrationShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteNav />
      <SurpriseScatter />
      <div className="relative z-10 flex-1">{children}</div>
      <BasmaFooter />
      <MiniMusicBar />
    </div>
  );
}
