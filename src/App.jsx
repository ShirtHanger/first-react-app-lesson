/* Function Component */

/* Name  must be capitalized or it wont work */

const App = () => { /* Name must match the file it's inside of */

  const contract = { target: 'Mark Faba', done: true }
  /* JavaScript object that is dynamically returned */

  const contracts = [
    {target: 'Silvio Caruso', done: true},
    {target: 'Yuki Yamazaki', done: false},
    {target: 'Victor Novikov', done: true},
    {target: 'Robert Knox', done: false},
    {target: 'Alexa Christine Carlisle', done: true},
    {target: 'Sierra Knox', done: false},
  ];

  const contractsList = contracts.map((loopedContract, index) =>
    <li key={index}>{`${loopedContract.target} - Contract #${index}`}</li> /* This prevents errors when you're working with databases */
  )

  const contractsListAdvanced = contracts.map((loopedContract, index) =>
    <li key={index}>{`${loopedContract.target} - Contract #${index} - Status - ${loopedContract.done ? `Closed (Complete)` : `Active (Incomplete)` } `}</li> /* This prevents errors when you're working with databases */
  )


  /* Define what element is being returned */
  return (
    <>
      <h1>Hello World</h1>
      <p>{ contract.target }</p> {/* Dynamically renders text of the object above */}
      <hr />

      <h2>Conditional Rendering with Ternery</h2>
      <p>{contract.done ? `Contract on ${contract.target} is closed (Complete)` : `Contract on ${contract.target} is active (Incomplete)` }</p>
      <hr />

      <h2>Looping with JSX</h2>
      <p>(You need to use array.map())</p>
      <h3>List of contracts</h3>
      {/* Converting an array of objects into a list item */}
      <ul>
        {contractsList} {/* Stored in above variable, for ease of reading */}
      </ul>
      <hr />

      <h2>Looping and Conditional Rendering</h2>
      <p>Mixing ternerarys with looping</p>
      <h3>List of contracts</h3>
      <ul>
        {contractsListAdvanced}
      </ul>
      <hr />

    </>
   
  )
}

/* now export it for the rest of the app */
export default App