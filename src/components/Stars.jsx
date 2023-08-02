import '../components/Stars.scss'

const Stars = ({ n }) => {
    const stars = Array.from({ length: n }, (_, index) => <span key={index}>★</span>);
    const whitestars = Array.from({ length: 5 - n }, (_, index) => <span key={index}>☆</span>);
    return (
      <div className='Stars'>
        {stars}
        {whitestars}
      </div>
    );
};

export default Stars;