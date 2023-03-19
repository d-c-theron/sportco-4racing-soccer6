import React, { useEffect, useState } from "react";
import FormGuide from "./FormGuide";

const FormGuidePage = () => {
  const [FormGuides, setFormGuides] = useState([]);

  useEffect(() => {
    (async () => {
      const loadFormGuides = async () => {
        const form_guides = (await (await fetch(`/api/GetFormGuides`)).json()).value;
        const temp = [];
        for (const form_guide of form_guides) {
          temp.push(form_guide);
        }
        setFormGuides(temp);
      };
      loadFormGuides();
    })();
  }, []);

  return (
    <div className="row second">
      <div className="large-12 columns">
        <h1>Form Guides - Head 2 Head</h1>
        {FormGuides.map((item) => (
          <FormGuide key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FormGuidePage;
