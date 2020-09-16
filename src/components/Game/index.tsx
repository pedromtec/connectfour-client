import React from 'react'
import Board from '../Grid'
import { Button } from '@material-ui/core'
import * as S from './styled'
import GameContext from '../../GameContext'
import HeaderStatus from '../HeaderStatus'
import Menu from '../Menu'
const { useGameContext } = GameContext

const Game = () => {
  const { gameState, startGame, restartGame } = useGameContext()

  return (
    <S.GameContainer>
      {gameState.status === 'NOT_INITIALIZED' && <Menu startGame={startGame} />}
      <S.GameWrapper>
        <HeaderStatus
          player={gameState.currentPlayer}
          isAgentProcessing={gameState.isAgentProcessing}
        />

        <Board grid={gameState.board} />
        <S.ButtonWrapper>
          <Button
            fullWidth={true}
            variant="contained"
            color="primary"
            onClick={restartGame}
          >
            {gameState.status === 'FINISHED' ? 'New game' : 'Restart'}
          </Button>
        </S.ButtonWrapper>
      </S.GameWrapper>
    </S.GameContainer>
  )
}

export default Game
