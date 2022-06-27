import React from 'react';
import { Grass } from './GameElements/Grass';
import { House } from './GameElements/House';
import { Player } from './GameElements/Player';

const DisplayGame = ({ gameState }) => {
	const renderGame = (gameCell, index) => {
		if (gameCell.length === 0) {
			return (
				<div
					key={Math.random()}
					index={index}
					className='border border-slate-100'
				></div>
			);
		}
		if (gameCell.includes('player')) {
			return <Player keyProp={Math.random()}></Player>;
		}
		if (gameCell.includes('grass')) {
			return <Grass keyProp={Math.random()}></Grass>;
		}
	};

	return (
		<div className='displayGame h-[90%] bg-amber-50'>
			{gameState.map((cell, index) => renderGame(cell, index))}
		</div>
	);
};

export default DisplayGame;
