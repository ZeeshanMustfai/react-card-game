import { TSinglePlayer } from '../../types/player'
import PlayerInfo from '../PlayerInfo'
import Title from '../Title/Title'
import styles from './playerDetail.module.less'

interface TPlayerDetailProp {
	playerDetail: TSinglePlayer
}
const PlayerDetail = ({ playerDetail }: TPlayerDetailProp) => {
	return (
		<div className={styles.playerDetail}>
			<Title title='Details' />
			<div className='player-section'>
				<PlayerInfo playerInfo={playerDetail} />
			</div>
		</div>
	)
}

export default PlayerDetail
