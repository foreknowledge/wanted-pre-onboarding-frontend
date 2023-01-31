import { useState } from 'react';
import ValidationResult from '../types/ValidationResult';

type Params = {
  value: string;
  onValueChanged: (value: string) => void;
  validation: ValidationResult;
};

const EmailInput = ({ value, onValueChanged, validation }: Params) => {
  // 포커스를 잃었을 때에만 invalid 메시지를 보여준다.
  const [focusOut, setFocusOut] = useState(false);
  const isInvalid = focusOut && !validation.valid;

  return (
    <>
      <label
        className="mb-2 block text-sm font-bold text-gray-700"
        htmlFor="email"
      >
        이메일
      </label>
      <input
        autoFocus
        className={`${
          isInvalid ? 'border-red-500' : ''
        } focus:shadow-outline mb-3 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none`}
        id="email"
        type="email"
        placeholder="test@email.com"
        value={value}
        onChange={(e) => onValueChanged(e.target.value)}
        onFocus={() => setFocusOut(false)}
        onBlur={() => setFocusOut(true)}
      />
      {isInvalid && (
        <p className="text-xs text-red-500">{validation.message}</p>
      )}
    </>
  );
};

export default EmailInput;
