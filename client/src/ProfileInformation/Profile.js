import React, { Component } from 'react'
import '../Styles/Profile.css'
import AddPhotoAlternate from '@material-ui/icons/AddPhotoAlternate'
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';

export class Profile extends Component {
    state={
        profileImg:'https://www.maxpixel.net/static/photo/1x/Avatar-Blank-Profile-Picture-Display-Pic-Mystery-Man-973460.png'
    }
    imageHandler = (e) =>{
        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                this.setState({profileImg: reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    render() {
        const {profileImg} = this.state
    

    return (
        <div>
            <div className="leftside">
                <div className="container">
                    <div className="img-holder">
                        <img src={profileImg} alt=""></img>
                        <label>
                            Change Profile Image
                        </label>
                        <input type="file" className="image" id="input" accept="image/*" onChange={this.imageHandler}/>
                        <div className="label">
                            <label htmlFor="input" className="image-upload">
                                <AddPhotoAlternate/>                         

                            </label>
                        </div>
                    </div>

                </div>
                <div className="body">
                    <h1>Artist Information</h1>
                    <div>
                    <form>
                        <label>Artist Name</label>
                        <label>Bio
                            <input type="text" placeholder="add bio information"/>
                        </label>
                        <label>Email
                            <input type="text" />
                        </label>
                        <label>Phone number
                            <input type="text" />
                        </label>
                    </form>
                    </div>

                </div>

                
            </div>

            <div className="center">
                <h2>Upcoming Events</h2>
                <div className="featuredimg">
                <img src={profileImg} alt=""></img>
                </div>
                <label>
                    Create your First Post
                </label>
                <div className="event-info">
                <input type="file" className="image" id="input" accept="image/*" onChange={this.imageHandler}/>
                </div>
                <label htmlFor="description">Type event Description
                    <input type="text"/>
                </label>

            </div>
            <div className="rightside-top">
                
            </div>

            <div className="rightside-bottom">
                <ScheduleComponent>
                    <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
                </ScheduleComponent>

            </div>

            
        </div>
    )
    }
}


export default Profile
