
import images from '../config/images.js';
const { imgs, img_alts } = images;


const getLeftPosition = (id) => {
    switch (id) {
        case 4:
        case 9:
        case 14:
            return '0px';
        case 2:
        case 7:
        case 12:
        case 17:
            return '130px';
        case 1:
        case 5:
        case 10:
        case 15:
        case 19:
            return '260px';
        case 3:
        case 8:
        case 13:
        case 18:
            return '390px';
        default:
            return '520px';
    };
}

const getTopPosition = (id) => {
    switch (id) {
        case 1:
            return '0px';
        case 2:
        case 3:
            return '75px';
        case 4:
        case 5:
        case 6:
            return '150px';
        case 7:
        case 8:
            return '225px';
        case 9:
        case 10:
        case 11:
            return '300px';
        case 12:
        case 13:
            return '375px';
        case 14:
        case 15:
        case 16:
            return '450px';
        case 17:
        case 18:
            return '525px';
        default:
            return '600px';
    }
};

const Territory = (props) => {

    const { stat_id, position } = props.stats;
    const position_left = getLeftPosition(position);
    const position_top = getTopPosition(position);

    return (
        <>
            <img src={imgs[`territory_${stat_id}`]} alt={img_alts[`territory_${stat_id}`]} className='territory_img' style={{ left: position_left, top: position_top }} />
        </>
    );
}


export default Territory;
