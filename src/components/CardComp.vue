<template>
  <div class="card-border">
    <div class="card">
      <!-- Default card content slot -->
      <div class="card-content">
        <slot name="cardContent"></slot>
      </div>
  
      <!-- Overlay slot -->
      <div class="card-overlay">
        <slot name="cardOverlay"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComp',
};
</script>

<style scoped>
.card-border {
  position: relative;
  width: 250px;
  height: 350px;
  border-radius: 10px;
  overflow: hidden;
  padding: 5px;
  background: linear-gradient(90deg, var(--alternative), var(--awesome), var(--alternative));
  background-size: 200% 200%;
  animation: border-move 4s linear infinite;
  transition: transform 0.3s;
}

@keyframes border-move {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.card {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--awesome);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
  text-align: center;
}

.card:hover {
  transform: scale(1.05);
}

.card-content {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 2;
  transition: opacity 0.3s;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--alternative); 
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 0;
  padding: 15px;
  font-size: 0.9rem;
  border-radius: 10px;
  transition: opacity 0.3s;
}

.card:hover .card-overlay {
  opacity: 1;
}

.card:hover .card-content {
  opacity: 0;
}

/* Media query for 555px and less*/
@media (max-width: 555px){
  .card-border {
  position: relative;
  width: 280px;
  height: 380px;
  border-radius: 10px;
  overflow: hidden;
  padding: 5px;
  background: linear-gradient(90deg, var(--alternative), var(--awesome), var(--alternative));
  background-size: 200% 200%;
  animation: border-move 4s linear infinite;
  transition: transform 0.3s;
}
}

/* Media query 556px to 999px */
@media (min-width: 556px) and (max-width: 999px){

  .card-border {
  position: relative;
  width: 280px;
  height: 380px;
  border-radius: 10px;
  overflow: hidden;
  padding: 5px;
  background: linear-gradient(90deg, var(--alternative), var(--awesome), var(--alternative));
  background-size: 200% 200%;
  animation: border-move 4s linear infinite;
  transition: transform 0.3s;
}

}
</style>
