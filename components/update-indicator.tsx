interface UpdateIndicatorProps {
  lastUpdateAt: string
}

export function UpdateIndicator({ lastUpdateAt }: UpdateIndicatorProps) {
  return (
    <div className="w-fit p-6">
      <p className="text-white font-mono text-xs">
        최근 업데이트:{" "}
        <time dateTime={lastUpdateAt.replaceAll(".", "-")}>{lastUpdateAt}</time>
      </p>
    </div>
  )
}
