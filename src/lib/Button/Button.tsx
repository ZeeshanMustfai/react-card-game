import { Button as MuiButton, ButtonProps } from '@mui/material'

type TButtonProps = ButtonProps

export enum ButtonTypes {
	default = 'default',
	primary = 'primary',
	ghost = 'ghost',
	dashed = 'dashed',
	link = 'link',
	text = 'text',
}

export const Button = (props: TButtonProps) => {
	return <MuiButton {...props} />
}
