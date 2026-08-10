@echo off
setlocal
cd /d "%~dp0"
title Landing Page Dr Antonio - Projeto Atual (porta 5174)

echo =====================================================
echo PROJETO ATUAL: %CD%
echo ENDERECO: http://localhost:5174
echo =====================================================
echo.
echo Este comando usa outra porta para nao abrir um servidor antigo.
echo Mantenha esta janela aberta enquanto estiver editando o site.
echo.

call npm run dev -- --force --host 0.0.0.0 --port 5174

echo.
echo O servidor foi encerrado.
pause
