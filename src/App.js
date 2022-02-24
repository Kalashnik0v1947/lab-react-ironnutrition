import './App.css';
import foods from './foods.json';
import React from 'react'

const [food, setFood] = React.useState(foods)
console.log(food)

function App() {
  return(<div>
    
  {food.map(()=>{
    return (
      <div>
  <p>food</p>
  <img src="FOOD_IMAGE_HERE" width={0} />
</div>
    )
  })}

</div>)
}

export default App;