// src/app/page.tsx

export const dynamic = 'force-dynamic';
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import AuthHomeView from "@/sections/AuthHomeView";
import NonAuthHomeView from "../../sections/NonAuthHomeView";

export const metadata = { title: "Domov | SandraInstagram" };

export default async function HomePage() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return <NonAuthHomeView />;
    }

    return <AuthHomeView session={session} />;
  } catch (error) {
    console.error("Error fetching session:", error);
    return <NonAuthHomeView />;
  }
}




















