import { useState } from 'react';
import { Button } from '../../components';
import './styles.scss';

function DocumentStorageLocalScreen() {
  const options = [{
    id: '',
    value: '',
  }, {
    id: '1',
    value: 'Físico',
  }, {
    id: '2',
    value: 'Digital',
  }];
  const [selectedNature, setSelectedNature] = useState('');

  const handleNatureChange = (event) => {
    const { value } = event.target;
    setSelectedNature(value);
  };

  return (
    <div className="documentStorageLocalScreen">
      <div className="documentStorageContentContainer">

        <div className="selectInputContainer">
          <label htmlFor="documentNatureSelect">
            Natureza:
            <select name="documentNatureSelect" id="documentNatureSelect" className="documentNatureInteractive documentNatureSelect" value={selectedNature} onChange={handleNatureChange}>
              {options.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.value}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="documentNatureInput">
            Local:
            <input type="text" name="documentNatureInput" id="documentNatureInput" className="documentNatureInteractive documentNatureInput" />
          </label>
        </div>
        <div className="buttonLocalContainer">

          <Button buttonCustomClass="buttonDocLocalCustomClass" variant="primaryButton" text="Cadastrar" />
          <Button buttonCustomClass="buttonDocLocalCustomClass" variant="primaryButton" text="Cancelar" />
        </div>
      </div>
    </div>
  );
}

export default DocumentStorageLocalScreen;
