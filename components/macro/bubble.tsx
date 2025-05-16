import { cn } from "@/lib/utils"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type BubbleProps = {
  message: string
  variant?: "left" | "right"
  timestamp?: string
  className?: string
  avatarUrl?: string
}

export const Bubble: React.FC<BubbleProps> = ({
  message,
  variant = "left",
  timestamp,
  className,
  avatarUrl,
}) => {
  return (
    <div
      className={cn(
        "flex items-end mb-2 gap-2",
        variant === "left" ? "justify-start" : "justify-end"
      )}
    >
      <div
        className={cn(
          "max-w-xs md:max-w-sm py-2 px-3 rounded-xl relative",
          variant === "left"
            ? "bg-foreground text-background"
            : "bg-blue-500 text-white",
          className
        )}
      >
        <div className="text-xs">{message}</div>
        {timestamp && (
          <div className="text-[10px] mt-1 opacity-50 text-right">
            {timestamp}
          </div>
        )}
      </div>
    </div>
  )
}
