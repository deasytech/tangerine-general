'use client';

import React, { useState } from 'react';
import { ProgressBar } from '@/components/ProgressBar';
import MakeClaimPersonalForm from '@/components/general/forms/make-claim-personal-form';
import MakeClaimParticularsForm from '@/components/general/forms/make-claim-particulars-form';
import MakeClaimInsuredForm from '@/components/general/forms/make-claim-insured-form';
import MakeClaimDamageForm from '@/components/general/forms/make-claim-damage-form';
import MakeClaimThirdpartyForm from '@/components/general/forms/make-claim-thirdparty-form';
import MakeClaimDeclarationForm from './forms/make-claim-declaration-form';

const ClaimFormContainer = () => {
  const [ step, setStep ] = useState(1);

  const handleNextStep = () => {
    if (step < 6) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="text-center mb-12 mt-6">
      <p className="text-base font-gilroy-semibold text-orange-base">
        {step === 1 && "Personal Information"}
        {step === 2 && "Vehicle Insured"}
        {step === 3 && "Particular of Accident"}
        {step === 4 && "Damage to the insured vehicle"}
        {step === 5 && "Third Party Information"}
        {step === 6 && "Declaration"}
      </p>
      <div className="max-w-sm mx-auto mt-2 mb-10">
        <ProgressBar step={step} totalSteps={8} />
      </div>
      {step === 1 && <MakeClaimPersonalForm onNext={handleNextStep} />}
      {step === 2 && <MakeClaimInsuredForm onNext={handleNextStep} onPrevious={handlePreviousStep} />}
      {step === 3 && <MakeClaimParticularsForm onNext={handleNextStep} onPrevious={handlePreviousStep} />}
      {step === 4 && <MakeClaimDamageForm onNext={handleNextStep} onPrevious={handlePreviousStep} />}
      {step === 5 && <MakeClaimThirdpartyForm onNext={handleNextStep} onPrevious={handlePreviousStep} />}
      {step === 6 && <MakeClaimDeclarationForm onPrevious={handlePreviousStep} />}
    </div>
  );
};

export default ClaimFormContainer;
