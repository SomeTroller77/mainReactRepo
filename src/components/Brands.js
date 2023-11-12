import { useEffect, useState } from "react";

export default function Brands(){
    const [resdata, setResData] = useState([]);
    useEffect(() =>{
        const fetchData = async function(){
            fetch('http://localhost:8080/getBrandList').then(async function(res){
                var data = await res.json();
                console.log(data);
                data.sort((a, b) => a.position - b.position);
                setResData(data);
            });
        };
        fetchData();
    }, []);  
    return(
        <>
            <div id="modal">
                <div id="popupbox" className="popup">
                    <button type="button" id="closepop" onClick={() => {
                        document.getElementById('popupbox').style.display = "none";
                        document.getElementById('modal').style.display = "none";
                    }}>Close</button> 
                    <h1 style={{color:"white"}}>hey this is a popup</h1>
                </div>
            </div>
            <table style={{position:"relative", top:"100px", left:"650px"}}>
                <th>
                    <tr>
                        <td>Brand Name</td>
                        <td>Position</td>
                    </tr>
                </th>
                <tbody>
                    {resdata.map(function({BrandName, position}){
                        console.log(BrandName);
                        return <tr className="tborder"><td className="tborder">{BrandName}</td><td className="tborder">{position}</td></tr>
                    })}
                </tbody>
            </table>
        </>
    ); 
}