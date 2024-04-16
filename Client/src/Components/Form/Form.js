import './Form.css'

export default function Form(props){
    return(
        <div className='Form'>
            <div className='alighn'>
            <label className={props.class}>{props.name}</label>
            <input type={props.type}className={props.input}  placeholder={props.place} value={props.value}/>
            </div>
        </div>
    )
}