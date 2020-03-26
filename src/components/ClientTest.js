import React,{useState,useEffect} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Checkbox from '@material-ui/core/Checkbox';
import {Tooltip,IconButton} from '@material-ui/core';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {useProjectsValue} from '../context'
import {useClients} from '../hooks/index'
import { Link } from 'react-router-dom'
import axios from 'axios';
import {headCells1,headCells2,headCells3,headCells4,
        headCells5,headCells6,headCells7,headCells8
} from './NameInputs'

const moment=require("moment")



let Search = false;
let clientId = [];
export const ClientTest = () => {
    
    const {clients,setClients} = useClients()
    const {selectedDate,selectedDate2,setSelectedDate2,setSelectedDate,dateOpen,setDateOpen} = useProjectsValue()
    const[one,setOne]=useState("branchCode")
    const[two,setTwo]=useState("branchName")
    const[three,setThree]=useState("nameOfVisitor")
    const[four,setFour]=useState("personToBeInterviewed")
    const[five,setFive]=useState("personToBeInterviewedType")
    const[six,setSix]=useState("personToBeInterviewedPhoneNum")
    const[seven,setSeven]=useState("visitResult")
    const[eight,setEight]=useState("constantVisitDate")
    const[selected, setSelected] = useState([]);
    const[search,setSearch] = useState("");
    const [clientsFilter,setClientsFilter]=useState([]);
    const [clientsFilterDate,setClientsFilterDate]=useState([]);
    const [dateFormatChanger,setDateFormatChanger]=useState("");
    const [dateFormatChanger2,setDateFormatChanger2]=useState("");
    const numSelected = selected.length;


    const handleDateChange = date => {
        const dateFormat=moment(date).format("DD-MM-YYYY")
        setSelectedDate(date);
        setDateFormatChanger(dateFormat)
        setDateOpen(true)
    };
        const handleDateChange2 = date => {
        const dateFormat=moment(date).format("DD-MM-YYYY")    
        setSelectedDate2(date);
        setDateFormatChanger2(dateFormat)
        setDateOpen(true)
    };
    const handleChangeOne=event=>{
        setOne(event.target.value)
    }
    const handleChangeTwo=event=>{
        setTwo(event.target.value)
    }
    const handleChangeThree=event=>{
        setThree(event.target.value)
    }
    const handleChangeFour=event=>{
        setFour(event.target.value)
    }
    const handleChangeFive=event=>{
        setFive(event.target.value)
    }
    const handleChangeSix=event=>{
        setSix(event.target.value)
    }
    const handleChangeSeven=event=>{
        setSeven(event.target.value)
    }
    const handleChangeEight=event=>{
        setEight(event.target.value)
    }
    const handleSelectAll = event => {
        if (event.target.checked) {
        const newSelecteds = clients.map(n => n.branchCode);
        clients.map(client=>{
            clientId.push(client._id)
        })
    setSelected(newSelecteds);
        return;
        }else{
            clientId=[]
        }
        setSelected([]);
    };
    
    const handleClick = (event, code , id) => {
        if (event.target.checked) {
            clientId.push(id);
        }else{
        clientId=clientId.filter(client=>client!==id)
            
            
        }
        const selectedIndex = selected.indexOf(code);
        let newSelected = [];
        
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, code);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
        );
        }
        setSelected(newSelected);
    };
    const isSelected = code => selected.indexOf(code) !== -1;
    useEffect(() => {
            let isCancelled = false;
            
            const filteredClients = clients.filter(client => {
                if(client.branchCode && client.branchName){
                Search=true
                if(search.length===0){
                    Search=false
                }
                return client.branchName.toLowerCase().indexOf(search.toLowerCase()) !== -1
                || 
                client.branchCode.toString().toLowerCase().indexOf(search.toLowerCase()) !== -1
            }
            });
                setClientsFilter(filteredClients)

            return ()=>{
            isCancelled = true;
            }
            
    }, [search,clients]);
   
    useEffect(()=>{
        clientId=[]
    },[])
    const deleteHandler=()=>{
        //https://tasgeel.herokuapp.com/ http://localhost:8080
        clientId.map(id=>{
        axios.delete('https://tasgeel.herokuapp.com/client/' + id,{
        headers: {
        // Authorization:'Bearer ' + props.token,
        'Content-Type': 'application/json'
        },
    })
    
.then(res => {
        if(res.status === 200 || res.status === 201){
            console.log(res.data)
            const updatedClient=clients.filter(client => client._id !== id);
            
            // setOpen(!props.open)
            
             setClients(updatedClient)
            
            setSelected([])
        }
        if(res.status !== 200 && res.status !==201){
        // props.setWarning(!props.warning)
        }
        })
        .catch((error) => {
        console.log(error);
        })
    })
    console.log("finished")
    }

    
    useEffect(() => {
         const filteredClients = clients.filter(client=>client.constantVisitDate>=dateFormatChanger
                                && 
                                client.constantVisitDate<=dateFormatChanger2)
            setClientsFilterDate(filteredClients)
    },[clients,dateFormatChanger, dateFormatChanger2]);
  
    return (
        <div className="body">
            <h1 className="heading-primary">قائمة العملاء</h1>
            <div className="heading-secondary-box">
            <h2 className="heading-secondary"> الرئيسية / العملاء</h2>
            </div>
            
            <div className={numSelected > 0?"row row-selected":"row"}>
                <div className="col-1-of-3">
                    <div className="search">
                    <span className="search-icon"><SearchIcon/></span>
                    <input  
                    className="search-input"  type="search" name="search" 
                    placeholder="Search..." id=""
                    value={search}
                    onChange={e => setSearch(e.target.value)} 
                    />
                    </div>
                </div>
                <div className="col-1-of-3">
                        <div className="date">
                        <div className="date1">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd-MM-yyyy"
                                margin="normal"
                                id="date-pickerOne-inline"
                                label="الي تاريخ"
                                value={selectedDate2}
                                onChange={handleDateChange2}
                                KeyboardButtonProps={{
                                'aria-label': 'change date',
                                }}
                            />
                            </MuiPickersUtilsProvider>
                        </div>
                        <div className="date2">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd-MM-yyyy"
                                margin="normal"
                                id="date-pickeTwo-inline"
                                label="من تاريخ"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        </div>
                        </div>
                    </div>
                
                <div className="col-1-of-3">
                    {numSelected > 0?
                    <div className="select">{selected.length} <span>Selected</span></div>:""}
                    <div className="tools">
                    <div className="edit">
                        <Tooltip title="edit">
                        <Link to={`/editClient/${clientId}`} style={{textDecoration:"none" , color:"white"}}>
                            <IconButton>
                                <EditIcon/>
                            </IconButton>
                            </Link>
                        </Tooltip>
                    </div>
                    <div className="delete">
                        <Tooltip title="Delete">
                            <IconButton onClick={event=>deleteHandler(event)}>
                                <DeleteIcon  />
                            </IconButton>
                        </Tooltip>
                    </div>
                    </div>
                </div>
            </div>

            <table className="table">
                <thead>
                    <tr className="table__head-row">
                        <th className="table__head-cell">
                        <select className="table__head-menu" onChange={handleChangeEight}>
                            {headCells8.map((cell,index)=>{
                                return <option value={cell.id} key={index}className="table__menu-list">
                                    {cell.label}</option>
                                
                            })}
                                
                                
                            </select>
                        </th>
                        <th className="table__head-cell">
                        <select className="table__head-menu"  onChange={handleChangeSeven}>
                        {headCells7.map((cell,index)=>{
                                return <option value={cell.id} key={index} className="table__menu-list">
                                    {cell.label}</option>
                            })}
                            </select>
                        
                        </th>
                        <th className="table__head-cell"  onChange={handleChangeSix}>
                        <select className="table__head-menu">
                        {headCells6.map((cell,index)=>{
                                return <option value={cell.id} key={index} className="table__menu-list">
                                    {cell.label}</option>
                            })}
                            </select>
                        </th>
                        <th className="table__head-cell">
                        <select className="table__head-menu"  onChange={handleChangeFive}>
                        {headCells5.map((cell,index)=>{
                                return <option value={cell.id} key={index} className="table__menu-list">
                                    {cell.label}</option>
                            })}
                            </select>
                        </th>
                        <th className="table__head-cell">
                        <select className="table__head-menu"  onChange={handleChangeFour}>
                        {headCells4.map((cell,index)=>{
                                return <option value={cell.id} key={index} className="table__menu-list">
                                    {cell.label}</option>
                            })}
                            </select> 
                        </th>
                        <th className="table__head-cell">
                        <select className="table__head-menu"  onChange={handleChangeThree}>
                        {headCells3.map((cell,index)=>{
                                return <option value={cell.id} key={index} className="table__menu-list">
                                    {cell.label}</option>
                            })}
                            </select>
                        </th>
                        <th className="table__head-cell">
                        <select className="table__head-menu"   onChange={handleChangeTwo}>
                        {headCells2.map((cell,index)=>{
                                return <option value={cell.id} key={index} className="table__menu-list">
                                    {cell.label}</option>
                            })}
                            </select>
                        </th>
                        <th className="table__head-cell">
                            
                            <select className="table__head-menu"  onChange={handleChangeOne}>
                            {headCells1.map((cell,index)=>{
                                return <option value={cell.id} key={index} className="table__menu-list">
                                    {cell.label}</option>
                            })} 
                            </select>
                        </th>
                        <th className="table__head-cell"><Checkbox
                        checked={selected.length === clients.length ?true:false}
                        onChange={handleSelectAll}
                        value="primary" 
                        /></th>
                    </tr>
                </thead>
                <tbody>
                    
                    {search || dateOpen?
                        dateOpen?
                        clientsFilterDate.map((client,index)=>{
                            const isItemSelected =isSelected(client.branchCode);
                            return  <tr className="table__body-row "
                            onClick={event =>
                                handleClick(event,client.branchCode,client._id)
                            }
                            >
                            <td className="table__body-cell"><p>{client[eight]}</p> </td>
                            <td className="table__body-cell"><p>{client[seven]}</p></td>
                            <td className="table__body-cell"><p>{client[six]}</p></td>
                            <td className="table__body-cell"><p>{client[five]}</p></td>
                            <td className="table__body-cell"><p>{client[four]}</p></td>
                            <td className="table__body-cell"><p>{client[three]}</p></td>
                            <td className="table__body-cell"><p>{client[two]}</p></td>
                            <td className="table__body-cell"><p>{client[one]}</p></td>
                            <td className="table__body-cell"><Checkbox
                            checked={isItemSelected}
                            value="primary" 
                            /></td>
                        </tr>
                        })   
                        :
                        clientsFilter.map((client,index)=>{
                            const isItemSelected =isSelected(client.branchCode);
                            return  <tr className="table__body-row "
                            onClick={event =>
                                handleClick(event,client.branchCode,client._id)
                            }
                            >
                            <td className="table__body-cell"><p>{client[eight]}</p> </td>
                            <td className="table__body-cell"><p>{client[seven]}</p></td>
                            <td className="table__body-cell"><p>{client[six]}</p></td>
                            <td className="table__body-cell"><p>{client[five]}</p></td>
                            <td className="table__body-cell"><p>{client[four]}</p></td>
                            <td className="table__body-cell"><p>{client[three]}</p></td>
                            <td className="table__body-cell"><p>{client[two]}</p></td>
                            <td className="table__body-cell"><p>{client[one]}</p></td>
                            <td className="table__body-cell"><Checkbox
                            checked={isItemSelected}
                            value="primary" 
                            /></td>
                        </tr>
                        })               
                        :
                        clients.map((client,index)=>{
                            const isItemSelected =isSelected(client.branchCode);
                            return  <tr className="table__body-row "
                            onClick={event =>
                                handleClick(event,client.branchCode,client._id)
                            }
                            >
                            <td className="table__body-cell"><p>{client[eight]}</p> </td>
                            <td className="table__body-cell"><p>{client[seven]}</p></td>
                            <td className="table__body-cell"><p>{client[six]}</p></td>
                            <td className="table__body-cell"><p>{client[five]}</p></td>
                            <td className="table__body-cell"><p>{client[four]}</p></td>
                            <td className="table__body-cell"><p>{client[three]}</p></td>
                            <td className="table__body-cell"><p>{client[two]}</p></td>
                            <td className="table__body-cell"><p>{client[one]}</p></td>
                            <td className="table__body-cell"><Checkbox
                            checked={isItemSelected}
                            value="primary" 
                            /></td>
                        </tr>
                        })

                    }
                    
                
        </tbody>
            </table>
        </div>
    );
}


