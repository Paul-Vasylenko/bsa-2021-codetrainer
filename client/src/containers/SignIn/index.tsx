import React from 'react';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import CoverLayout from 'components/CoverLayout';
import PasswordField from 'components/PasswordField';
import FormField from 'components/FormField';
import Separator from 'components/Separator';
import Button, { ButtonClasses } from 'components/Button';
import { combineClasses } from 'helpers/combineClasses.helper';
import styles from './sign-in.module.scss';

function validateEmail(email: string): string | undefined {
	if (!email) {
		return 'Enter email';
	}
	else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
		return 'Invalid email';
	}
}

function validatePassword(password: string): string | undefined {
	if (!password) {
		return 'Enter password';
	}
}

const SignIn: React.FC = () => {
	return (
		<CoverLayout className={styles.signIn}>
			<Formik
				initialValues={{
					email: "",
					password: ""
				}}
				onSubmit={e => console.info(e)}
			>
				{({ errors, touched, isValidating }) => (
					<Form className={styles.form}>
						<h4>Sign in</h4>
						<Button
							className={ButtonClasses.red}
							onClick={() => console.info("here")}
						>
							Sing in with GitHub
						</Button>
						<Separator className={styles.light}>or</Separator>
						<div>
							<div className={styles.labelWrapper}>
								<label htmlFor="email">Email</label>
							</div>
							<FormField
								id="email"
								name="email"
								label="Email"
								placeholder="Email"
								validate={validateEmail}
							/>
							{ touched.email && errors.email ? <div className={styles.error}>{errors.email}</div> : null }
						</div>
						<div>
							<div className={styles.labelWrapper}>
								<label htmlFor="password">Password</label>
								<Link to="reset-password">Forgot password?</Link>
							</div>
							<PasswordField
								id="password"
								name="password"
								label="Password"
								placeholder="Password"
								validate={validatePassword}
							/>
							{ touched.password && errors.password ? <div className={styles.error}>{errors.password}</div> : null }
						</div>
						<Button
							type="submit"
							className={combineClasses(ButtonClasses.red, ButtonClasses.filled)}
						>
							Sign in
						</Button>
					</Form>
				)}
			</Formik>
			<footer>
				No account? <Link to="/sign-up">Sign up</Link>
			</footer>
		</CoverLayout>
	);
};

export default SignIn;