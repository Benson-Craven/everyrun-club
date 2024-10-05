import { Twitter, Facebook, Instagram, Youtube } from 'lucide-react'

const icons = {
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
}

export default function SocialIcon({ platform }) {
  const Icon = icons[platform]
  return <Icon className='w-5 h-5' />
}
