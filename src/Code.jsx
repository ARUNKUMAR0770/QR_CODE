import {useState} from "react";

export const Code = () =>{
  const [img, setImg] = useState("");// this usestate is for get image from the api to to fit it in img tag 
  const [loading, setLoading] = useState(false);// this usestate is for loading, when the api is loading it will show loading... 
  const [qrData, setQrData] = useState("");
  const [size, setSize] = useState("")  
  async function generateQR(){
    setLoading(true);
    try{
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(qrData)}`;
      setImg(url);
    }catch(error){
    }finally{
        setLoading(false);
      }
  }
  function downloadQR(){
    fetch(img).then((response)=>response.blob()).then((blob)=>{
      const link = document.createElement("a");
      link.href=URL.createObjectURL(blob);
      link.download="qrcode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  
  return(
   <div className="app-container">
    <h2 className='header'>QR CODE GENERATOR</h2>
    {img && <img src={img} alt=""  className='qr-img'/>  }
    {loading && <p>Loading...</p>}
    <div>
      <label htmlFor="datainput" className="input-label">Data for QR code:</label>
      <input type='text' value={qrData} disabled={loading} id="datainput" placeholder="Enter Url..." onChange={(e)=>setQrData(e.target.value)}/>

      <label htmlFor="datasize" className="input-label">Image Size (e.g., 150) :</label>
      <input type='text' value={size} id="datasize" placeholder="Enter Image size" onChange={(e)=>setSize(e.target.value)}/>
      <button className='gn-btn' onClick={()=>generateQR()}>Generate QR code</button>
      <button className='dn-btn' onClick={()=>downloadQR()}>Download QR code</button>
    </div>
    <p className='Ak-design'>Designed By <a href='https://www.instagram.com/?hl=en'>Ak</a></p>
   </div>
  );
};