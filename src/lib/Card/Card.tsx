import { Card as MuiCard, CardProps } from '@mui/material'

type TMuiCardProps = CardProps
export const Card = (props: TMuiCardProps) => {
  return <MuiCard {...props} />
}
