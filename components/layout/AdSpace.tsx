type AdSpaceProps = {
  size: 'banner' | 'sidebar' | 'bottom'
  className?: string
}

export default function AdSpace({ size, className = '' }: AdSpaceProps) {
  const sizes = {
    banner: {
      height: 'h-24',
      label: '728 x 90',
      description: 'Advertisement Space',
    },
    sidebar: {
      height: 'h-[600px]',
      label: '160 x 600',
      description: 'Ad Space',
    },
    bottom: {
      height: 'h-32',
      label: '728 x 90 or 970 x 90',
      description: 'Advertisement Space',
    },
  }

  const config = sizes[size]

  return (
    <div
      className={`${config.height} bg-white rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center ${className}`}
    >
      <div className="text-center">
        <p className="text-sm font-medium text-gray-400">{config.description}</p>
        <p className="text-xs text-gray-300 mt-1">{config.label}</p>
      </div>
    </div>
  )
}


