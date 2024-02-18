import React from 'react'

interface MyComponentProps{
  name : string ;
  age : number ;
}


export default function MyComponent({name , age}: MyComponentProps) {
  return (
    <div>
      <p>My name is {name} and I am {age} years old</p>
    </div>
  )
}
