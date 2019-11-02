import React from 'react';
import XLSX from 'xlsx';

const Converter = () => {
  const convertFile = event => {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
      const result = event.target.result;
      const workbook = XLSX.read(result, {
        type: 'binary'
      });

      const data = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[workbook.SheetNames[0]]);

      console.log(data);
    };

    reader.onerror = function(event) {
      console.error("File could not be read! Code " + event.target.error.code);
    };

    reader.readAsBinaryString(selectedFile);
  };

  return (
    <label>
      Загрузи Excel (json смотреть в консоли);
      <br/>
      <input type="file" onChange={convertFile} />
    </label>
  );
};

export default Converter;
