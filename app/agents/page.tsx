import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        Download OpenAcademy ⬇️
      </h1>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat"
      emoji="🏴‍☠️"
      titleText="Patchy the Chatty Pirate"
      placeholder="I'm here to chat with you everything that you want to talk"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
