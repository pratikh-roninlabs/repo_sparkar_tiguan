/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// Spark AR Studio extension for VS Code - https://fb.me/spark-vscode-plugin
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const Scene = require('Scene');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');
export const Patches = require('Patches');
export const Reactive = require('Reactive');

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'
let preX = Reactive.val(0);
let preY = Reactive.val(0);

(async function () {  // Enables async/await in JS [part 1]

  // To access scene objects
  // const [directionalLight] = await Promise.all([
  //   Scene.root.findFirst('directionalLight0')
  // ]);

  // To access class properties
  // const directionalLightIntensity = directionalLight.intensity;

  // To log messages to the console
  // Diagnostics.log('Console message logged from the script.');

  const xNode = await Scene.root.findFirst('parentX');
  const yNode = await Scene.root.findFirst('parentY');

  let finalX = Reactive.val(0);
  let finalY = Reactive.val(-3.14 / 6);

  // let currX = await Patches.outputs.getScalar("panY");
  // let diffX = currX.sub(preX);
  // finalX = finalX.add(diffX.mul(0.001));
  // xNode.transform.rotationX = finalX;
  // preX = currX;


  let currY = await Patches.outputs.getScalar("panX");
  let diffY = currY.sub(preY);
  finalY = finalY.add(diffY.mul(0.005));
  yNode.transform.rotationY = finalY;
  preY = currY;

  // (await Patches.outputs.getScalar("panX")).monitor().subscribe((val) => {
  //   const currX = val.newValue;
  //   // Diagnostics.log(xNode.transform.rotation.x.pinLastValue());
  //   if (currX !== 0) {
  //     // Diagnostics.log(currX);

  //     let diff = currX - preX;
  //     finalX = xNode.transform.rotationX.add(Reactive.val(diff));

  //     // xNode.transform.rotationX.add(Reactive.val(currX - preX));
  //     // const finalRot = Reactive.add(xNode.transform.rotationX, Reactive.val(currX - preX));
  //     // xNode.transform.rotationX = finalRot;
  //   }
  //   preX = currX;
  // });
  // (await Patches.outputs.getScalar("panY")).monitor().subscribe((val) => {
  //   const currY = val.newValue;
  //   // Diagnostics.log(currY);
  //   if (currY !== 0) {
  //     // yNode.transform.rotationY.add(Reactive.val(currY - preY));
  //   }
  //   preY = currY;
  // });

})(); // Enables async/await in JS [part 2]
