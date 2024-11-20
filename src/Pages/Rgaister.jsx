
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Rgaister = () => {

  const { createUser, setUser, updateUserProfile } = useContext(AuthContext)
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)


  const handelRegister = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const name = e.target.name.value
    const photo = e.target.photo.value

    // console.log(email, password, name, photo)

    createUser(email, password)
      .then(result => {
        console.log(result.user)
        setUser(result.user)
        updateUserProfile({ displayName: name, photoURL: photo })
        .then(() => {
          navigate("/")
          toast.success('Successfully Register!')
          })

        .catch((error) => {
          console.log(error)
          toast.error("Invalid input")
        })
      })
      .catch(error => {
        console.log(error)
        toast.error("Invalid input")
    })
  }
  return (
    <div className='min-h-screen flex justify-center items-center '>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handelRegister} className="card-body">
          <h2 className='text-2xl font-bold text-center'>Register</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name="photo" placeholder="Url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="password"
            className="input input-bordered" required />
          <button onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute right-4 top-12">
            {
              showPassword? <FaEyeSlash /> : <FaEye />
            }
            </button>
          <label className="cursor-pointer justify-start label">
            <input type="checkbox" name="terms" className="checkbox checkbox-accent mr-3" />
            <span className="label-text">Accept our term and condition</span>
         
         </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        </form>
        <p className='text-center mb-3'>Already Have An Account ? <Link className='text-green-600' to="/auth/login">Login</Link></p>
    </div>
    </div>
  );
};

export default Rgaister;