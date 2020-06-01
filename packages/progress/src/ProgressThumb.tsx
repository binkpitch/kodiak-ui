import * as React from 'react'
import { Box } from '@kodiak-ui/primitives'
import { useMeasure } from '@kodiak-ui/hooks'
import { VariantProps, SxStyleProp } from '@kodiak-ui/core'

type ProgressThumbProps = {
  value: number
  min?: number
  max?: number
  sx?: SxStyleProp
  children?: React.ReactNode
} & VariantProps

export function ProgressThumb({
  value,
  min,
  max,
  variant = 'thumb',
  variantKey = 'progresses',
  children,
  ...props
}: ProgressThumbProps) {
  const [bind, { width }] = useMeasure<HTMLDivElement>()

  return (
    <Box
      {...bind}
      __base={{
        bg: 'white',
        border: '1px solid',
        borderColor: 'muted',
        borderRadius: 'default',
        left:
          value === min
            ? 0
            : value === max
            ? 'auto'
            : `calc(100% - ${width / 2}px)`,
        lineHeight: 1,
        p: 2,
        position: 'absolute',
        right: value === max ? '0' : 'auto',
        top: '50%',
        transform: 'translateY(-50%)',
      }}
      variant={variant}
      variantKey={variantKey}
      {...props}
    >
      {children ? children : value}
    </Box>
  )
}