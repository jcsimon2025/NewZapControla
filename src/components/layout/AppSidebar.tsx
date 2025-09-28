
import { NavLink, useLocation } from 'react-router-dom'
import { Home, CreditCard, Calendar, User, LogOut, Tag, FileText } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar'
import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { UserProfile } from './UserProfile'
import { BrandLogo } from '@/components/ui/brand-logo'
import React from 'react'

const items = [
  { title: 'Dashboard', url: '/dashboard', icon: Home },
  { title: 'Transações', url: '/transacoes', icon: CreditCard },
  { title: 'Categorias', url: '/categorias', icon: Tag },
  { title: 'Relatórios', url: '/relatorios', icon: FileText },
  { title: 'Lembretes', url: '/lembretes', icon: Calendar },
  { title: 'Perfil', url: '/perfil', icon: User },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const { signOut } = useAuth()
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path
  const isCollapsed = state === "collapsed"

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4">
        <div className="flex items-center justify-center">
          {isCollapsed ? (
            <div className="min-w-32">
              <img 
                src="/lovable-uploads/9af179ff-e49a-47e8-b495-fbbc46ccb84d.png"
                alt="ZapControla Icon" 
                className="h-32 w-32"
              />
            </div>
          ) : (
            <BrandLogo className="h-32 w-auto" />
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`${
                      isActive(item.url)
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'hover:bg-accent'
                    }`}
                  >
                    <NavLink to={item.url} end>
                      {React.createElement(item.icon, { className: 'h-4 w-4' })}
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 space-y-4">
        <UserProfile />
        
        <Button
          onClick={signOut}
          variant="outline"
          size={isCollapsed ? "icon" : "default"}
          className="w-full"
        >
          <LogOut className="h-4 w-4" />
          <span className="group-data-[collapsible=icon]:hidden ml-2">Sair</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}
