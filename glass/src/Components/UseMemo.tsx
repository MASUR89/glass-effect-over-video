import { Formik, Form, Field } from "formik"

const UseMemo = () => {

//   const {register, handleSubmit, formState: {errors} } = useForm();

//   const onSubmit = (data: any) => {
//     console.log(data);
//   }

//   return (
//      <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input {...register("name",{required:"Name is required", minLength: {value: 12, message: "Name must be more than 2 characters"}})} placeholder='Username' />
//         {errors.name && <p>{errors.name.message as string}</p>}
//         <input {...register("email",{required:"Email is required"})} placeholder='Email' />
//         {errors.email && <p>{errors.email.message as string}</p>}
//         <input {...register("age",{required:"Indicate your age"})} placeholder='Your age' />
//         {errors.age && <p>{errors.age.message as string}</p>}
//         <input {...register("ID",{required:"Your ID number"})} placeholder='ID number' />
//         {errors.id && <p>{errors.id.message as string}</p>}
//         <input {...register("password",{required:"Password is required"})} placeholder='Password' />
//         {errors.password && <p>{errors.password.message as string}</p>}
//         <input {...register("confirmPassword",{required:"Confirm Password is required"})} placeholder='Confirm Password' />
//         {errors.confirmPassword && <p>{errors.confirmPassword.message as string}</p>}
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }



  return (
     <>
     <Formik
      initialValues={{ userame: 'maia' }}
      onSubmit={(values) => {
        console.log(values);
      }}
     >
      <Form>
        <Field name="username" placeholder="user"/>
      </Form>
     </Formik>
     </>
    )
  }

export default UseMemo


//new subject: formik vs react-hook-form

