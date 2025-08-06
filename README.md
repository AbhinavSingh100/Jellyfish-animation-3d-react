# 🌊 3D Jellyfish Animation - React Three Fiber
by Abhinav Singh 

Twitter(X) : https://x.com/the_grt_pretndr 

<img width="1920" height="1013" alt="Screenshot (49)" src="https://github.com/user-attachments/assets/5d7565f1-1888-4042-a589-826fff6e89d7" />


An immersive 3D web experience featuring animated jellyfish swimming in a circular orbit around your content. This project demonstrates advanced layering techniques with React Three Fiber, creating a captivating background animation that interacts with HTML content.

## ✨ Features

- **Dual-Layer 3D Rendering**: Jellyfish appear both behind and in front of HTML content for depth
- **Smooth Orbital Animation**: Two jellyfish swim in opposite circular paths with realistic movement
- **Dynamic Visibility**: Jellyfish seamlessly transition between front and back layers based on their position
- **Realistic Lighting**: Directional lighting with shadows for enhanced visual depth
- **Responsive Design**: Built with Tailwind CSS for responsive layouts
- **High Performance**: Optimized 3D rendering with React Three Fiber

## 🚀 Tech Stack

- **React 19** - Modern React with latest features
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Utility library for React Three Fiber
- **Three.js** - 3D graphics library
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **GLTF Models** - 3D jellyfish models with textures

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/AbhinavSingh100/Jellyfish-animation-3d-react.git
cd jellyfish-animation-3d-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── App.jsx          # Main application component
├── Hero.jsx         # Hero section with layered 3D canvases
├── ThreeDComp.jsx   # 3D canvas component with lighting setup
├── Jellyfish.jsx    # Animated jellyfish component
├── Page.jsx         # HTML content layer
├── Hero.css         # Styling for layered layout
└── assets/
    └── 3d-assets/   # GLTF models and textures
        ├── scene.gltf
        ├── scene.bin
        └── textures/
```

## 🎮 How It Works

### Layered Architecture
The application uses a three-layer approach:

1. **Back Canvas**: Renders jellyfish when they're behind the HTML content (z ≤ 0)
2. **HTML Content**: Your main webpage content in the middle layer
3. **Front Canvas**: Renders jellyfish when they're in front of the HTML content (z > 0)

### Animation Logic
- Two jellyfish swim in circular orbits with a 20-unit radius
- They move in opposite directions (180° phase difference)
- Visibility is dynamically controlled based on their Z-position relative to the camera
- Realistic rotation aligns jellyfish with their movement direction

### 3D Rendering Features
- Orthographic camera for consistent perspective
- Directional lighting with shadow mapping
- Forest environment preset for ambient lighting
- Alpha transparency for seamless HTML integration

## 🎨 Customization

### Modify Animation Speed
```javascript
// In Jellyfish.jsx, adjust the speed variable
const speed = 0.5; // Lower = slower, Higher = faster
```

### Change Orbit Radius
```javascript
// In Jellyfish.jsx, modify the radius
const radius = 20; // Increase for larger orbit
```

### Update Content
Edit `Page.jsx` to customize the HTML content that appears between the jellyfish layers.

### Lighting Adjustments
Modify lighting settings in `ThreeDComp.jsx` to change the visual atmosphere.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Demo

The project creates a portfolio-style landing page with:
- Animated jellyfish swimming around the content
- Smooth transitions as jellyfish move between layers
- Professional typography and layout
- Responsive design for all devices

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
