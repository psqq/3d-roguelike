import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import * as THREE from 'three';

export function loadObject(objFilename, textureFilename, onLoad) {
  let object;

  function loadModel() {

    object.traverse(function (child) {

      if (child.isMesh) child.material.map = texture;

    });

    onLoad(object);
  }

  var manager = new THREE.LoadingManager(loadModel);

  manager.onProgress = function (item, loaded, total) {

    console.log(item, loaded, total);

  };

  // texture

  var textureLoader = new THREE.TextureLoader(manager);

  var texture = textureLoader.load(textureFilename);

  // model

  function onProgress(xhr) {

    if (xhr.lengthComputable) {

      var percentComplete = xhr.loaded / xhr.total * 100;
      console.log('model ' + Math.round(percentComplete, 2) + '% downloaded');

    }

  }

  function onError(err) {
    console.error(err);
  }

  var loader = new OBJLoader(manager);

  loader.load(objFilename, function (obj) {

    object = obj;

  }, onProgress, onError);
}
