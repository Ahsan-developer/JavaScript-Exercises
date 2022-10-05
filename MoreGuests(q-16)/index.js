const invitationMessage =
  "Sending you my heartiest invitation to join this dinner party. your presence is all that's needed to make this party a memorable one oct 12,2022 @8 o clock."
const friends = ['Noman', 'Arslan', 'Kamran', 'Umair Seed', 'Umer idress']

friends.map((friend) => {
  console.log(`Hi ${friend}: \n ${invitationMessage}\n`)
})

console.log("kamran can't make it\n")

console.log('updating Guest List \n')

let index = friends.findIndex((friend) => {
  return friend === 'Kamran'
})
friends[index] = 'Aamir'

friends.map((friend) => {
  console.log(`Hi ${friend}: \n ${invitationMessage}\n`)
})

console.log(
  'Hi Friends,\n I found a bigger dinner table so let invite more friends\n',
)

let newInviteFriends = ['Essa', 'Ibrahim', 'Usman']

friends.splice(0, 0, newInviteFriends[0])
friends.splice(parseInt(friends.length / 2), 0, newInviteFriends[1])
friends.push(newInviteFriends[2])

console.log('updating new guest after found a bigger dinner table')

friends.map((friend) => {
  console.log(`Hi ${friend}: \n ${invitationMessage}\n`)
})
