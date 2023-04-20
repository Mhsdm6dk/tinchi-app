import "./home.css"

export default function logo(){
    return(
        <div className="bar">
        <div className="bars1">
            <div className="sBar"></div>
            <div className="sBar"></div>
            <div className="sBar"></div>
            <div className="sBar"></div>
        </div>
        <div className="bars2">
            <div className="sBar" style={{backgroundColor:"#D865FF"}}></div>
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