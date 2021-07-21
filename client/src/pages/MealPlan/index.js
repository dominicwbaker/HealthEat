import React, { useState, useEffect, useRef } from 'react'
import API from "../../utils/API"
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { ButtonGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class MealPlan extends React.Component {
    // const [meals, setMeals] = useState([])
    constructor(props) {
        super(props);
        this.state = {
            meals: []
        }
    }
    // const query = useRef(null)

    async getMeals(pick) {
        // console.log(query.current.value)
        try {
            await API.search(pick).then((search) => {
                // setMeals(search.data, () => {
                //     console.log("working")
                // })
                this.setState({
                    meals: search.data
                }, () => {
                    console.log(this.state.meals)

                    // const randSearch = Math.floor(Math.random() * meals.length)
                    // const randMeal = meals[randSearch]
                    // console.log(randMeal)
                    var n = 3
                    var randomMeals = new Array(n),
                        len = this.state.meals.length,
                        taken = new Array(len);
                    if (n > len)
                        throw new RangeError("getRandom: more elements taken than available");
                    while (n--) {
                        var x = Math.floor(Math.random() * len);
                        randomMeals[n] = this.state.meals[x in taken ? taken[x] : x];
                        taken[x] = --len in taken ? taken[len] : len;
                    } console.log(randomMeals)
                })
            })


        } catch (err) { console.log(err) }

    }

    render() {

        return (
            <div>
                {['Secondary'].map(
                    (variant) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={variant}
                            id={`dropdown-variants-${variant}`}
                            variant={variant.toLowerCase()}
                            title={variant}
                        >
                            <Dropdown.Item onClick={() => { this.getMeals("keto-friendly") }} eventKey="1">Keto-Friendly</Dropdown.Item>
                            <Dropdown.Item onClick={() => { this.getMeals("pescatarian") }}  eventKey="2">Pescatarian</Dropdown.Item>
                            <Dropdown.Item onClick={() => { this.getMeals("fodmap-free") }} eventKey="3">Fodmap-Free</Dropdown.Item>
                            <Dropdown.Item onClick={() => { this.getMeals("vegan") }} eventKey="4">Vegan</Dropdown.Item>
                            <Dropdown.Item onClick={() => { this.getMeals("gluten-free") }} eventKey="5">Gluten-Free</Dropdown.Item>
                            <Dropdown.Item onClick={() => { this.getMeals("tree-nut-free") }} eventKey="6">Tree-Nut-Free</Dropdown.Item>
                        </DropdownButton>
                    ),
                )}

{['Secondary'].map(
    (variant) => (
      <DropdownButton
        as={ButtonGroup}
        key={variant}
        id={`dropdown-variants-${variant}`}
        variant={variant.toLowerCase()}
        title={variant}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Active Item</Dropdown.Item>

      </DropdownButton>
    ),
  )}
            </div>

            /* <form>
                    <input
                        ref={query}
                        name="query"
                        placeholder="Search"
                    />
                    <button
                        onClick={getMeals   }
                        type="button"
                    >Search</button>
                </form> */
        )
    }
}

export default MealPlan;
