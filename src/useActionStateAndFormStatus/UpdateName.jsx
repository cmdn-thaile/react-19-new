import { useActionState } from 'react';
import { Loader } from './Loader';
import { SubmitButton } from './SubmitButton';
import { Name } from './Name';

export function UpdateName() {
  console.info('React 19 form');

  const [state, formAction] = useActionState(
    async (previousState, formData) => {
      console.log(previousState);
      console.log(formData.get('name'));
      return { name: formData.get('name') };
    },
    { name: '' }
  );

  return (
    <>
    <h1 className="title">React 19 FORM</h1>
      <form action={formAction}>
        <input type="text" name="name" placeholder='Name....' />
        <Loader />
        <SubmitButton />
        <Name name={state?.name} />
      </form>
    </>
  );
}
