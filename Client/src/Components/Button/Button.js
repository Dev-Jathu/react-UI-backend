import './Button.css'

export default function Button(props){
    return(
        <div>
            <button className={props.class}>{props.name}</button>
        </div>
    )
}


