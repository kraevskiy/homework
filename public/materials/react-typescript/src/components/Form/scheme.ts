import { object, string } from 'yup';

export const validationSchema = object({
	name: string().min(3).required(),
	email: string().email().required(),
	message: string().min(5),
});
