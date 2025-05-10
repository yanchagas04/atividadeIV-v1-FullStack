curl --request PUT \
  --url http://localhost:3000/api/filmes/ce3d05e0-570f-4247-8fc0-1583ae1b6cf8 \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWUxMWZkYmUwYzA4NTQxN2EwMGI0YSIsIm5hbWUiOiJKb2huIERvZSIsImVtYWlsIjoiam9obkBleGFtcGxlLmNvbSIsImlhdCI6MTc0NjgwMTMyMCwiZXhwIjoxNzQ5MzkzMzIwfQ.dbU8nTsNXfnF3OBPO-uxs31VFAVvSyTqJhZX2CyuS-s' \
  --header 'Content-Type: application/json' \
  --data '{
	"title": "Os 3 Cavaleiros",
	"description": "No description",
	"watched": true
}'