import { useState } from 'react'
import Profile from '../Assets/profile.jpeg'
function MouseOverLayout(props) {
    const [show, setShow] = useState(false)
    const handleMouseOver = () => {
        setShow(true)
    }
    const handleMouseLeave = () => {
        setShow(false)
    }
    return (
        <div style={{ padding: 10 }} className='col-sm-4'>
            <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', flex: 1, display: 'flex' }}>
                    <img src={Profile} style={{ width: "100%" }}></img>
                    <div style={{ position: 'absolute', backgroundColor: '#000000', color: '#FFFFFF', height: show ? '50%' : 0, bottom: 0, transition: 'ease-in 300ms', width: '100%', overflow: 'hidden' }}>
                        {

                            <div style={{ padding: 15 }}>
                                <label>{props.val.description}</label>
                            </div>
                        }

                    </div>
                </div>
                <div style={{ padding: "35px 0 65px" }}>
                    <p style={{ fontWeight: 600, letterSpacing: 2, color: "#000", marginBottom: 2}}><b>{props.val.name}</b></p>
                    <p style={{ fontSize: 13, letterSpacing: 2, color: "#626262", textTransform: "uppercase"}}>{props.val.jobRole}</p>
                </div>
                {
                }
            </div>
        </div>
    )
}
export default MouseOverLayout