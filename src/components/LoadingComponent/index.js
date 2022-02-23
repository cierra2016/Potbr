import './style.css'
import loadingImg from '../../images/loading.png';

export default function LoadingImg() {
    return (
        <div className='loading-container'>
            <img src={loadingImg} alt=" "/>
        </div>
    )
}