import { useFormStatus } from 'react-dom';

export function Loader() {
  const { pending } = useFormStatus();
  return <div>{pending && 'Loading...'}</div>;
}
