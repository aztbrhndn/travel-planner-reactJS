import React from "react";

import {Container, Row, Col, Button} from "reactstrap";

import {PRIMARY_COLOR, PRIMARY_COLOR_FONT} from "common/styles/index.js";
import "./home.css";

import FrontPageBanner from "../../assets/images/frontpage.jpg";
import TravelPlan1 from "../../assets/images/travel_plan1.png";
import TravelPlan2 from "../../assets/images/travel_plan2.png";
import TravelPlan3 from "../../assets/images/travel_plan3.png";
import organize from "../../assets/images/undraw/organize.png";
import mobile from "../../assets/images/undraw/mobile.png";
import buddy from "../../assets/images/undraw/buddy.png";

import SearchForm from "../../components/forms/search/searchform.js";

// Redux
import { connect } from "react-redux";
import Actions from "../../actions";

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            showExplore: true,
        }
    }

    componentDidMount() {
        const { getUserSession } = this.props;

        console.log("HOME USER SESSION", getUserSession.data.length);
    }

    handlePlan() {
        this.setState({
            showExplore: true,
        })
    }

    handleExplore() {
        this.setState({
            showExplore: false,
        })
    }

    handleAddTrip() {
        this.props.history.push("/addtrip");
    }


    render() {
        return (
            <>  
                <Container className="themed-container" fluid={true} style={styles.fillPage}>
                    <div style={styles.firstContainer}>
                        <div style={styles.imageContainer}>
                            <img id="frontpage" src={FrontPageBanner} alt="frontpage" style={styles.frontImage}/>
                        </div>
                        <div style={styles.contentContainer}>
                            <div style={styles.contentTopContainer}>
                                <div style={styles.titleContainer}>
                                    <h1>Plan your trip with Trip<span style={PRIMARY_COLOR_FONT}>Bantu</span></h1>
                                    <h5>Making trip planning easier for all travellers</h5>
                                </div>


                                {/* ----------USER CAN CHOOSE TO PLAN TRIP OR EXPLORE PLACES--------------- */}
                                <div style={styles.selectContainer}>
                                    <button style={styles.selectButton} onClick={() => this.handlePlan()}>Plan your trip</button>
                                    <button style={styles.selectButton} onClick={() => this.handleExplore()}>Explore places</button>
                                </div>
                                <div style={styles.searchContainer}>

                                    {this.state.showExplore ?
                                        (
                                        <div>
                                        {/* <h4>Create a new trip</h4> */}
                                        <Button 
                                            style={PRIMARY_COLOR}
                                            size="lg"
                                            // block
                                            onClick={()=>this.handleAddTrip()}
                                        >Begin Planning
                                        </Button>
                                        </div>)
                                        : 
                                        (<SearchForm />)
                                    }
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* ---------------------LEARN MORE DIV------------------------- */}
                    <div className="learn-container" style={styles.learnContainer}>
                        <div className="learn-title">
                            <h4>Learn More about TripBantu</h4>

                        </div>
                        <div className="down-icon">
                            <ion-icon name="chevron-down-outline" size="large"></ion-icon>
                        </div>
                    </div>
                </Container>
                <Container fluid="xl" style={styles.fillPage}>
                    {/* --------------LEARN ROW 1------------------------ */}
                    <Row md="12" style={styles.learnRow}>
                        <Col xs="12" sm="12" md="6" lg="6" xl="6" style={{borderRight: "1px solid rgba(0,0,0,0.4)", ...styles.learnColOne}}>
                            {/* <div style={styles.learnImageContainer}> */}
                                <img id="travelimg1" src={organize} alt="travelimg1" style={styles.undrawImage}/>
                            {/* </div> */}
                        </Col>
                        <Col xs="12" sm="12" md="6" lg="6" xl="6" style={styles.learnColTwo}>
                            <div style={styles.textBox}>
                                <p className="learn-text">We help you organize your travel arrangements.</p>
                            </div>
                        </Col>
                    </Row>

                    {/* -------------------LEARN ROW 2------------------------------------- */}
                    <Row md="12" style={styles.learnRow}>
                        <Col xs="12" sm="12" md="6" lg="6" xl="6" style={styles.learnColTwoLeft}>
                            <div style={styles.textBox}>
                                <p className="learn-text">We store all your travel information so you can access the info whenever, wherever!</p>
                            </div>
                        </Col>
                        <Col xs="12" sm="12" md="6" lg="6" xl="6" style={{borderLeft: "1px solid rgba(0,0,0,0.4)", ...styles.learnColOneRight}}>
                            {/* <div style={styles.learnImageContainer}> */}
                                <img id="travelimg1" src={mobile} alt="travelimg1" style={styles.undrawImage}/>
                            {/* </div> */}
                        </Col>
                    </Row>

                    {/* -------------------LEARN ROW 3------------------------------------- */}
                    <Row md="12" style={styles.learnRow}>
                        <Col xs="12" sm="12" md="6" lg="6" xl="6" style={{borderRight: "1px solid rgba(0,0,0,0.4)", ...styles.learnColOne}}>
                            {/* <div style={styles.learnImageContainer}> */}
                                <img id="travelimg1" src={buddy} alt="travelimg1" style={styles.undrawImageBuddy}/>
                            {/* </div> */}
                        </Col>
                        <Col xs="12" sm="12" md="6" lg="6" xl="6" style={styles.learnColTwo}>
                            <div style={styles.textBox}>
                                <p className="learn-text" >We make orgazining trips with your friends or family easy for everyone.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

const styles = {
    removeStrap: {
        padding: 0,
        margin: 0,
        width: "100%",
        // border: "3px solid blue",
        // borderTop: "1px solid rgba(0,0,0,0.4)",
        // borderBottom: "1px solid rgba(0,0,0,0.4)",
        // backgroundColor: "yellow",
    },
    fillPage: {
        // borderBottom: "1px solid rgba(0,0,0,0.4)",
        // margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 400,
        // borderBottom: "1px solid rgba(0,0,0,0.4)",
    },
    firstContainer: {
        height: "80vh",
        width: "100%",
        // border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",

        position: "relative",
    },
    imageContainer: {
        backgroundColor: "white",
        width: "100%",
        height: "80vh",

        position: "absolute",
        zIndex: -1,
    },
    frontImage: {
        width: "100%",
        height: "80vh",
    },
    contentContainer: {
        // border: "1px solid black",
        width: "70%",
        height: "70vh",
        backgroundColor: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        // padding: 40,
        
        position: "absolute",
        zIndex: 1,
    },
    contentTopContainer: {
        // backgroundColor: "blue",
        width: "100%",
        height: "80%",
        
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        
    },
    titleContainer: {
        minwidth: "100%",
        // height: 300,
        // backgroundColor: "black",
        color: "white",
        
        padding: 20,
    },
    selectContainer: {
        // width: "80%",
        height: 45,
        // border: "1px solid rgba(0,0,0,0.8)",
        backgroundColor: "white",
        margin: 20,
        overflow: "hidden",
        borderRadius: 10,
        
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    searchContainer: {
        minwidth: "25%",
        // height: 150,
        // backgroundColor: "white",
        // border: "3px solid yellow",
        
        padding: 20,
    },
    selectButton: {
        minHeight: "inherit",
        backgroundColor: "transparent",
        outline: "none",
        boxShadow: "none",
        border: "1px solid rgba(0,0,0,0.4)",
        padding: 10,
        color: "black",
        // borderRadius: "50 0 0 0",
    },
    learnRow: {
        padding: 0,
        margin: 0,
        width: "100%",
        // border: "3px solid blue",
        // borderTop: "1px solid rgba(0,0,0,0.4)",
        border: "1px solid rgba(0,0,0,0.4)",
        borderRadius: 20,
        marginTop: 25,
        marginBottom: 25,
        minHeight: 400,
        maxHeight: 400,
        // backgroundColor: "yellow",
        position: "relative",

        overflow: "hidden",
    },
    undrawImage: {
        width: "90%",
        height: "90%",
        backgroundColor: "#ECF0F1",
        // border: "0.2em solid rgba(0,0,0,0.4)",
        borderRadius: 20,
        // padding: 20,
        // opacity: 0.5,
        // boxSizing: "border-box",
        // border: "2px solid blue"
    },
    undrawImageBuddy: {
        width: "60%",
        height: "90%",
        backgroundColor: "#ECF0F1",
        // border: "0.2em solid rgba(0,0,0,0.4)",
        borderRadius: 20,
        // padding: 20,
        // opacity: 0.5,
        // boxSizing: "border-box",
        // border: "2px solid blue"
    },
    learnColOne: {
        // overflow: "hidden",
        margin: "0 auto", 
        margin: 0, 
        padding: 0, 
        display: "flex",
        // flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", 
        padding: 20,
        // border: "1px solid rgba(0,0,0,0.4)",

        // position: "relative",
        top: 0,
        left: 0,
    },
    learnColTwo: {
        background: "none",
        width: "100%",
        height: "100%",
        // margin: "0 auto",
        // margin: 0,
        padding: 0, 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        // border: "1px solid rgba(0,0,0,0.4)",
        
        position: "absolute",
        bottom: "0%",
        right: "0%",
    },
    learnColTwoLeft: {
        background: "none",
        width: "100%",
        height: "100%",
        // margin: "0 auto",
        // margin: 0,
        padding: 0, 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        // border: "1px solid rgba(0,0,0,0.4)",

        position: "absolute",
        bottom: "0%",
        left: "0%",
    },
    learnColOneRight: {
        // overflow: "hidden",
        height: "100%",
        margin: "0 auto", 
        margin: 0, 
        padding: 0, 
        display: "flex",
        // flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", 
        padding: 20,
        // border: "1px solid rgba(0,0,0,0.4)",

        position: "absolute",
        top: "0%",
        right: "0%",
    },
    textBox: {
        background: "none",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // verticalAlign: "center",
        textAlign: "center",
        // backgroundColor: "#ECF0F1",
        // border: "0.2em solid rgba(0,0,0,0.4)",
        borderRadius: 20,
        padding: 20,

        zIndex: 2,
    },
    learnContainer: {
        // border: "1px solid cyan",
        height: "15vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
}
  

const mapStateToProps = (store) => ({
    // getLoginData: Actions.getLoginData(store),
    getUserSession: Actions.getUserSession(store),
    // getUpdateUserData: Actions.getUpdateUserData(store)
  })
  
const mapDispatchToProps = {
    // resetUserSession: Actions.resetUserSession
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);