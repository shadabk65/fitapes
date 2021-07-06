import React from 'react'
import Link from 'next/link'
export default function profileCard() {
  return (
    <React.Fragment>
      <section className="profiles_sec mt-2">
            <div className="profile_sec_lft">
                <div className="profile">
                    <div className="profile_dp">
                        <img src="/images/contact_rht.png" alt="profile image"/>
                    </div>
                    <h4>Dr. Amrita Goel <img src="/images/icons/bluetick.png" alt="blue tick"/></h4>
                    <ul>
                        <li>MBBS, MD (Physician)</li>
                        <li>Speaks English, Hindi,</li>
                        <li>14 years of experience</li>
                        <li>General Physician</li>
                        <li>₹ 500</li>

                        <Link  href="/doctor/profile/update">
                          <a>
                            <button className='btn btn-block btn-outline-primary'>
                              Update Profile
                            </button>
                          </a>
                        </Link>
                    </ul>
                </div>
                <div className="profile_others text-center">
                    <ul>
                        <li><a href=""><i className="fa fa-phone"></i>Book consultation</a></li>
                        <li><a href=""><i className="fa fa-play"></i> Watch Intro</a></li>
                        <li><a href=""><i className="fa fa-share-alt"></i> Share Profile</a></li>
                    </ul>
                </div>
            </div>
      </section>
    </React.Fragment>
  )
}
