import { useState, useMemo } from 'react';

import DisplayGame from './Components/DisplayGame.components';
import DisplayMessage from './Components/DisplayMessage.components';

function App() {
	const initialGameState = useMemo(() => {
		const initialArray = Array(130).fill([]);

		initialArray[123] = ['player'];
		initialArray[14] = ['grass'];
		initialArray[15] = ['grass'];
		initialArray[16] = ['grass'];
		initialArray[17] = ['grass'];
		initialArray[18] = ['grass'];
		initialArray[27] = ['grass'];
		initialArray[28] = ['grass'];
		initialArray[29] = ['grass'];
		initialArray[30] = ['grass'];
		initialArray[31] = ['grass'];
		return initialArray;
	});

	const [gameState, setGameState] = useState(initialGameState);

	const movePlayer = e => {
		const playerPosition = gameState.findIndex(cell => cell.includes('player'));
		console.log(playerPosition);
		const gameStateCopy = JSON.parse(JSON.stringify(gameState));

		switch (e.key) {
			case 'ArrowUp':
				gameStateCopy[playerPosition - 13] = ['player'];
				gameStateCopy[playerPosition] = [];
				break;
			case 'ArrowDown':
				gameStateCopy[playerPosition + 13] = ['player'];
				gameStateCopy[playerPosition] = [];
				break;
			case 'ArrowRight':
				gameStateCopy[playerPosition + 1] = ['player'];
				gameStateCopy[playerPosition] = [];
				break;
			case 'ArrowLeft':
				gameStateCopy[playerPosition - 1] = ['player'];
				gameStateCopy[playerPosition] = [];
				break;

			default:
				break;
		}

		setGameState(gameStateCopy);
	};

	return (
		<div
			className='App w-4/5 h-4/5 flex flex-col gap-2 p-2 bg-slate-300'
			onKeyDown={movePlayer}
			tabIndex={0}
		>
			<DisplayMessage></DisplayMessage>
			<DisplayGame gameState={gameState}></DisplayGame>
		</div>
	);
}

export default App;
