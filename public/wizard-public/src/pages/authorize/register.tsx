import { Card, Input, Button } from 'alpaki-ui';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import Icon from 'images/lama.svg';
import * as Yup from 'yup';

const AuthorizeValidationSchema = Yup.object().shape({
    login: Yup.string()
        .min(2, 'Too Short!')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .required('Required'),
});

export interface RegisterFormProps {}

export function RegisterForm(_: RegisterFormProps) {
    return (
        <div className="flex place-content-center">
            <div className="sm:w-3/5 md:w-2/5 w-4/5 max-w-sm">

                <Formik validationSchema={AuthorizeValidationSchema} initialValues={{ login: '', email: '', firstName: '', lastName: '' }} onSubmit={async (values) => {
                }}>
                    {
                        ({ values, handleChange, isSubmitting }) => (
                            <Form>
                                <Card>
                                    <div className="flex place-content-center pb-4">
                                        <img src={Icon} alt="Alpaki Logo" className="w-2/5" />
                                    </div>
                                    <Input label={"Login"} autoComplete="off" value={values.login} onChange={handleChange('login')} />
                                    <Input label={"Email"} autoComplete="off" value={values.email} onChange={handleChange('email')} />
                                    <Input label={"First Name"} autoComplete="off" value={values.firstName} onChange={handleChange('firstName')} />
                                    <Input label={"Last Name"} autoComplete="off" value={values.lastName} onChange={handleChange('lastName')} />
                                    <Button type="submit" isProcessing={isSubmitting}>Register</Button>
                                    <div className="flex flex-col">
                                        <span className="text-center font-thin">or</span>
                                        <Link to="/authorize/login" className="text-alternative text-center">Cancel</Link>
                                    </div>
                                </Card>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    );
}

export function RegisterPage(){
    return (
        <RegisterForm />
    );
}