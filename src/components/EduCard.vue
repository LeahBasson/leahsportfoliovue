<template>
    <a class="card1">
      <h3>1</h3>
      <p class="small">AWS</p>
      <div class="go-corner" href="#">
        <div class="go-arrow">
          →
        </div>
      </div>
    </a>
  </template>
  
  <script>
  export default {
    name: "EduCard"
  }
  </script>
  
  <style>
  @keyframes purple-border {
    0% {
      border: 4px solid var(--alternative);
    }
    50% {
      border: 4px solid var(--alternative);
    }
    100% {
      border: 4px solid var(--alternative);
    }
  }
  
  .card1 {
    display: block;
    position: relative;
    max-width: 262px;
    background-color: var(--awesome);
    border-radius: 4px;
    padding: 32px 64px;
    margin: 12px;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;
    animation: purple-border 2s infinite;
  }
  
  .card1:hover {
    animation: none;
  }
  
  .go-corner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 32px;
    height: 32px;
    overflow: hidden;
    top: 0;
    right: 0;
    background-color: var(--alternative);
    border-radius: 0 4px 0 32px;
  }
  
  .go-arrow {
    margin-top: -4px;
    margin-right: -4px;
    color: white;
    font-family: courier, sans;
  }
  
  h3 {
    color: #262626;
    font-size: 17px;
    line-height: 24px;
    font-weight: 700;
    margin-bottom: 4px;
  }
  
  p {
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    color: #666666;
  }
  
  p.small {
    font-size: 14px;
  }
  
  .card1:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: var(--alternative);
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.25s ease-out;
  }
  
  .card1:hover:before {
    transform: scale(21);
  }
  
  .card1:hover h3,
  .card1:hover p {
    transition: all 0.3s ease-out;
    color: #ffffff;
  }
  </style>
  