import TicTacToe from '@/components/TicTacToe'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Tic Tac Toe Game
        </h1>
        <TicTacToe />
      </div>
    </div>
  );
}
