import React, { useState, useEffect } from 'react';
import {
    getMergeSortAnimations,
    getBubbleSortAnimations,
    getQuickSortAnimations,
    getHeapSortAnimations,
    getInsertionSortAnimations,
    getSelectionSortAnimations,
} from "../sortingAlgorithms/sortingAlgorithms.js";
import "./style_sv.css";

export default function SortingVisualizer(props) {
    const PRIMARY_COLOR = "white";
    const SECONDARY_COLOR = "red";

    const [array, setArray] = useState([]);
    const [ANIMATION_SPEED_MS, setANIMATION_SPEED_MS] = useState(1);
    const [NUMBER_OF_ARRAY_BARS, setNUMBER_OF_ARRAY_BARS] = useState(70);

    useEffect(() => {
        resetArray();
    }, []);

    //Functions
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(50, 540));
        }
        setArray(array);
    }

    function setBarNumber(e) {
        setNUMBER_OF_ARRAY_BARS(e);
        resetArray();
    }

    function setAnimationSpeed(e) {
        setANIMATION_SPEED_MS(e);
    }

    //Sorting Functions
    function mergeSort() {
        const animations = getMergeSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
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

    function bubbleSort() {
        const animations = getBubbleSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
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

    function quickSort() {
        const animations = getQuickSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            const [barOneIdx, barTwoIdx, isSwap] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = isSwap ? PRIMARY_COLOR : SECONDARY_COLOR;
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

    function insertionSort() {
        const animations = getInsertionSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            const [barOneIdx, barTwoIdx, isSwap] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = isSwap ? PRIMARY_COLOR : SECONDARY_COLOR;
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

    function heapSort() {
        const animations = getHeapSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            const [barOneIdx, barTwoIdx, isSwap] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = isSwap ? PRIMARY_COLOR : SECONDARY_COLOR;
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

    function selectionSort() {
        const animations = getSelectionSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            const [barOneIdx, barTwoIdx, isSwap] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = isSwap ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
                if (isSwap) {
                    const tempHeight = barOneStyle.height;
                    barOneStyle.height = barTwoStyle.height;
                    barTwoStyle.height = tempHeight;
                }
            }, i * ANIMATION_SPEED_MS);
        }
    }

    return (
        <div className="navbar w-full h-20 bg-dark-cyan">
            <div className="btnleft absolute ">
                <button
                    className=" px-2 py-2 bg-cyan-600 ring-1 ring-cyan-300 hover:bg-cyan-200 hover:text-dark-cyan rounded-md mx-2 my-4"
                    onClick={() => resetArray()}
                >
                    Generate New Array
                </button>
                <button
                    className=" px-2 py-2 bg-cyan-600 ring-1 ring-cyan-300 hover:bg-cyan-200 hover:text-dark-cyan rounded-md mx-2 my-4"
                    onClick={() => mergeSort()}
                >
                    Merge Sort
                </button>
                <button
                    className=" px-2 py-2 bg-cyan-600 ring-1 ring-cyan-300 hover:bg-cyan-200 hover:text-dark-cyan rounded-md mx-2 my-4"
                    onClick={() => quickSort()}
                >
                    Quick Sort
                </button>
                <button
                    className=" px-2 py-2 bg-cyan-600 ring-1 ring-cyan-300 hover:bg-cyan-200 hover:text-dark-cyan rounded-md mx-2 my-4"
                    onClick={() => heapSort()}
                >
                    Heap Sort
                </button>
                <button
                    className=" px-2 py-2 bg-cyan-600 ring-1 ring-cyan-300 hover:bg-cyan-200 hover:text-dark-cyan rounded-md mx-2 my-4"
                    onClick={() => insertionSort()}
                >
                    Insertion Sort
                </button>
                <button
                    className=" px-2 py-2 bg-cyan-600 ring-1 ring-cyan-300 hover:bg-cyan-200 hover:text-dark-cyan rounded-md mx-2 my-4"
                    onClick={() => bubbleSort()}
                >
                    Bubble Sort
                </button>
                <button
                    className=" px-2 py-2 bg-cyan-600 ring-1 ring-cyan-300 hover:bg-cyan-200 hover:text-dark-cyan rounded-md mx-2 my-4"
                    onClick={() => selectionSort()}
                >
                    Selection Sort
                </button>
            </div>
            <div className="btnright pt-4 pb-4 mr-3 absolute right-3 top-1.5">
                <div className="numberofBars inline m-2 p-3 bg-cyan-800  rounded-md">
                    <label
                        className="rounded-md px-1 mx-1 active:bg-cyan-800 text-white"
                        for="points"
                    >
                        Number of Bars
                    </label>
                    <input
                        className="w-20"
                        type="range"
                        id="points"
                        name="points"
                        min="10"
                        max="100"
                        value={NUMBER_OF_ARRAY_BARS}
                        onChange={(e) => {
                            setBarNumber(e.target.value);
                        }}
                    />
                </div>
                <div className="numberofBars inline m-2 p-3 bg-cyan-800  rounded-md">
                    <label
                        className="rounded-md px-1 mx-1 active:bg-cyan-800 text-white"
                        for="points"
                    >
                        Animation Time: {ANIMATION_SPEED_MS} ms
                    </label>
                    <input
                        className="w-20"
                        type="range"
                        id="points"
                        name="points"
                        min="1"
                        max="100"
                        value={ANIMATION_SPEED_MS}
                        onChange={(e) => {
                            setAnimationSpeed(e.target.value);
                        }}
                    />
                </div>
            </div>

            <div className="array-container justify-center flex relative top-20 pl-12 pr-12">
                {array.map((value, idx) => (
                    <div
                        className="array-bar w-2 inline-block mx-1 my-0"
                        key={idx}
                        style={{ height: value }}
                    />
                ))}
            </div>
        </div>
    );
}
