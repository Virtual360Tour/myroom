var APP_DATA = {
  "scenes": [
    {
      "id": "0-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.860662363327851,
        "pitch": 0.008987282877848557,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.847079990927824,
          "pitch": -0.10230750897361851,
          "rotation": 0,
          "target": "1-back-garden"
        },
        {
          "yaw": 0.32811426391157106,
          "pitch": -0.018395309950200556,
          "rotation": 0,
          "target": "2-front-garden"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-back-garden",
      "name": "Back Garden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.025548733318871086,
        "pitch": 0.012311897736802635,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -0.10399071371630342,
          "pitch": -0.0705573445247456,
          "rotation": 0,
          "target": "0-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-front-garden",
      "name": "Front Garden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.7829209589603714,
        "pitch": -0.05328423829241302,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.400157406396648,
          "pitch": -0.0036454972760928683,
          "rotation": 0,
          "target": "0-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
