import { Input, Textarea, Button } from '../';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './scheme.js';
import {toast} from 'react-toastify';

export const Form = () => {
	const {register, reset, handleSubmit, control, formState: { errors }} = useForm({
		resolver: yupResolver(validationSchema)
	});

	const handleSubmitForm = (data) => {
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
