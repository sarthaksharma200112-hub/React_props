import { Bookmark } from "lucide-react";
const Job=(props)=>{
    return(
        <div className="card">
            <div className="top">
                <img src={props.brand_logo} alt="logo"/>
                <button>Save <Bookmark size={13} strokeWidth={1.75} />        </button>
            </div>
            <div className="center">
                <h3>{props.company_name} <span>{props.date_posted}</span></h3>
                <h2>{props.post}</h2>
                <div>
                    <p>{props.tags}</p>
                    <p>{props.tags}</p>
                </div>
            </div>
            <div className="bottom">
                
                <div className="price">
                    <h3>{props.pay}</h3>
                    <p>{props.location}</p>
                </div>
                <button>Apply Now</button>
                
            </div>
        </div>
    )
}
export default Job;