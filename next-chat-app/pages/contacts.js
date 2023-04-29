import Navbar from "@/components/Navbar";
import UserFriend from "@/components/UserFriend";
import UserRequest from "@/components/UserRequest";
import InputSearch from "@/components/InputSearch";
import styles from "../styles/contacts.module.css";
import { useAuth } from "@/contexts/authContext";
import { useRouter } from "next/router";

export default function Contacts() {

  const {user, loading} = useAuth()
  const router = useRouter();

  if (loading) return <div style={{ display: "grid", placeItems: "center", height: "100vh" }}><h1>loading</h1></div>
  if (!user) {
    router.push("/");
    return null;
  }

  const users = [
    {
      username: "user1",
      isOnline: true,
      isFollowing: false,
    },
    {
      username: "user2",
      isOnline: false,
      isFollowing: true,
    },
    {
      username: "user3",
      isOnline: true,
      isFollowing: null,
    },
    {
      username: "user4",
      isOnline: false,
      isFollowing: null,
    },
    {
      username: "user5",
      isOnline: true,
      isFollowing: true,
    },
    {
      username: "user6",
      isOnline: false,
      isFollowing: false,
    },
    {
      username: "user7",
      isOnline: true,
      isFollowing: false,
    },
    {
      username: "user8",
      isOnline: false,
      isFollowing: true,
    },
    {
      username: "user9",
      isOnline: true,
      isFollowing: true,
    },
    {
      username: "user10",
      isOnline: false,
      isFollowing: false,
    },
  ];

  return (
    <main className="chat-screen">
      <section className="chatInterface contacts-template">
        <Navbar />
        <section className={styles.my_contacts}>
          <InputSearch />
          <section className={styles.contacts_list}>
            {users.map((user) => {
              return (
                <UserFriend
                  key={user.username}
                  username={user.username}
                  isFollowing={user.isFollowing}
                />
              );
            })}
          </section>
        </section>
        <section className={styles.add_contacts}>
          <h3 style={{ textAlign: "center" }}>Solicitudes</h3>
          <section className={styles.add_user}>
            <UserRequest />
            <UserRequest />
            <UserRequest />
            <UserRequest />
            <UserRequest />
            <UserRequest />
            <UserRequest />
            <UserRequest />
            <UserRequest />
            <UserRequest />
            <UserRequest />
          </section>
        </section>
      </section>
    </main>
  );
}
