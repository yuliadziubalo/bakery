import React from "react"
import Order from "./Order"
import Cakes from "./Categories pages/Cakes/Cakes"

function OrderMain() {
    let component = <Cakes />
    switch(window.location.pathname){
        case "order/cake":
            component = <Cakes />
            break

        
    }
    return (
        <>
            <Order />
            {component}
        </>
    )
}

export default OrderMain;