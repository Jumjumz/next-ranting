import Status from "./components/status";
import Verification from "./components/verification";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-8">
      <div className=" w-full">
        <h1 className=" font-mono justify-center">HELLO RANTING.COM!!!</h1>
        <h1>What to commit?!</h1>
        <h1>Still on Progress as I don't know what to put yet</h1>
        <div className=" w-full h-16 border-y-2 border-slate-200">
          <ul className=" h-full font-mono text-md text-slate-400 flex flex-row flex-wrap items-center justify-evenly">
            <li>Botmind3232</li>
            <li>
              <Verification />
            </li>
            <li>39.00</li>
            <li>olivia@gmail.com</li>
            <li>+63 (976) 003 517</li>
            <li>https://scaleforge.tech/</li>
            <li>2024 Apr 12</li>
            <li>
              <Status />
            </li>
            <li>2024 Apr 12 08:30 PM</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
