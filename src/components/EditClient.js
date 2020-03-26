import React ,{useEffect} from 'react'
import { Papers } from './layout/Papers'
import {Grid , Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import {BranchName} from './inputs/BranchName'
import {BranchCode} from './inputs/BranchCode'
import {NameOfPlannedVisitor} from './inputs/NameOfPlannedVisitor'
import {ClientType} from './inputs/ClientType'
import {Current} from './inputs/Current'
import {useProjectsValue} from '../context'
import { VisitDeterminedDate } from './inputs/VisitDeterminedDate'
import { OfKnowing } from './inputs/OfKnowing'
import { Type } from './inputs/Type'
import { VisitDate } from './inputs/VisitDate'
import { VisitPlace } from './inputs/VisitPlace'
import { ConstantVisitData } from './inputs/ConstantVisitData'
import { NameOfVisitor } from './inputs/NameOfVisitor'
import { PersonToBeInterviewed } from './inputs/PersonToBeInterviewed'
import { PhoneNumber } from './inputs/PhoneNumber'
import { AnotherToBeInterviewed } from './inputs/AnotherToBeInterviewed'
import { VisitResult } from './inputs/VisitResult'
import { AnotherExtraResults } from './inputs/AnotherExtraResults'
import { ReasonOfVisit } from './inputs/ReasonOfVisit'
import { BranchManagerSign } from './inputs/BranchManagerSign'
import { Notes } from './inputs/Notes'
import { MarketingManagerSign } from './inputs/MarketingManagerSign'
import {useParams} from 'react-router-dom'
import axios from 'axios';






const useStyles = makeStyles(theme => ({

    button: {
        marginTop: theme.spacing(3),
        float:"left"
    },
}));


export const EditClient=()=> {
    
    const classes = useStyles()
    const{branchName ,setBranchName,branchCode,setBranchCode,current,setCurrent,nameOfVisitor,setNameVisitor,
        clientType,setClientType,nameOfPlannedVisitor,setNamePlannedVisitor,determinedDate,setDetertminedDate,
        ofKnowing,setOfKnowing,determinedDateType,setDetertminedDateType,visitDate,setVisitDate,
        visitPlace,setVisitPlace,constantVisitDate,setConstantVisitDate,nameOfVisitorType,setNameVisitorType,
        personToBeInterviewed,setPersonToBeInterviewed,personToBeInterviewedType,setPersonToBeInterviewedType,
        personToBeInterviewedPhoneNum,setPersonToBeInterviewedPhoneNum,anotherPersonToInterviewed,setAnotherpersonTobeInterviewed,anotherPersonToInterviewedType,
        setAnotherpersonTobeInterviewedType,anotherPersonToInterviewedPhoneNum,setAnotherpersonTobeInterviewedPhoneNum,
        anotherPersonToInterviewedOne,setAnotherpersonTobeInterviewedOne,anotherPersonToInterviewedOneType,
        setAnotherpersonTobeInterviewedOneType,anotherPersonToInterviewedOnePhoneNum,setAnotherpersonTobeInterviewedOnePhoneNum,
        reasonOfVisit, setReasonOfVisit , visitResult,setVisitResult,anotherExtraResults,setAnotherExtraResults,
        branchManagerSign,setBranchManagerSign,marketingManagerSign,setMarketinghManagerSign,notes,setNotes
    } =useProjectsValue()
    let clientId =useParams().clientId;
    

    const editClientHandler=(e,id)=>{
        e.preventDefault()
        
        //https://tasgeel.herokuapp.com/ http://localhost:8080
    fetch("https://tasgeel.herokuapp.com/client/" + id, {
        method: 'PUT',
        headers: {
        //   Authorization:'Bearer ' + localStorage.token,
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                branchName , 
                branchCode,
                current,
                nameOfVisitor,
                clientType,
                nameOfPlannedVisitor,
                determinedDate,
                ofKnowing,
                determinedDateType,
                visitDate,
                visitPlace,
                constantVisitDate,
                nameOfVisitorType,
                personToBeInterviewed,
                personToBeInterviewedType,
                personToBeInterviewedPhoneNum,
                anotherPersonToInterviewed,
                anotherPersonToInterviewedType,
                anotherPersonToInterviewedPhoneNum,
                anotherPersonToInterviewedOne,
                anotherPersonToInterviewedOneType,
                anotherPersonToInterviewedOnePhoneNum,
                reasonOfVisit,
                visitResult,
                anotherExtraResults,
                branchManagerSign,
                marketingManagerSign,
                notes
    })
    }).then(res=>{
        if(res.status === 200 || res.status === 201){
            console.log(res.data)
        }
    
    })
    .catch((error) => {
        console.log(error);
    })
    }

    
    useEffect(()=>{
        let isCancelled = false;
        //https://tasgeel.herokuapp.com/ http://localhost:8080
        
        axios.get('https://tasgeel.herokuapp.com/client/' + clientId,{
            headers: {
            // Authorization:'Bearer ' + token,
            'Content-Type': 'application/json'
        },  
        })
        .then(res => {
            if(res.status === 200 || res.status === 201){
            console.log(res.data.client)
                let clients = res.data.client
                
                setBranchName(clients.branchName)
                setBranchCode(clients.branchCode)
                setCurrent(clients.current)
                setNameVisitor(clients.nameOfVisitor)
                setClientType(clients.clientType)
                setNamePlannedVisitor(clients.nameOfPlannedVisitor)
                setDetertminedDate(clients.determinedDate)
                setOfKnowing(clients.ofKnowing)
                setDetertminedDateType(clients.determinedDateType)
                setVisitDate(clients.visitDate)
                setVisitPlace(clients.visitPlace)
                setConstantVisitDate(clients.constantVisitDate)
                setNameVisitorType(clients.nameOfVisitorType)
                setPersonToBeInterviewed(clients.personToBeInterviewed)
                setPersonToBeInterviewedType(clients.personToBeInterviewedType)
                setPersonToBeInterviewedPhoneNum(clients.personToBeInterviewedPhoneNum)
                setAnotherpersonTobeInterviewed(clients.anotherPersonToBeInterviewed)
                setAnotherpersonTobeInterviewedType(clients.anotherPersonToBeInterviewedType)
                setAnotherpersonTobeInterviewedPhoneNum(clients.anotherPersonToBeInterviewedPhoneNum)
                setAnotherpersonTobeInterviewedOne(clients.anotherPersonToBeInterviewedOne)
                setAnotherpersonTobeInterviewedOneType(clients.anotherPersonToBeInterviewedOneType)
                setAnotherpersonTobeInterviewedOnePhoneNum(clients.anotherPersonToBeInterviewedOnePhoneNum)
                setReasonOfVisit(clients.reasonOfVisit)
                setVisitResult(clients.visitResult)
                setAnotherExtraResults(clients.anotherExtraResults)
                setBranchManagerSign(clients.branchManagerSign)
                setMarketinghManagerSign(clients.marketingManagerSign)
                setNotes(clients.notes)
            }
            })
        .catch((error) => {
            console.log(error);
        })
        return ()=>{
            isCancelled = true;
        }
    },[clientId]) 

    
    const form =(
        <form onSubmit={e=>editClientHandler(e,clientId)} >
            
              
                    <Grid container  spacing = {2}>
                    <BranchCode value={branchCode}/>
                    <BranchName value={branchName}/>
                    <Current value={current}/>
                    <ClientType value={clientType}/>
                    <NameOfPlannedVisitor value={nameOfPlannedVisitor}/>
                    <Type func={setDetertminedDateType} name="determinedDataType" value={determinedDateType}/>
                    <OfKnowing value={ofKnowing}/>
                    <VisitDeterminedDate value={determinedDate}/>
                    <VisitPlace value={visitPlace}/>
                    <VisitDate value={visitDate}/>
                    <ConstantVisitData value={constantVisitDate}/>
                    <Type func={setNameVisitorType} name="nameVisitorType" value={nameOfVisitorType}/>
                    <NameOfVisitor value={nameOfVisitor} />
    
                    <PhoneNumber func={setPersonToBeInterviewedPhoneNum} name="personToBeInterviewedPhoneNum" value={personToBeInterviewedPhoneNum} />
                    <Type func={setPersonToBeInterviewedType} name="personToBeInterviewedType" value={personToBeInterviewedType} />
                    <PersonToBeInterviewed value={personToBeInterviewed} />
    
                    <PhoneNumber  value={anotherPersonToInterviewedPhoneNum}  func={setAnotherpersonTobeInterviewedPhoneNum} name="anotherToBeInterviewedPhoneNum"/>
                    <Type  value={anotherPersonToInterviewedType} func={setAnotherpersonTobeInterviewedType} name="anotherToBeInterviewedPhoneNum"/>
                    <AnotherToBeInterviewed value={anotherPersonToInterviewed}  func={setAnotherpersonTobeInterviewed}/>
                    
                    <PhoneNumber value={anotherPersonToInterviewedOnePhoneNum}  func={setAnotherpersonTobeInterviewedOnePhoneNum} name="anotherToBeInterviewedOnePhoneNum"/>
                    <Type  value={anotherPersonToInterviewedOneType} func={setAnotherpersonTobeInterviewedOneType} name="anotherToBeInterviewedOnePhoneNum"/>
                    <AnotherToBeInterviewed value={anotherPersonToInterviewed}  func={setAnotherpersonTobeInterviewedOne}/>

                    <VisitResult value={visitResult} />
                    <ReasonOfVisit value={reasonOfVisit} />
                    <AnotherExtraResults value={anotherExtraResults} />
    
                    <BranchManagerSign value={branchManagerSign} />
                    <MarketingManagerSign value={marketingManagerSign} />
                    <Notes/>
                    </Grid>
        
        
           
            <Grid item>
            <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.button}
            >
            تعديل العميل  
            </Button>
            </Grid> 

        </form>
    )
    return (
        <div>
        <Papers component={form} name={"تعديل عميل"} path={"الرئيسية / تعديل عميل"} icon={"تعديل عميل"} />
        </div>
    )
}