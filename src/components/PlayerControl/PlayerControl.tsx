import { Button } from '../../lib/Button'
import Title from '../Title/Title'
import styles from './playerControl.module.less'

type TPlayerControlProps = {
	handleAscSort: () => void
	handleDescSort: () => void
	handleSubmit: () => void
}
const PlayerControl = ({
	handleAscSort,
	handleDescSort,
	handleSubmit,
}: TPlayerControlProps) => {
	return (
		<div className={styles.playerControl}>
			<div className={styles.titleSection}>
				<Title title='Control' />
			</div>
			<div className={styles.btnSection}>
				<div className={styles.sortSection}>
					<Button variant='outlined' onClick={handleAscSort} sx={{ mr: 1 }}>
						SORT ASC
					</Button>
					<Button variant='outlined' onClick={handleDescSort}>
						SORT DESC
					</Button>
				</div>
				<Button
					variant='outlined'
					className={styles.submitBtn}
					onClick={handleSubmit}
				>
					SUBMIT
				</Button>
			</div>
		</div>
	)
}

export default PlayerControl
