import React from 'react';
import {getMergeSortAnimations, getBubbleSortAnimations, getQuickSortAnimations,getHeapSortAnimations,
   getInsertionSortAnimations, getSelectionSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import './style_sv.css';

// Change this value for the speed of the animations.
let ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
let NUMBER_OF_ARRAY_BARS = 80;


// This is the main color of the array bars.
let PRIMARY_COLOR = 'white';
// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        array: [],
      };
    }

    componentDidMount() {
      this.resetArray();
    }

    resetArray() {                                       // generate new array button 
      const array = [];
      for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
        array.push(randomIntFromInterval(50,540));      // bar length - push a random value b/w 50 & 500
      }
      this.setState({array});
    }

    mergeSort() {
      const animations = getMergeSortAnimations(this.state.array);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }

    bubbleSort() {
      const animations = getBubbleSortAnimations(this.state.array);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const [barOneIdx, barTwoIdx, isSwap] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = isSwap ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
          if (isSwap) {
            const tempHeight = barOneStyle.height;
            barOneStyle.height = barTwoStyle.height;
            barTwoStyle.height = tempHeight;
          }
        }, i * ANIMATION_SPEED_MS);
      }
    }    
    
    quickSort(){
      const animations = getQuickSortAnimations(this.state.array);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const [barOneIdx, barTwoIdx, isSwap] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = isSwap ? PRIMARY_COLOR : SECONDARY_COLOR ;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
          if (isSwap) {
            const tempHeight = barOneStyle.height;
            barOneStyle.height = barTwoStyle.height;
            barTwoStyle.height = tempHeight;
          }
        }, i * ANIMATION_SPEED_MS);
      }
    }

    insertionSort(){
      const animations = getInsertionSortAnimations(this.state.array);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const [barOneIdx, barTwoIdx, isSwap] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = isSwap ? PRIMARY_COLOR : SECONDARY_COLOR ;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
          if (isSwap) {
            const tempHeight = barOneStyle.height;
            barOneStyle.height = barTwoStyle.height;
            barTwoStyle.height = tempHeight;
          }
        }, i * ANIMATION_SPEED_MS);
      }
    }

    heapSort(){
      const animations = getHeapSortAnimations(this.state.array);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const [barOneIdx, barTwoIdx, isSwap] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = isSwap ? PRIMARY_COLOR : SECONDARY_COLOR ;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
          if (isSwap) {
            const tempHeight = barOneStyle.height;
            barOneStyle.height = barTwoStyle.height;
            barTwoStyle.height = tempHeight;
          }
        }, i * ANIMATION_SPEED_MS);
      }
    }

    selectionSort(){
      const animations = getSelectionSortAnimations(this.state.array);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const [barOneIdx, barTwoIdx, isSwap] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          if (isSwap) {
            const tempHeight = barOneStyle.height;
            barOneStyle.height = barTwoStyle.height;
            barTwoStyle.height = tempHeight;
          }
        }, i * ANIMATION_SPEED_MS);
      }
    }
    
    decreaseNumberOfBars(){
      if(NUMBER_OF_ARRAY_BARS >= 12){
        NUMBER_OF_ARRAY_BARS-=10;
        this.resetArray();
      }
    }
    increaseNumberOfBars(){
      if(NUMBER_OF_ARRAY_BARS <= 100){
        NUMBER_OF_ARRAY_BARS+=10;
        this.resetArray();
      }
    }
    decreaseAnimation(){
        ANIMATION_SPEED_MS -= 5;
        if(ANIMATION_SPEED_MS <=0){
          ANIMATION_SPEED_MS = 1;
        }
    }
    increaseAnimation(){
      ANIMATION_SPEED_MS += 5;
    }

    render(){
        const{array} = this.state;

        return(
        <div className="navbar w-full h-20 bg-dark-cyan">
          <div className="btnleft absolute ">
            <button className=' px-2 py-2 bg-cyan-600 hover:bg-lightice hover:text-dark-cyan rounded-md mx-3 my-4' onClick={()=>this.resetArray()}>Generate New Array</button>
            <button className=' px-2 py-2 bg-cyan-600 hover:bg-lightice hover:text-dark-cyan rounded-md mx-3 my-4' onClick={()=>this.mergeSort()}>Merge Sort</button>
            <button className=' px-2 py-2 bg-cyan-600 hover:bg-lightice hover:text-dark-cyan rounded-md mx-3 my-4' onClick={()=>this.quickSort()}>Quick Sort</button>
            <button className=' px-2 py-2 bg-cyan-600 hover:bg-lightice hover:text-dark-cyan rounded-md mx-3 my-4' onClick={()=>this.heapSort()}>Heap Sort</button>
            <button className=' px-2 py-2 bg-cyan-600 hover:bg-lightice hover:text-dark-cyan rounded-md mx-3 my-4' onClick={()=>this.insertionSort()}>Insertion Sort</button>
            <button className=' px-2 py-2 bg-cyan-600 hover:bg-lightice hover:text-dark-cyan rounded-md mx-3 my-4' onClick={()=>this.bubbleSort()}>Bubble Sort</button>
            <button className=' px-2 py-2 bg-cyan-600 hover:bg-lightice hover:text-dark-cyan rounded-md mx-3 my-4' onClick={()=>this.selectionSort()}>Selection Sort</button>
          </div>
          <div className="btnright pt-4 pb-4 mr-3 absolute right-3 top-1.5">
            <div className="numberofBars inline m-3 p-3 bg-cyan-600 rounded-md">
              <p className='px-1 inline'>Number of Bars</p>
              <button className='rounded-md px-2.5 mx-1.5 bg-white text-dark-cyan active:bg-cyan-800 active:text-white hover:ring-2 ring-neutral-400 ring-inset' onClick={()=> this.decreaseNumberOfBars()}><b>-</b></button>
              <button className='rounded-md px-2.5 mx-1.5 bg-white text-dark-cyan active:bg-cyan-800 active:text-white hover:ring-2 ring-neutral-400 ring-inset' onClick={()=> this.increaseNumberOfBars()}><b>+</b></button>
            </div>
            <div className="animationSpeed inline m-3 p-3 bg-cyan-600 rounded-md">
              <p className='px-1 inline'>Animation Speed</p>
              <button className='rounded-md px-2.5 mx-1.5 bg-white text-dark-cyan active:bg-cyan-800 active:text-white hover:ring-2 ring-neutral-400 ring-inset' onClick={()=> this.increaseAnimation()}><b>-</b></button>
              <button className='rounded-md px-2.5 mx-1.5 bg-white text-dark-cyan active:bg-cyan-800 active:text-white hover:ring-2 ring-neutral-400 ring-inset'  onClick={()=> this.decreaseAnimation()}><b>+</b></button>
            </div>
          </div>

          <div className="array-container justify-center flex relative top-20 pl-12 pr-12">
            {array.map((value, idx) =>(
                <div 
                  className="array-bar w-2 inline-block mx-1 my-0" 
                  key={idx}
                  style = {{height: value}}
                />
            ))}
          </div>
        </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}
