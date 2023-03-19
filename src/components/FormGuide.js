import React from "react";

const FormGuide = ({ item }) => {
  return (
    <div>
      <div class="large-4 columns formguide">
        <div className="formguideheader" style={{ backgroundColor: "#001489" }}>
          <a target="_blank" rel="noopener noreferrer" href={item.url}>
            {item.PartitionKey}
          </a>
        </div>
        <div class="panel">
          <a target="_blank" rel="noopener noreferrer" href={item.url}>
            <img src="/images/pdf.png" />
          </a>
          <p>
            <a target="_blank" rel="noopener noreferrer" href={item.url}>
              PDF
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormGuide;
