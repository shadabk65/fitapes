import {useState} from 'react'
const countrycode = () => {

const [country, setcountry] = useState("+91(IND)")


  return (
     <div className="container">
       <select className='selection_class'
        value={country}
        onChange={(e) => {
          const countryCode = e.target.value;
          setcountry(countryCode);
        }}
       >
         <option value="IN">+91(IND)</option>
         <option value="US">+91(IND)</option>
         <option value="IN">+91(IND)</option>
         <option value="IN">+91(IND)</option>
         <option value="IN">+91(IND)</option>
       </select>
     </div>
  )
}

export default countrycode
