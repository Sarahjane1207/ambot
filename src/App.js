import Card from "./Components/myCard";
import Card2 from "./Components/myCard2";
import { useState } from "react";

function App() {
const [allData1, setallData1] = useState([
  {
    id:1,
    firstName: "Keith Reyes",
    image:"https://scontent.fdvo1-1.fna.fbcdn.net/v/t1.15752-9/368027661_1535160293935073_7728962323159191460_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHoTdlFPQw-0PP2bsbqEm1gU4zdHGpeEQFTjN0cal4RAewBSoedVNpZp2D-EkCTI8e-925UPP0yUtstimBJ6mYo&_nc_ohc=d1naMCghrAcAb7JCCQ5&_nc_ht=scontent.fdvo1-1.fna&oh=03_AdWcPerqRLx2aTrJ6BkA-GVg7nbCRzW8WsGXdL0xHrn7CQ&oe=6645A2C5",
    title:"Title"
  },
  {
    id:2,
    firstName: "Keith Reyes",
    image:"https://scontent.fdvo1-1.fna.fbcdn.net/v/t1.15752-9/368027661_1535160293935073_7728962323159191460_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHoTdlFPQw-0PP2bsbqEm1gU4zdHGpeEQFTjN0cal4RAewBSoedVNpZp2D-EkCTI8e-925UPP0yUtstimBJ6mYo&_nc_ohc=d1naMCghrAcAb7JCCQ5&_nc_ht=scontent.fdvo1-1.fna&oh=03_AdWcPerqRLx2aTrJ6BkA-GVg7nbCRzW8WsGXdL0xHrn7CQ&oe=6645A2C5",
    title:"Title" 
  },
  {
    id:3,
    firstName: "Keith Reyes",
    image:"https://scontent.fdvo1-1.fna.fbcdn.net/v/t1.15752-9/368027661_1535160293935073_7728962323159191460_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHoTdlFPQw-0PP2bsbqEm1gU4zdHGpeEQFTjN0cal4RAewBSoedVNpZp2D-EkCTI8e-925UPP0yUtstimBJ6mYo&_nc_ohc=d1naMCghrAcAb7JCCQ5&_nc_ht=scontent.fdvo1-1.fna&oh=03_AdWcPerqRLx2aTrJ6BkA-GVg7nbCRzW8WsGXdL0xHrn7CQ&oe=6645A2C5",
    title:"Title" 
  },
  {
    id:4,
    firstName: "Keith Reyes",
    image:"https://scontent.fdvo1-1.fna.fbcdn.net/v/t1.15752-9/368027661_1535160293935073_7728962323159191460_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHoTdlFPQw-0PP2bsbqEm1gU4zdHGpeEQFTjN0cal4RAewBSoedVNpZp2D-EkCTI8e-925UPP0yUtstimBJ6mYo&_nc_ohc=d1naMCghrAcAb7JCCQ5&_nc_ht=scontent.fdvo1-1.fna&oh=03_AdWcPerqRLx2aTrJ6BkA-GVg7nbCRzW8WsGXdL0xHrn7CQ&oe=6645A2C5",
    title:"Title" 
  },
  {
    id:5,
    firstName: "Keith Reyes",
    image:"https://scontent.fdvo1-1.fna.fbcdn.net/v/t1.15752-9/368027661_1535160293935073_7728962323159191460_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHoTdlFPQw-0PP2bsbqEm1gU4zdHGpeEQFTjN0cal4RAewBSoedVNpZp2D-EkCTI8e-925UPP0yUtstimBJ6mYo&_nc_ohc=d1naMCghrAcAb7JCCQ5&_nc_ht=scontent.fdvo1-1.fna&oh=03_AdWcPerqRLx2aTrJ6BkA-GVg7nbCRzW8WsGXdL0xHrn7CQ&oe=6645A2C5",
    title:"Title" 
  },
  {
    id:6,
    firstName: "Keith Reyes",
    image:"https://scontent.fdvo1-1.fna.fbcdn.net/v/t1.15752-9/368027661_1535160293935073_7728962323159191460_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHoTdlFPQw-0PP2bsbqEm1gU4zdHGpeEQFTjN0cal4RAewBSoedVNpZp2D-EkCTI8e-925UPP0yUtstimBJ6mYo&_nc_ohc=d1naMCghrAcAb7JCCQ5&_nc_ht=scontent.fdvo1-1.fna&oh=03_AdWcPerqRLx2aTrJ6BkA-GVg7nbCRzW8WsGXdL0xHrn7CQ&oe=6645A2C5",
    title:"Title" 
  },
  {
    id:7,
    firstName: "Keith Reyes",
    image:"https://scontent.fdvo1-1.fna.fbcdn.net/v/t1.15752-9/368027661_1535160293935073_7728962323159191460_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHoTdlFPQw-0PP2bsbqEm1gU4zdHGpeEQFTjN0cal4RAewBSoedVNpZp2D-EkCTI8e-925UPP0yUtstimBJ6mYo&_nc_ohc=d1naMCghrAcAb7JCCQ5&_nc_ht=scontent.fdvo1-1.fna&oh=03_AdWcPerqRLx2aTrJ6BkA-GVg7nbCRzW8WsGXdL0xHrn7CQ&oe=6645A2C5",
    title:"Title" 
  },
  {
    id:8,
    firstName: "Keith Reyes",
    image:"https://scontent.fdvo1-1.fna.fbcdn.net/v/t1.15752-9/368027661_1535160293935073_7728962323159191460_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHoTdlFPQw-0PP2bsbqEm1gU4zdHGpeEQFTjN0cal4RAewBSoedVNpZp2D-EkCTI8e-925UPP0yUtstimBJ6mYo&_nc_ohc=d1naMCghrAcAb7JCCQ5&_nc_ht=scontent.fdvo1-1.fna&oh=03_AdWcPerqRLx2aTrJ6BkA-GVg7nbCRzW8WsGXdL0xHrn7CQ&oe=6645A2C5",
    title:"Title" 
  },
  {
    id:9,
    firstName: "Keith Reyes",
    image:"https://scontent.fdvo1-1.fna.fbcdn.net/v/t1.15752-9/368027661_1535160293935073_7728962323159191460_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHoTdlFPQw-0PP2bsbqEm1gU4zdHGpeEQFTjN0cal4RAewBSoedVNpZp2D-EkCTI8e-925UPP0yUtstimBJ6mYo&_nc_ohc=d1naMCghrAcAb7JCCQ5&_nc_ht=scontent.fdvo1-1.fna&oh=03_AdWcPerqRLx2aTrJ6BkA-GVg7nbCRzW8WsGXdL0xHrn7CQ&oe=6645A2C5",
    title:"Title" 
  },
  {
    id:10,
    firstName: "Keith Reyes",
    image:"https://scontent.fdvo1-1.fna.fbcdn.net/v/t1.15752-9/368027661_1535160293935073_7728962323159191460_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHoTdlFPQw-0PP2bsbqEm1gU4zdHGpeEQFTjN0cal4RAewBSoedVNpZp2D-EkCTI8e-925UPP0yUtstimBJ6mYo&_nc_ohc=d1naMCghrAcAb7JCCQ5&_nc_ht=scontent.fdvo1-1.fna&oh=03_AdWcPerqRLx2aTrJ6BkA-GVg7nbCRzW8WsGXdL0xHrn7CQ&oe=6645A2C5",
    title:"Title" 
  },
  {
    id:11,
    firstName: "Keith Reyes",
    image:"https://scontent.fdvo1-1.fna.fbcdn.net/v/t1.15752-9/368027661_1535160293935073_7728962323159191460_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHoTdlFPQw-0PP2bsbqEm1gU4zdHGpeEQFTjN0cal4RAewBSoedVNpZp2D-EkCTI8e-925UPP0yUtstimBJ6mYo&_nc_ohc=d1naMCghrAcAb7JCCQ5&_nc_ht=scontent.fdvo1-1.fna&oh=03_AdWcPerqRLx2aTrJ6BkA-GVg7nbCRzW8WsGXdL0xHrn7CQ&oe=6645A2C5",
    title:"Title" 
  },
  {
    id:12,
    firstName: "Keith Reyes",
    image:"https://scontent.fdvo1-1.fna.fbcdn.net/v/t1.15752-9/368027661_1535160293935073_7728962323159191460_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHoTdlFPQw-0PP2bsbqEm1gU4zdHGpeEQFTjN0cal4RAewBSoedVNpZp2D-EkCTI8e-925UPP0yUtstimBJ6mYo&_nc_ohc=d1naMCghrAcAb7JCCQ5&_nc_ht=scontent.fdvo1-1.fna&oh=03_AdWcPerqRLx2aTrJ6BkA-GVg7nbCRzW8WsGXdL0xHrn7CQ&oe=6645A2C5",
    title:"Title" 
  },
])
const [allData2, setallData2] = useState([
  {
    id:1,
    image:"https://scontent.fdvo1-2.fna.fbcdn.net/v/t1.15752-9/375758450_1461149834801321_7477939067298976561_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEhYqJ6Hg7FDAgGusutoGcTuzT7kAbtrjq7NPuQBu2uOl1gRgFgxy3wPF_t4Tm36pyFHWN9FXYZezXhN5gqu6Sw&_nc_ohc=bEYgvw06x7gAb4540m3&_nc_ht=scontent.fdvo1-2.fna&oh=03_AdVSYJIPgqnki-MfC5QNcn5xqNlinI8Qk7sDdlU3aJhvWg&oe=664588E7"
  },
  {
    id:2,
    image:"https://scontent.fdvo1-2.fna.fbcdn.net/v/t1.15752-9/375758450_1461149834801321_7477939067298976561_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEhYqJ6Hg7FDAgGusutoGcTuzT7kAbtrjq7NPuQBu2uOl1gRgFgxy3wPF_t4Tm36pyFHWN9FXYZezXhN5gqu6Sw&_nc_ohc=bEYgvw06x7gAb4540m3&_nc_ht=scontent.fdvo1-2.fna&oh=03_AdVSYJIPgqnki-MfC5QNcn5xqNlinI8Qk7sDdlU3aJhvWg&oe=664588E7"
  },
  {
    id:3,
    image:"https://scontent.fdvo1-2.fna.fbcdn.net/v/t1.15752-9/375758450_1461149834801321_7477939067298976561_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEhYqJ6Hg7FDAgGusutoGcTuzT7kAbtrjq7NPuQBu2uOl1gRgFgxy3wPF_t4Tm36pyFHWN9FXYZezXhN5gqu6Sw&_nc_ohc=bEYgvw06x7gAb4540m3&_nc_ht=scontent.fdvo1-2.fna&oh=03_AdVSYJIPgqnki-MfC5QNcn5xqNlinI8Qk7sDdlU3aJhvWg&oe=664588E7"
  },
  {
    id:4,
    image:"https://scontent.fdvo1-2.fna.fbcdn.net/v/t1.15752-9/375758450_1461149834801321_7477939067298976561_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEhYqJ6Hg7FDAgGusutoGcTuzT7kAbtrjq7NPuQBu2uOl1gRgFgxy3wPF_t4Tm36pyFHWN9FXYZezXhN5gqu6Sw&_nc_ohc=bEYgvw06x7gAb4540m3&_nc_ht=scontent.fdvo1-2.fna&oh=03_AdVSYJIPgqnki-MfC5QNcn5xqNlinI8Qk7sDdlU3aJhvWg&oe=664588E7"
  },
  {
    id:5,
    image:"https://scontent.fdvo1-2.fna.fbcdn.net/v/t1.15752-9/375758450_1461149834801321_7477939067298976561_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEhYqJ6Hg7FDAgGusutoGcTuzT7kAbtrjq7NPuQBu2uOl1gRgFgxy3wPF_t4Tm36pyFHWN9FXYZezXhN5gqu6Sw&_nc_ohc=bEYgvw06x7gAb4540m3&_nc_ht=scontent.fdvo1-2.fna&oh=03_AdVSYJIPgqnki-MfC5QNcn5xqNlinI8Qk7sDdlU3aJhvWg&oe=664588E7"
  },
  {
    id:6,
    image:"https://scontent.fdvo1-2.fna.fbcdn.net/v/t1.15752-9/375758450_1461149834801321_7477939067298976561_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEhYqJ6Hg7FDAgGusutoGcTuzT7kAbtrjq7NPuQBu2uOl1gRgFgxy3wPF_t4Tm36pyFHWN9FXYZezXhN5gqu6Sw&_nc_ohc=bEYgvw06x7gAb4540m3&_nc_ht=scontent.fdvo1-2.fna&oh=03_AdVSYJIPgqnki-MfC5QNcn5xqNlinI8Qk7sDdlU3aJhvWg&oe=664588E7"
  },
  {
    id:7,
    image:"https://scontent.fdvo1-2.fna.fbcdn.net/v/t1.15752-9/375758450_1461149834801321_7477939067298976561_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEhYqJ6Hg7FDAgGusutoGcTuzT7kAbtrjq7NPuQBu2uOl1gRgFgxy3wPF_t4Tm36pyFHWN9FXYZezXhN5gqu6Sw&_nc_ohc=bEYgvw06x7gAb4540m3&_nc_ht=scontent.fdvo1-2.fna&oh=03_AdVSYJIPgqnki-MfC5QNcn5xqNlinI8Qk7sDdlU3aJhvWg&oe=664588E7"
  },
])


return (
  <div className="mx-0 my-0">
    <Card datav={allData1}/>
  <div className="mt-10"> 
    <Card2 datav={allData2}/>
    </div> 
  </div>
);
}

export default App;
