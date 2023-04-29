
import Navbar from "@/components/Navbar";
import { useAuth } from "@/contexts/authContext";
import { useRouter } from "next/router";

export default function Config() {
  const {user, loading} = useAuth()
  const router = useRouter();

  
  if (loading) return <div style={{ display: "grid", placeItems: "center", height: "100vh" }}><h1>loading</h1></div>
  if (!user) {
    router.push("/");
    return null;
  }
  return (
    <main className="chat-screen">
      <section className="chatInterface normal-template">
        <Navbar />
        <section className="default-screen config-screen">hskdfjhs</section>
      </section>
    </main>
  );
}
