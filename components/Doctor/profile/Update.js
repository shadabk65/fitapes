import React,{useState} from 'react'
import {Form , FormControl, Button} from 'react-bootstrap';
import {data} from './data';
import Link from 'next/link';
export default function Update() {
  const [person,setPerson] = useState({
    name : data.map(item => item.name),
    profile : data.map(item => item.description.profile),
    job : data.map(item => item.description.job),
    fee : data.map(item => item.description.fee),
    language : data.map(item => item.description.language),
    experience : data.map(item => item.description.experience),
  });
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPerson({
      ...person,
      [name] : value
    })
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Updates made" + person.name +" " + person.fee)
    const userData = {
      name : person.name,
      profile : person.profile,
      job : person.job,
      fee : person.fee,
      experience : person.experience,
      language : person.language,
    }
    console.log(userData);  
  }


  return (
    <React.Fragment>
      <div className='container'>
        <div className='row'>
          <div className='text-center col-12 col-sm-6 offset-sm-3 card card-dis'>
            <h1 className=' text-primary mt-4 mb-4'>
                <strong>Update Profile</strong>
            </h1> 
            <Form>
              <label className="mt-2 mb-2" >Change Name</label>
              <FormControl 
                  className='mt-2 mb-2' 
                  type='text' 
                  placeholder="Enter your name"
                  name="name"
                  value={person.name}
                  onChange={handleChange}
              />

              <label className="mt-2 mb-2" >Change Qualification</label>
              <FormControl 
                  className='mt-2 mb-2' 
                  type='text' 
                  placeholder="update your profile"
                  name="profile"
                  value={person.profile}
                  onChange={handleChange}
              />

              <label className="mt-2 mb-2" >Update Job Profile</label>
              <FormControl 
                className='mt-2 mb-2' 
                type='text' 
                placeholder="update your profession"
                name="job"
                value={person.job}
                onChange={handleChange}
              />

              <label className="mt-2 mb-2" >Change Fee</label>
              <FormControl 
                className='mt-2 mb-2' 
                type='number' 
                placeholder="Enter your updated fee"
                name="fee"
                value={person.fee}
                onChange={handleChange}
              />

              <label className="mt-2 mb-2" >Change Language</label>
              <FormControl 
                className='mt-2 mb-2' 
                type='text' 
                placeholder="Enter your new languages"
                name="language"
                value={person.language}
                onChange={handleChange}
              />
              <label className="mt-2 mb-2" >Update Experiences</label>
              
              <FormControl 
                className='mt-2 mb-2' 
                type='text' 
                placeholder="Update about your new Experiences"
                name="experience"
                value={person.experience}
                onChange={handleChange}
              />
              <label className="mt-2 mb-2" >Change Profile Image</label>
              <Form.File
              className="position-relative"
              required
              name="file"
              label="File"
              />

              <div className='mt-5 mb-5'>
                <Link href='/doctor/profile'>
                  <Button variant='outline-dark' className='me-4'>
                    Cancel 
                  </Button>
                </Link>
                
                <Button variant='outline-primary' onClick={handleUpdate}>
                  Update 
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}