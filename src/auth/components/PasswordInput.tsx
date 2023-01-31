import { useState } from 'react';
import ValidationResult from '../types/ValidationResult';

type Params = {
  value: string;
  onValueChanged: (value: string) => void;
  validation: ValidationResult;
};

const PasswordInput = ({ value, onValueChanged, validation }: Params) => {
  // 포커스를 잃었을 때에만 invalid 메시지를 보여준다.
  const [focusOut, setFocusOut] = useState(false);
  const isInvalid = focusOut && !validation.valid;

  return (
    <>
      <label
        className="mb-2 block text-sm font-bold text-gray-700"
        htmlFor="password"
      >
        비밀번호
      </label>
      <input
        className={`${
          isInvalid ? 'border-red-500' : ''
        } focus:shadow-outline mb-3 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none`}
        id="password"
        type="password"
        placeholder="********"
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

export default PasswordInput;
