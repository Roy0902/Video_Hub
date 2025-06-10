import { SideNavItem } from "@/types/SideNavItem"
import Image from "next/image"


export const sideNavItem: SideNavItem[] = [
  { icon: <Image src = './public/logo-video-playlist.png' alt='logo-video-playlist' className='w-50 h-50'/>, 
    title: 'Video Catalog', 
    route: '/videos' },
  { title: 'My Videos', route: '/my-videos' },
  { title: 'Notes', route: '/notes' },
  { title: 'Progress', route: '/progress' },
]