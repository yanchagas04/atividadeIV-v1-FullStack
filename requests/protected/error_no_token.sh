#!/bin/bash
echo "Erro: Nenhum token fornecido"
curl -X GET http://localhost:3000/api/protected
