import { Typography } from '@mui/material'
import { TSinglePlayer } from '../../types/player'

type TPlayerInfo = {
	playerInfo: TSinglePlayer
}
const PlayerInfo = ({ playerInfo }: TPlayerInfo) => {
	const { realName, playerName, asset } = playerInfo
	return (
		<>
			<Typography variant='h6'>Real Name</Typography>
			<Typography variant='body2' gutterBottom>
				{realName}
			</Typography>
			<Typography variant='h6'>Player Name</Typography>
			<Typography variant='body2' gutterBottom>
				{playerName}
			</Typography>
			<Typography variant='h6'>Asset</Typography>
			<Typography variant='body2' gutterBottom>
				{asset}
			</Typography>
		</>
	)
}

export default PlayerInfo
