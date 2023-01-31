import { FormEvent, useState } from 'react';
import EmailInput from '../auth/components/EmailInput';
import PasswordInput from '../auth/components/PasswordInput';
import validateEmail from '../auth/domain/validateEmail';
import validatePassword from '../auth/domain/validatePassword';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailValidation = validateEmail(email);
  const passwordValidation = validatePassword(password);
  const submitEnabled = emailValidation.valid && passwordValidation.valid;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!submitEnabled) return;
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center text-2xl font-bold">로그인</div>
        <form
          className="rounded bg-white px-8 pt-6 pb-8"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <EmailInput
              value={email}
              onValueChanged={setEmail}
              validation={emailValidation}
            />
          </div>
          <div className="mb-6">
            <PasswordInput
              value={password}
              onValueChanged={setPassword}
              validation={passwordValidation}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none disabled:bg-gray-400"
              disabled={!submitEnabled}
              type="submit"
            >
              로그인
            </button>
            <a
              className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
              href="/signup"
            >
              회원이 아니신가요?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignInPage;
