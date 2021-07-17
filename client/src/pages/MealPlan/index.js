import API from "../utils/API"

function MealPlan(){
    const [meals, setMeals] = useState([])
    const query = useRef(null)
    const getMeals = async () => {
        console.log(query.current.value)
        try {
            const search = await API.search(query.current.value)
            console.log(search)
            setBooks(search.data.items)
        } catch (err) { console.log(err) }


    }

    return (
        <div>

        </div>
    )
}

export default MealPlan;
