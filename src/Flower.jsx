import React from "react";
const flower =[
    {
        id :1,
        url : "https://www.google.com/imgres?q=flowers&imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod%2Fimages%2Fspring-flowers-65de4a13478ee.jpg%3Fcrop%3D0.668xw%3A1.00xh%3B0.287xw%2C0%26resize%3D1200%3A*&imgrefurl=https%3A%2F%2Fwww.thepioneerwoman.com%2Fhome-lifestyle%2Fgardening%2Fg35511393%2Fspring-flowers%2F&docid=NF4Pp3x2g6jFJM&tbnid=0TsMVemMGhMv8M&vet=12ahUKEwi7qISQ-P6LAxU3SmwGHfTKAP0QM3oECGUQAA..i&w=1200&h=1197&hcb=2&ved=2ahUKEwi7qISQ-P6LAxU3SmwGHfTKAP0QM3oECGUQAA",
        caption: "rose"
    },
    {
        id :2,
        url:"https://www.google.com/imgres?q=flowers&imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F2e%2Fcf%2F06%2F2ecf067a2069128f44d75d25a32e219e.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F265149496801668561%2F&docid=3QAq75B17JiKAM&tbnid=NtCR70pRveVRiM&vet=12ahUKEwi7qISQ-P6LAxU3SmwGHfTKAP0QM3oECF0QAA..i&w=597&h=900&hcb=2&ved=2ahUKEwi7qISQ-P6LAxU3SmwGHfTKAP0QM3oECF0QAA",
        caption: "jasmin"
    }
];
function Flower(){
    return(
        <>
        {flower.map((e) => (
            <div key={e.id}>
                <img src={e.url} alt={e.caption} />
                <p>Caption : {e.caption}</p>
                <hr />
            </div>
        ))}

       
        </>
    )
}
export default Flower;
