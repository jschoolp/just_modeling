let canvas, engine, scene, camera, currentMode = 'create', selectedColor = null;
const cubes = [];
const gridSize = 16;
const cubeSize = 1.5;

const colors = [
  "#FF6B6B", "#FF9A3E", "#FFD93E", "#FFFA65", "#A2FF65",
  "#65FF88", "#65FFC3", "#65EFFF", "#65A6FF", "#9A65FF",
  "#FF65A6", "#FF65E1"
];

function init() {
  canvas = document.createElement("canvas");
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  const container = document.getElementById("scene-container");
  container.appendChild(canvas);

  engine = new BABYLON.Engine(canvas, true, { antialias: true, adaptToDeviceRatio: true });
  scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color4(0.188, 0.329, 0.451, 1); // Темно-синій фон

  setupCameraAndLighting();

  createCubeGrid();

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
        
        // Дозволяємо створення на будь-якому місці
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

function createCubeGrid() {
    for (let x = -gridSize / 2; x < gridSize / 2; x++) {
      for (let z = -gridSize / 2; z < gridSize / 2; z++) {
        const position = new BABYLON.Vector3(x * cubeSize, 0, z * cubeSize);
  
        // Визначаємо, чи кубик знаходиться на краю
        const isEdge = (
          x === -gridSize / 2 || x === gridSize / 2 - 1 ||
          z === -gridSize / 2 || z === gridSize / 2 - 1
        );
  
        createCube(position, isEdge);
      }
    }
  }
  
  function createCube(position, isWhite = false) {
    const newCube = BABYLON.MeshBuilder.CreateBox("box", { size: cubeSize }, scene);
    newCube.position = position;
  
    const material = new BABYLON.StandardMaterial("material", scene);
    
    // Використовуємо обраний колір, якщо він заданий, або білий для країв, або випадковий колір
    if (isWhite) {
      material.diffuseColor = new BABYLON.Color3(1, 1, 1); // Білий колір для країв
    } else if (selectedColor) {
      material.diffuseColor = new BABYLON.Color3.FromHexString(selectedColor); // Обраний колір із палітри
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
        selectedColor = color; // Встановлюємо обраний колір
      });
      colorOptions.appendChild(colorDiv);
    });
  
    // Додаємо обробник для кнопки випадкового кольору
    const randomColorButton = document.getElementById('random-color');
    randomColorButton.classList.add('selected'); // Встановлюємо кнопку випадкового кольору як активну
    selectedColor = null; // Встановлюємо, що колір за замовчуванням - випадковий
  
    randomColorButton.addEventListener('click', () => {
      document.querySelectorAll('.color-option').forEach(el => el.classList.remove('selected'));
      randomColorButton.classList.add('selected');
      selectedColor = null; // Скидаємо selectedColor, щоб активувати випадкове фарбування
    });
  }
  
  

init();
