
import { Link } from 'react-router-dom';

const Rgaister = () => {
  return (
    <div className='min-h-screen flex justify-center items-center '>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body">
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <div className="form-control">
          <label className="cursor-pointer justify-start label">
          <input type="checkbox" defaultChecked className="checkbox checkbox-sm mr-3" />
          <span className="label-text">Accept Term & Conditions</span>
        </label>
         </div>
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