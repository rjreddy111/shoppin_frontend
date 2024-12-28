import { Component } from "react";
import { BsSmartwatch } from "react-icons/bs";

import "./index.css"

class Products extends Component {

    state = {caseType :"", 
        size : "", 
        band: "", 
        apple_series:"Apple Watch Series 10",
        showSizeOptions:false, 
        showCaseOptions:false,
        showBandOptions:false,
        sideView:false 
    }

   toggleSize = ()=> {
    this.setState((prevState)=> ({showSizeOptions:!prevState.showSizeOptions}))
   }
   toggleCase = ()=> {
    this.setState((prev)=> ({showCaseOptions:!prev.showCaseOptions}))
   }
   toggleBand = ()=> {
    this.setState((prev)=> ({showBandOptions:!prev.showBandOptions}))
   }

   handleSizeChange=(newSize)=> {
    this.setState({size:newSize + "mm", showSizeOptions:false})
   }

   handleCase= (newCase)=> {
    this.setState({caseType:newCase, showCaseOptions:false})
   }

   handleBand = (newband)=> {
    this.setState({band:newband, showBandOptions:false})
   }

   side_front_togle = ()=> {
    this.setState((prev)=> ({sideView:!prev.sideView}))
   }

   onChnageSeries = (event)=> {
    this.setState({apple_series:event.target.value})
   }

    render() {
        const {showSizeOptions,size,showCaseOptions,caseType,showBandOptions,band,sideView,apple_series} = this.state
        console.log(sideView, "side")
        const sizeCheck = size ||"40mm"
        

        const caseCheck = caseType || "Jet Black Aluminium" 
        const bandCheck = band || "Black Solo Loop"

        const button_side_front = sideView===true? "Front view" : "Side view"

        const image_url = sideView===true ? "https://res.cloudinary.com/dookgusbq/image/upload/v1735325495/side1_lvernx.jpg" : "https://res.cloudinary.com/dookgusbq/image/upload/v1735317129/apple_home_uovget.webp"
        
        return (
            <div className="products-main-container">
                <div className="top-layer">
                    <img src = "https://res.cloudinary.com/dookgusbq/image/upload/v1735354213/Apple_Watch_logo_on9lo5.png" alt = "apple_logo" class="logo-apple"/>
                    <div>
                    <label htmlFor="select_id">collections </label>
                    <select id = "select_id" onChange= {this.onChnageSeries} >
                        
                        <option value = "Apple Watch Series 10">Apple Watch Series 10 </option>
                        <option value = "Apple Watch Series 11">Apple Watch Series 11 </option>
                    </select>
                    </div>
                    <button class="save-button">save</button>
                </div>
                <img src = {image_url} alt = "watch_image" className={`watch-image-style ${sideView ? 'watch-side side_active ': 'watch-front front_active'}`} />
                <div className="watch-details">
                    <buton className="side-view-button" onClick={this.side_front_togle}>{button_side_front}</buton>
                    <p style={{color:"grey"}}>{apple_series}</p>
                    <p>{sizeCheck} {caseCheck} Case with {bandCheck} </p>
                    <p>From <span style={{color:"green"}}>$429.0</span></p>
                </div>
                <div className="buttons-container">
                    <button className="size" onClick={this.toggleSize}> Size {size}</button>
                    <button  className="size" onClick={this.toggleCase}> <BsSmartwatch/>Case {caseType}</button>
                    <button  className="size" onClick={this.toggleBand}>Band {band}</button>
                </div>

                
                {showSizeOptions && (
                    <div className="options-container">
                    <button className="size" onClick={() => this.handleSizeChange(40)}>
                      40mm
                    </button>
                    <button className="size" onClick={() => this.handleSizeChange(44)}>
                      44mm
                    </button>
                    <button className="size" onClick={() => this.handleSizeChange(49)}>
                      49mm
                    </button>
                  </div>
                )}


                {showCaseOptions &&(
                    <div className="options-container">
                    <button className="size" onClick={() => this.handleCase("Aluminium")}>
                      Aluminium
                    </button>
                    <button className="size" onClick={() => this.handleCase("Stainless steel")}>
                      StainLess Steel
                    </button>
                    <button className="size" onClick={() => this.handleCase("Polycarbonate")}>
                      Polycarbonate
                    </button>
                  </div>

                )}

                
                {showBandOptions && (
                    <div className="options-container">
                    <button className="size" onClick={() => this.handleBand("Fine Woven")}>
                      Fine Woven
                    </button>
                    <button className="size" onClick={() => this.handleBand("Sport band")}>
                      Sport band
                    </button>
                    <button className="size" onClick={() => this.handleBand("Solo Loop")}>
                      Solo Loop
                    </button>
                    <button className="size" onClick={() => this.handleBand("Nike sport band")}>
                      Nike sport band
                    </button>
                  </div>

                )}
            </div>
        )
    }
}


export default Products