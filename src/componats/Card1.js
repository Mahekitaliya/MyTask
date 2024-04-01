
import react from "react"

function Card1(props) {
    return <>
    
        <div className="slide-content">
            <div className="card-wrapper swiper-wrapper">
                <div className="card swiper-slide">
                    <div className="image-content">
                        <span className="overlay"></span>

                        <div className="card-image">
                            <img src={props.img} alt="" class="card-img"/>
                        </div>
                    </div>

                    <div className="card-content">
                        <h2 className="name">{props.name}</h2>
                        <h3 className="name">{props.fname}</h3>
                        <p className="description">{props.des}</p>

                        <button className="button flex">{props.bname}</button>
                        <button className="button1 flex ">{props.bname1}</button>
                    </div>
                </div>
            </div>
        </div>

    </>
   
}

export default Card1;