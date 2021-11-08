
import Territory from '../game-components/territory.js';


const Board = ({ territories }) => {
    return (
        <>
            <div id='game_board'>
                {territories.map((territory) => <Territory stats={territory} key={territory.id} />)}
            </div>
        
        </>
        );
};


export default Board;
