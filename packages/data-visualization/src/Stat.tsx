import * as React from 'react'
import { Box, Label, Flex, Grid } from '@kodiak-ui/primitives'
import { SxStyleProp } from '@kodiak-ui/core'

type Props = {
  value?: number
  label?: React.ReactNode
  icon?: React.ReactNode
  containerVariant?: string
  barVariant?: string
  sx?: SxStyleProp
  children?: React.ReactNode
} & React.ComponentPropsWithRef<typeof Box>

export function Stat({ value, label, children, icon, ...props }: Props) {
  return (
    <Grid
      __base={{
        borderRadius: 'default',
        border: '1px solid',
        borderColor: 'gray.2',
        alignItems: 'start',
        gridTemplateColumns: 'max-content auto',
        lineHeight: '16px',
        gap: '4',
        p: 4,
      }}
      variant="dataVisualization"
      variantKey="stats"
      {...props}
    >
      {icon && <Box>{icon}</Box>}
      <Flex sx={{ flexDirection: 'column' }}>
        <Label variant="stat">{label}</Label>
        <Box sx={{ fontWeight: 'bold', mt: 2, fontSize: 4 }}>{children}</Box>
      </Flex>
    </Grid>
  )
}
