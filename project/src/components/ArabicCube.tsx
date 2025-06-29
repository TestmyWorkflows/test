import React from 'react';

const ArabicCube = () => {
  return (
    <div className="flex justify-center items-center py-16 relative">
      {/* Ambient glow background */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="cube-ambient-glow"></div>
      </div>
      
      {/* Main cube container */}
      <div className="cube-container relative z-10">
        {/* Floating shadow */}
        <div className="floating-shadow"></div>
        
        <div className="cube">
          {/* Front face - ت */}
          <div className="cube-face front">
            <div className="face-content">
              <span className="arabic-letter">ت</span>
            </div>
          </div>
          
          {/* Back face - ث */}
          <div className="cube-face back">
            <div className="face-content">
              <span className="arabic-letter">ث</span>
            </div>
          </div>
          
          {/* Right face - ح */}
          <div className="cube-face right">
            <div className="face-content">
              <span className="arabic-letter">ح</span>
            </div>
          </div>
          
          {/* Left face - خ */}
          <div className="cube-face left">
            <div className="face-content">
              <span className="arabic-letter">خ</span>
            </div>
          </div>
          
          {/* Top face - ب */}
          <div className="cube-face top">
            <div className="face-content">
              <span className="arabic-letter">ب</span>
            </div>
          </div>
          
          {/* Bottom face - د */}
          <div className="cube-face bottom">
            <div className="face-content">
              <span className="arabic-letter">د</span>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .cube-container {
          perspective: 1200px;
          width: 140px;
          height: 140px;
          margin: 0 auto;
          filter: drop-shadow(0 25px 50px rgba(5, 150, 105, 0.15));
          transition: filter 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Ambient glow effect */
        .cube-ambient-glow {
          width: 300px;
          height: 300px;
          background: radial-gradient(
            circle,
            rgba(16, 185, 129, 0.08) 0%,
            rgba(5, 150, 105, 0.04) 40%,
            transparent 70%
          );
          border-radius: 50%;
          animation: ambientPulse 4s ease-in-out infinite alternate;
        }
        
        @keyframes ambientPulse {
          0% {
            transform: scale(0.9);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
        
        /* Floating shadow */
        .floating-shadow {
          position: absolute;
          bottom: -60px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 20px;
          background: radial-gradient(
            ellipse,
            rgba(5, 150, 105, 0.2) 0%,
            rgba(5, 150, 105, 0.1) 50%,
            transparent 100%
          );
          border-radius: 50%;
          animation: shadowFloat 6s ease-in-out infinite;
        }
        
        @keyframes shadowFloat {
          0%, 100% {
            transform: translateX(-50%) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateX(-50%) scale(1.05);
            opacity: 0.8;
          }
        }
        
        .cube {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: seamlessRotation 12s linear infinite;
        }
        
        .cube-face {
          position: absolute;
          width: 140px;
          height: 140px;
          background: linear-gradient(
            135deg,
            #10b981 0%,
            #059669 25%,
            #047857 75%,
            #065f46 100%
          );
          border: none;
          /* REMOVED border-radius to eliminate corner gaps */
          display: flex;
          align-items: center;
          justify-content: center;
          /* Enhanced lighting and depth without corner separation */
          box-shadow: 
            inset 0 0 0 1px rgba(255, 255, 255, 0.1),
            inset 0 2px 4px rgba(255, 255, 255, 0.15),
            inset 0 -2px 4px rgba(0, 0, 0, 0.1),
            0 0 20px rgba(5, 150, 105, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }
        
        /* Subtle edge enhancement without breaking corner continuity */
        .cube-face::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.04) 50%,
            rgba(0, 0, 0, 0.04) 100%
          );
          z-index: 1;
          pointer-events: none;
        }
        
        /* Soft inner highlight for depth */
        .cube-face::after {
          content: '';
          position: absolute;
          top: 4px;
          left: 4px;
          right: 4px;
          bottom: 4px;
          background: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.06) 0%,
            transparent 50%,
            rgba(0, 0, 0, 0.06) 100%
          );
          pointer-events: none;
          z-index: 1;
        }
        
        .face-content {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          position: relative;
          z-index: 2;
        }
        
        .arabic-letter {
          font-family: 'Amiri', serif;
          font-size: 56px;
          font-weight: 700;
          color: #ffffff;
          text-shadow: 
            0 4px 8px rgba(0, 0, 0, 0.4),
            0 2px 4px rgba(0, 0, 0, 0.3),
            0 1px 2px rgba(0, 0, 0, 0.2);
          user-select: none;
          pointer-events: none;
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.1));
          transition: all 0.3s ease;
        }
        
        /* CRITICAL: Precise positioning to eliminate gaps - faces must touch exactly */
        .front {
          transform: rotateY(0deg) translateZ(70px);
        }
        
        .back {
          transform: rotateY(180deg) translateZ(70px);
        }
        
        .right {
          transform: rotateY(90deg) translateZ(70px);
        }
        
        .left {
          transform: rotateY(-90deg) translateZ(70px);
        }
        
        .top {
          transform: rotateX(90deg) translateZ(70px);
        }
        
        .bottom {
          transform: rotateX(-90deg) translateZ(70px);
        }
        
        /* Add subtle corner rounding through visual effects only */
        .cube::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(
            45deg,
            rgba(16, 185, 129, 0.1) 0%,
            rgba(5, 150, 105, 0.05) 50%,
            rgba(6, 95, 70, 0.1) 100%
          );
          border-radius: 8px;
          z-index: -1;
          filter: blur(4px);
          opacity: 0.6;
        }
        
        /* Seamless continuous rotation - no hover speed changes */
        @keyframes seamlessRotation {
          0% {
            transform: rotateX(15deg) rotateY(0deg) rotateZ(5deg) translateY(-2px);
          }
          25% {
            transform: rotateX(20deg) rotateY(90deg) rotateZ(10deg) translateY(-5px);
          }
          50% {
            transform: rotateX(15deg) rotateY(180deg) rotateZ(5deg) translateY(-2px);
          }
          75% {
            transform: rotateX(10deg) rotateY(270deg) rotateZ(0deg) translateY(-5px);
          }
          100% {
            transform: rotateX(15deg) rotateY(360deg) rotateZ(5deg) translateY(-2px);
          }
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
          .cube-container {
            width: 120px;
            height: 120px;
            perspective: 1000px;
          }
          
          .cube-face {
            width: 120px;
            height: 120px;
          }
          
          .arabic-letter {
            font-size: 48px;
          }
          
          .front, .back, .right, .left, .top, .bottom {
            transform: rotateY(0deg) translateZ(60px);
          }
          .back { transform: rotateY(180deg) translateZ(60px); }
          .right { transform: rotateY(90deg) translateZ(60px); }
          .left { transform: rotateY(-90deg) translateZ(60px); }
          .top { transform: rotateX(90deg) translateZ(60px); }
          .bottom { transform: rotateX(-90deg) translateZ(60px); }
          
          .floating-shadow {
            width: 100px;
            height: 18px;
            bottom: -50px;
          }
          
          .cube::before {
            border-radius: 6px;
          }
        }
        
        @media (max-width: 480px) {
          .cube-container {
            width: 100px;
            height: 100px;
            perspective: 800px;
          }
          
          .cube-face {
            width: 100px;
            height: 100px;
          }
          
          .arabic-letter {
            font-size: 40px;
          }
          
          .front, .back, .right, .left, .top, .bottom {
            transform: rotateY(0deg) translateZ(50px);
          }
          .back { transform: rotateY(180deg) translateZ(50px); }
          .right { transform: rotateY(90deg) translateZ(50px); }
          .left { transform: rotateY(-90deg) translateZ(50px); }
          .top { transform: rotateX(90deg) translateZ(50px); }
          .bottom { transform: rotateX(-90deg) translateZ(50px); }
          
          .floating-shadow {
            width: 80px;
            height: 15px;
            bottom: -40px;
          }
          
          .cube-ambient-glow {
            width: 200px;
            height: 200px;
          }
          
          .cube::before {
            border-radius: 4px;
          }
        }
        
        /* High DPI display optimization */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .cube-face {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          .arabic-letter {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        }
      `}</style>
    </div>
  );
};

export default ArabicCube;