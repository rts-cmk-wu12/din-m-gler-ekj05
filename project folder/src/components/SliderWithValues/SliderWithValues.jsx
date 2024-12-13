"use client"
import { usePathname, useSearchParams } from "next/navigation"
import { useState } from "react"
import ReactSlider from "react-slider"

export default function SliderWithValues(){
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const initialMinPrice = searchParams.get("minPrice") || 0
    const initialMaxPrice = searchParams.get("maxPrice") || 12000000
    const [value, setValue] = useState([Number(initialMinPrice), Number(initialMaxPrice)])

    function handleRangeValue(newValue){
        setValue(newValue)

        const params = new URLSearchParams(window.location.search)
        params.set("minPrice", newValue[0])
        params.set("maxPrice", newValue[1])
        window.history.pushState({}, "", `${pathname}?${params.toString()}`)
    }

    return(
        <div className="price-range-container">
            <p>Pris-interval</p>
            <div className="slider-container">
                <ReactSlider
                    value={value}
                    onChange={handleRangeValue}
                    step={100000}
                    min={0}
                    max={12000000}
                    minDistance={500000}
                    pearling={true}
                    className="react-slider"
                    thumbClassName="react-slider-thumb"
                    trackClassName="react-slider-track"
                    railClassName="react-slider-rail"
                    renderThumb={(props) => <div {...props}/>}
                    renderTrack={(props) => <div {...props}/>}
                />
            </div>
            <div className="min-max-container">
                <p>{value[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} kr.</p>
                <p>{value[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} kr.</p>
            </div>
        </div>
    )
}