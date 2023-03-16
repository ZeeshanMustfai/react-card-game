type TSort = {
  realName: string
  playerName: string
}
export const ascSort = (a: TSort, b: TSort) => {
  if (a.realName > b.realName) return 1
  if (a.realName < b.realName) return -1

  return 0
}

export const descSort = (a: TSort, b: TSort) => {
  if (a.realName > b.realName) return -1
  if (a.realName < b.realName) return 1

  return 0
}
