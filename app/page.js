import Hero from "./components/Hero";
import RealState from "./components/RealState";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="my-10">
        <RealState />
      </div>
    </main>
  )
}
