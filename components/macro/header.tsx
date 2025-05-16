import { cn } from "@/lib/utils"

type Variant = "left" | "center" | "right"
type TextSize = "sm" | "base" | "lg" | "xl"
type MaxWidth = "sm" | "md" | "lg" | "xl" | "2xl" | "full"

export const SectionHeader = ({
  title,
  children,
  className,
  variant = "center",
  titleSize = "xl",
  contentSize = "base",
  maxWidth = "xl",
}: {
  title: string
  children: React.ReactNode
  className?: string
  variant?: Variant
  titleSize?: TextSize
  contentSize?: TextSize
  maxWidth?: MaxWidth
}) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[variant]

  const textSizeClasses = {
    sm: "text-sm md:text-base",
    base: "text-base md:text-lg",
    lg: "text-lg md:text-xl lg:text-2xl",
    xl: "text-xl md:text-2xl",
  }

  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    full: "w-full",
  }[maxWidth]

  return (
    <div
      className={cn(
        "w-full flex flex-col gap-2",
        alignmentClasses,
        maxWidthClasses,
        className
      )}
    >
      <h2 className={cn("text-balance font-serif", textSizeClasses[titleSize])}>
        {title}
      </h2>
      <p className={cn("text-muted-foreground", textSizeClasses[contentSize])}>
        {children}
      </p>
    </div>
  )
}

export const SectionDescription = ({
  children,
  className,
  variant = "center",
  contentSize = "base",
  maxWidth = "lg",
}: {
  children: React.ReactNode
  className?: string
  variant?: Variant
  contentSize?: TextSize
  maxWidth?: MaxWidth
}) => {
  const alignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[variant]

  const textSizeClasses = {
    sm: "text-sm md:text-base",
    base: "text-base md:text-lg",
    lg: "text-lg md:text-xl",
    xl: "text-xl md:text-2xl",
  }

  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    full: "w-full",
  }[maxWidth]

  return (
    <div className={cn(alignment, maxWidthClasses, className)}>
      <p className={cn("text-muted-foreground", textSizeClasses[contentSize])}>
        {children}
      </p>
    </div>
  )
}
