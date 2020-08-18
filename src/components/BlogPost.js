import React from 'react';
import { Card, Col, Row } from 'reactstrap'
import blog1Image from '../assests/images/blog1.jpeg'
import user1 from '../assests/images/user1.jpeg'
import { Link} from 'react-router-dom'

class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='showcase-full'>
                <div className='container'>
                    <Row>
                        <Col></Col>
                        <Col>
                            <Card className='mt-5' style={{ minWidth: '75vw' }}>
                                <div class="card-header card-custom-title">
                                    Man On The Mars
                                 </div>
                              
                                <div >
                                    <img className='blog-image' src={blog1Image} alt='' />
                                </div>
                                
                                <div className='box'>
                                    <Link className='box1'>
                                    <img className='avatar' src={user1} alt='user' />
                                        <p>John Doe</p>
                                    </Link>
                                    <div className='box2'>
                                        <small className="text-muted">Last updated 5 days ago</small>
                                        <br></br>
                                    <small className='text-muted'>Posted on: Aug 16 2020</small>
                                    </div>
                                </div>
                          
                                
                                <div className='blog-description'>
                                    A human mission to Mars has been the subject of science fiction, aerospace engineering and scientific proposals since the 20th century. Plans include landing on Mars for exploration at a minimum, with the possibility of sending settlers and terraforming the planet or exploring its moons Phobos and Deimos also considered.[citation needed]

                                    The exploration of Mars has been a goal of national space programs for decades. Conceptual work for missions that would involve human explorers has been ongoing since the 1950s, with planned missions typically being stated as taking place anywhere between 10 and 30 years from the time they are drafted.[1] The list of crewed Mars mission plans shows the various mission proposals that have been put forth by multiple organizations and space agencies in this field of space exploration. Plans have varied from scientific expeditions, in which a small group (between two and eight astronauts) would visit Mars for a period of a few weeks or year, to the permanent colonization of Mars.[citation needed]
                                    The energy needed for transfer between planetary orbits, or "Delta-v", is lowest at intervals fixed by the synodic period. For Earth / Mars trips, this is every 26 months (2 years and 2 months), so missions are typically planned to coincide with one of these launch periods. Due to the eccentricity of Mars' orbit, the energy needed in the low-energy periods varies on roughly a 15-year cycle[2] with the easiest periods needing only half the energy of the peaks.[3] In the 20th century, there was a minimum in the 1969 and 1971 launch periods and another low in 1986 and 1988, then the cycle repeated.[2] The next low-energy launch period occurs in 2033.[4]

                                    Several types of mission plans have been proposed, including opposition class and conjunction class[3] or the Crocco flyby.[5] The lowest energy transfer to Mars is a Hohmann transfer orbit, which would involve an approximately 9 month travel time from Earth to Mars, about five hundred days at Mars to wait for the transfer window to Earth, and a travel time of about 9 months to return to Earth.[6][7]
                                     
                                    Shorter Mars mission plans have round-trip flight times of 400 to 450 days,[8] but would require significantly higher energy. A fast Mars mission of 245 days round trip could be possible with on-orbit staging.[9] In 2014 ballistic capture was proposed, which may reduce fuel cost and provide more flexible launch windows compared to the Hohmann.[10]
                                     
                                    In the Crocco grand tour, a crewed spacecraft would get a flyby of Mars and Venus in under a year in space.[11] Some flyby mission architectures can also be extended to include a style of Mars landing with a flyby excursion lander spacecraft.[12] Proposed by R. Titus in 1966, it involved a short stay lander-ascent vehicle that would separate from a "parent" Earth-Mars transfer craft prior to its flyby of Mars. The Ascent-Descent lander would arrive sooner and either go into orbit around Mars or land, and depending on the design offer perhaps 10–30 days before it needed to launch itself back to the main transfer vehicle.[12] (see also Mars flyby).
                                     
                                    Aerobraking at Mars was estimated in the 1980s to cut the mass of a Mars mission lifting off from Earth by half.[13] As a result, Mars missions have designed interplanetary spacecraft and landers capable of aero-braking.[13]      
                                  
                                    A human mission to Mars has been the subject of science fiction, aerospace engineering and scientific proposals since the 20th century. Plans include landing on Mars for exploration at a minimum, with the possibility of sending settlers and terraforming the planet or exploring its moons Phobos and Deimos also considered.[citation needed]

                                    The exploration of Mars has been a goal of national space programs for decades. Conceptual work for missions that would involve human explorers has been ongoing since the 1950s, with planned missions typically being stated as taking place anywhere between 10 and 30 years from the time they are drafted.[1] The list of crewed Mars mission plans shows the various mission proposals that have been put forth by multiple organizations and space agencies in this field of space exploration. Plans have varied from scientific expeditions, in which a small group (between two and eight astronauts) would visit Mars for a period of a few weeks or year, to the permanent colonization of Mars.[citation needed]
                                    The energy needed for transfer between planetary orbits, or "Delta-v", is lowest at intervals fixed by the synodic period. For Earth / Mars trips, this is every 26 months (2 years and 2 months), so missions are typically planned to coincide with one of these launch periods. Due to the eccentricity of Mars' orbit, the energy needed in the low-energy periods varies on roughly a 15-year cycle[2] with the easiest periods needing only half the energy of the peaks.[3] In the 20th century, there was a minimum in the 1969 and 1971 launch periods and another low in 1986 and 1988, then the cycle repeated.[2] The next low-energy launch period occurs in 2033.[4]

                                    Several types of mission plans have been proposed, including opposition class and conjunction class[3] or the Crocco flyby.[5] The lowest energy transfer to Mars is a Hohmann transfer orbit, which would involve an approximately 9 month travel time from Earth to Mars, about five hundred days at Mars to wait for the transfer window to Earth, and a travel time of about 9 months to return to Earth.[6][7]
                                    
                                    Shorter Mars mission plans have round-trip flight times of 400 to 450 days,[8] but would require significantly higher energy. A fast Mars mission of 245 days round trip could be possible with on-orbit staging.[9] In 2014 ballistic capture was proposed, which may reduce fuel cost and provide more flexible launch windows compared to the Hohmann.[10]
                                    
                                    In the Crocco grand tour, a crewed spacecraft would get a flyby of Mars and Venus in under a year in space.[11] Some flyby mission architectures can also be extended to include a style of Mars landing with a flyby excursion lander spacecraft.[12] Proposed by R. Titus in 1966, it involved a short stay lander-ascent vehicle that would separate from a "parent" Earth-Mars transfer craft prior to its flyby of Mars. The Ascent-Descent lander would arrive sooner and either go into orbit around Mars or land, and depending on the design offer perhaps 10–30 days before it needed to launch itself back to the main transfer vehicle.[12] (see also Mars flyby).
                                    
                                    Aerobraking at Mars was estimated in the 1980s to cut the mass of a Mars mission lifting off from Earth by half.[13] As a result, Mars missions have designed interplanetary spacecraft and landers capable of aero-braking.[13]      
                                    </div>
                            </Card>
                        </Col>
                        <Col></Col>
                    </Row>

                </div>
            </div>
        );
    }
}

BlogPost.propTypes = {};

export default BlogPost;
