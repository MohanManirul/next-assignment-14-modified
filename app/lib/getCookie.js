export const getCookie =async()=>{
    const res = await fetch(`http://localhost:3000/api/product/getCookie`);
    
     return await res.json();
}