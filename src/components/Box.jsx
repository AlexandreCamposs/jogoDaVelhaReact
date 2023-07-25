import styles from './Box.css';

const Box = ({ clickBox, value }) => {
  return (
    <div className="box" onClick={clickBox}>
      {value}
    </div>
  );
};

export default Box;
