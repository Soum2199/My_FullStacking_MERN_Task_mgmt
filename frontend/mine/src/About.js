import React from 'react'
// import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./input.css"

function About() {
  const neavs = useNavigate()
  function moveToIdx() {
    neavs("/task")
  }
  return (
    <>
    <h1>About Task Management App</h1>
    <hr/>
    <h2>Organize your work and life, finally.</h2>
    <h3>No pen, paper required<br/>No need to remember as well</h3>
    <h6>Plan with confidence</h6>
    <h3>Simplify your planning</h3>
<p>Make the most of your time. Schedule due dates, visualize your week in calendar view, and set recurring tasks with ease</p>
<img src='https://static01.nyt.com/images/2019/10/05/multimedia/04xp-typing-print/04xp-typing-superJumbo.jpg' alt='mobimage'/>
<h4>Get your work Simplified and get satisfied, anytime, anywhere.</h4>
<i className="fa-solid fa-thumbs-up size-6"></i>  <i className="fa-solid fa-square-check size-6"></i>
<button type="button" class="btn btn-outline-secondary" onClick={moveToIdx}>Get Started</button>
<img src='https://postnitro.ai/blog/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8u2n8762%2Fproduction%2F1bfd0b317525093056ca17ebe574a3db12b44158-4288x2848.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75' alt='mobimage2'/>
    </>
  )
}
export default About