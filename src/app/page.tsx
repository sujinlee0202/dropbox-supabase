import Logo from "@/components/Logo";
import MiniboxUI from "@/components/MiniboxUI";

export default function Home() {
  return (
    <main className='w-full p-2 flex flex-col gap-2'>
      {/** Logo */}
      <Logo />

      {/** Minibox UI */}
      <MiniboxUI />
    </main>
  );
}
