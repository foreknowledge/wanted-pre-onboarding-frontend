import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../apis/auth';
import EmailInput from '../../features/auth/components/EmailInput';
import PasswordInput from '../../features/auth/components/PasswordInput';
import validateEmail from '../../features/auth/validation/validateEmail';
import validatePassword from '../../features/auth/validation/validatePassword';

const SignUpPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailValidation = validateEmail(email);
  const passwordValidation = validatePassword(password);
  const submitEnabled = emailValidation.valid && passwordValidation.valid;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!submitEnabled) return;

    signup({ email, password })
      .then(() => {
        alert('성공적으로 가입 되었습니다.');
        navigate('/signin');
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center text-2xl font-bold">회원 가입</div>
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
              data-testid="signup-button"
            >
              가입하기
            </button>
            <a
              className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
              href="/signin"
            >
              이미 회원이신가요?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUpPage;
