import { auth } from '@/services/auth';
import MainSidebar from './_components/mainSidebar';
import MainTopbar from './_components/mainTopbar';

export default async function Layout({ children }) {
    const session = await auth()

  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
        <MainSidebar user={session?.user} />
        <div className="flex flex-col">
            <MainTopbar user={session?.user}/>
        <main className="flex-1 p-6">
            {children}
        </main>
        </div>
  </div>
  );
}
