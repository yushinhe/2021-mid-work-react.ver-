import React, { Component } from 'react'
import LectureDetail from '../LectureDetail'
import LectureForm from '../LectureForm'
import './index.scss'


export default class index extends Component {
    state = {
        year: this.props.year,
        host: this.props.host,
        date: this.props.date,
        title: this.props.title,
        introDetail: this.props.introDetail,
        startTime: this.props.startTime,
        location: this.props.location,
        price: this.props.price,
        img: this.props.img,
        detailActive: false,
        formActive: false
    }
    detailActiveToggle = () => {
        this.setState({
            detailActive: !this.state.detailActive
        })
    }
    formActiveToggle = () => {
        this.setState({
            formActive: !this.state.formActive
        })
    }
    render() {
        return (
            <>
                <article className="lecture-item grid">
                    <div className="date">
                        <p>{this.state.year}<br /><span> {this.state.date} </span> </p>
                        <div className="bg"></div>
                    </div>
                    <div className="intro">
                        <h3>{this.state.title}</h3>
                        <p>{this.state.introDetail}
                        </p>
                    </div>
                    <div class="apply-and-know">
                        <button onClick={this.formActiveToggle} className="btn btn-red apply">報名</button>
                        <button onClick={this.detailActiveToggle} className="btn btn-black know">了解詳情</button>
                    </div>
                </article>
                < LectureDetail detailActive={this.state.detailActive} toggleActive={this.detailActiveToggle} title={this.state.title} host={this.state.host} startTime={this.state.startTime} location={this.state.location} price={this.state.price} img={this.state.img}
                />

                < LectureForm formActive={this.state.formActive} formActiveToggle={this.formActiveToggle} title={this.state.title} host={this.state.host} startTime={this.state.startTime} location={this.state.location} price={this.state.price}
                />

            </>
        )
    }
}



// export default function Index(year,host,date,title,introDetail,startTime,location,price,img) {
//     const [state, setState] = useState(countDown())
//     useEffect(() => {
//         const id = setInterval(() => {
//             setCount(countDown());
//         }, 1000);
//         return () => clearInterval(id)
//     }, []);
//     state = {
//         detailActive: false,
//     }
//     detailActiveToggle = () => {
//         this.setState({
//             detailActive: !this.state.detailActive
//         })
//     }
//     return (
//         <div>
//             <article className="lecture-recent">
//                 <div className="container">
//                     <Title title={'近期演講'} />

//                     <article  className="item grid">
//                         <div className="date">
//                             <p>{year}<br /><span> {date} </span> </p>
//                             <div className="bg"></div>
//                         </div>
//                         <div className="intro">
//                             <h3>{title}</h3>
//                             <p>{introDetail}
//                             </p>
//                         </div>
//                         <div class="apply-and-know">
//                             <button className="btn btn-red apply">報名</button>
//                             <button onClick={this.detailActiveToggle} className="btn btn-black know">了解詳情</button>
//                         </div>
//                     </article>
//                     < LectureDetail detailActive={this.state.detailActive} toggleActive={this.detailActiveToggle} title={title} host={host} startTime={startTime} location={location} price={price} img={img}
//                     />


//                 </div>
//             </article >
//         </div>
//     )
// }
