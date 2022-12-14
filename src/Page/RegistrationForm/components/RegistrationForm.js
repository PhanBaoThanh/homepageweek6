import React,{useState} from 'react'
import './registrationform.scss'
import Button from '../../Button/Button'

const RegistrationForm = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [address,setAddress] = useState("")
  const [phone,setPhone] = useState("")
  const [sex,setSex] = useState(true)
  const [success,setSuccess] = useState()

  const [errName,setErrName] = useState(false)
  const [errEmail,setErrEmail] = useState(false)
  const [errAddress,setErrAddress] = useState(false)
  const [errPhone,setErrPhone] = useState(false)

  const checkEmail = (str) => {
    return String(str).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  }

  const handleClickSubmit = e => {
    e.preventDefault();
    console.log(name==="")
    name === "" ? setErrName(true) : setErrName(false)
    address === "" ? setErrAddress(true) : setErrAddress(false)
    isNaN(phone) || phone === ""? setErrPhone(true) : setErrPhone(false)
    !checkEmail(email) ? setErrEmail(true) : setErrEmail(false)
    if(name !== "" && address !== "" && phone !== "" && !isNaN(phone) && checkEmail(email)){
      setSuccess(true)
      console.log(1)
    }
    else{
      console.log(0)
      setSuccess(false)

    }
    console.log(3)
  }

  const handleEnterSubmit = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      name === "" ? setErrName(true) : setErrName(false)
      address === "" ? setErrAddress(true) : setErrAddress(false)
      isNaN(phone) || phone === "" ? setErrPhone(true) : setErrPhone(false)
      !checkEmail(email) ? setErrEmail(true) : setErrEmail(false)
      if(name !== "" && address !== "" && phone !== "" && !isNaN(phone) && checkEmail(email)){
        setSuccess(true)
        console.log(1)
      }
      else{
        console.log(0)
        setSuccess(false)

      }
      console.log(3)
    }

  }

  const handleChangeAddress = str => {
    setAddress(str)
    if(str !== "")
      setErrAddress(false)
  }

  const handleChangePhone = str => {
    setPhone(str)
    if(!isNaN(str) || str === "")
      setErrPhone(false)
  }

  const handleChangeName = str => {
    setName(str)
    if(str !== "")
      setErrName(false)
  }

  const handleChangeEmail = str => {
    setEmail(str)
    if(checkEmail(str))
      setErrEmail(false)
  }

  const checkName = str => {
    console.log(str)
    if(str === "" )
      setErrName(true)
    else 
      setErrName(false)
  }

  const checkPhone = str => {
    if(isNaN(str) || str === "")
      setErrPhone(true)
    else 
      setErrPhone(false)
  }

  const checkAddress = str => {
    if(str === "")
      setErrAddress(true)
    else 
      setErrAddress(false)
  }

  const reCheckEmail = str => {
    if(checkEmail(str))
      setErrEmail(false)
    else
      setErrEmail(true)
  }

  return (
    <div className='form'>
      <div className='buttonBack'>
        <Button/>
      </div>
      <div className='formBox'>
          <form className='formController'>
            <div className='formControllerItem'>
              <label>T??n</label>
              <input type='email' value={email} onChange={e => handleChangeEmail(e.target.value)} placeholder='M???i nh???p email' onBlur={e => reCheckEmail(e.target.value)} className={`formInput ${errEmail ? 'isErr' : ''}`} />
              <span className={`formText ${errEmail ? 'err' : ''}`}>M???i nh???p l???i email</span>
            </div>

            <div className='formControllerItem'>
              <label>H??? t??n</label>
              <input type='text' value={name} onChange={e => handleChangeName(e.target.value)} placeholder='M???i h??? t??n' onBlur={e => checkName(e.target.value)} className={`formInput ${errName ? 'isErr' : ''}`}/>
              <span className={`formText ${errName ? 'err' : ''}`}>M???i nh???p l???i h??? t??n</span>
            </div>

            <div className='formControllerItemSelect'>
              <label>Gi???i t??nh</label>
              <select defaultValue='male' onChange={e => setSex(e.target.options[e.target.options.selectedIndex].value === 'male' ? true : false)} className='formSelect'>
                <option value='male'>Nam</option>
                <option value='female'>N???</option>
              </select>
            </div>

            <div className='formControllerItem'>
              <label>?????a ch???</label>
              <input type='text' value={address} onChange={e => handleChangeAddress(e.target.value)} placeholder='M???i nh???p ?????a ch???' onBlur={e => checkAddress(e.target.value)} className={`formInput ${errAddress ? 'isErr' : ''}`} />
              <span className={`formText ${errAddress? 'err' : ''}`}>M???i nh???p l???i ?????a ch???</span>
            </div>

            <div className='formControllerItem'>
              <label>S??? ??i???n tho???i</label>
              <input type='text' value={phone} onChange={e => handleChangePhone(e.target.value)} placeholder='M???i nh???p s??? ??i???n tho???i' onBlur={e => checkPhone(e.target.value)} className={`formInput ${errPhone ? 'isErr' : ''}`} />
              <span className={`formText ${errPhone? 'err' : ''}`}>M???i nh???p l???i s??? ??i???n tho???i</span>
            </div>
            <input type='submit' className='formSubmit' onKeyDown={e => handleEnterSubmit(e)} onClick={e => handleClickSubmit(e)} />
          </form>
      </div>

      {
        success ? (
          <div className='alertBox'>
            <p className='closeAlertBtn' onClick={() => setSuccess(false)}>X</p>
            <p>????ng nh???p th??nh c??ng</p>
          </div>
        ) : (
          <></>
        )
      }
      
    </div>
  )
}

export default RegistrationForm