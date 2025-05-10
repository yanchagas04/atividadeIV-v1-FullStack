curl --request POST \
  --url http://localhost:3000/api/filmes \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWUxMWZkYmUwYzA4NTQxN2EwMGI0YSIsIm5hbWUiOiJKb2huIERvZSIsImVtYWlsIjoiam9obkBleGFtcGxlLmNvbSIsImlhdCI6MTc0NjgwMTMyMCwiZXhwIjoxNzQ5MzkzMzIwfQ.dbU8nTsNXfnF3OBPO-uxs31VFAVvSyTqJhZX2CyuS-s' \
  --header 'Content-Type: application/json' \
  --data '{
	"title": "Os 3 Cavaleiros",
	"description": "Filme sobre os 3 cavaleiros e sua história de superação contra o Rei Louco"
}'