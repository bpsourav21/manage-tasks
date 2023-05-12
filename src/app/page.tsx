import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import ProtectedRoute from './protected';
import TaskHome from '@/component/taskHome';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <ProtectedRoute>
      <>
        <TaskHome userKey={session?.user?.email} />
      </>
    </ProtectedRoute>
  )
}
