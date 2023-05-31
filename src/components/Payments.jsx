import React, {useState} from 'react';
import {Form, Button, Row, Col, Image} from 'react-bootstrap';
import {collection,addDoc,serverTimestamp} from "firebase/firestore";
import {ref,getDownloadURL,uploadBytes} from "firebase/storage";
import {v4} from "uuid"
import {fireDB,storage} from "../DB";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MyModal from "./MyModal";

const Payments = () => {
    const [name, setName] = useState('');
    const [roomNumber, setRoomNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [file, setFile] = useState(null);
    const [progresspercent, setProgresspercent] = useState(Number);
    const [isSubmit,setIsSubmit] = useState(false);



    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleRoomNumberChange = (event) => {
        setRoomNumber(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleScreenshotChange = (event) => {
        const file = event.target.files[0];
        setFile(file);

    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (file == null) return;

        const storageRef = ref(storage, `Payment/${file.name + v4()}`);
        const uploadTask = uploadBytes(storageRef, file);

        try {
            const snapshot = await uploadTask;
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgresspercent(progress);

            const imageUrl = await getDownloadURL(storageRef);

            await addDoc(collection(fireDB, "Payments"), {
                Name: name,
                Room_Number: roomNumber,
                Phone_Number: phoneNumber,
                ScreenShot: imageUrl,
                TimeStamp: serverTimestamp()
            });

            // Reset form fields and file after successful upload
            setName('');
            setRoomNumber('');
            setPhoneNumber('');
            setFile('');
            setIsSubmit(true);
        } catch (error) {
            console.log("Error:", error);
        }
    };



    return (
        <div style={{backgroundColor:"#e4e3e9"}}>
        <Navbar/>
            <div className={"h1 text-dark text-center my-5"}>Payments</div>
            <Image src={"./images/PaymentQR.jpg"} alt={"QR Code"} style={{display:"block",width:"fit-content",margin:"auto"}} />
            <div className={"text-center my-4 h5"} style={{textDecoration:"underline"}}>Scan the QR Code to Pay through UPI</div>

        <Form className={"container payment"} onSubmit={handleSubmit}>
            <Row className={"my-4"}>
                <Col>

            <Form.Group>
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    required
                    style={{height:"3rem"}}
                    placeholder={"Enter Name..."}
                />
            </Form.Group>
                </Col>
                <Col>

            <Form.Group>
                <Form.Label>Room Number:</Form.Label>
                <Form.Control
                    type="text"
                    value={roomNumber}
                    onChange={handleRoomNumberChange}
                    required
                    style={{height:"3rem"}}
                    placeholder={"Enter Room Number"}
                />
            </Form.Group>
            </Col>

            </Row>
<Row>
    <Col>

            <Form.Group>
                <Form.Label>Phone Number:</Form.Label>
                <Form.Control
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    required
                    style={{height:"3rem"}}
                    placeholder={"Enter Phone number"}
                />
            </Form.Group>
    </Col>
        <Col>

            <Form.Group>
                <Form.Label>Screenshot Upload:</Form.Label>
                <Form.Control
                    type="file"
                    onChange={handleScreenshotChange}
                    required
                    style={{height:"3rem"}}
                    placeholder={"Upload transaction ScreenShot"}
                />
            </Form.Group>
        </Col>
</Row>

            <Button variant="primary" className={"my-4 px-4 w-25"} size="lg" type="submit">
                Submit
            </Button>

        </Form>
            <MyModal isSubmit={isSubmit} closingButton={setIsSubmit}/>
            {progresspercent&&<div className={"text-center text-dark "}>Uploaded : %{progresspercent}</div>}
    <Footer/>
        </div>

    );
};

export default Payments;
