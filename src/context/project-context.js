import React,{createContext,useContext,useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useClients} from '../hooks'
const moment=require("moment")
export const ProjectsContext =createContext()

export const ProjectsProvider = ({children}) => {
    const {projects , setProjects} =useClients();
    const[branchName ,setBranchName] = useState("") 
    const[branchCode ,setBranchCode] = useState("") 
    const [nameOfPlannedVisitor,setNamePlannedVisitor] = useState('')
    const [clientType,setClientType] = useState('')
    const [current,setCurrent] = useState('')
    const [determinedDate,setDetertminedDate] = useState('')
    const [ofKnowing,setOfKnowing] = useState('')
    const [determinedDateType,setDetertminedDateType] = useState('')
    const [visitDate,setVisitDate] = useState('')
    const [visitPlace,setVisitPlace] = useState('')
    const [nameOfVisitor,setNameVisitor] = useState('')
    const [nameOfVisitorType,setNameVisitorType] = useState('')
    const [constantVisitDate,setConstantVisitDate] = useState('')
    const [personToBeInterviewed,setPersonToBeInterviewed] = useState('')
    const [personToBeInterviewedType,setPersonToBeInterviewedType] = useState('')
    const [personToBeInterviewedPhoneNum,setPersonToBeInterviewedPhoneNum] = useState('')
    const [anotherPersonToInterviewed,setAnotherpersonTobeInterviewed] = useState('')
    const [anotherPersonToInterviewedType,setAnotherpersonTobeInterviewedType] = useState('')
    const [anotherPersonToInterviewedPhoneNum,setAnotherpersonTobeInterviewedPhoneNum] = useState('')
    const [anotherPersonToInterviewedOne,setAnotherpersonTobeInterviewedOne] = useState('')
    const [anotherPersonToInterviewedOneType,setAnotherpersonTobeInterviewedOneType] = useState('')
    const [anotherPersonToInterviewedOnePhoneNum,setAnotherpersonTobeInterviewedOnePhoneNum] = useState('')
    const [visitResult,setVisitResult]=useState('')
    const [reasonOfVisit,setReasonOfVisit]=useState('')
    const [anotherExtraResults,setAnotherExtraResults]=useState('')
    const [notes,setNotes]=useState('')
    const [branchManagerSign,setBranchManagerSign]=useState('')
    const [marketingManagerSign,setMarketinghManagerSign]=useState('')
    const[one,setOne]=useState("تاريخ الزيارة" )
    const[two,setTwo]=useState(" اسم القائم بالزيارة")
    const[three,setThree]=useState(" اسم الجهة او الشخص الزمع زيارته" )
    const[four,setFour]=useState("مكان الزيارة")
    const[five,setFive]=useState("اسم الفرع")
    const[six,setSix]=useState("كود الفرع")
    const[seven,setSeven]=useState(" الشخص المسئول المراد مقابلته")
    const[eight,setEight]=useState("نتيجة الزيارة")
    const [selectedDate, setSelectedDate] = useState(moment());
    const [selectedDate2, setSelectedDate2] =useState(moment());
    const[dateOpen,setDateOpen]=useState(false)


    useEffect(()=>{
        
    },[one,two,three,four,five,six,seven,eight])
    return (
        
            <ProjectsContext.Provider value={{
                projects,
                setProjects,
                one,
                setOne,
                two,
                setTwo,
                three,
                setThree,
                four,
                setFour,
                five,setFive,six,setSix,seven,setSeven,eight,setEight,
                branchName,
                setBranchName,
                branchCode,
                setBranchCode,
                nameOfPlannedVisitor,
                setNamePlannedVisitor,
                clientType,
                setClientType,
                current,
                setCurrent,
                determinedDate,
                setDetertminedDate,
                ofKnowing,
                setOfKnowing,
                determinedDateType,
                setDetertminedDateType,
                visitDate,
                setVisitDate,
                visitPlace,
                setVisitPlace,
                nameOfVisitor,
                setNameVisitor,
                constantVisitDate,
                setConstantVisitDate,
                nameOfVisitorType,
                setNameVisitorType,
                personToBeInterviewed,
                setPersonToBeInterviewed,
                personToBeInterviewedType,
                setPersonToBeInterviewedType,
                personToBeInterviewedPhoneNum,
                setPersonToBeInterviewedPhoneNum,
                anotherPersonToInterviewed,
                setAnotherpersonTobeInterviewed,
                anotherPersonToInterviewedType,
                setAnotherpersonTobeInterviewedType,
                anotherPersonToInterviewedPhoneNum,
                setAnotherpersonTobeInterviewedPhoneNum,
                anotherPersonToInterviewedOne,
                setAnotherpersonTobeInterviewedOne,
                anotherPersonToInterviewedOneType,
                setAnotherpersonTobeInterviewedOneType,
                anotherPersonToInterviewedOnePhoneNum,
                setAnotherpersonTobeInterviewedOnePhoneNum,
                visitResult,
                setVisitResult,
                reasonOfVisit,
                setReasonOfVisit,
                anotherExtraResults,
                setAnotherExtraResults,
                branchManagerSign,
                setBranchManagerSign,
                marketingManagerSign,
                setMarketinghManagerSign,
                notes,
                setNotes,
                selectedDate,
                setSelectedDate,
                setSelectedDate2,
                selectedDate2,
                dateOpen,
                setDateOpen,
                
                
                }}>
                {children}
            </ProjectsContext.Provider>
        
    );
};

export const useProjectsValue =()=> useContext(ProjectsContext);

ProjectsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};