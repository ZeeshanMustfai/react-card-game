import { Card } from '../../lib/Card'
import styles from './playerCard.module.less'
import PlayerInfo from '../PlayerInfo'
import { TSinglePlayer } from '../../types/player'

type TPlayerCardProps = {
	player: TSinglePlayer
	handleSelected: (arg1: TSinglePlayer) => void
}
const PlayerCard = ({ player, handleSelected }: TPlayerCardProps) => {
	const handleSelectedPlayer = (player: TSinglePlayer) => {
		handleSelected(player)
	}
	const { isSelected } = player
	return (
		<Card
			className={isSelected ? styles.selectedPlayerCard : styles.playerCard}
			elevation={6}
			sx={{ p: 3 }}
			onClick={() => handleSelectedPlayer(player)}
		>
			<PlayerInfo playerInfo={player} />
		</Card>
	)
}

export default PlayerCard
