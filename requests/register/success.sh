#!/bin/bash
echo "Registro bem-sucedido:"
curl -X POST https://atividade-iv-v1-1mc1sbcom-yanchagas04s-projects.vercel.app/api/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
