import React from 'react';
import { Page, Text, View, Document,Font,Image, StyleSheet,PDFViewer } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import {useProjectsValue} from '../context'



Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
  });
  
  const styles = StyleSheet.create({
    body: {
        padding:8
        
      },
      table: { 
        display: "table", 
        width: 708.66, 
        borderStyle: "solid", 
        borderColor: '#bfbfbf',
        
        borderRightWidth: 0, 
        borderBottomWidth: 0,
       
      }, 
      image: {
        width:"50%",
        height:"5%",
        marginTop:0 ,
        marginBottom:10,
        marginRight:"auto",
        marginLeft:"auto"
      },
      tableRow: { 
        margin: "auto", 
        flexDirection: "row" 
      }, 
      tableColHeader: { 
        width: "12%", 
        borderStyle: "solid", 
        borderColor: '#bfbfbf',
        borderBottomColor: '#000',
        borderWidth: 1, 
        borderLeftWidth: 1, 
        borderTopWidth: 1
      },   
      tableCol: { 
        width: "12%", 
        borderStyle: "solid", 
        borderColor: '#bfbfbf',
        borderWidth: 1, 
        borderLeftWidth: 1, 
        borderTopWidth: 0 
      }, 
      tableCellHeader: {
        margin: "auto", 
        margin: 5, 
        fontSize: 12,
        fontWeight: 500
      },  
      tableCell: { 
        margin: "auto", 
        margin: 5, 
        fontSize: 10 
      }
  });

const COM=({one,two,three,four,clientData})=>(
    
    <Document>
        {console.log(one)}
        <Page style={styles.body} size="B4">
          <Image style={styles.image} src="https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Banque_Misr_Logo.svg/1920px-Banque_Misr_Logo.svg.png" />
         <View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableColHeader}> 
          <Text style={styles.tableCellHeader}>{one}</Text> 
          </View> 
          <View style={styles.tableColHeader}> 
            <Text style={styles.tableCellHeader}>{two}</Text> 
          </View> 
          <View style={styles.tableColHeader}> 
            <Text style={styles.tableCellHeader}>{three}</Text> 
          </View> 
          <View style={styles.tableColHeader}> 
            <Text style={styles.tableCellHeader}>{four}</Text> 
          </View> 
          <View style={styles.tableColHeader}> 
            <Text style={styles.tableCellHeader}>{four}</Text> 
          </View> 
          <View style={styles.tableColHeader}> 
            <Text style={styles.tableCellHeader}>{four}</Text> 
          </View> 
          <View style={styles.tableColHeader}> 
            <Text style={styles.tableCellHeader}>{four}</Text> 
          </View> 
          <View style={styles.tableColHeader}> 
            <Text style={styles.tableCellHeader}>{four}</Text> 
          </View> 
        </View>
        {clientData.map(client=>{
            return <View style={styles.tableRow}> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>React-PDF</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>3</Text> 
          </View> 
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text> 
          </View>
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>5€</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>5€</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>5€</Text> 
          </View>
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>5€</Text> 
          </View>
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>5€</Text> 
          </View>
        </View> 
        })}
              
      </View>
    </Page>
  </Document>
) 

export const PDF = ()=> {
    const {one,two,three,four,clientData} =useProjectsValue()
    return(
    <div style={{marginTop:65}}>
<PDFViewer style={{width:1280 , height:1000}}>
    <COM one={one} two={two} three={three} four={four} clientData={clientData}/>
  </PDFViewer>
  </div>
    )
    }






