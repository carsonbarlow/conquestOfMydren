import IncrementButton from './increment-button.js';
import images from '../config/images.js';
const { imgs, img_alts } = images;


const Hud = (props) => {
    
    return (
        <>
            
            <div id='hud'>
                <div className='workers-strip'>
                    Workers: {props.kingdomStats.workers_reserve}/{props.kingdomStats.workers_total}
                </div>

                <div className='resource-strip'>
                    <span className='resource-quantity'>food: {props.kingdomStats.food}</span>
                    <span className='worker-allocation'>
                        <img src={imgs.food_icon} alt={img_alts.food_icon} /> {props.kingdomStats.food_production}
                        <IncrementButton clickFunction={props.buttonFunctions.incrementWorkerAssignment} increments={true} catagory='food_production' />
                        <IncrementButton clickFunction={props.buttonFunctions.incrementWorkerAssignment} increments={false} catagory='food_production' />
                    </span>
                </div>

                <div className='resource-strip'>
                    <span className='resource-quantity'>wood: {props.kingdomStats.wood}</span>
                    <span className='worker-allocation'>
                        <img src={imgs.wood_icon} alt={img_alts.wood_icon} />  {props.kingdomStats.wood_production}
                        <IncrementButton clickFunction={props.buttonFunctions.incrementWorkerAssignment} increments={true} catagory='wood_production' />
                        <IncrementButton clickFunction={props.buttonFunctions.incrementWorkerAssignment} increments={false} catagory='wood_production' />
                    </span>
                </div>

                <div className='resource-strip'>
                    <span className='resource-quantity'>stone: {props.kingdomStats.stone}</span>
                    <span className='worker-allocation'>
                        <img src={imgs.stone_icon} alt={img_alts.stone_icon} />  {props.kingdomStats.stone_production}
                        <IncrementButton clickFunction={props.buttonFunctions.incrementWorkerAssignment} increments={true} catagory='stone_production' />
                        <IncrementButton clickFunction={props.buttonFunctions.incrementWorkerAssignment} increments={false} catagory='stone_production' />
                    </span>
                </div>

                <div className='resource-strip'>
                    <span className='resource-quantity'>gold: {props.kingdomStats.gold}</span>
                    <span className='worker-allocation'>
                        <img src={imgs.gold_icon} alt={img_alts.gold_icon} />  {props.kingdomStats.gold_production}
                        <IncrementButton clickFunction={props.buttonFunctions.incrementWorkerAssignment} increments={true} catagory='gold_production' />
                        <IncrementButton clickFunction={props.buttonFunctions.incrementWorkerAssignment} increments={false} catagory='gold_production' />
                    </span>
                </div>

                <div id='end-turn'>
                    <button onClick={props.buttonFunctions.endTurn} >End Turn</button>
                </div>
                <div id='new-game'>
                    <button onClick={props.buttonFunctions.makeNewGame} >New Game</button>
                </div>
                <div id='player-select'>
                    <select onChange={(e) => {
                        props.buttonFunctions.switchUsers(e.target.value);
                    }}>
                        <option value='0'>Ignatius</option>
                        <option value='1'>Taranis</option>
                        <option value='2'>Lucasta</option>
                        <option value='3'>Glyndwr</option>
                        <option value='4'>Demeter</option>
                        <option value='5'>Melanthios</option>
                    </select>
                </div>

            </div>
        </>
    );

};


export default Hud;
