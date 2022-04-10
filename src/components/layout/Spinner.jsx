import GLSpinner from './assets/GLSpinner.gif';

function Spinner() {
	return (
		<div className='w-100 mt-20'>
			<img
				width={180}
				className='text-center mx-auto'
				src={GLSpinner}
				alt='Loading...'
			/>
		</div>
	);
}

export default Spinner;
