import "./BanUser.css"
import {useState} from "react";

const BanUser = ({display}) => {
    const punishmentsList = ["Cấm 7 ngày","Cấm 1 tháng", "Cấm vĩnh viễn"]
    const [checked, setChecked] = useState(0)
    return (
        <div className="ban-user-modal" style={display && {display: "flex"}}>
            <div className="ban-user-modal-container">
                <form action="">
                    <div className="ban-user-modal-checkbox-area">
                        {punishmentsList.map((punishment, index) => {
                        return (
                            <div className="modal-item" key={index}>
                                <input type="checkbox" id={index} checked={checked === index} onChange={() => setChecked(index)}/>
                                <label htmlFor={index}> {punishment} </label>
                            </div>
                        )})}
                    </div>
                    <div className="btn btn--red ban-user-modal-btn" onClick={
                        () => document.querySelector(".ban-user-modal").style.display = "none"}>Xác nhận</div>
                </form>
            </div>
        </div>
    )
}

export  default  BanUser
