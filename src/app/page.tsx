import Table from '@/component/table'
import { User } from '@/component/user'
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import ProtectedRoute from './protected';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <ProtectedRoute>
      <>
        <Table />
      </>
    </ProtectedRoute>
  )
}
