import Status from "./components/status";
import Verification from "./components/verification";
import dashboardInfo from "./lib/info";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-8">
      <div className=" w-full">
        <h1 className=" font-mono justify-center">HELLO RANTING.COM!!!</h1>
        <h1>What to commit?!</h1>
        <h1>Still on Progress as I don't know what to put yet</h1>
        <div className=" w-full h-16 border-slate-200">
          {dashboardInfo.map((info) => (
            <ul
              key={info.id}
              className=" h-full font-mono text-md text-slate-400 flex flex-row flex-wrap items-center justify-evenly border-t-2"
            >
              <li>{info.username}</li>
              <li>
                <Verification />
              </li>
              <li>{info.balance}</li>
              <li>{info.email}</li>
              <li>{info.cell}</li>
              <li>{info.link}</li>
              <li>{info.dateRegistered}</li>
              <li>
                <Status />
              </li>
              <li>{info.dateRegisteredWithTime}</li>
            </ul>
          ))}
        </div>
      </div>
    </main>
  );
}
