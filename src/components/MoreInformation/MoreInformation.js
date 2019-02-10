import React, { Component } from 'react';
import Map from '../Map/Map.js';
import MoreInformationTab from '../MoreInformationTab/MoreInformationTab.js';
import ReactFitText from 'react-fittext';
import './MoreInformation.css';
import {
    Row,
    Col,
    Container,
} from 'reactstrap';

export default class MoreInformation extends Component {

    render() {
        return (
            <div id="more-information">
                <Container className="text-center">
                    <Row className="heading">
                        <Col>
                            <ReactFitText maxFontSize={62}>
                                    <h2>
                                        More Information
                                    </h2>
                            </ReactFitText>
                        </Col>
                    </Row>
                </Container>
                <MoreInformationTab title={'Travel'} toggleInfoTabs={this.props.toggleInfoTabs} activeInfoTab={this.props.activeInfoTab}>
                    <p>
                        <ul>
                            <li>Portland only has one airport, PDX, and we recommend booking flights early while the selection is higher and the costs are lower.</li>
                            <li> You will also probably need to rent a car. Our wedding venue is out in the country without public transportation available. You can get from the airport downtown on the MAX train, otherwise you need a car to explore Oregon.</li>
                            <li>Also consider staying longer than just a few days. The Pacific Northwest has an abundance of natural beauty to see. The ocean, mountain, and forests are all within a days drive from Portland.</li>
                        </ul>
                    </p>
                </MoreInformationTab>
                <MoreInformationTab title={'Accomodations'} toggleInfoTabs={this.props.toggleInfoTabs} activeInfoTab={this.props.activeInfoTab}>
                    <p>
                        An AirBnB, or similar private rental, is your best option for a longer stay.
                    </p>
                    <p>
                        If you prefer a hotel, the Comfort Suites (<a href="https://goo.gl/maps/3sfwMSvV5SP2">map</a>) and Courtyard by Marriott (<a href="https://goo.gl/maps/m4dVujroKjG2">map</a>). Both are in Clackamas, near our house, with easy access to downtown Portland via <a href="https://trimet.org/max/">the MAX lightrail train</a>.
                    </p>
                    <p>
                        There is also a Best Western in the quaint, little town of Sandy (<a href="https://goo.gl/maps/xMjRgnjWorr">map</a>). It is a little farther out of town - closer to the outdoors and the wedding venue.
                    </p>
                    <p>
                        Finally, for a unique experience, consider McMenamins Edgefield (<a href="https://goo.gl/maps/naizd1PZV5t">map</a>). Edgefield was a poor farm in the 1900s that has been restored and converted into a large complex with a hotel, concert venue, spa, restauarants, brewery, and more. Even if you don't stay here it is well worth visiting.
                    </p>
                </MoreInformationTab>
                <MoreInformationTab title={'Food and Drinks'} toggleInfoTabs={this.props.toggleInfoTabs} activeInfoTab={this.props.activeInfoTab}>
                    <p>There is no shortage of great food and drinks so we can't list everything but here are some of our favorites. <a href="https://pdx.eater.com/">PDX Eater</a> is a great resource as well. If you want to visit some of the craft breweries Oregon is known for <a href="https://oregoncraftbeer.org/breweries/portland-area/">oregoncraftbeer.org as a list</a>.</p>
                    <p>
                        <ul>
                            <li>
                                Portland has great donuts and while Voodoo Donuts is more well-known we like Blue Star Donuts better (<a href="https://maps.google.com/?cid=7766596715878549871">map</a>)
                            </li>
                            <li>
                                The Happy Valley Food Cart Pods are more upscale than traditional food carts but are close to our house and offer a covered area if the weather isn't cooperating (<a href="https://maps.google.com/?cid=16479763260380150998">map</a>)
                            </li>
                            <li>
                                Screen Door is a great place for brunch. They don't take reservations so expect to wait in line but it is totally worth it! (<a href="https://maps.google.com/?cid=9657599113001754934">map</a>)
                            </li>
                            <li>
                                Portland City Grill is an upscale spot with great views of the city on a clear day. We like to go to happy hour when the dress code and the atmosphere are more relaxed. The seats with the best view go quickly so arrive early. (<a href="https://maps.google.com/?cid=6983450090413321676">map</a>)
                            </li>
                            <li>
                                With beer made on-site and great German food, Zoiglhaus is closer to our side of town than most places (<a href="https://maps.google.com/?cid=4218782226761352725">map</a>)
                            </li>
                            <li>
                                Highland Still House in Oregon city has a great selection of whiskey to go with the comfort food (<a href="https://maps.google.com/?cid=3413628097784489445">map</a>)
                            </li>
                            <li>
                                With amazing pasta, excellent wine, and live jazz Arrivederci Wine & Jazz is one of our favorite date night spots.(<a href="https://maps.google.com/?cid=4166840808130124413">map</a>)
                            </li>
                            <li>
                                Hood River is a great little town on the Columbia River Gorge. Full Sail Brewing is an independent, employee-owned brewery with good food and beer - not to mention a patio with an amazing view of the Gorge. (<a href="https://maps.google.com/?cid=8243156327111755721">map</a>)
                            </li>
                            <li>
                                Ram Restaurant & Brewery is a local chain with good food, good beer, and happy hour. With its casual nature close to home it is one of our go-to spots. (<a href="https://maps.google.com/?cid=2099409131582580812">map</a>)
                            </li>
                            <li>
                                Base Camp Brewing - Portland has no lack of great breweries but we like Base Camp for the outdoor theme and spacious seating. (<a href="https://maps.google.com/?cid=9661598510325680194">map</a>)
                            </li>
                            <li>
                                McMenamins Edgefield is more than just a restaurant. Edgefield has a brewery, winery, golf course, concert venue and more. If you have an extra day this is one of our favorite places. (<a href="https://maps.google.com/?cid=11058002912153277250">map</a>)
                            </li>
                        </ul>
                    </p>
                </MoreInformationTab>
                <MoreInformationTab title={'Things To Do'} toggleInfoTabs={this.props.toggleInfoTabs} activeInfoTab={this.props.activeInfoTab}>
                    <p>Is the Pacific Northwest giving you nature overload? Here are some of our favorite things to do indoors.</p>
                    <p>
                        <ul>
                            <li>
                                McMenamins Edgefield is more than just a restaurant. Edgefield has a brewery, winery, golf course, concert venue and more. If you have an extra day this is one of our favorite places. (<a href="https://maps.google.com/?cid=11058002912153277250">map</a>)
                            </li>
                            <li>
                                McMenamins Edgefield is more than just a restaurant. Edgefield has a brewery, winery, golf course, concert venue and more. If you have an extra day this is one of our favorite places. (<a href="https://maps.google.com/?cid=11058002912153277250">map</a>)
                            </li>
                            <li>
                                Forget a rain coat? Woodburn Premium Outlets is a good spot to gear up for, or take a break from, all the outdoor activities Oregon has to offer. (<a href="https://maps.google.com/?cid=17734731633784811681">map</a>)
                            </li>
                            <li>
                                Tillamook is the best dairy in Oregon. If you are on the way to the coast stop by their factory for cheese, ice cream, and more. (<a href="https://maps.google.com/?cid=3426698191654327091">map</a>)
                            </li>
                            <li>
                                Columbia is one of the largest outdoor gear and clothing brands. Their factory store has great deals on the gear you need to enjoy the great outdoors. (<a href="https://maps.google.com/?cid=1624385955136972890">map</a>)
                            </li>
                            <li>
                                Looking for some culture? Stop by the Portland Art Museum. (<a href="https://maps.google.com/?cid=17109454431333304429">map</a>)
                            </li>
                            <li>
                                Powell's is a Portland landmark and one of the best book stores we've ever been to (<a href="https://maps.google.com/?cid=6978470595407941935">map</a>)
                            </li>
                            <li>
                                Timberline Lodge was constructed from 1936 to 1938 by the Works Progress Administration. The lodge was built and furnished by local artisans during the Great Depression. It has great history and a restaurant and bar to take it easy after spending the day exploring Mt. Hood. (<a href="https://maps.google.com/?cid=7437893320196269298">map</a>)
                            </li>
                            <li>
                                The Pearl District is a "cool" neighborhood in NE Portland, offering lots of shops, restaurants and more. (<a href="https://maps.google.com/?q=Pearl+District,+Portland,+OR,+USA&ftid=0x549509fe42c62a61:0xbf294ba55f24a8a6">map</a>)
                            </li>
                        </ul>
                    </p>
                </MoreInformationTab>
                <MoreInformationTab title={'Outdoor Activities'} toggleInfoTabs={this.props.toggleInfoTabs} activeInfoTab={this.props.activeInfoTab}>
                    <p>
                        Portland has tons of great outdoor activities within the city or just a few hours drive. We recommend renting a car and seeing the forest, mountain and coast.
                    </p>
                    <p>
                        <ul>
                            <li>
                            With one of the world's largest collection of roses, The Rose Garden is why Portland is known as the city of roses. Best of all, it is free! (<a href="https://maps.google.com/?cid=10519281268788551622">map</a>)
                            </li>
                            <li>
                                Right next to the Rose Garden is the Japanese Garden. While not free, it is a great place to enjoy a relaxing stroll and find some nature without leaving the city. (<a href="https://maps.google.com/?cid=11424717693547273965">map</a>)
                            </li>
                            <li>
                                Haystack Rock is a landmark of the Oregon coast, Haystack Rock is near the town of Cannon Beach. One of many great towns along the Oregon coast with shops and restaurants. There is also plenty of hiking in the area. (<a href="https://maps.google.com/?q=Haystack+Rock&ftid=0x5494a52158e1fd35:0x4d0fcaf7a4c0faf5">map</a>)
                            </li>
                            <li>
                                Rhododendrons are a bush with beautiful flowers when they are in bloom. (<a href="https://maps.google.com/?cid=4887060410880106075">map</a>)
                            </li>
                            <li>
                                In the quaint town of Sandy, Jonsrud View Point has a great view on a clear day. (<a href="https://maps.google.com/?cid=15126490883917199125">map</a>)
                            </li>
                            <li>
                                Multnomah Falls is a large waterfall right off the highway. It is a great place to stop on the way to the Columbia River Gorge or Mt. Hood. (<a href="https://maps.google.com/?cid=7781839161136658415">map</a>)
                            </li>
                            <li>
                                Salmon River Trail is our favorite hiking trail! The first 3 miles are easy to moderate with great view of the river and old growth forest. After that the elevation climbs quickly. (<a href="https://maps.google.com/?cid=5950851224302706648">map</a>)
                            </li>
                            <li>
                                Our favorite park by far, the Sandy River Delta is over 1,000 acres full of trail for hiking and biking. You must love dogs though, as they are allowed of leash and you will encounter them by the dozens. (<a href="https://maps.google.com/?cid=6750743274387671536">map</a>)
                            </li>
                            <li>
                                Trillium lake has some of the best views of the mountain around. Come at sunset to experience a truly spectacular view. (<a href="https://maps.google.com/?q=Trillium+Lake&ftid=0x54be185d1c9fbbdf:0xd9a336f0bca80d5a">map</a>)
                            </li>
                            <li>
                                Tillamook State Forest is a large forest that makes for a scenic drive on your way to the coast. (<a href="https://maps.google.com/?q=Tillamook+State+Forest&ftid=0x549521d327c6f4b7:0xebbb0004bb7ee902">map</a>)
                            </li>
                        </ul>
                    </p>
                </MoreInformationTab>
                <MoreInformationTab title={'Map'} toggleInfoTabs={this.props.toggleInfoTabs} activeInfoTab={this.props.activeInfoTab}>
                    <Map />
                </MoreInformationTab>
            </div>
        );
    }
}