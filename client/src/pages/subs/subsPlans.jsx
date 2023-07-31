
import { useEffect } from 'react';
import {Container} from 'react-bootstrap';
import axios from "axios";



const SubsPlans = () => {
  

    useEffect(() => {
     fetchPrices();
    }, []);

    const fetchPrices = async () => {
        const response = await axios.get("http://localhost:5000/subs/prices")
       console.log(response);
    }
   
   return  <Container>subsPlans</Container>
  
}

export default SubsPlans;