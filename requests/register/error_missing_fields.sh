#!/bin/bash
echo "Erro: Campos faltando"
curl -X POST http://localhost:3000/api/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe"
  }'
