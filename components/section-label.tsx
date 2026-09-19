export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-serif text-sm italic text-muted-foreground">
      <span aria-hidden="true" className="h-px w-6 bg-border" />
      {children}
    </span>
  )
}
