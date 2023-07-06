export const Increment = (I_num) =>{
    return{
        type:'Increment',
        payload:I_num
    }
}
export const Decrement =(D_num) =>{
    return{
        type:"Decrement",
        payload:D_num
    }
}
export const Login =()=>{
    return{
        type:'Sign_In',
    }
}