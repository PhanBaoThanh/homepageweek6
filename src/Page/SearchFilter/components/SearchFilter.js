import React,{useState,useRef} from 'react'
import './searchfilter.scss'
import Button from '../../Button/Button'

const SearchFilter = () => {
    const data = [
        {
            id: 1,
            name: 'Nguyễn Văn A',
            sex: true,
            address: 'Huế',
            phone: '0123456789',
            email: 'nguyenvana@gmail.com'

        },
        {
            id: 2,
            name: 'Trần Văn B',
            sex: true,
            address: 'Đà Nẵng',
            phone: '0123456788',
            email: 'tranvanb@gmail.com'
        },
        {
            id: 3,
            name: 'Phan Văn C',
            sex: true,
            address: 'Móng Cái',
            phone: '0123456787',
            email: 'phanvanc@gmail.com'
        },
        {
            id: 4,
            name: 'Trương Văn D',
            address: 'Hà Nội',
            phone: '0123456786',
            email: 'truongvand@gmail.com'
        },
        {
            id: 5,
            name: 'Trịnh Văn Vở',
            sex: true,
            address: 'Hồ Chí Minh',
            phone: '0123456785',
            email: 'trinhvanvo@gmail.com'
        },
        {
            id: 6,
            name: 'Nguyễn Thị F',
            sex: false,
            address: 'Đà Lạt',
            phone: '0123456784',
            email: 'nguyenthif@gmail.com'
        },
        {
            id: 7,
            name: 'Phan Thị G',
            sex: false,
            address: 'Quảng Ninh',
            phone: '0123456783',
            email: 'phanthig@gmail.com'
        },
        {
            id: 8,
            name: 'Trần Thị I',
            address: 'Quảng Ngãi',
            sex: false,
            phone: '0123456782',
            email: 'tranthii@gmail.com'
        },
        {
            id: 9,
            name: 'Phùng Thị Phi',
            address: 'Quảng Trị',
            sex: false,
            phone: '0123456781',
            email: 'phungthiphi@gmail.com'
        },
        {
            id: 10,
            name: 'Trương Thị K',
            address: 'Quảng Nam',
            sex: false,
            phone: '0123456780',
            email: 'truongthik@gmail.com'
        },
        
    ]
    const [value,setValue] = useState("")
    const [users,setUsers] = useState(data)
    const optionsRef = useRef()

    const handleEnterKey = e => {
        if(e.keyCode === 13){
            let temp = optionsRef.current.options[optionsRef.current.options.selectedIndex].value
            if(value !== "")
                if(temp === "all")
                    setUsers(data.filter(item => item.name.toLowerCase().includes(value.toLowerCase())))
                else
                    setUsers(data.filter(item => item[temp].toLowerCase().includes(value.toLowerCase())))
            else
                setUsers(data)
        }
    }

    return (
        <div className='searchfilter'>
            <div className='buttonBack'>
                <Button />
            </div>
            <div className='searchfilterInput'>
                <input className='searchfilterInputItem' placeholder='Mời nhập thông tin cần tìm vào đây' value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={(e) => handleEnterKey(e)}/>
                <select defaultValue='all' className='searchfilterInputBtn' ref={optionsRef}>
                    <option value="all" >Tất cả</option>
                    <option value="name">Tìm theo tên</option>
                    <option value="address">Tìm theo địa chỉ</option>
                    <option value="phone">Tìm theo SĐT</option>
                    <option value="email" >Tìm theo email</option>
                </select>
            </div>

            <div className='searchfilterList'>
            {
                users.map(item => (
                    <div className='searchfilterListItem' key={item.id}>
                        <div className='searchfilterListItemBox'>
                            <p>Họ tên: {item.name}</p>
                            <p>Địa chỉ: {item.address}</p>
                            <p>Giới tính: {item.sex ? 'Nam' : 'Nữ'} </p>
                            <p>Email: {item.email}</p>
                            <p>SĐT: {item.phone}</p>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default SearchFilter