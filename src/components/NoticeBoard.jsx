import React ,{ useEffect , useState }  from 'react';
import {fireDB}from "../DB.js"
  import {doc,getDoc} from "firebase/firestore"

export default function NoticeBoard() {
  const [notices, setNotices] = useState([]);
  const [rules, setRules] = useState([]);

  useEffect(() => {
    const getNotice = async()=>{
      const docRef = doc(fireDB,"Notifications","Notice")
      const docSnap = await getDoc(docRef)

      if(docSnap.exists()){
        const data = docSnap.data();
        Object.values(data).map(notice=>{
          return setNotices(notices=>[...notices,notice])
        })
      }
    }
    const getRules = async()=>{
      const docRef = doc(fireDB,"Notifications","Rules")
      const docSnap = await getDoc(docRef)

      if(docSnap.exists()){
        const data = docSnap.data();
        Object.values(data).map(rule=>{
          return setRules(rules=>[...rules,rule])
        })
      }
    }
    getNotice();
    getRules();
  
  }, []);

  return (
    <>
      <div className="container">

<div className="row">
  <div className="col-6">
    <h1 className="text-dark ms-auto me-auto" style={{borderBottom:"5px solid rgb(32, 31, 31)", width: "fit-content "}}>Hostel Notice</h1>
    
    <div className="card m-4 " style={{maxHeight:"12rem"}}>
      <div className="card-header text-white">
        Notice
      </div>
      <ul className="overflow-auto text-dark" id="notice"> 
        {Object.values(notices).map((item ,index)=>{
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  </div>
  <div className="col-6">
    <h1 className="text-dark ms-auto me-auto" style={{borderBottom:"5px solid rgb(32, 31, 31)", width: "fit-content "}}>Hostel Rules</h1>
    
    <div className="card m-4 " style={{maxHeight:"12rem"}} >
      <div className="card-header text-white">
        Rules
      </div>
      <ul className="overflow-auto text-dark" id="rules">
      {Object.values(rules).map((item ,index)=>{
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  </div>
</div>
</div>
</>

  )
}
