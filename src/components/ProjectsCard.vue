<template>
    <div class="projects-card">
      <div class="content-wrapper">
        <div class="card-header">
          <div class="indicator">
            <slot name="project-card-indicator"></slot>
          </div>
        </div>
        <div class="card-body">
          <h3 class="card-title">
            <slot name="project-card-title"></slot>
          </h3>
          <p class="card-description">
            <slot name="project-card-desc"></slot>
          </p>
        </div>
        <div class="card-footer">
          <slot name="project-card-footer"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProjectsCard",
  };
  </script>
  
  <style>
.projects-card {
  background-color: var(--awesome);
  border-radius: 10px;
  color: white;
  padding: 20px;
  width: 300px;
  height: 330px;
  border-bottom: 8px solid var(--alternative);
  overflow: hidden;
  position: relative;
}

.content-wrapper {
  transition: transform 0.3s ease; /* Smooth transition for content movement */
  margin-top: 1.5rem;
}

.projects-card:hover .content-wrapper {
  transform: translateY(-10px); /* Moves content up */
}

.card-header {
  display: flex;
  justify-content: center;
}

.indicator {
  border: 1px solid var(--alternative);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding-top: 1rem;
  margin-bottom: 1rem;
}

.card-body {
  margin-bottom: 10px;
  color: var(--secondary);
}

.card-title {
  font-size: 20px;
  font-weight: 600;
}

.card-description {
  font-size: 14px;
  font-weight: 200;
}

.card-footer {
  display: flex;
  justify-content: center;
  gap: 1rem;
  position: absolute;
  bottom: 10px; /* Lower the footer closer to the bottom */
  left: 0;
  width: 100%;
  transform: translateY(100%); /* Start partially hidden, lower than before */
  opacity: 0; /* Make it invisible initially */
  transition: transform 0.3s ease, opacity 0.3s ease; /* Smooth transition */
}

.projects-card:hover .card-footer {
  transform: translateY(95%); /* Slide footer into place */
  opacity: 1; /* Make it visible */
}
</style>

  