import { Input, Textarea, Button } from '../';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './scheme.ts';
import {toast} from 'react-toastify';

interface IForm {
	name: string;
	email: string;
	message: string;
}

export const Form = () => {
	const {register, reset, handleSubmit, formState: { errors }} = useForm<IForm>({
		resolver: yupResolver(validationSchema)
	});

	const handleSubmitForm = (data: IForm) => {
		console.log('handleSubmitForm', data);
		toast.success('Success send');
		reset();
	}

	return (
		<form className="p-5 flex flex-col gap-3" onSubmit={handleSubmit(handleSubmitForm)}>
			<Input label={'Name'} error={errors.name} {...register('name')}/>
			<Input label={'Email'} error={errors.email} {...register('email')}/>
			<Textarea label={'Message'} error={errors.message} {...register('message')}/>
			<Button>Submit</Button>
		</form>
	);
};
