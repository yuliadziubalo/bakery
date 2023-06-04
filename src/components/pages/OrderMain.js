import React from "react"
import Order from "./Order"
import Cakes from "./Categories pages/Cakes/Cakes"
import Cupcakes from "./Categories pages/Cupcakes/Cupcakes"

function OrderMain() {
    let component = <Cakes />
    switch(window.location.pathname){
        case "order/cake":
            component = <Cakes />
            break
        case "order/cupcakes":
            component = <Cupcakes/>
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