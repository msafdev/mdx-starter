import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <article className="relative z-0 py-32">
      <div className="container z-0 flex flex-col items-center">
        <div className="max-w-xl w-full">
          <div className="mb-6 flex flex-col items-center">
            <Skeleton className="h-10 w-1/2 rounded-lg" />
          </div>

          <div className="mb-6 flex items-center justify-center gap-3">
            <Skeleton className="h-10 w-10 rounded-md" />
            <div className="flex flex-col gap-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>

          <div className="relative aspect-video rounded-[20px] border bg-muted p-2">
            <div className="relative h-full w-full overflow-hidden rounded-[12px] bg-muted">
              <Skeleton className="h-full w-full" />
            </div>
          </div>

          <div className="mb-8 mt-4 flex flex-wrap items-center justify-center gap-2">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-14 rounded-full" />
          </div>

          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-32 w-full rounded-lg" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      </div>
    </article>
  )
}
