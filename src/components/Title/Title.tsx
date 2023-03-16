import { Typography } from '@mui/material'

// type TVariant = 'body1' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type TTitleProps = {
  title: string
}

const Title = ({ title }: TTitleProps) => {
  return (
    <Typography variant={'h3'} fontWeight={600}>
      {title}
    </Typography>
  )
}

export default Title
