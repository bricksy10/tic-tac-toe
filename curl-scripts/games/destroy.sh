curl "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \

echo
