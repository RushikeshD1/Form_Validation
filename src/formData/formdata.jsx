import { useFormik } from 'formik';
import { userSchema } from '../schema';


const initialValues = {
    name : "",
    email : "",
    password : "",
    confirm_password : ""
}

const Form = () => {

    const { values, handleChange, handleSubmit, errors, touched, handleBlur, isValid} = useFormik({
        initialValues : initialValues, 
        validationSchema : userSchema, 
        validateOnMount : true,     
        onSubmit : (values, action) => {
            console.log(values)
            alert("Sign up SucessFull")      
            action.resetForm();      
        } 
    }) 

    return (

    <div className=" h-screen w-screen flex justify-center p-6 bg-gray-200">
      
      <form onSubmit={handleSubmit} className=" w-96 p-4 gap-4 flex flex-col justify-center text-amber-700 rounded-md bg-white">
        <h1 className='text-3xl font-bold text-amber-950'>Welcome!</h1>
        <div className=" flex flex-col border p-2 rounded-md b text-sm">
          <label htmlFor="name" className=" font-bold text-amber-950">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="h-8 px-1 py-1 text-red-900 "
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? (<p className='text-red-700'>{errors.name}</p> ): null}
        </div>
        <div className=" flex flex-col border p-2 rounded-md  text-sm">
          <label htmlFor="email" className=" font-bold text-amber-950">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="h-8 px-1 py-1 text-red-900"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? <p className='text-red-700'>{errors.email}</p> : null}
        </div>
        <div className=" flex flex-col border p-2 rounded-md  text-sm">
          <label htmlFor="password" className=" font-bold text-amber-950">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="h-8 px-1 py-1 text-red-900"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? <p className='text-red-700'>{errors.password}</p> : null}
        </div>
        <div className=" flex flex-col border p-2 rounded-md text-sm">
          <label htmlFor="confirm_password" className=" font-bold text-amber-950">
            Confirm password
          </label>
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            placeholder="Confirm password"
            className="h-8 px-1 py-1 text-red-900"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirm_password && touched.confirm_password ? <p className='text-red-700'>{errors.confirm_password}</p> : null}
        </div>
        <div className=" flex justify-center mt-4 ">
            <button type="submit" disabled={!isValid} className={!isValid ? "bg-gray-400 text-gray-700 px-4 py-2 rounded-md":" bg-blue-500 px-4 py-2 rounded-md text-white text-center cursor-pointer"}>SIGN UP</button>
        </div>
      </form>
    </div>

  )
}

export default Form