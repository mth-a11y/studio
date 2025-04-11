'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
interface Path {
    curviness: number;
    autoRotate: boolean;
    values: { x: number; y: number }[];
}
interface HexagonProps {
    ref: React.RefObject<HTMLDivElement>;
    className: string;
    color: string;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}
interface NeonLineProps {
    ref: React.RefObject<HTMLDivElement>;
    color: string;
    top: string;
}
const NeonLine: React.FC<NeonLineProps> = ({ ref, color, top }) => (
    <div ref={ref} className={`absolute left-0 w-full h-[2px] bg-[${color}] opacity-0`} style={{ top }} />
);
const InnerHexagon: React.FC<{ ref: React.RefObject<HTMLDivElement>; color: string }> = ({ ref, color }) => (
    <div ref={ref} className={`absolute inset-0 bg-[${color}]/30 clip-polygon-[50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%] z-20 shadow-inner`} />
);
const Hexagon: React.FC<HexagonProps> = ({ ref, className, color, onMouseEnter, onMouseLeave }) => (
    <div
        ref={ref}
        className={`${className} relative flex items-center justify-center after:content-[''] after:absolute after:inset-0 after:bg-transparent after:border-2 after:border-[${color}] after:clip-polygon-[50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%] after:z-10`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        <InnerHexagon ref={ref} color={color} />
        <div className={`absolute inset-0 bg-transparent border-2 border-[${color}] clip-polygon-[50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%] z-0`} />
    </div>
);
const path: Path = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        { x: 100, y: 0 },
        { x: 0, y: 50 },
        { x: -100, y: 0 },
        { x: 0, y: -50 },
        { x: 100, y: 0 },
    ],
};

const path2: Path = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        { x: 200, y: 0 },
        { x: 0, y: 100 },
        { x: -200, y: 0 },
        { x: 0, y: -100 },
        { x: 200, y: 0 },
    ],
};
const InteractiveHeader: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const hexagonRef = useRef<HTMLDivElement>(null);
    const hexagonInnerRef = useRef<HTMLDivElement>(null);
  const neonLine1Ref = useRef<HTMLDivElement>(null);
  const neonLine2Ref = useRef<HTMLDivElement>(null);
  const hexagon2Ref = useRef<HTMLDivElement>(null);
  const hexagon3Ref = useRef<HTMLDivElement>(null);
  const hexagon4Ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const headerHeight = "h-96 sm:h-64 md:h-96 lg:h-96";

    const animateHexagon = (hexagonElement: HTMLDivElement, innerHexagonElement: HTMLDivElement, neonLine1Element: HTMLDivElement, neonLine2Element: HTMLDivElement, isHovered: boolean) => {
        // Inner Hexagon animation
        gsap.to(innerHexagonElement, {
            scale: 1.1, duration: 1.5, repeat: -1, yoyo: true, ease: 'power1.inOut'
        });
        gsap.to(neonLine1Element, { opacity: 1, duration: 1, repeat: -1, yoyo: true, ease: 'power1.inOut'});
        gsap.to(neonLine2Element, { opacity: 1, duration: 1, repeat: -1, yoyo: true, ease: 'power1.inOut'});
        gsap.to(hexagonElement, { scale: isHovered ? 1.1 : 1, duration: 0.3});
        gsap.to(hexagonElement, { borderColor: isHovered ? '#8E44AD' : '#FF6B6B', duration: 0.3});

    };
  useEffect(() => {
    const headerElement = headerRef.current;
    const hexagonInnerElement = hexagonInnerRef.current;
    const neonLine1Element = neonLine1Ref.current;
    const neonLine2Element = neonLine2Ref.current;
    const hexagonElement = hexagonRef.current;
    const hexagon2Element = hexagon2Ref.current;
    const hexagon3Element = hexagon3Ref.current;
    const hexagon4Element = hexagon4Ref.current;

        if (headerElement && hexagonElement && hexagon2Element) {
            gsap.to(headerElement, { background: 'linear-gradient(to right, #2E86C1, #8E44AD)', duration: 1 });
            animateHexagon(hexagonElement, hexagonInnerElement, neonLine1Element, neonLine2Element, isHovered)
            // Hexagon 1 rotation
            const rotationTimeline = gsap.to(hexagonElement, { rotation: 360, duration: 20, repeat: -1, ease: 'linear' });
            //Hexagon 2 rotation
            const rotation2Timeline = gsap.to(hexagon2Element, {
                rotation: -360,
                // Rotate in opposite direction
                duration: 20,
                repeat: -1,
                ease: 'linear',
            });

            //Movement along the "infinity" path            

            gsap.to(hexagon3Element, { motionPath: path,
                duration: 15,
                repeat: -1,
                ease: 'linear',
            });

            gsap.to(hexagon4Element, {
                motionPath: path2,
                duration: 25,
                repeat: -1,
                ease: 'linear',
            });

            gsap.to([hexagonElement, hexagon2Element, hexagon3Element, hexagon4Element], {
                y: "-5%",
                duration: 1,
            });
            gsap.to(hexagon2Element, {
                motionPath: path2,
                duration: 10,
                repeat: -1,
                ease: 'linear',
            });

            rotationTimeline.play()
            rotation2Timeline.play()
            gsap.to([hexagonElement, hexagon2Element], { scale: isHovered ? 1.1 : 1, duration: 0.3, });
        }
  }, [isHovered]);

  return (
    <header ref={headerRef} className={`relative w-full ${headerHeight} sm:h-64 overflow-hidden`}>
      <div className="absolute inset-0 flex items-center justify-center md:justify-start">            
            <Hexagon ref={hexagonRef} className="hexagon w-32 h-32 sm:w-24 sm:h-24" color="#FF6B6B" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} />
            <InnerHexagon ref={hexagonInnerRef} color="#FF6B6B" />
            <NeonLine ref={neonLine1Ref} color="#FF6B6B" top="25%" />
            <NeonLine ref={neonLine2Ref} color="#FF6B6B" top="75%" />
            <Hexagon ref={hexagon2Ref} className="hexagon2 w-24 h-24 sm:w-16 sm:h-16 absolute" color="#8E44AD" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} />
            <Hexagon ref={hexagon3Ref} className="hexagon3 w-20 h-20 sm:w-12 sm:h-12 absolute" color="#2E86C1" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} />
            <Hexagon ref={hexagon4Ref} className="hexagon4 w-16 h-16 sm:w-8 sm:h-8 absolute" color="#2E86C1" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-4xl sm:text-2xl font-bold z-10">Инновации в медицине</div>
    </header>
  );
};

export default InteractiveHeader;