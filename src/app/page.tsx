import Hero from "./components/Hero";

export default async function Home() {
  return (
    <div className="-z-10">
      <Hero />
      <div>Home</div>
    </div>
  );
}
