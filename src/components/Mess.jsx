import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Mess() {
  return (
    <>
        <Navbar/>
      <div className="seven text-light m-3">
        <h1 style={{color: "black"}}>Diet Plan of Mess</h1>
      </div>

    <div className="container">
        <table id="table1" className={"adjust-width"}>
            <tr id="tr1">
                <th id="th1">Sr No.</th>
                <th id="th1">Days</th>
                <th id="th1">
                    Breaksfast <br />
                    (8:00am to 9:00am)
                </th>
          <th id="th1">Lunch <br />(12:30pm to 2:00 pm)</th>
          <th id="th1">Dinner <br />(8:00pm to 9:00pm)</th>
        </tr>
        <tr id="tr2">
            <td id="td1">1</td>
            <td id="td1">Monday</td>
            <td id="td1">
                Allu Paratha, <br />
                Butter ,Dahi,Sauce
            </td>
            <td id="td1">
            Rajma-Rice, <br />
            Chapati,Raita Bundi(Optional)
        </td>
        <td id="td1">Mix Veg,Rice, Chapati <br />Dal(Arhar+Masur),Chhena</td>
    </tr>
    <tr id="tr3">
        <td id="td2">2</td>
        <td id="td2">Tuesday</td>
        <td id="td2">Dall Paratha, Butter <br />Dahi, Sause</td>
        <td id="td2">
            Soyabean, Rice, Chapati, <br />
            Raita Bundi(Optional) <br />
        </td>
        <td id="td2">Matar Paneer, Chapati <br/>Rice</td>
    </tr>
        <tr id="tr4">
            <td id="td3">3</td>
            <td id="td3">Wednesday</td>
            <td id="td3">Plain Paratha + Allu Zira <br/>Sabji</td>
            <td id="td3">Black Channa, Rice, Chapati <br/>Raita(OPTIONAL)</td>
            <td id="td3">Allu Gobhi, Dal(Mong) <br/>Rice, Chapti </td>
        </tr>
        <tr id="tr5">
            <td id="td4">4</td>
            <td id="td4">Thursday</td>
          <td id="td4">Pyaz Paratha, Butter, Dahi <br/>Sause</td>
          <td id="td4">Chhole-Rice, Chapati,Raita <br/>Bundi(Optional)</td>
          <td id="td4">Masala Chann, Chapati,<br/> Rice</td>
        </tr>
        <tr id="tr6">
            <td id="td5">5</td>
            <td id="td5">Friday</td>
            <td id="td5">Muli Paratha, Butter, Dahi <br/>Sause</td>
            <td id="td5">Veg-Biryani/Dal(Arhar) <br/>Rice,Chokha(Allu)</td>
            <td id="td5">Seasonal Veg, Dal(Mix) <br/>Chapati,Rice, Kheer</td>
        </tr>
        <tr id="tr7">
          <td id="td6">6</td>
          <td id="td6">Saturday</td>
          <td id="td6">Poha and Tea</td>
          <td id="td6">Kadhi-Chawal, Chapati</td>
          <td id="td6">Patta-Gobhi-Matar <br/>Dal(Channa),Chapati,Rice</td>
        </tr>
        <tr id="tr8">
            <td id="td7">7</td>
            <td id="td7">Sunday</td>
            <td id="td7">Puri, Allu Chhole <br/>(10AM to 11AM)</td>
            <td id="td7">Samosa with Lal Chatni <br/>(4:00PM to 4:30pm)</td>
            <td id="td7">Kadhai Paneer, Egg, Rice <br/>Chapati</td>
        </tr>
    </table>
</div>
<br/>

        {/*<Search />*/}
  <div className="container">
    <div id="studentDetails"></div>
  </div>
<section className="container">
    <div className="row">
            <div className="col-6">

                <div className="card m-4 " style={{maxHeight:"10rem"}}>
                    <div className="card-header text-white">
                        Mess Bills
                    </div>
        <ol className="overflow-auto" > 
            
            <a href="./images/mess1.jpg" className="messbill">Mess Bill of November</a> <br/>
            <a href="./images/mess2.jpg" className="messbill">Mess Bill of October</a> <br/>
            <a href="./images/mess3.jpg" className="messbill">Mess Bill of September</a> <br/>
            <a href="./images/mess1.jpg" className="messbill">Mess Bill of August</a> <br/>
            <a href="./images/mess2.jpg" className="messbill">Mess Bill of July</a> <br/>
            <a href="./images/mess3.jpg" className="messbill">Mess Bill of June</a> <br/>
            <a href="./images/mess1.jpg" className="messbill">Mess Bill of May</a> <br/>
            <a href="./images/mess2.jpg" className="messbill">Mess Bill of April</a> 
        </ol>
    </div>
    </div>
    <div className="col-6">

        <div className="card m-4 " style={{maxHeight:"10rem"}}>
            <div className="card-header  text-white">
                Mess Rules
            </div>
            <ul className="overflow-auto" id="rules">
                <li><strong>Clean up after yourself:</strong> One of the most important rules for maintaining a tidy dorm room is to clean up after yourself. Whether it's dirty dishes, trash, or personal belongings, make it a habit to put things back in their designated places and dispose of trash appropriately. By taking responsibility for your own mess, you contribute to a cleaner living environment for everyone.</li>
                <li><strong>Establish a cleaning schedule:</strong> Create a cleaning schedule with your roommates to ensure that regular cleaning tasks are shared and no one is burdened with all the responsibilities. Assign specific days for tasks such as vacuuming, taking out the trash, and wiping down surfaces. By sticking to a schedule, you'll prevent the mess from piling up and maintain a more organized living space.</li>
                <li><strong>Limit clutter:</strong> Dorm rooms often have limited space, so it's important to keep clutter to a minimum. Avoid accumulating unnecessary items and regularly declutter your room by donating or discarding items you no longer need. Keep surfaces clear of excessive belongings to create a more open and spacious environment.</li>
                <li><strong>Communicate with your roommates:</strong> Effective communication with your roommates is crucial for maintaining a clean and organized dorm room. Discuss expectations and establish guidelines for cleanliness and shared responsibilities. If someone is not adhering to the agreed-upon rules, address the issue in a respectful and constructive manner to find a solution together.</li>
                <li><strong>Practice good hygiene:</strong> Personal hygiene plays a significant role in keeping a dorm room clean and fresh. Encourage everyone in the dorm to practice good hygiene habits, such as regularly doing laundry, cleaning bedding, and maintaining personal cleanliness. This helps prevent odors, dirt, and bacteria from accumulating in the living space, contributing to a more pleasant and hygienic environment for everyone.</li>
            </ul>
        </div>
    </div>
</div>
</section>
<Footer/>
</>
  )
}
