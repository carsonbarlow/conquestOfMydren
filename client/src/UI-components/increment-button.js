
const IncrementButton = ({ clickFunction, increments, catagory }) => {
    const buttonClick = () => {
        clickFunction(catagory, increments);
    };

    return (
        <button onClick={buttonClick}>{increments ? '+' : '-'}</button>
    );
};


export default IncrementButton;
