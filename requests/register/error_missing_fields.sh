#!/bin/bash
echo "Erro: Campos faltando"
curl -X POST https://atividade-iv-v1-full-stack-six.vercel.app/api/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe"
  }'
