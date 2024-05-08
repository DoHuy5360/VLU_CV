export default function FormErrors({ message }: { message: string | undefined }) {
	return message && <div className='text-xs text-red-500'>{message}</div>;
}
