#!/bin/bash
echo "Erro: Campos faltando"
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com"
  }'
