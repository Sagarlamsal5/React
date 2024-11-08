import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'
const Register = () => {
  return (
    <>
    <Formik initialValues={{fname:'', lname:'', email:'', password:'', cpassword:''}}
    validationSchema={Yup.object({
       fname:Yup.string()
       .max(20,'FIrst Name must contain only 20 character') 
       .min(2,'Too short!')
       .required(),

       lname:Yup.string()
       .max(20,'Last Name must contain only 20 character') 
       .min(2,'Too short!')
       .required(),

       email:Yup.string()
       .email()
       .required(),

       password:Yup.string()
       .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^*&!]).{8,50}$/, "Week Password")
       .required(),

       cpassword:Yup.string()
       .oneOf([Yup.ref('password'),null],'Password did not matched')
       .required()
      
       
    })}
    >
        <div className='flex justify-center'>
            <Form className='my-5 shadow-cyan-500 shadow-sm p-4'>
                <h1 className='text-center font-bold text-blue text-xl mb-2'>User Registration Forms</h1>

            <div className='mb-2'>
                <label htmlFor="fname">First Name</label>
                <Field type ='text' name='fname' id='fname' Placeholder='Enter your first name'className="w-full"/>
                <ErrorMessage name='fname'>
                    {mgs=><div style={{color:'red'}}>{mgs}</div>}
                </ErrorMessage>
            </div>

            <div className='mb-2'>
                <label htmlFor="lname">Last Name</label>
                <Field type ='text' name='lname' id='lname' Placeholder='Enter your Last name'className="w-full"/>
                <ErrorMessage name='lname'>
                    {mgs=><div style={{color:'red'}}>{mgs}</div>}
                </ErrorMessage>
            </div>

            <div className='mb-2'>
                <label htmlFor="email">Email</label>
                <Field type ='text' name='email' id='email' Placeholder='xyz@gmail.com'className="w-full"/>
                <ErrorMessage name='email'>
                    {mgs=><div style={{color:'red'}}>{mgs}</div>}
                </ErrorMessage>
            </div>

            <div className='mb-2'>
                <label htmlFor="password">Password</label>
                <Field type ='password' name='password' id='password' Placeholder='**********'className="w-full"/>
                <ErrorMessage name='password'>
                    {mgs=><div style={{color:'red'}}>{mgs}</div>}
                </ErrorMessage>
            </div>

            <div className='mb-2'>
                <label htmlFor="cpassword">Confirm Password</label>
                <Field type ='password' name='cpassword' id='cpassword' Placeholder='**********'className="w-full"/>
                <ErrorMessage name='cpassword'>
                    {mgs=><div style={{color:'red'}}>{mgs}</div>}
                </ErrorMessage>
            </div>

            <div className='mb-2'>
            <button className="bg-blue-500 px-3 py-3 text-white mt-3">Register</button>
            </div>
            

            </Form>
        </div>
    </Formik>
    </>
  )
}

export default Register