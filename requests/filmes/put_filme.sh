curl --request PUT \
  --url https://atividade-iv-v1-full-stack-six.vercel.app/api/filmes/1eac2442-b624-4d89-a61a-ec5132a7c860 \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWUxMWZkYmUwYzA4NTQxN2EwMGI0YSIsIm5hbWUiOiJKb2huIERvZSIsImVtYWlsIjoiam9obkBleGFtcGxlLmNvbSIsImlhdCI6MTc0NjgwMTMyMCwiZXhwIjoxNzQ5MzkzMzIwfQ.dbU8nTsNXfnF3OBPO-uxs31VFAVvSyTqJhZX2CyuS-s' \
  --header 'Content-Type: application/json' \
  --data '{
	"title": "Os 3 Cavaleiros do apocalipse",
	"description": "No description",
	"watched": true
}'