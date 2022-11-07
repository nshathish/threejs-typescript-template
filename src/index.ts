import BasicScene from './basic-scene';

let scene = new BasicScene();
scene.initialize();

function loop() {
  scene.camera.updateProjectionMatrix();
  scene.renderer.render(scene, scene.camera);
  scene.orbitals.update();
  requestAnimationFrame(loop);
}

loop();