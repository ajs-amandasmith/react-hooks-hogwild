import React from "react";
import Nav from "./Nav";
import FilterableHogTable from "./FilterableHogTable";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
      <FilterableHogTable hogs={hogs}/>
		</div>
	);
}

export default App;



// We've imported the Semantic CSS library to keep your piggies looking pretty. To keep your hogs in columns, make sure their parent container has the class "ui grid container". The children in the columns should have class "ui eight wide column". (Semantic uses a grid with a default of 16 units wide, so 8-wide will make two columns and 4-wide will make 4 columns.)

// Let’s go through each one and figure out which one is state. Ask three questions about each piece of data:

// Is it passed in from a parent via props? If so, it probably isn’t state.
// Does it remain unchanged over time? If so, it probably isn’t state.
// Can you compute it based on any other state or props in your component? If so, it isn’t state.


  // Filter the hogs that are greased

  // Sort hogs based on name or weight

  // BONUS:
  // Can hide hogs (not delete)
  // Add a form to add new hogs
  // Implement Semantic Cards for each hog

  // App
  //  |__Nav
  //  |__FilterableHogTable
  //          |___FilterBar
  //          |___HogList
  //                |__Hog
