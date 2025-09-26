import type { ReactNode } from "react"

interface TerminalBlockProps {
  title: string
  label: string
  headerColorClass: string
  labelColorClass: string
  children: ReactNode
}

export function TerminalBlock({ title, label, headerColorClass, labelColorClass, children }: TerminalBlockProps) {
  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-900 border border-green-400 rounded-lg overflow-hidden shadow-lg">
      {/* Terminal Header */}
      <div className={`${headerColorClass} px-4 py-2 flex items-center justify-between`}>
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-white font-mono text-sm">{title}</span>
        </div>
        <div className={`${labelColorClass} px-2 py-1 rounded text-xs font-bold text-white`}>{label}</div>
      </div>

      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm space-y-4">{children}</div>
    </div>
  )
}
