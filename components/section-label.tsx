import { cn } from '@/lib/utils'

/** Section marker: a short sentence-case name seated on the left rail. */
export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-3 text-[13px] text-muted-foreground',
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-8 bg-signal" />
      {children}
    </span>
  )
}
