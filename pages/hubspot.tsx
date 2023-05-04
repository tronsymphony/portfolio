import React, {useEffect} from "react";
export default function Hubspot() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src='https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
         //@ts-ignore
        if (window.hbspt) {
             //@ts-ignore
            window.hbspt.forms.create({
                portalId: '39667540',
                formId: 'cacaad0d-e319-4342-a8ab-d9ea34333a74',
                target: '#hubspotForm'
            })
        }
    });
}, []);
  return (
    <>
        <div id="hubspotForm"></div>
    </>
  );
}
