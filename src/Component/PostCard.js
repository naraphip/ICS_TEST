import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faCircle } from '@fortawesome/free-solid-svg-icons'

const PostCard = ({ data }) => {

    const nowDate = new Date()
    let date = nowDate.getDay();
    const date_time = data.operation_time;
    const images = data.images;

    let i=0;
    if(date >= 1){
         i = i-1;
    }
    else if(date <= 0){
         i = i+6
    }

   
    function Checkday() {
        if (date = date_time[i]) {
            return (
                <div className="time-postcard">
                    <p>
                        <FontAwesomeIcon className='icon-time-postcard' icon={faCalendarDays} />
                        {date.time_open} AM
                        <span> - </span>
                        {date.time_close} PM
                    </p>
                </div>
            )
        }
    }

    return (
        <div className="post-card">
            <div className="header-postcard">
                <div className='section-img-postcard'>
                    <img className="img-profile-postcard" src={data.profile_image_url} alt='' />
                </div>

                <div className='section'>
                    <div className='section1'>
                        <a className="name-postcard" href={`#/post/${data.id}`}>{data.name}</a>
                    </div>
                    <div className='section2'>
                        <div>
                            {Checkday()}
                        </div>
                        <div className='section-rate'>
                            <p className='span-icon'>
                                <FontAwesomeIcon icon={faCircle} />
                            </p>
                            <p className="rate-postcard">
                                {(data.rating).toFixed(1)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-img">
                {images.map(data => (
                    <img className="img-postcard" key={data.images} src={data} alt='' />
                ))}
            </div>

        </div>

    );
}
export default PostCard 