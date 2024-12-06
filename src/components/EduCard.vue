<template>
  <div class="card-border">
    <a class="card1">
      <h3>
        <slot name="header"></slot>
      </h3>
      <p class="small">
        <slot name="content"></slot>
      </p>
      <div class="go-corner" href="#">
        <div class="go-arrow">
          →
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "EduCard"
}
</script>

<style>
@keyframes border-move {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.card-border {
  position: relative;
  width: 262px;
  height: 222px;
  border-radius: 10px;
  overflow: hidden;
  padding: 5px;
  background: linear-gradient(90deg, var(--alternative), var(--awesome), var(--alternative));
  background-size: 200% 200%;
  animation: border-move 4s linear infinite;
  transition: transform 0.3s;
}

.card1 {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #212121;
  border-radius: 10px;
  padding: 32px 64px;
  margin: 0;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
}

.card1:hover {
  transform: scale(1.05);
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

.card1 h3 {
  color: var(--secondary);
  font-size: 17px;
  line-height: 46px;
  font-weight: 700;
  margin-bottom: 4px;
  border: 2px solid var(--alternative); 
  border-radius: 50px;
  width: 50px;
  height: 50px;
  margin: auto;
  font-weight: 400;
}

.card1:hover h3 { 
  border-color: #ffffff; 
}

.card1 p {
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 30px;
  color: var(--secondary);
  margin-top: 2rem;
}

.card1 p.small {
  font-size: 1.4rem;
  color: var(--secondary);
  font-weight: 600;
}

.card1:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: -16px;
  right: -16px;
  background: var(--alternative);
  height: 36px;
  width: 36px;
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
