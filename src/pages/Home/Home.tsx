import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import { useCallback, useState } from 'react'
import PlayerCard from '../../components/PlayerCard/PlayerCard'
import PlayerControl from '../../components/PlayerControl/PlayerControl'
import PlayerDetail from '../../components/PlayerDetail/PlayerDetail'
import Title from '../../components/Title/Title'
import { ascSort, descSort } from '../../helpers/playerSorting'
import { Card } from '../../lib/Card'
import { playersData } from '../../mock/playersData'
import { TSinglePlayer } from '../../types/player'
import styles from './home.module.less'

const Home = () => {
	const [playerList, setPlayerList] = useState<TSinglePlayer[]>(playersData)
	const [playerDetail, setPlayerDetail] = useState<TSinglePlayer>()
	const [checkItem, setCheckedItem] = useState<boolean>(false)
	const handleAscSort = useCallback(() => {
		const sortList = [...playerList]
		sortList.sort(ascSort)
		setPlayerList(sortList)
	}, [playerList])

	const handleDescSort = useCallback(() => {
		const sortList = [...playerList]
		sortList.sort(descSort)
		setPlayerList(sortList)
	}, [playerList])

	const handleSelectedPlayer = useCallback(
		(player: TSinglePlayer) => {
			const updateList = [...playerList]
			const selected = updateList.map((item) => {
				if (item.id === player.id) {
					setPlayerDetail(player)
					return {
						...item,
						isSelected: !item.isSelected,
					}
				}
				return { ...item, isSelected: false }
			})
			const checkItemVisibilty = selected.some((item) => item.isSelected)
			setCheckedItem(checkItemVisibilty)
			setPlayerList(selected)
		},
		[playerList]
	)

	const handleSubmit = useCallback(() => {
		if (playerDetail && checkItem) {
			const randomId = Math.round(Math.random() * 100)
			playerDetail.id = randomId

			setPlayerList([...playerList, playerDetail])
		}
	}, [playerDetail])

	return (
		<Container>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				<Grid item xs={12}>
					<Card elevation={3} sx={{ textAlign: 'center' }}>
						<Title title='Card Game' />
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={8}>
					<Card className={styles.playerDetailCard} elevation={3}>
						{playerDetail && checkItem ? (
							<PlayerDetail playerDetail={playerDetail} />
						) : (
							<Typography className={styles.notFound} variant='h5'>
								Card is not selected yet!
							</Typography>
						)}
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={4}>
					<Card elevation={3}>
						<PlayerControl
							handleAscSort={handleAscSort}
							handleDescSort={handleDescSort}
							handleSubmit={handleSubmit}
						/>
					</Card>
				</Grid>

				<Grid item xs={12}>
					<Paper elevation={8} sx={{ p: 3 }}>
						<Title title={'Overview'} />

						<Box
							sx={{
								py: 2,
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								flexWrap: 'wrap',
								gap: 3,
							}}
						>
							{playerList.map((player, index) => {
								return (
									<PlayerCard
										key={`player-${index}`}
										player={player}
										handleSelected={handleSelectedPlayer}
									/>
								)
							})}
						</Box>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Home
