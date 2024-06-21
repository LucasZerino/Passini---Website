'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  FileTextIcon,
  ImageIcon,
  MessageCircleIcon,
  SettingsIcon,
  Package2Icon,
} from '@/icons'

export default function MainSidebar() {
  const pathname = usePathname();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Função para verificar se o link está ativo com base no pathname atual
  const isActive = (path) => {
    return pathname === path;
  };

  // Função para alternar entre a sidebar expandida e colapsada
  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className={`flex h-full flex-col border-r bg-gray-100 dark:border-gray-800 dark:bg-gray-950 ${isSidebarCollapsed ? 'lg:w-16' : 'lg:w-64'}`}>
      <div className="flex h-[60px] items-center border-b px-6 dark:border-gray-800">
        <Link href="#" passHref>
          <div className="flex items-center gap-2 font-semibold">
            <Package2Icon className="h-6 w-6" />
            {!isSidebarCollapsed && <span className="">Blog Passini</span>}
          </div>
        </Link>
      </div>
      <div className="flex-1 overflow-auto">
        <nav className={`grid gap-2 px-4 py-6 ${isSidebarCollapsed ? 'grid-cols-5' : 'grid-cols-1'}`}>
          <SidebarLink href="/blog" icon={<HomeIcon className="h-4 w-4" />} label="Dashboard" isActive={isActive('/blog')} isSidebarCollapsed={isSidebarCollapsed} />
          <SidebarLink href="/blog/posts" icon={<FileTextIcon className="h-4 w-4" />} label="Posts" isActive={isActive('/blog/posts')} isSidebarCollapsed={isSidebarCollapsed} />
          <SidebarLink href="/blog/media" icon={<ImageIcon className="h-4 w-4" />} label="Media" isActive={isActive('/blog/media')} isSidebarCollapsed={isSidebarCollapsed} />
          <SidebarLink href="/blog/comments" icon={<MessageCircleIcon className="h-4 w-4" />} label="Comments" isActive={isActive('/blog/comments')} isSidebarCollapsed={isSidebarCollapsed} />
          <SidebarLink href="/blog/settings" icon={<SettingsIcon className="h-4 w-4" />} label="Settings" isActive={isActive('/blog/settings')} isSidebarCollapsed={isSidebarCollapsed} />
        </nav>
      </div>
      {/* Botão de toggle para a sidebar */}
      <button
        className="fixed bottom-6 left-6 lg:hidden bg-gray-200 dark:bg-gray-700 rounded-full p-2 text-gray-900 hover:text-gray-900"
        onClick={toggleSidebarCollapse}
      >
        {isSidebarCollapsed ? (
          <Package2Icon className="h-6 w-6" />
        ) : (
          <Package2Icon className="h-6 w-6 transform rotate-180" />
        )}
      </button>
    </div>
  );
}

function SidebarLink({ href, icon, label, isActive, isSidebarCollapsed }) {
  const linkClass = `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${isActive ? 'text-gray-900 hover:text-gray-900 bg-gray-200 dark:bg-gray-700' : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'}`;

  return (
    <Link href={href} passHref>
      <div className={linkClass}>
        {icon}
        {!isSidebarCollapsed && <span className="">{label}</span>}
      </div>
    </Link>
  );
}


