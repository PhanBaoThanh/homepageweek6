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
              <label>Tên</label>
              <input type='email' value={email} onChange={e => handleChangeEmail(e.target.value)} placeholder='Mời nhập email' onBlur={e => reCheckEmail(e.target.value)} className={`formInput ${errEmail ? 'isErr' : ''}`} />
              <span className={`formText ${errEmail ? 'err' : ''}`}>Mời nhập lại email</span>
            </div>

            <div className='formControllerItem'>
              <label>Họ tên</label>
              <input type='text' value={name} onChange={e => handleChangeName(e.target.value)} placeholder='Mời họ tên' onBlur={e => checkName(e.target.value)} className={`formInput ${errName ? 'isErr' : ''}`}/>
              <span className={`formText ${errName ? 'err' : ''}`}>Mời nhập lại họ tên</span>
            </div>

            <div className='formControllerItemSelect'>
              <label>Giới tính</label>
              <select defaultValue='male' onChange={e => setSex(e.target.options[e.target.options.selectedIndex].value === 'male' ? true : false)} className='formSelect'>
                <option value='male'>Nam</option>
                <option value='female'>Nữ</option>
              </select>
            </div>

            <div className='formControllerItem'>
              <label>Địa chỉ</label>
              <input type='text' value={address} onChange={e => handleChangeAddress(e.target.value)} placeholder='Mời nhập địa chỉ' onBlur={e => checkAddress(e.target.value)} className={`formInput ${errAddress ? 'isErr' : ''}`} />
              <span className={`formText ${errAddress? 'err' : ''}`}>Mời nhập lại địa chỉ</span>
            </div>

            <div className='formControllerItem'>
              <label>Số điện thoại</label>
              <input type='text' value={phone} onChange={e => handleChangePhone(e.target.value)} placeholder='Mời nhập số điện thoại' onBlur={e => checkPhone(e.target.value)} className={`formInput ${errPhone ? 'isErr' : ''}`} />
              <span className={`formText ${errPhone? 'err' : ''}`}>Mời nhập lại số điện thoại</span>
            </div>
            <input type='submit' className='formSubmit' onKeyDown={e => handleEnterSubmit(e)} onClick={e => handleClickSubmit(e)} />
          </form>
      </div>

      {
        success ? (
          <div className='alertBox'>
            <p className='closeAlertBtn' onClick={() => setSuccess(false)}>X</p>
            <p>Đăng nhập thành công</p>
          </div>
        ) : (
          <></>
        )
      }
      
    </div>
  )
}

export default RegistrationForm