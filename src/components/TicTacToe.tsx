'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type Player = 'X' | 'O' | null

export default function TicTacToe() {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X')
  const [winner, setWinner] = useState<Player | 'tie'>(null)

  const checkWinner = (squares: Player[]): Player | 'tie' | null => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }

    if (squares.every(square => square !== null)) {
      return 'tie'
    }

    return null
  }

  const handleClick = (index: number) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = currentPlayer
    setBoard(newBoard)

    const gameWinner = checkWinner(newBoard)
    if (gameWinner) {
      setWinner(gameWinner)
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setCurrentPlayer('X')
    setWinner(null)
  }

  const getStatus = () => {
    if (winner === 'tie') return "It's a tie!"
    if (winner) return `Player ${winner} wins!`
    return `Player ${currentPlayer}'s turn`
  }

  return (
    <Card className="w-96 mx-auto mt-8">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">
          Tic Tac Toe
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center text-lg font-semibold">
          {getStatus()}
        </div>
        
        <div className="grid grid-cols-3 gap-2 mx-auto w-60">
          {board.map((cell, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-20 w-20 text-2xl font-bold"
              onClick={() => handleClick(index)}
              disabled={!!cell || !!winner}
            >
              {cell}
            </Button>
          ))}
        </div>

        <div className="flex justify-center">
          <Button onClick={resetGame} className="mt-4">
            New Game
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}