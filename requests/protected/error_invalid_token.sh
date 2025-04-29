#!/bin/bash
echo "Erro: Token inválido"
curl -X GET http://localhost:3000/api/protected \
  -H "Authorization: Bearer invalidtoken123"
