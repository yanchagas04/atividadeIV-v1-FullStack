#!/bin/bash
echo "Acesso bem-sucedido à rota protegida:"
TOKEN=$(curl -s -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }' | jq -r '.token')

curl -X GET http://localhost:3000/api/protected \
  -H "Authorization: Bearer $TOKEN"
