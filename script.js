let canvas, engine, scene, camera, currentMode = 'create', selectedColor = null;
const cubes = [];
const cubeSize = 1.5;

const colors = [
  "#000000", "#FFFFFF", "#FF6B6B", "#FF9A3E", "#FFD93E", "#FFFA65", "#A2FF65",
  "#65FF88", "#65FFC3", "#65EFFF", "#65A6FF", "#9A65FF",
  "#FF65A6", "#FF65E1"
];


const cubesData = [{"position":{"x":-12,"y":0,"z":-12},"color":"#FFFFFF"},{"position":{"x":-12,"y":0,"z":-10.5},"color":"#FFFFFF"},{"position":{"x":-12,"y":0,"z":-9},"color":"#FFFFFF"},{"position":{"x":-12,"y":0,"z":-7.5},"color":"#FFFFFF"},{"position":{"x":-12,"y":0,"z":-6},"color":"#FFFFFF"},{"position":{"x":-12,"y":0,"z":-4.5},"color":"#FFFFFF"},{"position":{"x":-12,"y":0,"z":-3},"color":"#FFFFFF"},{"position":{"x":-12,"y":0,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-12,"y":0,"z":0},"color":"#FFFFFF"},{"position":{"x":-12,"y":0,"z":1.5},"color":"#FFFFFF"},{"position":{"x":-12,"y":0,"z":3},"color":"#FFFFFF"},{"position":{"x":-12,"y":0,"z":4.5},"color":"#FFFFFF"},{"position":{"x":-12,"y":0,"z":6},"color":"#FFFFFF"},{"position":{"x":-12,"y":0,"z":7.5},"color":"#FFFFFF"},{"position":{"x":-12,"y":0,"z":9},"color":"#FFFFFF"},{"position":{"x":-12,"y":0,"z":10.5},"color":"#FFFFFF"},{"position":{"x":-10.5,"y":0,"z":-12},"color":"#FFFFFF"},{"position":{"x":-10.5,"y":0,"z":-10.5},"color":"#65A6FF"},{"position":{"x":-10.5,"y":0,"z":-9},"color":"#FFFFFF"},{"position":{"x":-10.5,"y":0,"z":-7.5},"color":"#9A65FF"},{"position":{"x":-10.5,"y":0,"z":-6},"color":"#FF9A3E"},{"position":{"x":-10.5,"y":0,"z":-4.5},"color":"#FFD93E"},{"position":{"x":-10.5,"y":0,"z":-3},"color":"#65A6FF"},{"position":{"x":-10.5,"y":0,"z":-1.5},"color":"#65A6FF"},{"position":{"x":-10.5,"y":0,"z":0},"color":"#65EFFF"},{"position":{"x":-10.5,"y":0,"z":1.5},"color":"#A2FF65"},{"position":{"x":-10.5,"y":0,"z":3},"color":"#65FF88"},{"position":{"x":-10.5,"y":0,"z":4.5},"color":"#65FF88"},{"position":{"x":-10.5,"y":0,"z":6},"color":"#65FFC3"},{"position":{"x":-10.5,"y":0,"z":7.5},"color":"#FFD93E"},{"position":{"x":-10.5,"y":0,"z":9},"color":"#FFFA65"},{"position":{"x":-10.5,"y":0,"z":10.5},"color":"#FFFFFF"},{"position":{"x":-9,"y":0,"z":-12},"color":"#FFFFFF"},{"position":{"x":-9,"y":0,"z":-10.5},"color":"#FF65E1"},{"position":{"x":-9,"y":0,"z":-9},"color":"#65FF88"},{"position":{"x":-9,"y":0,"z":-7.5},"color":"#FFFFFF"},{"position":{"x":-9,"y":0,"z":-6},"color":"#65FF88"},{"position":{"x":-9,"y":0,"z":-4.5},"color":"#65FF88"},{"position":{"x":-9,"y":0,"z":-3},"color":"#FF65A6"},{"position":{"x":-9,"y":0,"z":-1.5},"color":"#65FFC3"},{"position":{"x":-9,"y":0,"z":0},"color":"#65A6FF"},{"position":{"x":-9,"y":0,"z":1.5},"color":"#FFFA65"},{"position":{"x":-9,"y":0,"z":3},"color":"#FFFFFF"},{"position":{"x":-9,"y":0,"z":4.5},"color":"#FF9A3E"},{"position":{"x":-9,"y":0,"z":6},"color":"#65FFC3"},{"position":{"x":-9,"y":0,"z":7.5},"color":"#65FF88"},{"position":{"x":-9,"y":0,"z":9},"color":"#65FF88"},{"position":{"x":-9,"y":0,"z":10.5},"color":"#FFFFFF"},{"position":{"x":-7.5,"y":0,"z":-12},"color":"#FFFFFF"},{"position":{"x":-7.5,"y":0,"z":-10.5},"color":"#FF6B6B"},{"position":{"x":-7.5,"y":0,"z":-9},"color":"#65FF88"},{"position":{"x":-7.5,"y":0,"z":-7.5},"color":"#65FF88"},{"position":{"x":-7.5,"y":0,"z":-6},"color":"#FFFA65"},{"position":{"x":-7.5,"y":0,"z":-4.5},"color":"#FF6B6B"},{"position":{"x":-7.5,"y":0,"z":-3},"color":"#65A6FF"},{"position":{"x":-7.5,"y":0,"z":-1.5},"color":"#FF9A3E"},{"position":{"x":-7.5,"y":0,"z":0},"color":"#FF65E1"},{"position":{"x":-7.5,"y":0,"z":1.5},"color":"#65FF88"},{"position":{"x":-7.5,"y":0,"z":3},"color":"#FF6B6B"},{"position":{"x":-7.5,"y":0,"z":4.5},"color":"#A2FF65"},{"position":{"x":-7.5,"y":0,"z":6},"color":"#FF65E1"},{"position":{"x":-7.5,"y":0,"z":7.5},"color":"#65FFC3"},{"position":{"x":-7.5,"y":0,"z":9},"color":"#65A6FF"},{"position":{"x":-7.5,"y":0,"z":10.5},"color":"#FFFFFF"},{"position":{"x":-6,"y":0,"z":-12},"color":"#FFFFFF"},{"position":{"x":-6,"y":0,"z":-10.5},"color":"#65FF88"},{"position":{"x":-6,"y":0,"z":-9},"color":"#9A65FF"},{"position":{"x":-6,"y":0,"z":-7.5},"color":"#FFFFFF"},{"position":{"x":-6,"y":0,"z":-6},"color":"#9A65FF"},{"position":{"x":-6,"y":0,"z":-4.5},"color":"#FFFFFF"},{"position":{"x":-6,"y":0,"z":-3},"color":"#FF65E1"},{"position":{"x":-6,"y":0,"z":0},"color":"#FFFA65"},{"position":{"x":-6,"y":0,"z":1.5},"color":"#65EFFF"},{"position":{"x":-6,"y":0,"z":3},"color":"#FF6B6B"},{"position":{"x":-6,"y":0,"z":4.5},"color":"#65FF88"},{"position":{"x":-6,"y":0,"z":6},"color":"#FFFA65"},{"position":{"x":-6,"y":0,"z":7.5},"color":"#FFFFFF"},{"position":{"x":-6,"y":0,"z":9},"color":"#FF9A3E"},{"position":{"x":-4.5,"y":0,"z":-12},"color":"#FFFFFF"},{"position":{"x":-4.5,"y":0,"z":-10.5},"color":"#FFFFFF"},{"position":{"x":-4.5,"y":0,"z":-9},"color":"#FF65A6"},{"position":{"x":-4.5,"y":0,"z":-7.5},"color":"#FF6B6B"},{"position":{"x":-4.5,"y":0,"z":-6},"color":"#65EFFF"},{"position":{"x":-4.5,"y":0,"z":-4.5},"color":"#65FFC3"},{"position":{"x":-4.5,"y":0,"z":-3},"color":"#FF9A3E"},{"position":{"x":-4.5,"y":0,"z":0},"color":"#65A6FF"},{"position":{"x":-4.5,"y":0,"z":1.5},"color":"#FF65A6"},{"position":{"x":-4.5,"y":0,"z":3},"color":"#FF6B6B"},{"position":{"x":-4.5,"y":0,"z":4.5},"color":"#FF6B6B"},{"position":{"x":-4.5,"y":0,"z":6},"color":"#FFFFFF"},{"position":{"x":-4.5,"y":0,"z":7.5},"color":"#A2FF65"},{"position":{"x":-4.5,"y":0,"z":9},"color":"#65EFFF"},{"position":{"x":-4.5,"y":0,"z":10.5},"color":"#FFFFFF"},{"position":{"x":-3,"y":0,"z":-12},"color":"#FFFFFF"},{"position":{"x":-3,"y":0,"z":-10.5},"color":"#65FFC3"},{"position":{"x":-3,"y":0,"z":-9},"color":"#A2FF65"},{"position":{"x":-3,"y":0,"z":-7.5},"color":"#65FF88"},{"position":{"x":-3,"y":0,"z":-6},"color":"#65FF88"},{"position":{"x":-3,"y":0,"z":-4.5},"color":"#65FFC3"},{"position":{"x":-3,"y":0,"z":-3},"color":"#FF6B6B"},{"position":{"x":-3,"y":0,"z":-1.5},"color":"#65EFFF"},{"position":{"x":-3,"y":0,"z":0},"color":"#FFD93E"},{"position":{"x":-3,"y":0,"z":1.5},"color":"#FF65E1"},{"position":{"x":-3,"y":0,"z":3},"color":"#FFFFFF"},{"position":{"x":-3,"y":0,"z":4.5},"color":"#FF65A6"},{"position":{"x":-3,"y":0,"z":7.5},"color":"#FFFFFF"},{"position":{"x":-3,"y":0,"z":9},"color":"#65A6FF"},{"position":{"x":-3,"y":0,"z":10.5},"color":"#FFFFFF"},{"position":{"x":-1.5,"y":0,"z":-12},"color":"#FFFFFF"},{"position":{"x":-1.5,"y":0,"z":-10.5},"color":"#FF6B6B"},{"position":{"x":-1.5,"y":0,"z":-9},"color":"#9A65FF"},{"position":{"x":-1.5,"y":0,"z":-7.5},"color":"#FF6B6B"},{"position":{"x":-1.5,"y":0,"z":-6},"color":"#FF6B6B"},{"position":{"x":-1.5,"y":0,"z":-4.5},"color":"#65EFFF"},{"position":{"x":-1.5,"y":0,"z":-3},"color":"#9A65FF"},{"position":{"x":-1.5,"y":0,"z":-1.5},"color":"#65FF88"},{"position":{"x":-1.5,"y":0,"z":0},"color":"#FFD93E"},{"position":{"x":-1.5,"y":0,"z":1.5},"color":"#A2FF65"},{"position":{"x":-1.5,"y":0,"z":3},"color":"#FF9A3E"},{"position":{"x":-1.5,"y":0,"z":4.5},"color":"#FF6B6B"},{"position":{"x":-1.5,"y":0,"z":6},"color":"#FF65E1"},{"position":{"x":-1.5,"y":0,"z":7.5},"color":"#65FF88"},{"position":{"x":-1.5,"y":0,"z":9},"color":"#9A65FF"},{"position":{"x":-1.5,"y":0,"z":10.5},"color":"#FFFFFF"},{"position":{"x":0,"y":0,"z":-12},"color":"#FFFFFF"},{"position":{"x":0,"y":0,"z":-10.5},"color":"#FF9A3E"},{"position":{"x":0,"y":0,"z":-9},"color":"#65A6FF"},{"position":{"x":0,"y":0,"z":-7.5},"color":"#65FF88"},{"position":{"x":0,"y":0,"z":-6},"color":"#65FF88"},{"position":{"x":0,"y":0,"z":-4.5},"color":"#9A65FF"},{"position":{"x":0,"y":0,"z":-3},"color":"#65FFC3"},{"position":{"x":0,"y":0,"z":-1.5},"color":"#65FF88"},{"position":{"x":0,"y":0,"z":0},"color":"#FF65E1"},{"position":{"x":0,"y":0,"z":1.5},"color":"#FFD93E"},{"position":{"x":0,"y":0,"z":3},"color":"#65FF88"},{"position":{"x":0,"y":0,"z":4.5},"color":"#FF9A3E"},{"position":{"x":0,"y":0,"z":6},"color":"#FF65E1"},{"position":{"x":0,"y":0,"z":7.5},"color":"#FF9A3E"},{"position":{"x":0,"y":0,"z":9},"color":"#FFFFFF"},{"position":{"x":0,"y":0,"z":10.5},"color":"#FFFFFF"},{"position":{"x":1.5,"y":0,"z":-12},"color":"#FFFFFF"},{"position":{"x":1.5,"y":0,"z":-10.5},"color":"#9A65FF"},{"position":{"x":1.5,"y":0,"z":-9},"color":"#65A6FF"},{"position":{"x":1.5,"y":0,"z":-7.5},"color":"#FF65A6"},{"position":{"x":1.5,"y":0,"z":-6},"color":"#FFFFFF"},{"position":{"x":1.5,"y":0,"z":-4.5},"color":"#65EFFF"},{"position":{"x":1.5,"y":0,"z":-3},"color":"#FF65A6"},{"position":{"x":1.5,"y":0,"z":-1.5},"color":"#65FFC3"},{"position":{"x":1.5,"y":0,"z":0},"color":"#A2FF65"},{"position":{"x":1.5,"y":0,"z":1.5},"color":"#65EFFF"},{"position":{"x":1.5,"y":0,"z":3},"color":"#65FFC3"},{"position":{"x":1.5,"y":0,"z":4.5},"color":"#FF65E1"},{"position":{"x":1.5,"y":0,"z":6},"color":"#65A6FF"},{"position":{"x":1.5,"y":0,"z":7.5},"color":"#65FFC3"},{"position":{"x":1.5,"y":0,"z":9},"color":"#FFFFFF"},{"position":{"x":1.5,"y":0,"z":10.5},"color":"#FFFFFF"},{"position":{"x":3,"y":0,"z":-12},"color":"#FFFFFF"},{"position":{"x":3,"y":0,"z":-10.5},"color":"#65A6FF"},{"position":{"x":3,"y":0,"z":-9},"color":"#FF65A6"},{"position":{"x":3,"y":0,"z":-7.5},"color":"#65FF88"},{"position":{"x":3,"y":0,"z":-6},"color":"#FFFFFF"},{"position":{"x":3,"y":0,"z":-4.5},"color":"#FFFA65"},{"position":{"x":3,"y":0,"z":-3},"color":"#FFFA65"},{"position":{"x":3,"y":0,"z":-1.5},"color":"#FF65A6"},{"position":{"x":3,"y":0,"z":0},"color":"#65A6FF"},{"position":{"x":3,"y":0,"z":1.5},"color":"#FFD93E"},{"position":{"x":3,"y":0,"z":3},"color":"#FF6B6B"},{"position":{"x":3,"y":0,"z":4.5},"color":"#65A6FF"},{"position":{"x":3,"y":0,"z":6},"color":"#FFFFFF"},{"position":{"x":3,"y":0,"z":7.5},"color":"#9A65FF"},{"position":{"x":3,"y":0,"z":9},"color":"#FF6B6B"},{"position":{"x":3,"y":0,"z":10.5},"color":"#FFFFFF"},{"position":{"x":4.5,"y":0,"z":-12},"color":"#FFFFFF"},{"position":{"x":4.5,"y":0,"z":-10.5},"color":"#FF6B6B"},{"position":{"x":4.5,"y":0,"z":-9},"color":"#FFFA65"},{"position":{"x":4.5,"y":0,"z":-7.5},"color":"#65A6FF"},{"position":{"x":4.5,"y":0,"z":-6},"color":"#65FF88"},{"position":{"x":4.5,"y":0,"z":-4.5},"color":"#65FF88"},{"position":{"x":4.5,"y":0,"z":-3},"color":"#65A6FF"},{"position":{"x":4.5,"y":0,"z":0},"color":"#9A65FF"},{"position":{"x":4.5,"y":0,"z":1.5},"color":"#FF9A3E"},{"position":{"x":4.5,"y":0,"z":3},"color":"#65A6FF"},{"position":{"x":4.5,"y":0,"z":4.5},"color":"#9A65FF"},{"position":{"x":4.5,"y":0,"z":6},"color":"#FFD93E"},{"position":{"x":4.5,"y":0,"z":7.5},"color":"#65FFC3"},{"position":{"x":4.5,"y":0,"z":9},"color":"#FFD93E"},{"position":{"x":4.5,"y":0,"z":10.5},"color":"#FFFFFF"},{"position":{"x":6,"y":0,"z":-12},"color":"#FFFFFF"},{"position":{"x":6,"y":0,"z":-10.5},"color":"#65A6FF"},{"position":{"x":6,"y":0,"z":-9},"color":"#65EFFF"},{"position":{"x":6,"y":0,"z":-7.5},"color":"#FF9A3E"},{"position":{"x":6,"y":0,"z":-6},"color":"#FFD93E"},{"position":{"x":6,"y":0,"z":-4.5},"color":"#65FF88"},{"position":{"x":6,"y":0,"z":-3},"color":"#FF6B6B"},{"position":{"x":6,"y":0,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":6,"y":0,"z":0},"color":"#65EFFF"},{"position":{"x":6,"y":0,"z":1.5},"color":"#FF6B6B"},{"position":{"x":6,"y":0,"z":3},"color":"#FFFFFF"},{"position":{"x":6,"y":0,"z":4.5},"color":"#FF65E1"},{"position":{"x":6,"y":0,"z":6},"color":"#FF6B6B"},{"position":{"x":6,"y":0,"z":7.5},"color":"#FF6B6B"},{"position":{"x":6,"y":0,"z":9},"color":"#65EFFF"},{"position":{"x":6,"y":0,"z":10.5},"color":"#FFFFFF"},{"position":{"x":7.5,"y":0,"z":-12},"color":"#FFFFFF"},{"position":{"x":7.5,"y":0,"z":-10.5},"color":"#65A6FF"},{"position":{"x":7.5,"y":0,"z":-9},"color":"#FFFFFF"},{"position":{"x":7.5,"y":0,"z":-7.5},"color":"#65A6FF"},{"position":{"x":7.5,"y":0,"z":-6},"color":"#FFFFFF"},{"position":{"x":7.5,"y":0,"z":-4.5},"color":"#65FF88"},{"position":{"x":7.5,"y":0,"z":-3},"color":"#65EFFF"},{"position":{"x":7.5,"y":0,"z":-1.5},"color":"#FFFA65"},{"position":{"x":7.5,"y":0,"z":0},"color":"#65A6FF"},{"position":{"x":7.5,"y":0,"z":1.5},"color":"#FF65E1"},{"position":{"x":7.5,"y":0,"z":3},"color":"#FF6B6B"},{"position":{"x":7.5,"y":0,"z":4.5},"color":"#9A65FF"},{"position":{"x":7.5,"y":0,"z":7.5},"color":"#FFFFFF"},{"position":{"x":7.5,"y":0,"z":9},"color":"#FF6B6B"},{"position":{"x":7.5,"y":0,"z":10.5},"color":"#FFFFFF"},{"position":{"x":9,"y":0,"z":-12},"color":"#FFFFFF"},{"position":{"x":9,"y":0,"z":-10.5},"color":"#65EFFF"},{"position":{"x":9,"y":0,"z":-9},"color":"#FF65E1"},{"position":{"x":9,"y":0,"z":-7.5},"color":"#9A65FF"},{"position":{"x":9,"y":0,"z":-6},"color":"#65FFC3"},{"position":{"x":9,"y":0,"z":-4.5},"color":"#FFFFFF"},{"position":{"x":9,"y":0,"z":-3},"color":"#FF9A3E"},{"position":{"x":9,"y":0,"z":-1.5},"color":"#FFFA65"},{"position":{"x":9,"y":0,"z":0},"color":"#65FF88"},{"position":{"x":9,"y":0,"z":1.5},"color":"#FF9A3E"},{"position":{"x":9,"y":0,"z":3},"color":"#FF65A6"},{"position":{"x":9,"y":0,"z":4.5},"color":"#65EFFF"},{"position":{"x":9,"y":0,"z":6},"color":"#FF65E1"},{"position":{"x":9,"y":0,"z":7.5},"color":"#65FFC3"},{"position":{"x":9,"y":0,"z":9},"color":"#65FFC3"},{"position":{"x":9,"y":0,"z":10.5},"color":"#FFFFFF"},{"position":{"x":10.5,"y":0,"z":-12},"color":"#FFFFFF"},{"position":{"x":10.5,"y":0,"z":-10.5},"color":"#FFFFFF"},{"position":{"x":10.5,"y":0,"z":-9},"color":"#FFFFFF"},{"position":{"x":10.5,"y":0,"z":-7.5},"color":"#FFFFFF"},{"position":{"x":10.5,"y":0,"z":-6},"color":"#FFFFFF"},{"position":{"x":10.5,"y":0,"z":-4.5},"color":"#FFFFFF"},{"position":{"x":10.5,"y":0,"z":-3},"color":"#FFFFFF"},{"position":{"x":10.5,"y":0,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":10.5,"y":0,"z":0},"color":"#FFFFFF"},{"position":{"x":10.5,"y":0,"z":1.5},"color":"#FFFFFF"},{"position":{"x":10.5,"y":0,"z":3},"color":"#FFFFFF"},{"position":{"x":10.5,"y":0,"z":4.5},"color":"#FFFFFF"},{"position":{"x":10.5,"y":0,"z":6},"color":"#FFFFFF"},{"position":{"x":10.5,"y":0,"z":7.5},"color":"#FFFFFF"},{"position":{"x":10.5,"y":0,"z":9},"color":"#FFFFFF"},{"position":{"x":10.5,"y":0,"z":10.5},"color":"#FFFFFF"},{"position":{"x":-6,"y":0,"z":-1.5},"color":"#65FF88"},{"position":{"x":-4.5,"y":0,"z":-1.5},"color":"#65FF88"},{"position":{"x":-6,"y":1.5,"z":-1.5},"color":"#000000"},{"position":{"x":-4.5,"y":1.5,"z":-1.5},"color":"#000000"},{"position":{"x":-3,"y":1.5,"z":-1.5},"color":"#000000"},{"position":{"x":-1.5,"y":1.5,"z":-1.5},"color":"#000000"},{"position":{"x":0,"y":1.5,"z":-1.5},"color":"#000000"},{"position":{"x":1.5,"y":1.5,"z":-1.5},"color":"#000000"},{"position":{"x":3,"y":1.5,"z":-1.5},"color":"#000000"},{"position":{"x":4.5,"y":0,"z":-1.5},"color":"#65A6FF"},{"position":{"x":-7.5,"y":3,"z":-1.5},"color":"#000000"},{"position":{"x":-7.5,"y":4.5,"z":-1.5},"color":"#000000"},{"position":{"x":-6,"y":3,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-4.5,"y":3,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-1.5,"y":3,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":0,"y":3,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":1.5,"y":3,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":3,"y":3,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":4.5,"y":3,"z":-1.5},"color":"#000000"},{"position":{"x":6,"y":4.5,"z":-1.5},"color":"#000000"},{"position":{"x":6,"y":6,"z":-1.5},"color":"#000000"},{"position":{"x":4.5,"y":7.5,"z":-1.5},"color":"#000000"},{"position":{"x":4.5,"y":4.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":4.5,"y":6,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":3,"y":6,"z":-1.5},"color":"#000000"},{"position":{"x":3,"y":4.5,"z":-1.5},"color":"#000000"},{"position":{"x":1.5,"y":4.5,"z":-1.5},"color":"#000000"},{"position":{"x":0,"y":6,"z":-1.5},"color":"#000000"},{"position":{"x":0,"y":7.5,"z":-1.5},"color":"#000000"},{"position":{"x":-6,"y":6,"z":-1.5},"color":"#000000"},{"position":{"x":-6,"y":7.5,"z":-1.5},"color":"#000000"},{"position":{"x":-6,"y":4.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-4.5,"y":4.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-3,"y":3,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-3,"y":4.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":0,"y":4.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-1.5,"y":4.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-3,"y":6,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-4.5,"y":6,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-4.5,"y":7.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-3,"y":7.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-1.5,"y":7.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-1.5,"y":6,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-6,"y":9,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":0,"y":9,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-1.5,"y":9,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-4.5,"y":9,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-3,"y":9,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":1.5,"y":9,"z":-1.5},"color":"#000000"},{"position":{"x":3,"y":9,"z":-1.5},"color":"#000000"},{"position":{"x":-7.5,"y":9,"z":-1.5},"color":"#000000"},{"position":{"x":-9,"y":9,"z":-1.5},"color":"#000000"},{"position":{"x":-10.5,"y":10.5,"z":-1.5},"color":"#000000"},{"position":{"x":4.5,"y":10.5,"z":-1.5},"color":"#000000"},{"position":{"x":6,"y":12,"z":-1.5},"color":"#000000"},{"position":{"x":6,"y":13.5,"z":-1.5},"color":"#000000"},{"position":{"x":6,"y":15,"z":-1.5},"color":"#000000"},{"position":{"x":6,"y":16.5,"z":-1.5},"color":"#000000"},{"position":{"x":-12,"y":12,"z":-1.5},"color":"#000000"},{"position":{"x":-12,"y":13.5,"z":-1.5},"color":"#000000"},{"position":{"x":-12,"y":15,"z":-1.5},"color":"#000000"},{"position":{"x":-12,"y":16.5,"z":-1.5},"color":"#000000"},{"position":{"x":-10.5,"y":18,"z":-1.5},"color":"#000000"},{"position":{"x":-10.5,"y":19.5,"z":-1.5},"color":"#000000"},{"position":{"x":-10.5,"y":21,"z":-1.5},"color":"#000000"},{"position":{"x":-10.5,"y":22.5,"z":-1.5},"color":"#000000"},{"position":{"x":4.5,"y":18,"z":-1.5},"color":"#000000"},{"position":{"x":4.5,"y":19.5,"z":-1.5},"color":"#000000"},{"position":{"x":4.5,"y":21,"z":-1.5},"color":"#000000"},{"position":{"x":4.5,"y":22.5,"z":-1.5},"color":"#000000"},{"position":{"x":-9,"y":24,"z":-1.5},"color":"#000000"},{"position":{"x":3,"y":24,"z":-1.5},"color":"#000000"},{"position":{"x":-7.5,"y":22.5,"z":-1.5},"color":"#000000"},{"position":{"x":1.5,"y":22.5,"z":-1.5},"color":"#000000"},{"position":{"x":0,"y":21,"z":-1.5},"color":"#000000"},{"position":{"x":-1.5,"y":21,"z":-1.5},"color":"#000000"},{"position":{"x":-3,"y":21,"z":-1.5},"color":"#000000"},{"position":{"x":-4.5,"y":21,"z":-1.5},"color":"#000000"},{"position":{"x":-6,"y":21,"z":-1.5},"color":"#000000"},{"position":{"x":-9,"y":10.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-7.5,"y":10.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-6,"y":10.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-4.5,"y":10.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-3,"y":10.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-1.5,"y":10.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":0,"y":10.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":1.5,"y":10.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":3,"y":10.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-10.5,"y":12,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-9,"y":12,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":4.5,"y":12,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":3,"y":12,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-7.5,"y":12,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":1.5,"y":12,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-6,"y":12,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-4.5,"y":12,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-3,"y":12,"z":-1.5},"color":"#000000"},{"position":{"x":-1.5,"y":12,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":0,"y":12,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-4.5,"y":13.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-3,"y":13.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-1.5,"y":13.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-3,"y":15,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-3,"y":16.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-9,"y":22.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-9,"y":21,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-9,"y":19.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-9,"y":18,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-10.5,"y":16.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-10.5,"y":15,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-10.5,"y":13.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-9,"y":16.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-9,"y":15,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-9,"y":13.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-1.5,"y":15,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-1.5,"y":16.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-1.5,"y":19.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-1.5,"y":18,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-4.5,"y":15,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-4.5,"y":16.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-3,"y":19.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-3,"y":18,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-4.5,"y":19.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-4.5,"y":18,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-6,"y":13.5,"z":-1.5},"color":"#000000"},{"position":{"x":-6,"y":15,"z":-1.5},"color":"#000000"},{"position":{"x":-6,"y":16.5,"z":-1.5},"color":"#000000"},{"position":{"x":0,"y":13.5,"z":-1.5},"color":"#000000"},{"position":{"x":-7.5,"y":21,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-7.5,"y":19.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-7.5,"y":18,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-6,"y":19.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-6,"y":18,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-7.5,"y":13.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-7.5,"y":15,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":-7.5,"y":16.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":0,"y":19.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":0,"y":18,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":1.5,"y":21,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":3,"y":22.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":3,"y":21,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":1.5,"y":19.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":1.5,"y":18,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":3,"y":18,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":3,"y":19.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":4.5,"y":13.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":3,"y":13.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":1.5,"y":13.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":1.5,"y":15,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":1.5,"y":16.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":4.5,"y":15,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":3,"y":15,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":4.5,"y":16.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":3,"y":16.5,"z":-1.5},"color":"#FFFFFF"},{"position":{"x":0,"y":16.5,"z":-1.5},"color":"#000000"},{"position":{"x":0,"y":15,"z":-1.5},"color":"#000000"},{"position":{"x":-6,"y":0,"z":10.5},"color":"#FFFFFF"},{"position":{"x":7.5,"y":0,"z":6},"color":"#9A65FF"},{"position":{"x":-3,"y":0,"z":6},"color":"#65FF88"}]

function init() {
  canvas = document.createElement("canvas");
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  const container = document.getElementById("scene-container");
  container.appendChild(canvas);

  engine = new BABYLON.Engine(canvas, true, { antialias: true, adaptToDeviceRatio: true });
  scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color4(0.188, 0.329, 0.451, 1);

  setupCameraAndLighting();

  generateModelFromData();

  setupClickHandlers();

  setupColorPalette();

  engine.runRenderLoop(() => scene.render());

  window.addEventListener('resize', () => engine.resize());
}

function setupCameraAndLighting() {
  camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 80, new BABYLON.Vector3(0, 0, 0), scene);
  camera.attachControl(canvas, true);
  camera.wheelPrecision = 2;
  camera.angularSensibilityX = 1100;
  camera.angularSensibilityY = 1100;
  camera.panningSensibility = 800;
  camera.inertia = 0;

  const topLight = new BABYLON.HemisphericLight("topLight", new BABYLON.Vector3(0, 1, 0), scene);
  topLight.intensity = 0.8;
  const bottomLight = new BABYLON.HemisphericLight("bottomLight", new BABYLON.Vector3(0, -1, 0), scene);
  bottomLight.intensity = 0.5;

  scene.environmentTexture = new BABYLON.CubeTexture.CreateFromPrefilteredData("https://playground.babylonjs.com/textures/environment.dds", scene);
  scene.environmentIntensity = 0.3;
}

function setupClickHandlers() {
  scene.onPointerObservable.add((pointerInfo) => {
    if (pointerInfo.type === BABYLON.PointerEventTypes.POINTERDOWN && pointerInfo.event.button === 0) {
      const pickResult = scene.pick(pointerInfo.event.clientX, pointerInfo.event.clientY);
      handlePick(pickResult);
    }
  });

  document.getElementById('create-mode').addEventListener('click', () => {
    setActiveTool('create-mode');
    currentMode = 'create';
  });

  document.getElementById('delete-mode').addEventListener('click', () => {
    setActiveTool('delete-mode');
    currentMode = 'delete';
  });

  document.getElementById('clear-cube').addEventListener('click', () => {
    clearCube();
  });

  document.getElementById('paint-mode').addEventListener('click', () => {
    setActiveTool('paint-mode');
    currentMode = 'paint';
  });
}

function setActiveTool(toolId) {
  document.querySelectorAll('.tool-button').forEach(button => button.classList.remove('active'));
  if (toolId !== 'clear-cube') {
    document.getElementById(toolId).classList.add('active');
  }
}

function handlePick(pickResult) {
  if (!pickResult.hit) return;

  const pickedMesh = pickResult.pickedMesh;

  if (currentMode === 'delete') {
    if (pickedMesh && cubes.includes(pickedMesh)) {
      pickedMesh.dispose();
      cubes.splice(cubes.indexOf(pickedMesh), 1);
    }
  } else if (currentMode === 'create') {
    if (pickedMesh && cubes.includes(pickedMesh)) {
      const normal = pickResult.getNormal(true);
      const newCubePosition = pickedMesh.position.add(normal.scale(cubeSize));
      createCube(newCubePosition);
    }
  } else if (currentMode === 'paint') {
    if (pickedMesh && cubes.includes(pickedMesh)) {
      const material = new BABYLON.StandardMaterial("material", scene);
      if (selectedColor) {
        material.diffuseColor = new BABYLON.Color3.FromHexString(selectedColor);
      } else {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        material.diffuseColor = new BABYLON.Color3.FromHexString(randomColor);
      }
      pickedMesh.material = material;
    }
  }
}

// Функція для створення кубика з позицією та кольором
function createCubeFromData(position, color) {
  const cube = BABYLON.MeshBuilder.CreateBox("box", { size: cubeSize }, scene);
  cube.position = new BABYLON.Vector3(position.x, position.y, position.z);

  const material = new BABYLON.StandardMaterial("material", scene);
  material.diffuseColor = new BABYLON.Color3.FromHexString(color);
  cube.material = material;
  cube.enableEdgesRendering();
  cube.edgesWidth = 8;
  cube.edgesColor = new BABYLON.Color4(0, 0, 0, 1);

  cubes.push(cube); // Додаємо кубик до масиву для подальшого управління
}

// Функція для генерації всієї моделі з даних
function generateModelFromData() {
  cubesData.forEach(cubeData => {
    createCubeFromData(cubeData.position, cubeData.color);
  });
}

function createCube(position) {
  const newCube = BABYLON.MeshBuilder.CreateBox("box", { size: cubeSize }, scene);
  newCube.position = position;

  const material = new BABYLON.StandardMaterial("material", scene);
  
  if (selectedColor) {
    material.diffuseColor = new BABYLON.Color3.FromHexString(selectedColor);
  } else {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    material.diffuseColor = new BABYLON.Color3.FromHexString(randomColor);
  }
  
  newCube.material = material;
  newCube.enableEdgesRendering();
  newCube.edgesWidth = 8;
  newCube.edgesColor = new BABYLON.Color4(0, 0, 0, 1);

  cubes.push(newCube);
}

function clearCube() {
  const minY = Math.min(...cubes.map(cube => cube.position.y));
  cubes.forEach(cube => {
    if (cube.position.y > minY) {
      cube.dispose();
    }
  });
  cubes.length = 0;
  cubes.push(...scene.meshes.filter(mesh => mesh.position.y === minY));
}

function setupColorPalette() {
  const colorOptions = document.getElementById('color-options');
  colors.forEach(color => {
    const colorDiv = document.createElement('div');
    colorDiv.className = 'color-option';
    colorDiv.style.backgroundColor = color;
    colorDiv.addEventListener('click', () => {
      document.querySelectorAll('.color-option').forEach(el => el.classList.remove('selected'));
      colorDiv.classList.add('selected');
      selectedColor = color;
    });
    colorOptions.appendChild(colorDiv);
  });

  const randomColorButton = document.getElementById('random-color');
  randomColorButton.classList.add('selected');
  selectedColor = null;

  randomColorButton.addEventListener('click', () => {
    document.querySelectorAll('.color-option').forEach(el => el.classList.remove('selected'));
    randomColorButton.classList.add('selected');
    selectedColor = null;
  });
}

init();
