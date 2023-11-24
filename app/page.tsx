import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
      🎓 OpenAcademy
      </h1>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/agents"
      emptyStateComponent={InfoCard}
      placeholder="Tell me what you're not sure about"
      titleText="OpenAcademy"
      emoji="🎓"
      showIntermediateStepsToggle={true}
    ></ChatWindow>
  );
}
