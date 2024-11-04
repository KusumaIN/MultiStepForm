// // src/components/MultiStepForm.js
// import React, { useState } from 'react';
// import Step1 from './Step1';
// import Step2 from './Step2';
// import Step3 from './Step3';
// import Step4 from './Step4';
// import Step5 from './Step5';
// import Step6 from './Step6';

// const MultiStepForm = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     customer: '',
//     propertyType: '',
//     requirement: '',
//     detailedRequirement: '',
//     minPrice: '',
//     maxPrice: '',
//     timeline: '',
//     city: '',
//     area: '',
//   });

//   const nextStep = () => setStep((prev) => Math.min(prev + 1, 6));
//   const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

//   // Define handleChange function
//   const handleChange = (input) => (e) => {
//     setFormData({ ...formData, [input]: e.target.value });
//   };

//   switch (step) {
//     case 1:
//       return <Step1 nextStep={nextStep} handleChange={handleChange} values={formData} />;
//     case 2:
//       return <Step2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
//     case 3:
//       return <Step3 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
//     case 4:
//       return <Step4 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
//     case 5:
//       return <Step5 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
//     case 6:
//       return <Step6 prevStep={prevStep} values={formData} />;
//     default:
//       return null;
//   }
// };

// export default MultiStepForm;
