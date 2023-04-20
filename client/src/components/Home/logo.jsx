import "./main.css"
import "./logoAnimation.css"

export default function Logo(){
    return(
        <div className="bar">
        <div className="bars1">
            <div className="sBar"></div>
            <div className="sBar"></div>
            <div className="sBar"></div>
            <div className="sBar"></div>
        </div>
        <div className="bars2">
            <div className="sBar"></div>
            <div className="sBar"></div>
            <div className="sBar"></div>
            <div className="sBar"></div>
        </div>
        <div className="name">
            <p className="name1">Class</p>
            <p className="name2">Management</p>
        </div>
        </div>
    )
}