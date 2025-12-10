import { useForm } from "react-hook-form";

const UseMemo = () => {

  const {register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  }

  return (
     <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username",{required:"Username is required", minLength: {value: 10, message: "Username must be more than 10 characters"}})} placeholder='Username' />
        {errors.username && <p>{errors.username.message as string}</p>}
        <input {...register("email",{required:"Email is required"})} placeholder='Email' />
        {errors.email && <p>{errors.email.message as string}</p>}
        <input {...register("password",{required:"Password is required"})} placeholder='Password' />
        {errors.password && <p>{errors.password.message as string}</p>}
        <input {...register("confirmPassword",{required:"Confirm Password is required"})} placeholder='Confirm Password' />
        {errors.confirmPassword && <p>{errors.confirmPassword.message as string}</p>}
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UseMemo

//subject: useCallback, useMemo
//goal: understand useMemo and useCallback

//new subject: formik vs react-hook-form
//new goal: learn the differences between formik and react-hook-form and when to use each one

