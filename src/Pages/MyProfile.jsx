import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const MyProfile = () => {
  const { user, updateUserProfile, setUser} = useContext(AuthContext)
  
  const handelUpdate = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const photo = e.target.photo.value

    updateUserProfile({ displayName: name, photoURL: photo })
      .then(() => {
          setUser(prev=>{return{...prev,displayName:name,photoUrl:photo}})
          toast.success('Successfully update!')
          })

        .catch((error) => {
          console.log(error)
        })
  }
  return (
    <div className='card bg-base-200 shadow-md w-96 p-5 mx-auto space-y-3 mb-14'>
      {
          user && user.email ? <img className="rounded-full w-20 h-20 mx-auto" src={user.photoURL} alt="" />: ""
      }
      <h1 className='text-xl font-bold text-center text-blue-500'>{user.displayName}</h1>
      <form onSubmit={handelUpdate}>
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
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update Profile</button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;