import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler1 }) => {
  const group1 = ['AC', '+/-', '%', '÷'];
  const group2 = ['2', '8', '9', 'x'];
  const group3 = ['4', '5', '6', '-'];
  const group4 = ['1', '2', '3', '+'];
  const group5 = ['0', '.-', '='];

  const elementsGroup1 = group1.map((item) => (
    <Button
      key={item}
      name={item}
      clickHandler2={(buttonName) => clickHandler1(buttonName)}
    />
  ));

  const elementsGroup2 = group2.map((item) => (
    <Button
      key={item}
      name={item}
      clickHandler2={(buttonName) => clickHandler1(buttonName)}
    />
  ));

  const elementsGroup3 = group3.map((item) => (
    <Button
      key={item}
      name={item}
      clickHandler2={(buttonName) => clickHandler1(buttonName)}
    />
  ));

  const elementsGroup4 = group4.map((item) => (
    <Button
      key={item}
      name={item}
      clickHandler2={(buttonName) => clickHandler1(buttonName)}
    />
  ));

  const elementsGroup5 = group5.map((item) => (
    <Button
      key={item}
      name={item}
      clickHandler2={(buttonName) => clickHandler1(buttonName)}
    />
  ));

  return (
    <div>
      <div className="group-1">
        {elementsGroup1}
      </div>
      <div className="group-2">
        {elementsGroup2}
      </div>
      <div className="group-3">
        {elementsGroup3}
      </div>
      <div className="group-4">
        {elementsGroup4}
      </div>
      <div className="group-5">
        {elementsGroup5}
      </div>
    </div>
  );
};
ButtonPanel.propTypes = { clickHandler1: PropTypes.func.isRequired };

export default ButtonPanel;
