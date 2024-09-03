{/* <div id="parent">
    <div id="child">
        <h1></h1>
    </div>
    <div></div>
</div> */}


// const heading = React.createElement('div', {id: 'parent'}, 
// React.createElement('div', {id: 'child'}, 
// React.createElement('h1', {}, 'Hello World')
// ));

{/* <div id='parent'>
    <div id='child1'>
        <p>Hello World</p>
    </div>
    <div id='child2'>
        <h1>React</h1>
    </div>
</div> */}


const heading = React.createElement('div', {id: 'parent'}, [
    React.createElement('div', {id: 'child1'}, 
React.createElement('p', {}, 'Hello World')
), React.createElement('div', {id: 'child2'}, 
React.createElement('h1', {}, 'React')
)]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);