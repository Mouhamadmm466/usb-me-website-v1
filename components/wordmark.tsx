import { cn } from '@/lib/utils'

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span
        aria-hidden="true"
        className="relative inline-flex h-5 w-5 items-center justify-center"
      >
        <span className="absolute inset-0 rounded-full border border-foreground/60" />
        <span className="absolute inset-[3px] rounded-full border border-primary/50" />
        <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_1px_var(--sky)]" />
      </span>
      <span className="font-serif text-[1.35rem] leading-none tracking-tight">
        Kin
      </span>
    </span>
  )
}
