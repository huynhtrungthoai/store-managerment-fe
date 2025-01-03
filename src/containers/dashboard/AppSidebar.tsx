'use client';

import {
  AudioWaveform,
  Bot,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from 'lucide-react';
import * as React from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import { PATH_DASHBOARD } from '@/routes/paths';
import { NavMain } from './NavMain';
import { NavProjects } from './NavProject';
import { NavUser } from './NavUser';
import { TeamSwitcher } from './TeamSwitcher';

// This is sample data.
const data = {
  user: {
    name: 'Thoai Huynh',
    email: 'huynhtrungthoai@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Khoai Bong Bóng',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Bánh kẹp chó nóng',
      logo: AudioWaveform,
      plan: 'Enterprise',
    },
  ],
  navMain: [
    {
      title: 'Dashboard',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'Trang chủ',
          url: PATH_DASHBOARD.DASHBOARD,
        },
        {
          title: 'Doanh thu',
          url: '#',
        },
        {
          title: 'Đơn hàng',
          url: '#',
        },
        {
          title: 'Theo dõi ca làm việc',
          url: '#',
        },
      ],
    },
    {
      title: 'Ca làm việc',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'Đăng ký ca',
          url: PATH_DASHBOARD.SHIFT,
        },
        {
          title: 'Checkin',
          url: '#',
        },
        {
          title: 'Checkout',
          url: '#',
        },
      ],
    },

    {
      title: 'Cài đặt',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'Cài đặt chung',
          url: '#',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
