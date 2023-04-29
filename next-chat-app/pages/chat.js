import Chats from "@/components/Chats";
import Navbar from "@/components/Navbar";
import ChatConversation from "@/components/ChatConversation";
import { useAuth } from "@/contexts/authContext";
import { useRouter } from "next/router";

useRouter;

export default function Chat() {

  const {user, loading} = useAuth()
  const router = useRouter();

  
  if (loading) return <div style={{ display: "grid", placeItems: "center", height: "100vh" }}><h1>loading</h1></div>
  if (!user) {
    router.push("/");
    return null;
  }

  console.log(user);
  
  return (
    <main className="chat-screen">
      <section className="chatInterface chat-template">
        <Navbar />
        <Chats />
        <ChatConversation />
      </section>
    </main>
  );
}
