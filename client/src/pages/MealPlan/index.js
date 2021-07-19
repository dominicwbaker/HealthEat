import React, { useState, useEffect, useRef } from 'react'
import API from "../../utils/API"

function MealPlan() {
    const [meals, setMeals] = useState([])
    const query = useRef(null)
    const getMeals = async () => {
        console.log(query.current.value)
        try {
            const search = await API.search(query.current.value)
            console.log(search)
            setMeals(search)
        } catch (err) { console.log(err) }


    }

    return (
        <div>
              <form>
                    <input
                        ref={query}
                        name="query"
                        placeholder="Search"
                    />
                    <button
                        onClick={getMeals   }
                        type="button"
                    >Search</button>
                </form>
        </div>
                )
}

                export default MealPlan;
