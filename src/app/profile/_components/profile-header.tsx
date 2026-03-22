import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar'

interface ProfileHeaderProps {
  name: string
  plan: string
  image?: string | null
}

export function ProfileHeader({ name, plan, image }: ProfileHeaderProps) {
  const splittedName = name.toUpperCase().split(' ')
  const initials = splittedName.map((name) => name[0]).join('')

  return (
    <div className="flex w-full flex-row items-center justify-between gap-3">
      <div className="flex flex-row items-center gap-3">
        <Avatar className="size-[52px]">
          <AvatarImage
            src={image || ''}
            alt={`Avatar de ${name}`}
            className="object-cover"
          />
          <AvatarFallback className="font-semibold">{initials}</AvatarFallback>
        </Avatar>

        <div className="flex flex-col items-start gap-1.5">
          <span className="font-[family-name:var(--font-inter-tight),sans-serif] text-[18px] leading-[105%] font-semibold text-black">
            {name}
          </span>
          <span className="font-[family-name:var(--font-inter-tight),sans-serif] text-[14px] leading-[115%] font-normal text-black/70">
            {plan}
          </span>
        </div>
      </div>
    </div>
  )
}
