import { Price } from "@/components/price";
import { ModeToggle } from "@/components/ui/tbtn";

export default function Home() {
  return (
    <main className="dark:bg-[#0f172a] w-full min-h-screen">
      <div className="absolute right-3 top-1  ">
        <ModeToggle />
      </div>
      <Price />
    </main>
  );
}
