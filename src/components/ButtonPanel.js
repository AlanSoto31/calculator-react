import PropTypes from 'prop-types';
import Button from './Button';
import '../CSS/styles.css';

const ButtonPanel = ({ clickHandler1 }) => {
  const group1 = ['AC', '+/-', '%', '÷'];
  const group2 = ['7', '8', '9', 'x'];
  const group3 = ['4', '5', '6', '-'];
  const group4 = ['1', '2', '3', '+'];
  const group5 = ['0', '.', '='];

  const elementsGroup1 = group1.map((item) => (
    <Button
      key={item}
      name={item}
      clickHandler2={(buttonName) => clickHandler1(buttonName)}
      color={item === '÷' ? '#F5913E' : '#E0E0E0 '}
      wide={false}
    />
  ));

  const elementsGroup2 = group2.map((item) => (
    <Button
      key={item}
      name={item}
      clickHandler2={(buttonName) => clickHandler1(buttonName)}
      color={item === 'x' ? '#F5913E' : '#E0E0E0 '}
      wide={false}
    />
  ));

  const elementsGroup3 = group3.map((item) => (
    <Button
      key={item}
      name={item}
      clickHandler2={(buttonName) => clickHandler1(buttonName)}
      color={item === '-' ? '#F5913E' : '#E0E0E0 '}
      wide={false}
    />
  ));

  const elementsGroup4 = group4.map((item) => (
    <Button
      key={item}
      name={item}
      clickHandler2={(buttonName) => clickHandler1(buttonName)}
      color={item === '+' ? '#F5913E' : '#E0E0E0 '}
      wide={false}
    />
  ));

  const elementsGroup5 = group5.map((item) => (
    <Button
      key={item}
      name={item}
      clickHandler2={(buttonName) => clickHandler1(buttonName)}
      color={item === '=' ? '#F5913E' : '#E0E0E0 '}
      wide={item === '0'}
    />
  ));

  return (
    <div className="flex-c-c">
      <div className="row-cont group-1 flex-sb-c">
        {elementsGroup1}
      </div>
      <div className="row-cont group-2 flex-sb-c">
        {elementsGroup2}
      </div>
      <div className="row-cont group-3 flex-sb-c">
        {elementsGroup3}
      </div>
      <div className="row-cont group-4 flex-sb-c">
        {elementsGroup4}
      </div>
      <div className="row-cont group-5 flex-sb-c">
        {elementsGroup5}
      </div>
    </div>
  );
};
ButtonPanel.propTypes = { clickHandler1: PropTypes.func.isRequired };

export default ButtonPanel;
