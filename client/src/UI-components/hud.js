import IncrementButton from './increment-button.js'
import images from '../config/images.js'
const { imgs, imgAlts } = images

const Hud = (props) => {
  return (
    <>

      <div id='hud'>
        <div className='workers-strip'>
          Workers: {props.kingdomStats.workersReserve}/{props.kingdomStats.workersTotal}
        </div>

        <div className='resource-strip'>
          <span className='resource-quantity'>food: {props.kingdomStats.food}</span>
          <span className='worker-allocation'>
            <img src={imgs.foodIcon} alt={imgAlts.foodIcon} /> {props.kingdomStats.foodProduction}
            <IncrementButton clickFunction={props.buttonFunctions.incrementWorkerAssignment} increments catagory='foodProduction' />
            <IncrementButton clickFunction={props.buttonFunctions.incrementWorkerAssignment} increments={false} catagory='foodProduction' />
          </span>
        </div>

        <div className='resource-strip'>
          <span className='resource-quantity'>wood: {props.kingdomStats.wood}</span>
          <span className='worker-allocation'>
            <img src={imgs.woodIcon} alt={imgAlts.woodIcon} />  {props.kingdomStats.woodProduction}
            <IncrementButton clickFunction={props.buttonFunctions.incrementWorkerAssignment} increments catagory='woodProduction' />
            <IncrementButton clickFunction={props.buttonFunctions.incrementWorkerAssignment} increments={false} catagory='woodProduction' />
          </span>
        </div>

        <div className='resource-strip'>
          <span className='resource-quantity'>stone: {props.kingdomStats.stone}</span>
          <span className='worker-allocation'>
            <img src={imgs.stoneIcon} alt={imgAlts.stoneIcon} />  {props.kingdomStats.stoneProduction}
            <IncrementButton clickFunction={props.buttonFunctions.incrementWorkerAssignment} increments catagory='stoneProduction' />
            <IncrementButton clickFunction={props.buttonFunctions.incrementWorkerAssignment} increments={false} catagory='stoneProduction' />
          </span>
        </div>

        <div className='resource-strip'>
          <span className='resource-quantity'>gold: {props.kingdomStats.gold}</span>
          <span className='worker-allocation'>
            <img src={imgs.goldIcon} alt={imgAlts.goldIcon} />  {props.kingdomStats.goldProduction}
            <IncrementButton clickFunction={props.buttonFunctions.incrementWorkerAssignment} increments catagory='goldProduction' />
            <IncrementButton clickFunction={props.buttonFunctions.incrementWorkerAssignment} increments={false} catagory='goldProduction' />
          </span>
        </div>

        <div id='end-turn'>
          <button onClick={props.buttonFunctions.handleEndTurn}>End Turn</button>
        </div>
        <div id='new-game'>
          <button onClick={props.buttonFunctions.handleMakeNewGame}>New Game</button>
        </div>
        <div id='player-select'>
          <select onChange={(e) => {
            props.buttonFunctions.switchUsers(e.target.value)
          }}
          >
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
  )
}

export default Hud
