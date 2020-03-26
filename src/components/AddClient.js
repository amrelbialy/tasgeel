import React from 'react'
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








const useStyles = makeStyles(theme => ({

    button: {
        marginTop: theme.spacing(3),
        float:"left"
    },
}));


export const AddClient=()=> {
    const{branchName , branchCode,current,nameOfVisitor,clientType,nameOfPlannedVisitor,determinedDate,ofKnowing,determinedDateType,setDetertminedDateType,
        visitDate,visitPlace,constantVisitDate,nameOfVisitorType,setNameVisitorType,setPersonToBeInterviewedType,
        personToBeInterviewed,personToBeInterviewedType,personToBeInterviewedPhoneNum,
        setPersonToBeInterviewedPhoneNum,anotherPersonToInterviewed,setAnotherpersonTobeInterviewed,anotherPersonToInterviewedType,
        setAnotherpersonTobeInterviewedType,anotherPersonToInterviewedPhoneNum,setAnotherpersonTobeInterviewedPhoneNum,
        anotherPersonToInterviewedOne,setAnotherpersonTobeInterviewedOne,anotherPersonToInterviewedOneType,
        setAnotherpersonTobeInterviewedOneType,anotherPersonToInterviewedOnePhoneNum,setAnotherpersonTobeInterviewedOnePhoneNum,
        reasonOfVisit,visitResult,anotherExtraResults,branchManagerSign,marketingManagerSign,notes
    } =useProjectsValue()
    console.log(determinedDate)
  
    const clientHandler=(event)=>{
        event.preventDefault();
        
    // this.setState(()=>{
    //      return{loading:true}
    //     },()=>{localStorage.setItem('loading', this.state.loading);})
        // http://localhost:8080 https://tasgeel.herokuapp.com/
        fetch("https://tasgeel.herokuapp.com/client/add", {
            method: 'PUT',
            headers: {
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
            if(res.status === 422){
            //   his.setState(()=>{
            //     return{warning:true}
            //   },()=>{localStorage.setItem('warning', this.state.warning);})
              // throw new Error(
              //   "Validation failed. Make sure the email address isn't used yet!"
              // );
              // this.setState(() => {
              //   return { modalFail: true , modalSuccess:false }
              // })
            }
            if(res.status !== 200 && res.status !==201){
            //   this.setState(()=>{
            //     return{warning:true}
            //   },()=>{localStorage.setItem('warning', this.state.warning);})
              // console.log('Error!');
              // throw new Error('Creating a user failed!');
            }
            if(res.status === 200 || res.status === 201){
            //   this.setState(()=>{
            //     return{loading:false , open:true}
            //   },()=>{localStorage.setItem('loading', this.state.loading);})
              
            }
          })
        }
    const classes = useStyles()
    const form =(
        <form onSubmit={e=>clientHandler(e)} >
            <Grid container  spacing = {2}>
                <BranchCode/>
                <BranchName/>
                <Current/>
                <ClientType/>
                <NameOfPlannedVisitor/>
                <Type func={setDetertminedDateType} name="determinedDataType" />
                <OfKnowing/>
                <VisitDeterminedDate/>
                <VisitPlace/>
                <VisitDate/>
                <ConstantVisitData/>
                <Type func={setNameVisitorType} name="nameVisitorType"/>
                <NameOfVisitor/>

                <PhoneNumber func={setPersonToBeInterviewedPhoneNum} name="personToBeInterviewedPhoneNum"/>
                <Type func={setPersonToBeInterviewedType} name="personToBeInterviewedType"/>
                <PersonToBeInterviewed/>

                <PhoneNumber func={setAnotherpersonTobeInterviewedPhoneNum} name="anotherToBeInterviewedPhoneNum"/>
                <Type func={setAnotherpersonTobeInterviewedType} name="anotherToBeInterviewedPhoneNum"/>
                <AnotherToBeInterviewed func={setAnotherpersonTobeInterviewed}/>

                <PhoneNumber func={setAnotherpersonTobeInterviewedOnePhoneNum} name="anotherToBeInterviewedOnePhoneNum"/>
                <Type func={setAnotherpersonTobeInterviewedOneType} name="anotherToBeInterviewedOnePhoneNum"/>
                <AnotherToBeInterviewed func={setAnotherpersonTobeInterviewedOne}/>

                <VisitResult/>
                <ReasonOfVisit/>
                <AnotherExtraResults/>

                <BranchManagerSign/>
                <MarketingManagerSign/>
                <Notes/>
                
        
            </Grid>
            <Grid item>
            <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.button}
            >
            اضافة العميل  
            </Button>
            </Grid> 

        </form>
    )
    return (
        <div>
        <Papers component={form} name={"اضافة عميل"} path={"الرئيسية / اضافة عميل"} icon={"اضافة عميل"} />
        </div>
    )
}
