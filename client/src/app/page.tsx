import Hero from "@/components/hero-component";

export default function Home() {
  return (
    <div
      id="page-wrapper"
      className="w-full h-full relative flex justify-center items-center bg-sky-300 text-neutral-800 border-10 border-red"
    >
      <Hero />
    </div>
  );
}
