 var grid = []; /* 2D Array */
      var barGraph = new THREE.Object3D();
      scene.add(barGraph);

      var max = /* Grid max value */
      var mat = new THREE.MeshLambertMaterial({color: 0xFFAA55});
      for (var j=0; j<grid.length; j++) {
        for (var i=0; i<grid[j].length; i++) {
          var barHeight = grid[j][i]/max * 80;
          var geo = new THREE.CubeGeometry(8, barHeight, 8);
          var mesh = new THREE.Mesh(geo, mat);
          mesh.position.x = (i-grid[j].length/2) * 16;
          mesh.position.y = barHeight/2;
          mesh.position.z = -(j-grid.length/2) * 16;
          mesh.castShadow = mesh.receiveShadow = true;
          barGraph.add(mesh);
        }
      }