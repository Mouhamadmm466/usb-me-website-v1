import { cn } from '@/lib/utils'

/** A plain small marker. The reference carries no rule beside it. */
export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <span className={cn('label', className)}>{children}</span>
}
