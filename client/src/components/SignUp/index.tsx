import React from 'react';
import CoverLayout from 'components/CoverLayout';
import FormInput from 'components/FormInput';
import { Formik, Form } from 'formik';
import styles from './SignUp.module.scss'
import { Link } from 'react-router-dom';

const SignUp: React.FC = () =>{
    return (
        <CoverLayout>
            <h4>SignUp</h4>
            <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
            }}
            onSubmit={values => {
                console.log(values)
            }}
            >
            <Form>
                <FormInput
                id="firstName"
                name="firstName"
                label="First Name"
                placeholder="Enter your first name"
                type="text"
                />
                <FormInput
                id="lastName"
                name="lastName"
                label="Last Name"
                placeholder="Enter your last name"
                type="text"
                />
                <FormInput
                id="email"
                name="email"
                label="Email"
                placeholder="Enter your email"
                type="email"
                />
                <FormInput
                id="password"
                name="password"
                label="Password"
                placeholder="********"
                type="password"
                />
                <FormInput
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                placeholder="********"
                type="password"
                />
                <button type="submit" className={styles.submitBtn}>Sign Up</button>
            </Form>
            </Formik>
            <div className={styles.footer}>Already Signep up? <Link to="/login" className={styles.link}>Sign in</Link></div>
        </CoverLayout>
    );
};

export default SignUp;