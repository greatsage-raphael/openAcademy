import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        Download OpenAcademy 
      </h1>
      <button
      type="submit"
      className="shrink-0 px-8 py-4 bg-sky-600 rounded w-28">
       Download
      </button>
    </div>
  );
  return (
    InfoCard
  );
}
