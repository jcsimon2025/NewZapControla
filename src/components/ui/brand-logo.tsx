import { useTheme } from '@/hooks/useTheme'

interface BrandLogoProps {
  className?: string
  alt?: string
}

export function BrandLogo({ className = "", alt = "ZapControla" }: BrandLogoProps) {
  const { theme } = useTheme()
  
  // Determina se está em modo escuro
  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
  
  // Logo branca para modo escuro, logo preta para modo claro
  const logoSrc = isDark 
    ? '/lovable-uploads/699c0019-2a78-491a-966b-190d104b4cef.png' 
    : '/lovable-uploads/7b3c35d7-d186-421e-ae9f-2bbeb55d681f.png'
  
  return (
    <img 
      src={logoSrc}
      alt={alt}
      className={className}
    />
  )
}